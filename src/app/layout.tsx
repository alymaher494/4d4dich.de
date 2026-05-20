import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getGlobalOptions } from "@/lib/wordpress";
import JsonLd, { getLocalBusinessSchema } from "@/components/SEO/JsonLd";
import GoogleAnalytics from "@/components/SEO/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4D FÜR DICH | Design, Druck & Digital Marketing",
  description: "Ihre Full-Service Agentur für Design, Druck und Digital Marketing in Rodgau und Frankfurt.",
  icons: {
    icon: "/images/assets/4bf9d1cd2d37202c1683c052a2acce3e-transparent.png"
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
      <head>
        <JsonLd data={getLocalBusinessSchema(settings)} />
        <GoogleAnalytics gaId={settings?.acf?.global_ga_id || settings?.global_ga_id} />
        {(settings?.acf?.global_gsc_verification || settings?.global_gsc_verification) && (
          <meta name="google-site-verification" content={settings?.acf?.global_gsc_verification || settings?.global_gsc_verification} />
        )}
      </head>
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw]`}>
        <Header dynamicSettings={settings} />
        <main>{children}</main>
        <Footer dynamicSettings={settings} />
        <WhatsAppButton dynamicSettings={settings} />
      </body>
    </html>
  );
}
