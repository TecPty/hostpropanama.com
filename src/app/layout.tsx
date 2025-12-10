import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

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
    "Agencia de modelos y azafatas para eventos corporativos de lujo en Panamá. Talento verificado, respuesta inmediata y presencia impecable.",
  metadataBase: new URL("https://hostpropanama.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "HOSTPRO PANAMÁ | Staff premium para eventos corporativos",
    description:
      "Azafatas, promotores y brand ambassadors verificados para marcas exigentes.",
    url: "https://hostpropanama.com",
    siteName: "HostPro Panamá",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "HostPro Panamá - Staff premium para eventos corporativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOSTPRO PANAMÁ | Staff premium para eventos corporativos",
    description:
      "Azafatas, promotores y brand ambassadors verificados para marcas exigentes.",
    images: ["/logo.png"],
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
