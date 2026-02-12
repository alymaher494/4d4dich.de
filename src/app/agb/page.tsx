"use client";

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function AGBPage() {
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
                        Allgemeine Geschäftsbedingungen (AGB)
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 1 Geltungsbereich</h2>
                    <p className="mb-6">
                        (1) Die nachstehenden Bedingungen gelten für alle zwischen dem Kunden und der Agentur 4D Für Dich (nachfolgend Auftragnehmer genannt) geschlossenen Verträge über die Erbringung von Dienstleistungen in den Bereichen Design, Druck, Webentwicklung und Marketing.
                    </p>
                    <p className="mb-6">
                        (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 2 Vertragsschluss</h2>
                    <p className="mb-6">
                        (1) Die Angebote des Auftragnehmers sind freibleibend und unverbindlich. Annahmeerklärungen und sämtliche Bestellungen bedürfen zur Rechtswirksamkeit der schriftlichen oder fernschriftlichen Bestätigung des Auftragnehmers.
                    </p>
                    <p className="mb-6">
                        (2) Der Umfang der Leistungen ergibt sich aus der beim Vertragsschluss maßgeblichen Leistungsbeschreibung im Angebot.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 3 Preise und Zahlungsbedingungen</h2>
                    <p className="mb-6">
                        (1) Die angegebenen Preise sind Nettopreise zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders ausgewiesen.
                    </p>
                    <p className="mb-6">
                        (2) Rechnungen sind sofort nach Rechnungsstellung ohne Abzug zahlbar, sofern nichts anderes vereinbart ist.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 4 Mitwirkungspflichten des Kunden</h2>
                    <p className="mb-6">
                        (1) Der Kunde unterstützt den Auftragnehmer bei der Erfüllung der vertraglich geschuldeten Leistungen. Dazu gehört insbesondere die rechtzeitige Bereitstellung von Informationen, Datenmaterial sowie von Hard- und Software, soweit die Mitwirkungsleistungen des Kunden dies erfordern.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 5 Urheberrecht und Nutzungsrechte</h2>
                    <p className="mb-6">
                        (1) Jeder dem Auftragnehmer erteilte Auftrag ist ein Urheberwerkvertrag, der auf die Einräumung von Nutzungsrechten an den Werkleistungen gerichtet ist.
                    </p>
                    <p className="mb-6">
                        (2) Alle Entwürfe und Reinzeichnungen unterliegen dem Urheberrechtsgesetz. Die Bestimmungen des Urheberrechtsgesetzes gelten auch dann, wenn die nach § 2 UrhG erforderliche Schöpfungshöhe nicht erreicht ist.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 6 Haftung</h2>
                    <p className="mb-6">
                        (1) Der Auftragnehmer haftet für entstandene Schäden z. B. bei Verzögerung, Nichterfüllung oder Schlechterfüllung nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) oder bei vorsätzlichem oder grob fahrlässigem Verhalten.
                    </p>

                    <h2 className="text-2xl font-black mb-6 mt-12 text-slate-900 border-b pb-4">§ 7 Schlussbestimmungen</h2>
                    <p className="mb-6">
                        (1) Es gilt das Recht der Bundesrepublik Deutschland.
                    </p>
                    <p className="mb-6">
                        (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist der Sitz des Auftragnehmers, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                    </p>
                </div>
            </section>
        </main>
    );
}
