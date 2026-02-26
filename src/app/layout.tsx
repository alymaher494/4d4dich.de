import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getGlobalOptions } from "@/lib/wordpress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4D FÜR DICH | Design, Druck & Digital Marketing",
  description: "Ihre Full-Service Agentur für Design, Druck und Digital Marketing in Rodgau und Frankfurt.",
  icons: {
    icon: "/images/assets/4bf9d1cd2d37202c1683c052a2acce3e.png"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getGlobalOptions();

  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw]`}>
        <Header />
        <main>{children}</main>
        <Footer dynamicSettings={settings} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
