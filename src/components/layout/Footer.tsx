import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { siteInfo } from "@/data/website-text";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                {/* Company Info */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://4d4dich.de/wp-content/uploads/2025/01/cropped-cropped-cropped-logo-png-1-e1761347164694.png"
                            alt="4D Für Dich"
                            className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                        />
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                        Ihre Full-Service Agentur für Design, Druck und Digital Marketing in Rodgau und Frankfurt.
                    </p>
                    <div className="flex gap-4">
                        <Link href={siteInfo.social.instagram} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all border border-white/10 shadow-sm">
                            <Instagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div className="space-y-8">
                    <h4 className="text-lg font-bold text-white">Leistungen</h4>
                    <ul className="space-y-4 text-slate-400 text-sm font-medium">
                        <li><Link href="/druck" className="hover:text-primary transition-colors">Druckservice</Link></li>
                        <li><Link href="/grafik-design" className="hover:text-primary transition-colors">Grafik Design</Link></li>
                        <li><Link href="/web-app" className="hover:text-primary transition-colors">Web & App Design</Link></li>
                        <li><Link href="/marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                    </ul>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    <h4 className="text-lg font-bold text-white">Unternehmen</h4>
                    <ul className="space-y-4 text-slate-400 text-sm font-medium">
                        <li><Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
                        <li><Link href="/ueber-uns#team" className="hover:text-primary transition-colors">Unser Team</Link></li>
                        <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
                        <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
                        <li><Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
                        <li><Link href="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-8">
                    <h4 className="text-lg font-bold text-white">Kontakt</h4>
                    <ul className="space-y-5 text-slate-400 text-sm font-medium">
                        <li className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-white/5 text-primary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span>{siteInfo.address},<br />{siteInfo.location}</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/5 text-primary">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>{siteInfo.phone}</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/5 text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>{siteInfo.email}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                <p>© {new Date().getFullYear()} 4D FÜR DICH. DESIGNED WITH PRECISION.</p>
            </div>
        </footer>
    );
}
