export default function ContactForm() {
    return (
        <div className="bg-white p-8 md:p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-primary/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
                        <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="ihre@email.de" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Betreff</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Wie können wir helfen?" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nachricht</label>
                    <textarea className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none min-h-[150px]" placeholder="Ihre Nachricht an uns..."></textarea>
                </div>
                <button className="btn-primary w-full py-5 text-lg text-white">Nachricht senden</button>
            </form>
        </div>
    );
}
