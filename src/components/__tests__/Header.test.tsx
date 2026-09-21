import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Header from "@/components/Header";

const BODY_LOCK_CLASS = "hostpro-nav-open";
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

type MediaListener = (event: MediaQueryListEvent) => void;

/**
 * jsdom no implementa matchMedia, y Header la usa para resetear el drawer al cruzar
 * a desktop. Este harness la sustituye y permite disparar el cambio de breakpoint.
 */
const installDesktopMedia = () => {
  let matches = false;
  const listeners = new Set<MediaListener>();

  const mql = {
    get matches() {
      return matches;
    },
    media: "(min-width: 1024px)",
    onchange: null,
    addEventListener: (_type: string, listener: MediaListener) => {
      listeners.add(listener);
    },
    removeEventListener: (_type: string, listener: MediaListener) => {
      listeners.delete(listener);
    },
    addListener: (listener: MediaListener) => {
      listeners.add(listener);
    },
    removeListener: (listener: MediaListener) => {
      listeners.delete(listener);
    },
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

const panelFocusables = () =>
  Array.from(navPanel().querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

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
  beforeEach(() => {
    media = installDesktopMedia();
  });

  afterEach(() => {
    document.body.classList.remove(BODY_LOCK_CLASS);
  });

  describe("right-side orientation contract", () => {
    it("anchors the sidebar and drawer to the right", () => {
      render(<Header />);

      const header = document.querySelector("header.hostpro-sidebar");
      expect(header).toHaveClass("right-0");
      expect(header).not.toHaveClass("left-0");

      const panel = navPanel();
      expect(panel).toHaveClass("right-0", "border-l");
      expect(panel).not.toHaveClass("left-0", "border-r");
      expect(panel).toHaveClass("translate-x-full");
      expect(panel).not.toHaveClass("-translate-x-full");
    });

    it("uses the open right-side drawer state", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);

      expect(navPanel()).toHaveClass("right-0", "translate-x-0");
      expect(navPanel()).not.toHaveClass("translate-x-full");
    });
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

  describe("keyboard focus containment (P2)", () => {
    it("moves focus into the drawer when it opens", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);

      expect(screen.getByRole("button", { name: /cerrar menú/i })).toHaveFocus();
      expect(navPanel().contains(document.activeElement)).toBe(true);
    });

    it("wraps Tab from the last focusable back to the first", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      const focusables = panelFocusables();
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      act(() => last.focus());
      expect(last).toHaveFocus();

      await user.keyboard("{Tab}");

      expect(first).toHaveFocus();
    });

    it("wraps Shift+Tab from the first focusable back to the last", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      const focusables = panelFocusables();
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      act(() => first.focus());
      expect(first).toHaveFocus();

      await user.keyboard("{Shift>}{Tab}{/Shift}");

      expect(last).toHaveFocus();
    });

    it("never lets focus reach the background across a full Tab cycle", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      const steps = panelFocusables().length + 3;

      for (let i = 0; i < steps; i += 1) {
        await user.keyboard("{Tab}");
        expect(navPanel().contains(document.activeElement)).toBe(true);
      }
    });

    it("never lets focus reach the background across a full Shift+Tab cycle", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      const steps = panelFocusables().length + 3;

      for (let i = 0; i < steps; i += 1) {
        await user.keyboard("{Shift>}{Tab}{/Shift}");
        expect(navPanel().contains(document.activeElement)).toBe(true);
      }
    });

    it("closes on Escape and restores focus to the menu trigger", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      await user.keyboard("{Escape}");

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
      expect(menuTrigger()).toHaveFocus();
    });
  });

  describe("desktop breakpoint reset (P1)", () => {
    it("clears drawer state when the viewport enters desktop", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      media.enterDesktop();

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(menuTrigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("removes the body scroll lock at the desktop breakpoint", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      expect(document.body).toHaveClass(BODY_LOCK_CLASS);

      media.enterDesktop();

      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it("drops the Lenis prevention hooks at the desktop breakpoint", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      expect(navPanel()).toHaveAttribute("data-lenis-prevent");

      media.enterDesktop();

      expect(navPanel()).not.toHaveAttribute("data-lenis-prevent");
      expect(overlay()).not.toHaveAttribute("data-lenis-prevent");
    });

    it("does NOT focus the desktop-hidden hamburger when resetting", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      media.enterDesktop();

      expect(menuTrigger()).not.toHaveFocus();
    });

    it("leaves the drawer closed when returning to mobile", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      media.enterDesktop();
      media.enterMobile();

      expect(navPanel()).toHaveAttribute("data-state", "closed");
      expect(menuTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(document.body).not.toHaveClass(BODY_LOCK_CLASS);
    });

    it("still opens normally after a desktop round trip", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await openDrawer(user);
      media.enterDesktop();
      media.enterMobile();

      await user.click(menuTrigger());

      expect(navPanel()).toHaveAttribute("data-state", "open");
      expect(document.body).toHaveClass(BODY_LOCK_CLASS);
    });
  });
});
