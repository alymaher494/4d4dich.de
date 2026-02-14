"use client";

export default function Map() {
    return (
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.971719546083!2d8.882778!3d50.012222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0b0000000001%3A0x0!2zTGx1ZHdpZ3N0cmFwZSAyQSwgNjMxMTAgUm9kZ2F1!5e0!3m2!1sde!2sde!4v1640000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay for better touch interaction on mobile */}
            <div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-2xl" />
        </div>
    );
}
