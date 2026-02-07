"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
    className?: string;
    intensity?: "low" | "medium" | "high";
    animation?: boolean; // Control to disable animation manually if needed (Rollback strategy)
}

export default function AmbientBackground({ className, intensity = "medium", animation = true }: AmbientBackgroundProps) {
    const shouldReduceMotion = useReducedMotion();

    // Performance Guardrail: Disable animation if reduced motion is preferred or explicitly disabled
    const isStatic = shouldReduceMotion || !animation;

    const opacityMap = {
        low: "opacity-30",
        medium: "opacity-50",
        high: "opacity-70"
    };

    // Static Render for Low-End Devices / Reduced Motion
    if (isStatic) {
        return (
            <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
                <div
                    className={cn(
                        "absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full blur-[100px]",
                        "bg-gradient-to-b from-primary/10 to-transparent",
                        opacityMap[intensity]
                    )}
                />
                <div
                    className={cn(
                        "absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px]",
                        "bg-gradient-to-t from-secondary/10 to-transparent",
                        opacityMap[intensity]
                    )}
                />
            </div>
        );
    }

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
            {/* Primary Orb - Top Right */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className={cn(
                    "absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px]",
                    "bg-gradient-to-b from-primary/20 to-transparent",
                    opacityMap[intensity]
                )}
            />

            {/* Secondary Orb - Bottom Left */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1
                }}
                className={cn(
                    "absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px]",
                    "bg-gradient-to-t from-secondary/20 to-transparent",
                    opacityMap[intensity]
                )}
            />

            {/* Accent Orb - Center (Subtle) */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-slate-100/10 mix-blend-overlay"
            />
        </div>
    );
}
