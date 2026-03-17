'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import AuthButton from './AuthButton';
import { cn } from '@/lib/utils';

export default function SignUpForm() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "w-full max-w-[460px] mx-auto",
                "bg-[#1a1626]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem]",
                "shadow-[0_24px_64px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)] overflow-hidden px-6 py-10 md:px-10 md:py-12"
            )}
        >
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <Image
                    src="/assets/signuplogo.gif"
                    alt="Forescribe Logo"
                    width={64}
                    height={64}
                    unoptimized
                    className="object-contain drop-shadow-lg"
                />
                <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Welcome to Forescribe
                    </h2>
                </div>
            </div>

            {/* Auth Buttons */}
            <div className="space-y-4">
                <AuthButton
                    provider="google"
                    text="Continue with Google"
                    iconSrc="/assets/1298745_google_brand_branding_logo_network_icon 1.png"
                />
                <AuthButton
                    provider="microsoft"
                    text="Continue with Microsoft"
                    iconSrc="/assets/_x37_8-microsoft.png"
                />
            </div>

            {/* Footer Text */}
            <div className="mt-10 text-center">
                <p className="text-[12px] leading-relaxed text-white">
                    By clicking &quot;Continue with Google/Microsoft&quot; above, you acknowledge that you have read and understood, and agree to Forescribe&apos;s{" "}
                    <a href="#" className="text-[#a855f7] hover:text-[#b067f8] transition-colors underline underline-offset-4 decoration-[#a855f7]">Terms & Conditions</a>
                    {" "}and{" "}
                    <a href="#" className="text-[#a855f7] hover:text-[#b067f8] transition-colors underline underline-offset-4 decoration-[#a855f7]">Privacy Policy</a>.
                </p>
            </div>
        </motion.div>
    );
}
