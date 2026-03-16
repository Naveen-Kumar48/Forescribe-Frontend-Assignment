# ✨ Forescribe: Modern Testimonial Grid & Auth System

A high-performance, visually stunning testimonial grid and authentication interface built for modern SaaS applications. This project features a sophisticated masonry layout, premium glassmorphism effects, and ultra-smooth animations.

---

## 🚀 Installation & Setup

Follow these steps to get the project running locally on your machine:

1. **Clone the Project**
   ```bash
   cd Forescribe-Frontend-Assignment
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Directory Structure

The project follows industry-standard Next.js (App Router) organization:

```text
Forescribe-Frontend-Assignment/
├── app/                  # Application routing and global styles
│   ├── layout.tsx        # Global SEO, Fonts, and Layout wrapper
│   └── page.tsx          # Main Entry: Testimonial Grid & Modal Logic
├── components/           # Reusable UI Components
│   ├── Modal/            # Auth-specific specialized components
│   │   ├── SignUpModal.tsx
│   │   ├── BackdropOverlay.tsx
│   │   └── AuthButton.tsx
│   ├── AvatarImage.tsx   # Pixel-perfect image optimization
│   └── ContactForm.tsx   # Lead generation form
├── lib/                  # Utilities and helper functions
│   └── utils.ts          # Tailwind Class merging (cn)
├── public/               # Static assets
│   └── Assets/           # Optimized brand logos and user photos
└── next.config.ts        # Next.js configurations
```

---

## 🧠 Development Assumptions

During the engineering of this project, the following assumptions were made:

- **Browser Extension Resilience**: Assumed users may have extensions (like Text Blaze) that modify the DOM. Implemented a `mounted` state guard to prevent hydration errors.
- **Client-Side Interactivity**: Focused extensively on Client Components (`'use client'`) to leverage the full power of Framer Motion for premium UX.
- **Asset Availability**: All brand logos and testimonial images are expected to be present in `/public/Assets` for high-performance local resolution.
- **Theme Constraints**: Designed specifically with a `#1c1527` (Dark Navy) modal theme and `#1f1f1f` (Charcoal) page background for maximum visual depth.

---

## ✨ Key Improvements & Features

Beyond the standard requirements, the following enhancements were added:

- **Glassmorphism 2.0**: Implemented a deep-blur backdrop with a customized 20% opacity charcoal overlay for a premium SaaS feel.
- **Hydration Safety**: Added automatic mounting guards to ensure zero-error rendering across all browsers.
- **Branding Persistence**: The company logo is fixed at the top-left with a high z-index (`110`) and `priority` loading, ensuring it stays sharp and visible above and beyond any transitions.
- **Micro-Hover Effects**: 
    - Cards respond with subtle scale (`1.01x`) and brightness adjustments.
    - Buttons feature custom purple-glow shadows (`#8b3dff/30`) on interaction.
- **Pixel Perfection**: Standardized border-radius (`2.5rem`) and standardized typography sizing for a professional, cohesive identity.

---
      *Made with ❤️ from Naveen* 
