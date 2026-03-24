# Deployment Guide

This document outlines different ways to deploy the Test Figma Front application.

## Quick Start

Ensure you have:
- Node.js 18+
- npm/yarn/pnpm/bun installed
- Built project: `npm run build`

## Deployment Options

### 1. Vercel (Recommended for Next.js)

**Advantages:**
- Optimized for Next.js
- Zero-config deployment
- Automatic preview deployments
- Custom domains support
- Serverless functions support

**Steps:**

1. Push your repository to GitHub (or GitLab/Bitbucket)
2. Visit [vercel.com](https://vercel.com/dashboard)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site is live at `<project-name>.vercel.app`

**Custom Domain:**
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

**Environment Variables:**
1. Project settings → Environment Variables
2. Add your `.env.local` variables here
3. Redeploy if necessary

---

### 2. Netlify

**Advantages:**
- Free tier with build minutes
- Easy setup
- Good performance
- Serverless functions support

**Steps:**

1. Push to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

**Netlify Redirect Configuration:**

Create `public/_redirects`:
```
/*  /index.html  200
```

Or use `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. Docker + Cloud Run (Google Cloud)

**Advantages:**
- Full control over environment
- Scalable
- Containerized deployment
- Pay per use

**Build and Push:**

```bash
# Build image
docker build -t gcr.io/PROJECT_ID/test-figma-front:latest .

# Push to Google Container Registry
docker push gcr.io/PROJECT_ID/test-figma-front:latest

# Deploy to Cloud Run
gcloud run deploy test-figma-front \
  --image gcr.io/PROJECT_ID/test-figma-front:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

---

### 4. Docker + Heroku

**Advantages:**
- Free tier available
- Easy one-click deployment
- Good for learning

**Steps:**

1. Create Heroku account at [heroku.com](https://heroku.com)
2. Install Heroku CLI
3. Login: `heroku login`
4. Create app: `heroku create your-app-name`
5. Set Node buildpack: `heroku buildpacks:set heroku/nodejs`
6. Push: `git push heroku main`
7. View: `heroku open`

**Procfile:**
```
web: npm start
```

---

### 5. AWS Amplify

**Advantages:**
- AWS integration
- CI/CD pipeline
- Strong security
- Scalable

**Steps:**

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select your Git provider
4. Select repository and branch
5. Accept default build settings (Amplify detects Next.js)
6. Click "Deploy"

**Environment Variables:**
- During deployment, add env vars in build settings

---

### 6. Docker Compose (Local Preview)

Perfect for testing before cloud deployment:

```bash
# Production build
docker-compose up

# Development with hot reload
docker-compose -f docker-compose.yml up dev
```

Access at `http://localhost:3000`

---

### 7. Traditional VPS (DigitalOcean, Linode, AWS EC2)

**Setup on Ubuntu/Debian:**

```bash
# SSH into your server
ssh user@your-server

# Install Node
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Clone repository
git clone https://github.com/yourusername/test-figma-front.git
cd test-figma-front

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "figma-front" -- start

# Save PM2 config
pm2 save
pm2 startup
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

### 8. GitHub Pages (Static Export)

**Note:** Requires static export configuration.

Modify `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

Then deploy `out` folder to GitHub Pages.

---

## Environment Variables

### Required Variables
None are strictly required, but common ones:

```env
# API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=GA-XXXX

# Stripe/Payments
NEXT_PUBLIC_STRIPE_KEY=pk_live_xxx
```

### Secrets (never in .env.local)
Store in deployment platform's secrets manager:
- Database credentials
- API keys
- Private tokens

---

## Monitoring & Logs

### Vercel
- Dashboard → Deployments → Logs
- Real-time function logs

### Docker / VPS
```bash
# PM2 logs
pm2 logs figma-front

# Systemd logs
journalctl -u figma-front -f
```

---

## Performance Optimization

1. **Enable compression** (Vercel does this automatically)
2. **Use CDN** for static assets (next/image optimization)
3. **Monitor Core Web Vitals** (Vercel Analytics)
4. **Enable caching headers** in next.config.ts
5. **Optimize images** (use next/image)

---

## Troubleshooting

### Build fails
- Check Node version: `node -v` (needs 18+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Check logs in deployment platform

### 404 on routes
- Use `next/link` for client navigation
- Ensure proper API routes structure
- Check `next.config.ts` basePath if using one

### Slow performance
- Check image optimization
- Enable static generation where possible
- Use `useMemo` and `useCallback` judiciously
- Profile with Chrome DevTools

---

## Continuous Deployment

Most platforms automatically deploy on git push to main:

```bash
git add .
git commit -m "Update"
git push origin main
```

Preview deployments available before merging PRs!

---

## Questions?

Check the main [README.md](./README.md) for more info.
