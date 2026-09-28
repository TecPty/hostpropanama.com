import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

/**
 * Lista cerrada de íconos disponibles para `content.json`.
 * Se importan uno a uno para que el bundle solo incluya los usados.
 */
const ICONS = {
  "badge-check": BadgeCheck,
  calendar: CalendarCheck,
  clock: Clock,
  heart: HeartPulse,
  mail: Mail,
  "map-pin": MapPin,
  message: MessageCircle,
  phone: Phone,
  shield: ShieldCheck,
  smile: Smile,
  sparkles: Sparkles,
  star: Star,
  stethoscope: Stethoscope,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export const ICON_NAMES = Object.keys(ICONS) as IconName[];

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = ICONS[name];
  return <Component className={className} aria-hidden="true" focusable="false" />;
}
