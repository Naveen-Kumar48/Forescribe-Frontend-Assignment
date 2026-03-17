'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import AuthButton from './AuthButton';
import BackdropOverlay from './BackdropOverlay';
import { cn } from '@/lib/utils';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <BackdropOverlay onClose={onClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        className={cn(
                            "relative z-[101] w-full max-w-[95%] md:max-w-[460px]",
                            "bg-[#1a1626]/90 backdrop-blur-xl border border-white/15 rounded-2xl",
                            "shadow-[0_24px_64px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)] overflow-hidden px-10 py-6"
                        )}
                    >
                        {/* Header */}
                        <div className="flex flex-col items-center text-center space-y-3 mb-5">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/signuplogo.svg"
                                    alt="Forescribe Logo"
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-1">
                                <h2 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
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
                        <div className="mt-5 text-center">
                            <p className="text-[11px] leading-relaxed text-white/50 px-6">
                                By clicking "Continue with Google/Microsoft" above, you acknowledge that you have read and understood, and agree to Forescribe's
                                <a href="#" className="text-white/80 hover:underline mx-1">Terms & Conditions</a>
                                and
                                <a href="#" className="text-white/80 hover:underline mx-1">Privacy Policy</a>.
                            </p>
                        </div>
                    </motion.div>
                </BackdropOverlay>
            )}
        </AnimatePresence>
    );
}
