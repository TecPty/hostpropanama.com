import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import Header from "@/components/Header";

type MediaListener = (event: MediaQueryListEvent) => void;

const installDesktopMedia = () => {
  let matches = false;
  const listeners = new Set<MediaListener>();

  const mql = {
    get matches() {
      return matches;
    },
    media: "(min-width: 1024px)",
    onchange: null,
    addEventListener: (_type: string, listener: MediaListener) => listeners.add(listener),
    removeEventListener: (_type: string, listener: MediaListener) => listeners.delete(listener),
    addListener: (listener: MediaListener) => listeners.add(listener),
    removeListener: (listener: MediaListener) => listeners.delete(listener),
    dispatchEvent: () => true,
  } as unknown as MediaQueryList;

  window.matchMedia = (() => mql) as typeof window.matchMedia;

  const emit = (next: boolean) => {
    matches = next;
    act(() => {
      listeners.forEach((listener) => listener({ matches: next } as MediaQueryListEvent));
    });
  };

  return {
    enterDesktop: () => emit(true),
    enterMobile: () => emit(false),
  };
};

let media: ReturnType<typeof installDesktopMedia>;

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

describe("Header — compact mobile navigation", () => {
  beforeEach(() => {
    media = installDesktopMedia();
  });

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

    it.each(["Eventos", "Precios", "Contactos", "Cotizar"])(
      "closes when selecting %s",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openMenu(user);
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");
      }
    );
  });

  describe("Modelos accordion", () => {
    it("starts collapsed", () => {
      render(<Header />);

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByRole("link", { name: /^mujeres$/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("link", { name: /^hombres$/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("link", { name: /^bilingües$/i })).not.toBeInTheDocument();
    });

    it("expands and preserves all submenu destinations", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(modelosTrigger());

      expect(modelosTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(linkTo("Mujeres")).toHaveAttribute("href", "/modelos/mujeres");
      expect(linkTo("Hombres")).toHaveAttribute("href", "/modelos/hombres");
      expect(linkTo("Bilingües")).toHaveAttribute("href", "/modelos/bilingues");
    });

    it.each(["Mujeres", "Hombres", "Bilingües"])(
      "closes when selecting the %s submenu destination",
      async (label) => {
        const user = userEvent.setup();
        render(<Header />);

        await openMenu(user);
        await user.click(modelosTrigger());
        await user.click(linkTo(label));

        expect(navPanel()).toHaveAttribute("data-state", "closed");
      }
    );
  });

  describe("desktop preservation", () => {
    it("keeps desktop sidebar classes intact", () => {
      render(<Header />);

      const header = document.querySelector("header.hostpro-sidebar");
      expect(header).toHaveClass("lg:w-72", "lg:flex-col", "lg:border-l");

      expect(navPanel()).toHaveClass(
        "lg:static",
        "lg:flex-1",
        "lg:rounded-none",
        "lg:border-0"
      );
    });

    it("clears mobile menu state when entering desktop without moving focus", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);
      media.enterDesktop();

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(menuTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(menuTrigger()).not.toHaveFocus();
    });

    it("stays closed after a desktop/mobile round trip", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openMenu(user);
      media.enterDesktop();
      media.enterMobile();

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(menuTrigger()).toHaveAttribute("aria-expanded", "false");
    });
  });
});
