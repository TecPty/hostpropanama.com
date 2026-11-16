"use client";

import { useSyncExternalStore } from "react";
import { isChristmasPreview, isChristmasSeason } from "@/utils/season";

const subscribeNoop = () => () => {};

function getSnapshot(): boolean {
  return isChristmasSeason() || isChristmasPreview(window.location.search);
}

/**
 * true durante la temporada navideña (fechas en `utils/season.ts`) o con `?navidad=1`.
 * En el servidor siempre es false, así el HTML inicial es el normal y no hay
 * desajustes de hidratación.
 */
export function useChristmasSeason(): boolean {
  return useSyncExternalStore(subscribeNoop, getSnapshot, () => false);
}
