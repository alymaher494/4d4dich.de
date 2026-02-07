"use client";

import { druckContent } from "@/data/website-text";
import { MessageCircle } from "lucide-react";

export default function DruckBenefits() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-green-50 rounded-[3rem] p-12 md:p-24 border border-green-100 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full blur-3xl -z-10" />

                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">
                        {druckContent.whatsapp_advantages.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {druckContent.whatsapp_advantages.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg shadow-green-900/5 border border-green-100 flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <p className="text-slate-800 font-bold text-lg">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
