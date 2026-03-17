'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import SignUpForm from '@/components/Modal/SignUpForm';
// import BackdropOverlay from '@/components/Modal/BackdropOverlay';
import { cn } from '@/lib/utils';
import BackdropOverlay from '@/components/Modal/BackdropOverlay';

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
        image: '/Assets/Ariana.svg',
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
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={cn(
        'group relative flex flex-col items-center text-center rounded-[1.5rem] shadow-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)] hover:brightness-125 border border-white/5 hover:border-white/30 overflow-hidden min-h-[380px]',
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
      <div className={cn('px-6 md:px-8', 'mt-6 md:mt-8')}>
        <h3 className="text-2xl md:text-[32px] font-bold text-[#1e1b4b] tracking-tight">{block.title}</h3>
        {isCompany ? (
          <p className="text-base md:text-[18px] text-[#6b7280] font-semibold mt-2 tracking-tight">{block.subtitle}</p>
        ) : (
          <p className="text-base md:text-[18px] text-[#1e1b4b] mt-4 md:mt-5 leading-relaxed font-medium opacity-90 px-2 leading-[1.4]">
            &quot;{block.text}&quot;
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          {/* Top Left Logo - Restore fixed branding position */}
          <div className="fixed top-4 left-4 md:top-8 md:left-8 z-[110] transition-transform hover:scale-105">
            <a href="/" className="block focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg">
              <Image
                src="/Assets/navlogo.svg"
                alt="Forescribe Logo"
                width={163}
                height={38}
                className="object-contain w-[100px] md:w-[160px] h-auto"
                priority
              />
            </a>
          </div>

          {/* Grid Section - Infinite Scroll - Revert to original gap values */}
          <div className="overflow-hidden h-screen">
            <div className="animate-scroll-up">
              {/* Grid - First Copy */}
              <section className="max-w-[1700px] mx-auto px-4 pt-16 pb-8">
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

              {/* Grid - Duplicate Copy for seamless loop */}
              <section className="max-w-[1700px] mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 xl:gap-3">
                  {columns.map((col, index) => (
                    <div
                      key={`dup-${col.id}`}
                      className={cn(
                        'flex flex-col gap-2 xl:gap-3',
                        index % 2 !== 0 ? 'lg:mt-32' : 'lg:mt-0'
                      )}
                    >
                      {col.blocks.map((block, bIndex) => (
                        <BlockCard key={`dup-${block.id}`} block={block} index={bIndex} colIndex={index} />
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>

      {mounted && (
        <BackdropOverlay>
          <SignUpForm />
        </BackdropOverlay>
      )}
    </>
  );
}
