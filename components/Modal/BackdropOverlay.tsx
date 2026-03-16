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
                        background: 'linear-gradient(90deg, rgba(5,5,10,0.25) 0%, rgba(20,10,40,0.25) 40%, rgba(90,40,200,0.18) 100%)'
                    }}
                />
            </div>

            {children}
        </motion.div>
    );
}
