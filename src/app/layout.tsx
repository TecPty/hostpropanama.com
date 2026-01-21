import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOSTPRO PANAMÁ | Staff premium para eventos corporativos",
  description:
    "Staff profesional para eventos en Panamá: azafatas bilingües, hosts corporativos y promotores verificados. Respuesta en 1 hora. ¡Cotiza gratis tu evento ahora!",
  metadataBase: new URL("https://hostpropanama.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "HOSTPRO PANAMÁ | Staff premium para eventos corporativos",
    description:
      "Staff profesional bilingüe para eventos en Panamá. Azafatas, promotores y brand ambassadors verificados. Respuesta garantizada en 1 hora.",
    url: "https://hostpropanama.com",
    siteName: "HostPro Panamá",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "HostPro Panamá - Staff premium para eventos corporativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOSTPRO PANAMÁ | Staff premium para eventos corporativos",
    description:
      "Staff profesional bilingüe para eventos en Panamá. Respuesta en 1 hora. Cotiza gratis tu evento.",
    images: ["/seo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
