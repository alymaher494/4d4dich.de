"use client";

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden bg-slate-900 text-white">
                <AmbientBackground />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold uppercase tracking-widest backdrop-blur-md mb-6">
                        Rechtliches
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Datenschutz
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Allgemeine Hinweise</h3>
                    <p className="mb-6">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Datenerfassung auf dieser Website</h3>
                    <p className="mb-6">
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                    <p className="mb-6">
                        <strong>Wie erfassen wir Ihre Daten?</strong><br />
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                    <p className="mb-6">
                        <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">2. Hosting</h2>
                    <p className="mb-6">
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                        [Name des Hosters]<br />
                        [Adresse des Hosters]
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Datenschutz</h3>
                    <p className="mb-6">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8 text-slate-900">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="mb-6">
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                        4D Für Dich<br />
                        Ludwigstraße 2A<br />
                        63110 Rodgau<br />
                        Telefon: +49 151 41374672<br />
                        E-Mail: info@4d4dich.de
                    </p>
                </div>
            </section>
        </main>
    );
}
