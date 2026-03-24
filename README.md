# Test Figma Front

A modern front-end web application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** - React framework with server-side rendering
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe JavaScript
- 🔍 **ESLint** - Code quality and style checking
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Ready for Deployment** - Optimized build configuration

## Getting Started

### Prerequisites

- Node.js 18+ (with npm, yarn, pnpm, or bun)

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Create environment file (optional):
```bash
cp .env.example .env.local
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The page auto-updates as you edit files.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── components/         # Reusable components (add as needed)

public/                 # Static files
```

## Building for Production

### Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Start production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Preview Deployment

### Option 1: Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live with a preview URL

### Option 2: Netlify

1. Build the project: `npm run build`
2. Connect your repository to [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Option 3: Docker (Local Preview)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t test-figma-front .
docker run -p 3000:3000 test-figma-front
```

## Linting

Check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **UI Library**: [React](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Linting**: [ESLint](https://eslint.org)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.