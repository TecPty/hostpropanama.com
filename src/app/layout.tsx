import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Agencia de Talento para Experiencias de Marca y Eventos | HostPro Panamá",
  description:
    "Agencia líder en talento profesional para experiencias de marca, eventos corporativos y producción audiovisual en Panamá. Conectamos tu marca con talento verificado y especializado. Respuesta en 1 hora. ¡Cotiza gratis!",
  keywords: ["agencia talento panamá", "talento eventos panamá", "experiencias de marca", "producción audiovisual", "eventos corporativos panamá", "modelos profesionales", "brand ambassadors", "casting panamá", "talento corporativo"],
  metadataBase: new URL("https://hostpropanama.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Agencia de Talento Profesional en Panamá | HostPro",
    description:
      "Conectamos tu marca con talento profesional para experiencias de marca, eventos corporativos y producción audiovisual. Perfiles verificados y resultados garantizados.",
    url: "https://hostpropanama.com",
    siteName: "HostPro Panamá",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "HostPro Panamá - Agencia de Talento Profesional para Experiencias de Marca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HostPro Panamá | Agencia de Talento Profesional",
    description:
      "Talento profesional para experiencias de marca, eventos corporativos y producción audiovisual. Respuesta en 1 hora. Cotiza gratis.",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
