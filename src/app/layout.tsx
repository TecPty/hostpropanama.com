import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
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
  title: "Azafatas y Staff para Eventos en Panamá | HOSTPRO",
  description:
    "Contratar azafatas, modelos y staff profesional para eventos corporativos en Ciudad de Panamá. Personal bilingüe verificado para ferias, congresos y lanzamientos. Respuesta en 1 hora. ¡Cotiza gratis!",
  keywords: ["azafatas panamá", "staff eventos panamá", "modelos corporativos panamá", "personal para eventos", "azafatas bilingües", "staff ferias panamá", "promotores panama", "brand ambassadors", "eventos corporativos"],
  metadataBase: new URL("https://hostpropanama.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Azafatas y Staff para Eventos Corporativos en Panamá | HOSTPRO",
    description:
      "Contratar azafatas profesionales, modelos y staff bilingüe para eventos corporativos, ferias y congresos en Ciudad de Panamá. Personal verificado con respuesta en 1 hora.",
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-78GZFZHZY9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-78GZFZHZY9');
          `}
        </Script>
      </head>
      <body className={`${display.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
