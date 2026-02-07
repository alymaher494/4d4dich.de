"use client";

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-slate-900 text-white">
                <AmbientBackground />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold uppercase tracking-widest backdrop-blur-md mb-6">
                        Rechtliches
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Impressum
                    </h1>
                </div>
            </section>

            <section className="py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Angaben gemäß § 5 TMG</h3>
                    <p className="mb-6">
                        <strong>4D Für Dich</strong><br />
                        Ludwigstraße 2A<br />
                        63110 Rodgau<br />
                        Deutschland
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Kontakt</h3>
                    <p className="mb-6">
                        Telefon: +49 151 41374672<br />
                        E-Mail: info@4d4dich.de
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Vertreten durch</h3>
                    <p className="mb-6">
                        Mohammed Toubajy (Geschäftsführer)
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Umsatzsteuer-ID</h3>
                    <p className="mb-6">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        [Ihre USt-ID wird hier eingefügt]
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Redaktionell verantwortlich</h3>
                    <p className="mb-6">
                        Mohammed Toubajy<br />
                        Ludwigstraße 2A<br />
                        63110 Rodgau
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">EU-Streitschlichtung</h3>
                    <p className="mb-6">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                    <p className="mb-6">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </section>
        </main>
    );
}
