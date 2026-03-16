'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // I should check if this exists, otherwise I'll define a simple one or use clsx

interface AuthButtonProps {
    provider: 'google' | 'microsoft';
    text: string;
    iconSrc: string;
    className?: string;
    onClick?: () => void;
}

export default function AuthButton({ provider, text, iconSrc, className, onClick }: AuthButtonProps) {
    const isGoogle = provider === 'google';

    return (
        <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "relative w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg",
                isGoogle
                    ? "bg-[#8b3dff] text-white hover:bg-[#9d5aff] hover:shadow-[#8b3dff]/30"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-black/20",
                className
            )}
        >
            <div className="absolute left-6 w-5 h-5 flex items-center justify-center">
                <Image src={iconSrc} alt={`${provider} icon`} width={20} height={20} className="object-contain" />
            </div>
            <span className="text-sm tracking-wide">{text}</span>
        </motion.button>
    );
}
