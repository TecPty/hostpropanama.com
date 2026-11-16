import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChristmasPromo from "../ChristmasPromo";

const setSearch = (search: string) => {
  window.history.replaceState({}, "", `/${search}`);
};

describe("ChristmasPromo", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
    setSearch("");
  });

  it("stays hidden outside the season", () => {
    vi.setSystemTime(new Date("2027-02-01T12:00:00-05:00"));
    render(<ChristmasPromo />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.queryByText(/fiesta de fin de año/i)).not.toBeInTheDocument();
  });

  it("appears during the season with a Christmas WhatsApp message", () => {
    vi.setSystemTime(new Date("2026-12-10T12:00:00-05:00"));
    render(<ChristmasPromo />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    const link = screen.getByRole("link", { name: /cotizar por whatsapp/i });
    expect(decodeURIComponent(link.getAttribute("href") ?? "")).toMatch(/fiesta de fin de año/i);
  });

  it("can be forced with ?navidad=1", () => {
    vi.setSystemTime(new Date("2027-02-01T12:00:00-05:00"));
    setSearch("?navidad=1");
    render(<ChristmasPromo />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/fiesta de fin de año/i)).toBeInTheDocument();
  });

  it("does not come back after being closed in the same visit", async () => {
    vi.setSystemTime(new Date("2026-12-10T12:00:00-05:00"));
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { unmount } = render(<ChristmasPromo />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    await user.click(screen.getByRole("button", { name: /cerrar promoción/i }));
    expect(sessionStorage.getItem("hostpro-navidad-promo-cerrado")).toBe("1");
    unmount();

    render(<ChristmasPromo />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.queryByRole("link", { name: /cotizar por whatsapp/i })).not.toBeInTheDocument();
  });
});
