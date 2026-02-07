"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Floating letters configuration - "4D4DICH"
// Starting positions are FAR outside the viewport
const floatingLetters = [
    { char: "4", startX: -800, startY: -500, color: "#76BC43" },
    { char: "D", startX: 900, startY: -400, color: "#D60D7E" },
    { char: "4", startX: -700, startY: 600, color: "#D60D7E" },
    { char: "D", startX: 850, startY: 500, color: "#76BC43" },
    { char: "I", startX: -600, startY: -700, color: "#76BC43" },
    { char: "C", startX: 700, startY: 700, color: "#D60D7E" },
    { char: "H", startX: -900, startY: 200, color: "#76BC43" },
];

// Wheel icons - Social Media + Services
const wheelIcons = [
    {
        name: "Facebook",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    },
    {
        name: "Instagram",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        )
    },
    {
        name: "TikTok",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
        )
    },
    {
        name: "YouTube",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
    {
        name: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        name: "X (Twitter)",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        name: "Snapchat",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.323-.133.459-.133.169 0 .312.05.429.147.163.138.207.338.207.467 0 .216-.09.444-.252.619-.252.27-.655.454-1.223.567l-.132.027c-.14.029-.27.057-.391.091-.186.054-.322.127-.4.215-.063.069-.093.157-.097.27 0 .098.029.2.092.306.16.272.395.527.675.799.393.39.862.783 1.377 1.111.377.243.785.442 1.211.574.239.072.483.125.728.121.25-.004.485-.069.703-.22.12-.084.233-.204.316-.383l.024-.053c.061-.136.134-.299.324-.392.12-.057.26-.082.392-.082.092 0 .183.013.27.042.315.097.547.323.64.62.084.272.027.59-.175.89-.248.371-.667.616-1.177.752-.137.036-.29.06-.447.081-.168.02-.347.039-.53.06-.254.035-.51.081-.767.139-.348.075-.688.189-1.001.37l-.064.033c-.206.116-.44.237-.716.409-.327.203-.732.394-1.232.553-.37.117-.816.197-1.373.197-.582 0-1.088-.097-1.466-.217-.395-.127-.751-.29-1.095-.477-.284-.155-.543-.297-.769-.4l-.162-.08c-.306-.156-.578-.21-.855-.21-.09 0-.182.006-.275.021-.144.021-.296.053-.458.098-.215.06-.452.125-.699.158-.102.015-.21.026-.323.026-.199 0-.322-.043-.508-.107a3.38 3.38 0 01-.324-.11c-.219-.091-.482-.21-.747-.342l-.073-.037c-.21-.108-.43-.241-.667-.39-.287-.18-.647-.405-1.047-.6-.349-.171-.725-.322-1.104-.42-.196-.05-.444-.097-.681-.13-.196-.028-.388-.051-.552-.07l-.094-.01c-.134-.017-.277-.038-.426-.08-.463-.111-.967-.353-1.168-.722-.187-.345-.234-.667-.149-.94.09-.273.311-.475.594-.571.058-.02.119-.033.183-.042.12-.015.24.001.346.04.108.037.206.092.292.152.283.196.603.274.924.274.136 0 .271-.014.4-.039.097-.019.19-.041.279-.067.05-.015.093-.033.129-.06.02-.02.047-.053.05-.107.002-.026-.007-.072-.047-.134a2.27 2.27 0 00-.274-.331 7.234 7.234 0 00-.555-.486c-.258-.207-.537-.414-.766-.64a2.86 2.86 0 01-.417-.544c-.11-.18-.193-.363-.262-.58-.08-.26-.112-.55-.094-.851.04-.677.352-1.205.855-1.58.312-.234.694-.41 1.14-.525.093-.026.187-.048.281-.066-.138-.94-.176-1.88-.107-2.72.085-1.033.306-1.94.734-2.71.493-.881 1.224-1.523 2.088-1.928.58-.269 1.203-.386 1.774-.386zm3.35 9.6c.156.043.296.123.403.247.106.126.151.256.151.4 0 .108-.027.21-.076.302-.051.089-.118.163-.193.22l-.082.06c-.218.151-.45.282-.688.396a5.57 5.57 0 01-.712.273c-.244.078-.496.134-.75.17-.204.03-.416.05-.628.062.018.102.046.202.086.302.053.132.122.263.2.384.11.17.242.342.385.49.25.254.547.5.883.666.33.163.67.264 1.074.33.058.01.117.015.177.015h.041c.12 0 .236-.021.34-.055l.121-.044c.085-.035.19-.085.305-.145l.026-.012c.06-.031.125-.069.197-.115.041-.027.084-.058.127-.091.1-.076.197-.163.267-.257.084-.111.147-.236.185-.373a.914.914 0 00.008-.465.628.628 0 00-.095-.21.483.483 0 00-.14-.136c-.135-.09-.304-.109-.455-.109-.16 0-.33.022-.5.063l-.167.045-.087.027c-.155.052-.31.09-.457.09-.21 0-.36-.055-.477-.15a.387.387 0 01-.08-.1c-.016-.03-.025-.067-.024-.11 0-.03.005-.062.015-.096.134-.433.206-.91.21-1.352 0-.105-.005-.21-.015-.311-.008-.09-.02-.178-.035-.263l-.022-.117c-.05-.258-.132-.494-.246-.697a1.598 1.598 0 00-.461-.504c-.09-.063-.188-.115-.288-.156-.149-.058-.3-.088-.444-.088l-.074.002c-.139.01-.26.054-.392.108-.135.057-.264.13-.361.214-.132.112-.216.262-.296.433-.078.168-.154.354-.24.571l-.043.108a4.46 4.46 0 01-.101.228c-.041.083-.084.152-.126.205-.025.032-.054.058-.081.08-.11.085-.24.122-.37.122-.068 0-.136-.01-.205-.032-.165-.05-.325-.152-.434-.306a.62.62 0 01-.101-.228 1.01 1.01 0 01-.03-.26c0-.029.002-.06.003-.093.02-.406.11-.815.203-1.188.045-.183.092-.355.133-.512.039-.151.076-.292.103-.418.032-.153.055-.287.068-.404.007-.056.014-.107.018-.156l.008-.096a1.48 1.48 0 00.002-.15c-.002-.061-.008-.125-.016-.19a1.64 1.64 0 00-.207-.59c-.035-.061-.075-.119-.119-.175l-.052-.061c-.127-.148-.208-.198-.208-.198.113-.115.227-.225.346-.325l.06-.05c.126-.102.26-.194.398-.279.37-.23.784-.402 1.208-.502.41-.096.809-.137 1.18-.137h.182c.355.005.68.04.971.105.327.075.61.184.85.33.323.198.559.453.696.763.133.297.172.599.201.9l.016.19c.006.072.012.144.02.216.015.145.036.29.065.433.022.107.046.208.074.305.038.124.082.237.139.339.088.157.203.289.35.39z" />
            </svg>
        )
    },
    {
        name: "Website",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    },
    {
        name: "Mobile App",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        )
    },
    {
        name: "AI",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                <circle cx="8" cy="14" r="1" />
                <circle cx="16" cy="14" r="1" />
            </svg>
        )
    },
    {
        name: "E-Commerce",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        )
    },
    {
        name: "Marketing",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        )
    },
];

// Stats data
const stats = [
    { label: "Impressions", value: "8+ Milliarden", description: "Im letzten Jahr haben wir Milliarden von Impressionen geliefert" },
    { label: "Conversions", value: "9+ Millionen", description: "Wir haben Zehntausende von Leads generiert" },
    { label: "Video Views", value: "200+ Millionen", description: "Wir haben Hunderte Millionen Videoaufrufe erzielt" },
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
    const circleRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const centerTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            // Main timeline for scroll animation - Optimized for smooth performance
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%", // Balanced scroll distance
                    scrub: 1.5, // Lower scrub = more responsive, less lag
                    pin: true,
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    preventOverlaps: true,
                },
            });

            // Responsive GSAP MatchMedia
            const mm = gsap.matchMedia();

            mm.add({
                // Mobile
                isMobile: "(max-width: 767px)",
                // Desktop
                isDesktop: "(min-width: 768px)",
            }, (context) => {
                const { isMobile } = context.conditions as { isMobile: boolean };

                // Define offsets based on screen size
                // Mobile: Tighter spacing to fit ~350px width
                // Desktop: Original spacing
                const letterOffsets = isMobile
                    ? [-120, -80, -40, 0, 35, 70, 105]
                    : [-280, -190, -100, -10, 70, 140, 220];

                lettersRef.current.forEach((letter, i) => {
                    if (letter) {
                        // Initial position - far outside viewport, invisible
                        gsap.set(letter, {
                            x: floatingLetters[i].startX,
                            y: floatingLetters[i].startY,
                            rotation: Math.random() * 40 - 20,
                            opacity: 0, // Start invisible
                            scale: 0.8,
                        });

                        const finalX = letterOffsets[i];

                        // First: fade in and move to intermediate position (around circle)
                        tl.to(
                            letter,
                            {
                                x: floatingLetters[i].startX * 0.4, // Intermediate position
                                y: floatingLetters[i].startY * 0.4,
                                opacity: 0.5,
                                scale: 0.9,
                                duration: 0.4,
                                ease: "power2.out",
                            },
                            0
                        );

                        // Then: move to final position
                        tl.to(
                            letter,
                            {
                                x: finalX,
                                y: 0,
                                rotation: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.6,
                                ease: "power3.out",
                            },
                            0.4
                        );
                    }
                });
            });

            // Phase 2: Wheel rotates during animation
            tl.to(
                wheelRef.current,
                {
                    rotation: 180, // Rotate 180 degrees during scroll
                    duration: 1,
                    ease: "none",
                },
                0
            );

            // Phase 3: Circle fades and scales - starts later
            tl.to(
                circleRef.current,
                {
                    scale: 0.5,
                    opacity: 0,
                    rotation: 90, // Additional rotation as it fades
                    duration: 0.5,
                },
                0.5
            );

            // Phase 3: Center text fades out
            tl.to(
                centerTextRef.current,
                {
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.4,
                },
                0.6
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Hero Section with Scroll Pin */}
            <section ref={containerRef} className="relative">
                <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 25%, #fdf2f8 50%, #ffffff 75%, #f0fdf4 100%)' }}>

                    {/* Background Glow Effects - Optimized */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ willChange: 'transform' }}>
                        {/* Primary glow (green) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(118,188,67,0.15) 0%, transparent 70%)', willChange: 'transform' }} />
                        {/* Secondary glow (pink) */}
                        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(214,13,126,0.1) 0%, transparent 70%)', willChange: 'transform' }} />
                        {/* Bottom accent */}
                        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(118,188,67,0.08) 0%, transparent 70%)', willChange: 'transform' }} />
                    </div>

                    {/* Floating Letters - "4D4DICH" - Start off-screen */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        {floatingLetters.map((letter, idx) => (
                            <div
                                key={idx}
                                ref={(el) => { lettersRef.current[idx] = el; }}
                                className="absolute text-[40px] md:text-[120px] lg:text-[140px] font-black select-none"
                                style={{
                                    color: letter.color,
                                    opacity: 0,
                                    textShadow: `0 0 40px ${letter.color}30`,
                                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                                    letterSpacing: "-0.02em",
                                    willChange: 'transform, opacity',
                                    transform: 'translateZ(0)',
                                }}
                            >
                                {letter.char}
                            </div>
                        ))}
                    </div>

                    {/* Main Circle Container - Wheel Design */}
                    <div
                        ref={circleRef}
                        className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] z-10"
                    >
                        {/* Rotating Wheel Container */}
                        <div ref={wheelRef} className="absolute inset-0">
                            {/* Wheel Ring with Segments - Brand Colors */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                                <defs>
                                    {/* Gradient for the wheel */}
                                    <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#76BC43" />
                                        <stop offset="100%" stopColor="#76BC43" />
                                    </linearGradient>
                                </defs>

                                {/* Main thick ring - GREEN (brand primary) */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="85"
                                    fill="none"
                                    stroke="#76BC43"
                                    strokeWidth="22"
                                    opacity="0.95"
                                />

                                {/* Segment gaps - creates the wheel effect */}
                                {Array.from({ length: 12 }).map((_, i) => {
                                    const angle = (i * 30 - 90) * (Math.PI / 180);
                                    const innerR = 74;
                                    const outerR = 96;
                                    const gapWidth = 4;

                                    const x1 = 100 + innerR * Math.cos(angle - gapWidth / 200);
                                    const y1 = 100 + innerR * Math.sin(angle - gapWidth / 200);
                                    const x2 = 100 + outerR * Math.cos(angle - gapWidth / 200);
                                    const y2 = 100 + outerR * Math.sin(angle - gapWidth / 200);

                                    return (
                                        <line
                                            key={i}
                                            x1={x1}
                                            y1={y1}
                                            x2={x2}
                                            y2={y2}
                                            stroke="white"
                                            strokeWidth="3"
                                            opacity="0.9"
                                        />
                                    );
                                })}

                                {/* Inner circle (center) */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="62"
                                    fill="white"
                                    fillOpacity="0.95"
                                />

                                {/* Inner decorative ring */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="58"
                                    fill="none"
                                    stroke="#76BC43"
                                    strokeWidth="0.5"
                                    opacity="0.3"
                                />
                            </svg>

                            {/* Social Media & Service Icons on the wheel - PINK icons on GREEN background */}
                            {wheelIcons.map((service, idx) => {
                                const angle = ((idx * 30) - 90) * (Math.PI / 180);
                                const radius = 42.5; // Percentage from center (on the ring)
                                const x = 50 + radius * Math.cos(angle);
                                const y = 50 + radius * Math.sin(angle);

                                return (
                                    <div
                                        key={idx}
                                        className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full bg-primary text-secondary shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                        title={service.name}
                                    >
                                        {service.icon}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center Content - Outside wheel so it doesn't rotate */}
                        <div
                            ref={centerTextRef}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10"
                            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70%", height: "70%" }}
                        >
                            {/* Subtitle */}
                            <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-[0.25em] mb-2">
                                Wir sind
                            </p>

                            {/* Logo dot */}
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary mb-3 shadow-lg shadow-primary/30" />

                            {/* Main Title */}
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-800 leading-tight mb-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                    Kreative
                                </span>
                                <br />
                                <span>Agentur</span>
                            </h1>

                            {/* Tagline */}
                            <p className="text-[10px] md:text-xs text-slate-500">
                                Design • Druck • Digital
                            </p>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
