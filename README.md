# 🌐 Modern Portfolio

A sleek, responsive, and customizable portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Ideal for developers and creatives who want to showcase their work with style and speed.

## ✨ Features

- ⚡ Fast, server-side rendering with Next.js
- 🎨 Tailwind CSS for modern utility-first styling
- 🧠 Built with TypeScript for type safety
- 💡 Reusable UI components
- 🌙 Dark/light theme support
- 📱 Fully responsive design

## 🏗️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ShadCN UI Components](https://ui.shadcn.com/) (inferred from `components/ui`)

## 📁 Project Structure
├── app/ # Application layout and pages
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/ # UI and layout components
│ ├── theme-provider.tsx
│ └── ui/ # Reusable UI components (alert, badge, avatar, etc.)
├── portfolio.tsx # Main portfolio entry file
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Project metadata and scripts
└── next.config.mjs # Next.js config


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js ≥ 18.x
- pnpm (preferred) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/modern-portfolio.git
cd modern-portfolio

# Install dependencies
pnpm install

**Development**
pnpm dev
Open http://localhost:3000 to see your portfolio in action.
Build for Production:
pnpm build
pnpm start

✍️ Customization
Modify app/page.tsx and portfolio.tsx to update your homepage.

Add or remove UI components in components/ui/.

Update Tailwind configuration via tailwind.config.ts.

📦 Deployment
You can deploy this project using:

Vercel

Netlify

Render
