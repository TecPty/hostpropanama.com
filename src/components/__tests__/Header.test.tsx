import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import Header from "@/components/Header";

const BODY_LOCK_CLASS = "hostpro-nav-open";

const menuTrigger = () =>
  screen.getByRole("button", { name: /menú de navegación/i });

const modelosTrigger = () =>
  screen.getByRole("button", { name: /ver catálogo de modelos/i });

const navPanel = () => {
  const panel = document.getElementById("hostpro-nav-panel");
  if (!panel) throw new Error("Nav panel not found");
  return panel;
};

const overlay = () => {
  const el = document.querySelector("[data-nav-overlay]");
  if (!el) throw new Error("Nav overlay not found");
  return el;
};

const linkTo = (label: string) =>
  screen.getByRole("link", { name: new RegExp(`^${label}$`, "i") });

const openDrawer = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(menuTrigger());
  expect(navPanel()).toHaveAttribute("data-state", "open");
};

describe("Header — HOST-UX-002 responsive sidebar navigation", () => {
  afterEach(() => {
    document.body.classList.remove(BODY_LOCK_CLASS);
  });

  describe("frozen navigation contract", () => {
    it("renders the approved primary order: Modelos, Eventos, Precios, Contactos", () => {
      render(<Header />);

      const entries = Array.from(
        navPanel().querySelectorAll("[data-nav-entry]")
      ).map((el) => el.getAttribute("data-nav-entry"));

      expect(entries).toEqual(["modelos", "eventos", "precios", "contactos"]);
    });

    it("points Eventos to the corporate events service page", () => {
      render(<Header />);
      expect(linkTo("Eventos")).toHaveAttribute(
        "href",
        "/servicios/eventos-corporativos"
      );
    });

    it("points Precios to the homepage plans anchor", () => {
      render(<Header />);
      expect(linkTo("Precios")).toHaveAttribute("href", "/#planes");
    });

    it("points Contactos to the homepage contact anchor", () => {
      render(<Header />);
      expect(linkTo("Contactos")).toHaveAttribute("href", "/#contacto");
    });

    it("keeps Cotizar as a separate CTA to the contact anchor", () => {
      render(<Header />);
      expect(linkTo("Cotizar")).toHaveAttribute("href", "/#contacto");
    });

    it("no longer exposes the retired primary entries", () => {
      render(<Header />);

      for (const retired of ["Servicios", "Planes", "Testimoniales", "Contacto"]) {
        expect(
          screen.queryByRole("link", { name: new RegExp(`^${retired}$`, "i") })
        ).not.toBeInTheDocument();
      }
    });

    it("exposes the mobile menu trigger wired to the nav panel", () => {
      render(<Header />);

      const trigger = menuTrigger();
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger).toHaveAttribute("aria-controls", "hostpro-nav-panel");
    });
  });

  describe("Modelos accordion", () => {
    it("starts collapsed and hides both submenu destinations", () => {
      render(<Header />);

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(
        screen.queryByRole("link", { name: /^mujeres$/i })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("link", { name: /^hombres$/i })
      ).not.toBeInTheDocument();
    });

    it("expands on click and exposes both submenu destinations", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(modelosTrigger());

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(linkTo("Mujeres")).toHaveAttribute("href", "/modelos/mujeres");
      expect(linkTo("Hombres")).toHaveAttribute("href", "/modelos/hombres");
    });

    it("collapses again on a second click", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(modelosTrigger());
      await user.click(modelosTrigger());

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(
        screen.queryByRole("link", { name: /^mujeres$/i })
      ).not.toBeInTheDocument();
    });

    it("does NOT close the drawer when toggling the accordion", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.click(modelosTrigger());

      expect(navPanel()).toHaveAttribute("data-state", "open");
      expect(document.body).toHaveClass(BODY_LOCK_CLASS);
    });
  });

  describe("mobile drawer", () => {
    it("starts closed with body scroll unlocked", () => {
      render(<Header />);

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it("opens from the menu trigger and locks body scroll", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);

      expect(menuTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(document.body).toHaveClass(BODY_LOCK_CLASS);
    });

    it("closes from the X button and restores body scroll", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.click(screen.getByRole("button", { name: /cerrar menú/i }));

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it("closes from the overlay", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.click(overlay());

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it("closes on Escape", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.keyboard("{Escape}");

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it.each(["Eventos", "Precios", "Contactos", "Cotizar"])(
      "closes when selecting %s",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openDrawer(user);
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");
        expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
      }
    );

    it.each(["Mujeres", "Hombres"])(
      "closes when selecting the %s submenu destination",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openDrawer(user);
        await user.click(modelosTrigger());
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");
        expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
      }
    );

    it("returns focus to the menu trigger after closing", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.click(screen.getByRole("button", { name: /cerrar menú/i }));

      expect(menuTrigger()).toHaveFocus();
    });
  });
});
