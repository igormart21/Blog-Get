import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "G-Tec Desentupidora - Porto Alegre | Desentupimento 24h",
    description: "Desentupidora profissional em Porto Alegre. Atendimento 24 horas, orçamento gratuito e garantia de 90 dias. Especialistas em desentupimento de pia, ralo, vaso, esgoto e limpa fossa.",
    keywords: "desentupidora porto alegre, desentupimento, limpa fossa, desentupidora 24h, desentupimento pia, desentupimento ralo, desentupimento vaso, desentupimento esgoto",
    authors: [{ name: "G-Tec Desentupidora" }],
    creator: "G-Tec Desentupidora",
    publisher: "G-Tec Desentupidora",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://gtecdesentupidora.com.br"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "G-Tec Desentupidora - Porto Alegre | Desentupimento 24h",
        description: "Desentupidora profissional em Porto Alegre. Atendimento 24 horas, orçamento gratuito e garantia de 90 dias.",
        url: "https://gtecdesentupidora.com.br",
        siteName: "G-Tec Desentupidora",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "G-Tec Desentupidora Porto Alegre",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "G-Tec Desentupidora - Porto Alegre | Desentupimento 24h",
        description: "Desentupidora profissional em Porto Alegre. Atendimento 24 horas, orçamento gratuito e garantia de 90 dias.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
