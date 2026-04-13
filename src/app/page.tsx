import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Azafatas y Modelos en Panamá para Eventos | HostPro Panamá",
  description:
    "Agencia líder de azafatas, modelos y edecanes en Panamá. Talento profesional verificado para eventos corporativos, ferias, activaciones BTL y producciones audiovisuales. Cotiza en 1 hora.",
  alternates: {
    canonical: "https://hostpropanama.com",
  },
  openGraph: {
    title: "Azafatas y Modelos en Panamá | HostPro Panamá",
    description:
      "Agencia líder de azafatas, modelos y edecanes en Panamá para eventos corporativos, ferias y activaciones BTL. Talento verificado. Cotiza gratis.",
    url: "https://hostpropanama.com",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "HostPro Panamá - Azafatas y Modelos Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azafatas y Modelos en Panamá | HostPro",
    description:
      "Agencia de azafatas, modelos y edecanes para eventos corporativos en Panamá. Cotiza gratis.",
  },
};

export default function Home() {
  return <HomeClient />;
}