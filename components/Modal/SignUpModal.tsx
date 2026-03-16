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
    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

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
                            "relative z-[101] w-full max-w-[90%] md:max-w-[420px] lg:max-w-[460px]",
                            "bg-[#1c1527] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden p-10 py-12"
                        )}
                    >
                        {/* Header */}
                        <div className="flex flex-col items-center text-center space-y-6 mb-10">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                                <Image
                                    src="/Assets/signuplogo.svg"
                                    alt="Forescribe Logo"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-2">
                                <h2 id="modal-title" className="text-3xl font-bold text-white tracking-tight">
                                    Welcome to Forescribe
                                </h2>
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="space-y-4">
                            <AuthButton
                                provider="google"
                                text="Continue with Google"
                                iconSrc="/Assets/1298745_google_brand_branding_logo_network_icon 1.png"
                            />
                            <AuthButton
                                provider="microsoft"
                                text="Continue with Microsoft"
                                iconSrc="/Assets/_x37_8-microsoft.png"
                            />
                        </div>

                        {/* Footer Text */}
                        <div className="mt-10 text-center">
                            <p className="text-[11px] leading-relaxed text-white/50 px-6">
                                By clicking "Continue with Google/Microsoft" above, you acknowledge that you have read and understood, and agree to Forescribe's
                                <a href="#" className="text-white/80 hover:underline mx-1">Terms & Conditions</a>
                                and
                                <a href="#" className="text-white/80 hover:underline mx-1">Privacy Policy</a>.
                            </p>
                        </div>

                        {/* Close Button (Optional but good for UX) */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-8 text-white/30 hover:text-white transition-colors p-2"
                            aria-label="Close modal"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </motion.div>
                </BackdropOverlay>
            )}
        </AnimatePresence>
    );
}
