import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Header from "@/components/Header";

const menuTrigger = () =>
  screen.getByRole("button", { name: /menú de navegación/i });

const modelosTrigger = () =>
  screen.getByRole("button", { name: /ver catálogo de modelos/i });

const navPanel = () => {
  const panel = document.getElementById("hostpro-nav-panel");
  if (!panel) throw new Error("Nav panel not found");
  return panel;
};

const linkTo = (label: string) =>
  screen.getByRole("link", { name: new RegExp(`^${label}$`, "i") });

const openMenu = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(menuTrigger());
  expect(navPanel()).toHaveAttribute("data-state", "open");
};

describe("Header — compact dropdown navigation", () => {

  describe("frozen navigation contract", () => {
    it("renders the approved primary order: Modelos, Eventos, Precios, Contactos", () => {
      render(<Header />);

      const entries = Array.from(
        navPanel().querySelectorAll("[data-nav-entry]")
      ).map((el) => el.getAttribute("data-nav-entry"));

      expect(entries).toEqual(["modelos", "eventos", "precios", "contactos"]);
    });

    it("preserves current destinations", () => {
      render(<Header />);

      expect(linkTo("Eventos")).toHaveAttribute(
        "href",
        "/servicios/eventos-corporativos"
      );
      expect(linkTo("Precios")).toHaveAttribute("href", "/#planes");
      expect(linkTo("Contactos")).toHaveAttribute("href", "/#contacto");
      expect(linkTo("Cotizar")).toHaveAttribute("href", "/#contacto");
    });

    it("keeps the mobile trigger wired to the panel", () => {
      render(<Header />);

      const trigger = menuTrigger();
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger).toHaveAttribute("aria-controls", "hostpro-nav-panel");
    });
  });

  describe("compact mobile panel", () => {
    it("starts closed and anchored as a compact panel", () => {
      render(<Header />);

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(navPanel()).toHaveClass(
        "absolute",
        "right-4",
        "rounded-xl",
        "overflow-y-auto"
      );
      expect(navPanel()).not.toHaveClass("inset-y-0", "w-[82%]");
    });

    it("opens from the hamburger and changes the trigger to close state", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);

      expect(menuTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(menuTrigger()).toHaveAccessibleName(/cerrar menú de navegación/i);
    });

    it("closes from the same X trigger", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);
      await user.click(menuTrigger());

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(menuTrigger()).toHaveAccessibleName(/abrir menú de navegación/i);
    });

    it("closes when clicking outside and restores focus", async () => {
      const user = userEvent.setup();
      render(
        <>
          <Header />
          <button type="button">Fuera</button>
        </>
      );

      await openMenu(user);
      fireEvent.pointerDown(screen.getByRole("button", { name: "Fuera" }));

      expect(navPanel()).toHaveAttribute("data-state", "closed");

      await act(async () => {
        await new Promise((resolve) => requestAnimationFrame(resolve));
      });
      expect(menuTrigger()).toHaveFocus();
    });

    it("closes on Escape and restores focus", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);
      await user.keyboard("{Escape}");

      expect(navPanel()).toHaveAttribute("data-state", "closed");

      await act(async () => {
        await new Promise((resolve) => requestAnimationFrame(resolve));
      });
      expect(menuTrigger()).toHaveFocus();
    });

    it("keeps keyboard navigation available from the trigger into the panel", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);
      expect(menuTrigger()).toHaveFocus();

      await user.keyboard("{Tab}");

      expect(modelosTrigger()).toHaveFocus();
    });

    it.each(["Eventos", "Precios", "Contactos", "Cotizar"])(
      "closes when selecting %s",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openMenu(user);
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");

        await act(async () => {
          await new Promise((resolve) => requestAnimationFrame(resolve));
        });
        expect(menuTrigger()).toHaveFocus();
      }
    );
  });

  describe("Modelos accordion", () => {
    it("starts expanded with all submenu destinations visible", () => {
      render(<Header />);

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(linkTo("Mujeres")).toHaveAttribute("href", "/modelos/mujeres");
      expect(linkTo("Hombres")).toHaveAttribute("href", "/modelos/hombres");
      expect(linkTo("Bilingües")).toHaveAttribute("href", "/modelos/bilingues");
    });

    it("can still be collapsed and re-expanded", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(modelosTrigger());
      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByRole("link", { name: /^mujeres$/i })).not.toBeInTheDocument();

      await user.click(modelosTrigger());
      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(linkTo("Mujeres")).toBeInTheDocument();
    });

    it.each(["Mujeres", "Hombres", "Bilingües"])(
      "closes when selecting the %s submenu destination",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openMenu(user);
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");
      }
    );
  });

  describe("desktop dropdown (sin sidebar fijo)", () => {
    it("no longer renders a fixed desktop sidebar", () => {
      render(<Header />);

      const header = document.querySelector("header.hostpro-sidebar");
      expect(header).not.toHaveClass("lg:w-72", "lg:h-dvh", "lg:border-l");
      expect(navPanel()).not.toHaveClass("lg:static", "lg:visible", "lg:opacity-100");
    });

    it("keeps the menu button available at every width", () => {
      render(<Header />);
      expect(menuTrigger()).not.toHaveClass("lg:hidden");
    });

    it("starts transparent over the hero and turns solid after scrolling", () => {
      render(<Header />);
      const header = document.querySelector("header.hostpro-sidebar");
      expect(header).toHaveAttribute("data-scrolled", "false");

      act(() => {
        Object.defineProperty(window, "scrollY", { value: 300, configurable: true });
        window.dispatchEvent(new Event("scroll"));
      });
      expect(header).toHaveAttribute("data-scrolled", "true");

      act(() => {
        Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
        window.dispatchEvent(new Event("scroll"));
      });
      expect(header).toHaveAttribute("data-scrolled", "false");
    });
  });
});
