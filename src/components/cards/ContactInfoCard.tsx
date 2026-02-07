import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
    icon: LucideIcon;
    title: string;
    value: string;
    href: string;
    isPrimary?: boolean;
}

export default function ContactInfoCard({ icon: Icon, title, value, href, isPrimary }: ContactInfoCardProps) {
    return (
        <Link href={href} className="group">
            <div className={`p-8 rounded-[2.5rem] border border-slate-100 text-center space-y-3 transition-all duration-300 h-full flex flex-col items-center justify-center ${isPrimary ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105' : 'bg-white hover:bg-slate-50 shadow-sm hover:shadow-md'}`}>
                <div className={`p-3 rounded-2xl ${isPrimary ? 'bg-white/10' : 'bg-primary/5 text-primary'}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <span className={`block text-xs font-bold uppercase tracking-wider ${isPrimary ? 'text-white/60' : 'text-slate-400'}`}>{title}</span>
                    <span className={`block font-bold truncate max-w-[150px] ${isPrimary ? 'text-white' : 'text-slate-900'}`}>{value}</span>
                </div>
            </div>
        </Link>
    );
}
