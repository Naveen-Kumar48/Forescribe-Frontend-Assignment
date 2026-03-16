# ✨ Forescribe Frontend Assignment

A pixel-perfect frontend masterpiece engineered with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. This project delivers a sophisticated, responsive masonry grid and a premium glassmorphism authentication interface—optimized for ultra-smooth 60fps performance and high-density visual clarity.

🌐 **Live Demo**: [https://forescribe-frontend-assignment.vercel.app/](https://forescribe-frontend-assignment.vercel.app/)

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

During the engineering of this project, the following key assumptions were made to ensure a high-quality delivery:

- **Browser Extension Resilience**: Recognized that modern browser environments are often modified by extensions (e.g., Text Blaze, password managers). Implemented a `mounted` state guard to capture these changes gracefully and eliminate React hydration mismatches.
- **Responsive-First Architecture**: Assumed a wide range of devices. The grid and modal are designed to scale fluidly from mobile (90% width) to ultra-wide displays (up to 1700px), ensuring design integrity on all viewports.
- **Mock Data Persistence**: As a frontend-focused task, data is managed via a centralized local structure in `app/page.tsx`. This assumes that in a production environment, this would be swapped for a REST/GraphQL API layer.
- **GPU-Accelerated Animations**: Leveraged Framer Motion’s hardware-accelerated transforms (translateY, scale) assuming most users are on modern browsers that support high-frame-rate CSS animations.
- **Direct Asset Resolution**: Assumed all branding assets must be served locally from `/public/Assets` to minimize external HTTP requests and ensure pixel-perfect rendering using Next.js Image Optimization.
- **Brand Identity**: Adopted a signature `#1d1626` gradient for the authentication layer and `#1f1f1f` for the main canvas, assuming a primary goal of achieving deep, high-contrast visual hierarchy.

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
