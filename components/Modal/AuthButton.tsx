'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
                "relative w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg",
                isGoogle
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white hover:shadow-[#7C3AED]/20 hover:brightness-110"
                    : "bg-[#2a2a2a] text-white hover:bg-[#323232] border border-white/5",
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
