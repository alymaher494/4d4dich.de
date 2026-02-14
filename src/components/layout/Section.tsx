import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string; // Allow custom overrides
    padding?: "none" | "small" | "default" | "large";
    background?: "white" | "slate" | "dark" | "primary";
}

export function Section({
    children,
    className,
    padding = "default",
    background = "white"
}: SectionProps) {
    const paddings = {
        none: "",
        small: "py-12 md:py-16",
        default: "py-24", // Standard 6rem vertical spacing across the site
        large: "py-32 md:py-40",
    };

    const backgrounds = {
        white: "bg-white",
        slate: "bg-slate-50",
        dark: "bg-slate-950 text-white",
        primary: "bg-primary text-white",
    };

    return (
        <section className={cn(
            paddings[padding],
            backgrounds[background],
            className
        )}>
            {children}
        </section>
    );
}
