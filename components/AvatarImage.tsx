'use client';

import Image from 'next/image';

// A simple solid color base64 for blur placeholder (light gray)
const blurDataUrl =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=';

export default function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain p-4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
      placeholder="blur"
      blurDataURL={blurDataUrl}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
    />
  );
}
