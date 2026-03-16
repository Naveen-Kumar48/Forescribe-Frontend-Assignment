'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SignUpModal from '@/components/Modal/SignUpModal';
import { cn } from '@/lib/utils';

const DynamicAvatar = dynamic(() => import('@/components/AvatarImage'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black/5 animate-pulse rounded-2xl" />
  ),
});

// --- Data Structure ---
type BlockType = 'company' | 'testimonial';

interface Block {
  id: string;
  type: BlockType;
  bgClass: string;
  mediaBgClass: string;
  title: string;
  subtitle?: string;
  text?: string;
  logoPath?: string;
  image?: string;
}

const columns: { id: string; blocks: Block[] }[] = [
  {
    id: 'col-1',
    blocks: [
      {
        id: 'flatfile',
        type: 'company',
        bgClass: 'bg-[#fef0e5]',
        mediaBgClass: 'bg-[#fcdbc1]',
        title: 'Flatfile',
        subtitle: 'Project Management',
        logoPath: '/Assets/Flatfile.png',
      },
      {
        id: 'ariana',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Ariana',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/Ariana.png',
      },
      {
        id: 'namecheap',
        type: 'company',
        bgClass: 'bg-[#fff7ed]',
        mediaBgClass: 'bg-[#ff4f17]',
        title: 'Name Cheap',
        subtitle: 'Project Management',
        logoPath: '/Assets/namecheap.svg',
      },
      {
        id: 'jackmark1',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Jack Mark',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/JackMark.png',
      },
    ],
  },
  {
    id: 'col-2',
    blocks: [
      {
        id: 'chatgpt',
        type: 'company',
        bgClass: 'bg-[#dcfce7]',
        mediaBgClass: 'bg-[#10a37f]',
        title: 'ChatGPT',
        subtitle: 'Project Management',
        logoPath: '/Assets/ChatGPT.png',
      },
      {
        id: 'kate',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Kate',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/Kate.png',
      },
      {
        id: 'qb',
        type: 'company',
        bgClass: 'bg-[#f0fdf4]',
        mediaBgClass: 'bg-[#2ca01c]',
        title: 'QB',
        subtitle: 'Project Management',
        logoPath: '/Assets/QB.png',
      },
    ],
  },
  {
    id: 'col-3',
    blocks: [
      {
        id: 'notion',
        type: 'company',
        bgClass: 'bg-[#f3f4f6]',
        mediaBgClass: 'bg-[#000000]',
        title: 'Notion',
        subtitle: 'Project Management',
        logoPath: '/Assets/Notion.png',
      },
      {
        id: 'andrew',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Andrew',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/Andrew.svg',
      },
      {
        id: 'skype',
        type: 'company',
        bgClass: 'bg-[#f0f9ff]',
        mediaBgClass: 'bg-[#00aff0]',
        title: 'Skype',
        subtitle: 'Project Management',
        logoPath: '/Assets/Skype.png',
      },
      {
        id: 'jackmark2',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Jack Mark',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/JackMark.png',
      },
    ],
  },
  {
    id: 'col-4',
    blocks: [
      {
        id: 'linkedin',
        type: 'company',
        bgClass: 'bg-[#eff6ff]',
        mediaBgClass: 'bg-[#0077b5]',
        title: 'LinkedIn',
        subtitle: 'Project Management',
        logoPath: '/Assets/LinkedIn.png',
      },
      {
        id: 'paul',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Paul',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/Paul.png',
      },
      {
        id: 'aws',
        type: 'company',
        bgClass: 'bg-[#f3f4f6]',
        mediaBgClass: 'bg-[#232f3e]',
        title: 'AWS',
        subtitle: 'Project Management',
        logoPath: '/Assets/Amazon Web Services.png',
      },
    ],
  },
  {
    id: 'col-5',
    blocks: [
      {
        id: 'canva',
        type: 'company',
        bgClass: 'bg-[#e0f7fa]',
        mediaBgClass: 'bg-[#00c4cc]',
        title: 'Canva',
        subtitle: 'Project Management',
        logoPath: '/Assets/Canva.png',
      },
      {
        id: 'janemary',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Jane Mary',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/Janey Mary.png',
      },
      {
        id: 'chimpmonk',
        type: 'company',
        bgClass: 'bg-[#fffbeb]',
        mediaBgClass: 'bg-[#ffe01b]',
        title: 'Chimp Monk',
        subtitle: 'Project Management',
        logoPath: '/Assets/Chipmonk.svg',
      },
      {
        id: 'jackmark3',
        type: 'testimonial',
        bgClass: 'bg-white',
        mediaBgClass: 'bg-transparent',
        title: 'Jack Mark',
        text: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.',
        image: '/Assets/JackMark.png',
      },
    ],
  },
];

// --- Components ---

function BlockCard({ block, index, colIndex }: { block: Block; index: number; colIndex: number }) {
  const isCompany = block.type === 'company';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: colIndex * 0.1 + index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      className={cn(
        'group relative flex flex-col items-center text-center rounded-[1.5rem] shadow-sm transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:brightness-[0.99] border border-white/5 overflow-hidden min-h-[380px]',
        block.bgClass,
        'pb-8'
      )}
    >
      <div
        className={cn(
          'w-full h-[200px] flex items-center justify-center overflow-hidden relative transition-transform duration-500',
          'p-4'
        )}
      >
        <div className={`w-full h-full relative flex items-center justify-center transition-transform duration-500 rounded-2xl ${block.mediaBgClass}`}>
          {isCompany ? (
            <div className="relative w-1/3 h-1/3">
              <Image
                src={block.logoPath!}
                alt={block.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <DynamicAvatar src={block.image!} alt={block.title} />
          )}
        </div>
      </div>
      <div className={cn('px-8', 'mt-8')}>
        <h3 className="text-[32px] font-bold text-[#1e1b4b] tracking-tight">{block.title}</h3>
        {isCompany ? (
          <p className="text-[18px] text-[#6b7280] font-semibold mt-2 tracking-tight">{block.subtitle}</p>
        ) : (
          <p className="text-[18px] text-[#1e1b4b] mt-5 leading-relaxed font-medium opacity-90 px-2 leading-[1.4]">
            &quot;{block.text}&quot;
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-[#1f1f1f] selection:bg-blue-100 font-sans relative"
        >
          {/* Sign up trigger */}
          {!isModalOpen && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setIsModalOpen(true)}
              className="fixed top-8 right-8 z-40 bg-[#8b3dff] hover:bg-[#9d5aff] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-[#8b3dff]/30 transition-all hover:scale-105 active:scale-95 border border-white/10"
            >
              Sign Up
            </motion.button>
          )}

          {/* Top Left Logo - Persistent Branding */}
          <div className="fixed top-8 left-8 z-[110] transition-transform hover:scale-105">
            <Image
              src="/Assets/navlogo.png"
              alt="Forescribe Logo"
              width={160}
              height={44}
              className="object-contain"
              priority
            />
          </div>

          {/* Grid Section */}
          <section className="max-w-[1700px] mx-auto px-4 pt-16 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 xl:gap-3">
              {columns.map((col, index) => (
                <div
                  key={col.id}
                  className={cn(
                    'flex flex-col gap-2 xl:gap-3',
                    index % 2 !== 0 ? 'lg:mt-32' : 'lg:mt-0'
                  )}
                >
                  {col.blocks.map((block, bIndex) => (
                    <BlockCard key={block.id} block={block} index={bIndex} colIndex={index} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </motion.main>
      </AnimatePresence>

      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
