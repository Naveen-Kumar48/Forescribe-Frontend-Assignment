'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';

type FormData = {
    email: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form Submitted:', data);
    };

    return (
        <div className="max-w-lg mx-auto w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all font-medium ${errors.email
                                    ? 'border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-100 focus:ring-blue-500/20 focus:border-blue-500'
                                }`}
                        />
                        {errors.email && (
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-6 left-2 text-xs font-bold text-red-500"
                            >
                                {errors.email.message}
                            </motion.span>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                </div>
            </form>

            {isSubmitSuccessful && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-green-600 font-bold bg-green-50 py-3 rounded-xl"
                >
                    Check your inbox! You&apos;ve been subscribed. ✨
                </motion.p>
            )}
        </div>
    );
}
