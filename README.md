# Stratwise

Stratwise is a modern and impressive landing page interface. With smooth transitions, reusable components, and a polished UI, it's designed to professionally showcase your service or brand.

🔗 **Demo:** [https://stratwise.vercel.app](https://stratwise.vercel.app)

---

## ✨ Features

- 🚀 Modern and responsive design (mobile/tablet/desktop friendly)
- 🎯 Hero sections, services cards, and blog module
- 🧩 Section-based reusable component structure
- 🎞️ Animated component transitions with Framer Motion
- ♻️ Reusable UI components

---

## 🛠️ Kullanılan Teknolojiler / Technologies Used

- **Next.js 15**

- **TypeScript**

- **Tailwind CSS 4**

- **Embla Carousel**

- **Lucide React**

- **Framer Motion**

---

## 📁 Proje Yapısı / Project Structure

```
stratwise/
├─ animations/
│  ├─ index.ts           # Framer Motion variants
├─ app/
│  ├─ components/        # UI components
│  ├─ globals.css        # Global styles
│  ├─ layout.tsx         # Global layout
│  ├─ not-found.tsx      # Not found page content
│  ├─ page.tsx           # Home page content
├─ public/               # Static files
├─ next.config.ts        # Next.js config
├─ tsconfig.json         # TS config
└─ ...
```

---

## 🔧 Installation

To run the project locally, follow these steps:

> **Note:** This project uses `bun`. Install it via https://bun.sh if you haven't already.

```bash
# 1. Clone the repository
git clone https://github.com/talhaozbek61/stratwise.git
cd stratwise

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
```

## ⚠️ Known Issue: `localStorage.getItem is not a function`

When running the project, you may encounter the following error:
TypeError: localStorage.getItem is not a function

### Cause

This issue is **not related to project code**.  
It occurs due to a compatibility problem between **Next.js 15.3.x**, **Node.js v25+**, and **Turbopack**, where a non-standard `localStorage` is injected on the server side.

### Solution

Use a supported Node.js LTS version:

```bash
nvm install 20
nvm use 20
```
