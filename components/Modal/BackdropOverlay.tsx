'use client';

import React from 'react';
import { motion } from 'motion/react';

interface BackdropOverlayProps {
    children?: React.ReactNode;
    onClose?: () => void;
}

export default function BackdropOverlay({ children, onClose }: BackdropOverlayProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        >
            {/* Background with blur and custom 3-color gradient */}
            <div
                className="absolute inset-0 backdrop-blur-[2px]"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(118.88deg, rgba(0, 0, 0, 0.5) 38.24%, rgba(139, 61, 255, 0.5) 97.48%, rgba(139, 61, 255, 0.5) 108.58%)'
                    }}
                />
            </div>

            {children}
        </motion.div>
    );
}
