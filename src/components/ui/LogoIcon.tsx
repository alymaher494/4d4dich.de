"use client";

import { siteInfo } from "@/data/website-text";
import { cn } from "@/lib/utils";

interface LogoIconProps {
    className?: string;
    variant?: "white" | "color";
}

export default function LogoIcon({ className, variant = "color" }: LogoIconProps) {
    return (
        <img
            src={siteInfo.logo}
            alt="4D Logo"
            className={cn(
                "w-full h-full object-contain",
                variant === "white" && "brightness-0 invert",
                className
            )}
        />
    );
}
