import Link from "next/link";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/data/website-text";

interface FooterProps {
    dynamicSettings?: any;
}

export default function Footer({ dynamicSettings }: FooterProps) {
    // Merge static siteInfo with dynamic settings if available
    const email = dynamicSettings?.email || siteInfo.email;
    const phone = dynamicSettings?.phone || siteInfo.phone;
    const address = dynamicSettings?.address || siteInfo.address;
    const location = dynamicSettings?.location || siteInfo.location;
    const instagram = dynamicSettings?.instagram || siteInfo.social.instagram;
    const description = dynamicSettings?.footer_description || "Wir transformieren Visionen in digitale Realität. Kreativ, datengetrieben und immer einen Schritt voraus.";

    return (
        <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-10">
                        <Link href="/" className="inline-block transform transition-transform hover:scale-105 active:scale-95">
                            <img
                                src={siteInfo.logo}
                                alt={siteInfo.name}
                                className="h-14 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                            {description}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all bg-white/5"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all bg-white/5"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all bg-white/5"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Leistungen</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Druck", href: "/druck" },
                                    { label: "Grafik & Design", href: "/grafik-design" },
                                    { label: "Web & App", href: "/web-app" },
                                    { label: "Marketing", href: "/marketing" }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href} className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Agentur</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: "Über uns", href: "/ueber-uns" },
                                    { label: "Portfolio", href: "/portfolio" },
                                    { label: "Kontakt", href: "/kontakt" },
                                    { label: "Blog", href: "/blog" }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href} className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8 col-span-2 md:col-span-1">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Kontakt</h4>
                            <div className="space-y-6 text-slate-400">
                                <p className="leading-relaxed hover:text-white transition-colors cursor-pointer">
                                    {address}<br />
                                    {location}
                                </p>
                                <p className="hover:text-primary transition-colors cursor-pointer text-white font-bold">
                                    {phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                        © {new Date().getFullYear()} 4D FÜR DICH. <span className="text-slate-800">CRAFTED IN GERMANY.</span>
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                        <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
