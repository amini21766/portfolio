# Hamid Ahmad Amini — Developer Portfolio

A modern, responsive portfolio website for Hamid Ahmad Amini, a full-stack web developer specializing in React, Node.js, Express, MongoDB, Django, Laravel, and MySQL.

The application presents professional experience, featured projects, services, technical skills, education, certificates, testimonials, and contact information in a polished light/dark interface.

## Project Design

The image below is the project design:

![Project design](./src/assets/images/design.png)

## Features

- Responsive, mobile-first interface
- Light and dark color themes
- Professional profile and career overview
- Filterable featured-project gallery
- Detailed project and service views
- Experience, education, and certificate sections
- Technical skills showcase
- Client testimonials
- Downloadable PDF résumé
- Contact form powered by Web3Forms
- Smooth navigation and browser-history support

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React
- React Toastify
- jsPDF

## Getting Started

### Prerequisites

Install Node.js 18 or newer and npm.

### Installation

```bash
git clone <repository-url>
cd hamid-portfolio
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key"
```

You can create an access key at [Web3Forms](https://web3forms.com/). Without this key, the website still runs, but the contact form displays a configuration notice instead of submitting.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The optimized production files are generated in the `dist` directory.

### Type Checking

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/          Images and visual assets
├── components/      Reusable React interface components
├── data/            Portfolio content and project data
├── utils/           PDF résumé generation utilities
├── App.tsx          Main application and navigation state
├── index.css        Global styles and Tailwind configuration
├── main.tsx         Application entry point
└── types.ts         Shared TypeScript definitions
```

## Customization

Most portfolio content is stored in `src/data/portfolioData.ts`. Update that file to change the profile, projects, experience, services, skills, certificates, and testimonials.

Images are stored in `src/assets/images`.

## Contact

- Email: [en.amini.dev@gmail.com](mailto:en.amini.dev@gmail.com)
- GitHub: [github.com/amini21766](https://github.com/amini21766)
- LinkedIn: [linkedin.com/in/hamidamini](https://linkedin.com/in/hamidamini)

## License

This project is intended for personal portfolio use. Add a license file if you plan to distribute or reuse it publicly.
