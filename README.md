# HealthDesk Frontend

A modern, responsive frontend for HealthDesk built with Next.js, React, and TypeScript. This application serves as the user interface for the HealthDesk platform, providing a seamless and intuitive experience for users to browse and interact with health-related products and services.

## Features

- Modern, responsive user interface
- Fast page loads with Next.js static generation
- Type-safe development with TypeScript
- Utility-first CSS with Tailwind CSS
- Component-based architecture
- Optimized for performance and accessibility

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/msabhimanue02/Health-Desk.git
   cd Health-Desk
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
Health-Desk/
├── app/                 # Next.js App Router pages and layouts
│   ├── components/      # Reusable React components
│   ├── globals.css      # Global styles
│   └── ...
├── public/              # Static assets (images, fonts, etc.)
├── .gitignore
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework for styling

## Deployment

This frontend application can be deployed to any platform that supports Node.js applications. For the best experience, we recommend using Vercel, the creators of Next.js.

1. **Vercel**
   - Sign up for a Vercel account
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js app and set up the build settings

2. **Other Platforms**
   - Build the application: `npm run build`
   - The output will be in the `.next` directory
   - Deploy the contents of this directory to your hosting provider

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Documentation

For more information about the technologies used in this project, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
