# Professional Portfolio Website

A modern, dark-themed, highly interactive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Dark Theme**: Elegant black background with purple/blue gradients
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Scroll-based animations, page transitions, and interactive effects
- **Modern Tech Stack**: React 18, TypeScript, TailwindCSS, Framer Motion
- **Component-Based**: Clean, reusable component architecture
- **Skills Showcase**: Interactive skill cards with proficiency indicators
- **Portfolio Section**: Project cards with filtering by technology
- **Contact Form**: Validated form ready for backend integration

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd /home/ali/portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Component** (`src/components/Hero.tsx`):
- Change "Your Name" to your actual name
- Update social media links

**About Component** (`src/components/About.tsx`):
- Update bio text
- Replace profile image URL

**Contact Component** (`src/components/Contact.tsx`):
- Update contact information

**Footer Component** (`src/components/Footer.tsx`):
- Update social media links

### 2. Skills Data

Edit `src/data/skills.ts`:
- Add, remove, or modify skills
- Update proficiency levels (0-100)
- Change categories

### 3. Projects Data

Edit `src/data/projects.ts`:
- Add your real projects
- Update descriptions, images, and links
- Modify technology tags

### 4. Colors & Theme

Edit `tailwind.config.js`:
- Modify color palette in the `colors` section
- Adjust animations and gradients

### 5. Contact Form Backend Integration

The contact form is ready for C++ backend integration. The form data structure:

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

To integrate with your C++ backend, edit `src/components/Contact.tsx` and update the `onSubmit` function to send data to your API endpoint.

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── Contact.tsx     # Contact section
│   │   └── Footer.tsx      # Footer
│   ├── pages/              # Page components
│   ├── data/               # Data files
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── tailwind.config.js      # TailwindCSS config
└── vite.config.ts          # Vite config
```

## Building for Production

1. Build the project:
```bash
npm run build
```

2. The production files will be in the `dist/` directory

3. Preview the production build:
```bash
npm run preview
```

## Deployment

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Your own server

---

Built with React, TypeScript, and TailwindCSS
