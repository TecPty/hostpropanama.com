import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import InstagramFloating from "@/components/InstagramFloating";
import { INSTAGRAM_URL } from "@/utils/constants";

describe("InstagramFloating", () => {
  it("links to the official Instagram profile in a new tab", () => {
    render(<InstagramFloating />);

    const link = screen.getByRole("link", {
      name: /visitar instagram de hostpro panamá/i,
    });

    expect(link.getAttribute("href")).toBe(INSTAGRAM_URL);
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
