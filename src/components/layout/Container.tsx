import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: "default" | "narrow" | "full";
}

export function Container({
    children,
    className,
    size = "default"
}: ContainerProps) {
    const sizes = {
        default: "max-w-7xl", // Standard width used in most heroes/sections
        narrow: "max-w-4xl",  // For blog posts or focused content
        full: "max-w-full",   // Full width 
    };

    return (
        <div className={cn(
            "mx-auto w-full px-6 md:px-12", // Standard horizontal padding used everywhere
            sizes[size],
            className
        )}>
            {children}
        </div>
    );
}
