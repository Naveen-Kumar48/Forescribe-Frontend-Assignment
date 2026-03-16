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
            {/* Background with blur and gradient */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-md"
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-purple-900/20" />
            </div>

            {children}
        </motion.div>
    );
}
