# ✨ Forescribe Frontend Assignment

A pixel-perfect frontend masterpiece engineered with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. This project delivers a sophisticated, responsive masonry grid and a premium glassmorphism authentication interface—optimized for ultra-smooth 60fps performance and high-density visual clarity.

🌐 **Live Demo**: [https://forescribe-frontend-assignment.vercel.app/](https://forescribe-frontend-assignment.vercel.app/)

---

## 📋 Table of Contents

- [Installation & Setup](#-installation--setup)
- [Directory Structure](#-directory-structure)
- [Development Assumptions](#-development-assumptions)
- [Key Improvements & Features](#-key-improvements--features)
- [Technologies Used](#-technologies-used)

---

## 🚀 Installation & Setup

Follow these steps to get the project running locally on your machine:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
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
   The application will start at `http://localhost:3000`

4. **Build for Production** (Optional)
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Directory Structure

The project follows industry-standard Next.js (App Router) organization:

```text
Forescribe-Frontend-Assignment/
├── app/                          # Application routing and global styles
│   ├── globals.css               # Global CSS and Tailwind directives
│   ├── layout.tsx                # Root layout with SEO, fonts, metadata
│   └── page.tsx                  # Main entry: Masonry grid & modal logic
│
├── components/                   # Reusable UI components
│   ├── Modal/                    # Authentication modal components
│   │   ├── AuthButton.tsx        # Styled button for auth actions
│   │   ├── BackdropOverlay.tsx   # Glassmorphic backdrop overlay
│   │   └── SignUpForm.tsx        # Main signup modal component
│   └── AvatarImage.tsx           # Optimized avatar image component
│
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts             # Mobile viewport detection hook
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Tailwind class merger (cn function)
│
├── public/                       # Static assets
│   └── assets/                   # Brand logos, icons, and user photos 
│
├── .next/                        # Next.js build output (generated)
|
│
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── eslint.config.mjs             # ESLint flat config (new format)
├── next-env.d.ts                 # Next.js TypeScript environment declarations
├── next.config.ts                # Next.js configuration (TypeScript)
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.mjs            # PostCSS configuration (ES module)
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🧠 Development Assumptions

During the engineering of this project, the following key assumptions were made to ensure a high-quality delivery:

### Technical Assumptions

- **Browser Extension Resilience**: Recognized that modern browser environments are often modified by extensions (e.g., Text Blaze, password managers). Implemented a `mounted` state guard to capture these changes gracefully and eliminate React hydration mismatches.

- **Responsive-First Architecture**: Assumed a wide range of devices. The grid and modal are designed to scale fluidly from mobile (90% width) to ultra-wide displays (up to 1700px), ensuring design integrity on all viewports.

- **GPU-Accelerated Animations**: Leveraged Framer Motion's hardware-accelerated transforms (translateY, scale) assuming most users are on modern browsers that support high-frame-rate CSS animations.

- **Direct Asset Resolution**: Assumed all branding assets must be served locally from `/public/assets` to minimize external HTTP requests and ensure pixel-perfect rendering using Next.js Image Optimization.

### Design Assumptions

- **Brand Identity**: Adopted a signature `#1d1626` gradient for the authentication layer and `#1f1f1f` for the main canvas, assuming a primary goal of achieving deep, high-contrast visual hierarchy.

---

## ✨ Key Improvements & Features

Beyond the standard requirements, the following enhancements were added:

### Visual Enhancements

- **Glassmorphism 2.0**: Implemented a deep-blur backdrop with a customized 20% opacity charcoal overlay for a premium SaaS feel.

- **Pixel Perfection**: Standardized border-radius (`2.5rem`) and standardized typography sizing for a professional, cohesive identity.

### Performance Optimizations

- **Hydration Safety**: Added automatic mounting guards to ensure zero-error rendering across all browsers.

- **60fps Animations**: All motion effects are GPU-accelerated using transform properties instead of layout-affecting changes.

### Additional Features

- **Custom Modal System**: Fully accessible glassmorphism modal with backdrop blur and smooth animations
- **Optimized Image Loading**: Next.js Image component with priority loading for critical assets
- **Mobile Detection Hook**: Custom `use-mobile` hook for responsive behavior adjustments
- **Form Validation**: Client-side validation with smooth error feedback

---

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server after build |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎯 Live Demo

Visit the live deployment: **[https://forescribe-frontend-assignment.vercel.app/](https://forescribe-frontend-assignment.vercel.app/)**

---

<div align="center">
  <em>Made with ❤️ from Naveen Kumar</em><br/>
  <sub>Full Stack Developer </sub>
</div>
