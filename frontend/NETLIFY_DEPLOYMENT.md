# Netlify Deployment Guide

## Prerequisites
- Git repository with your code
- Netlify account (free at netlify.com)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose your Git provider and repository
   - Select the `frontend` folder as the base directory

3. **Configure Build Settings**
   - Base directory: `frontend`
   - Build command: `npm run build:prod`
   - Publish directory: `dist/frontend`
   - Node version: `18`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your app

### Option 2: Manual Deploy

1. **Build the project locally**
   ```bash
   cd frontend
   npm install
   npm run build:prod
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/frontend` folder to the deploy area

## Configuration Files Created

- `netlify.toml` - Netlify configuration
- `public/_redirects` - Angular routing support
- Environment files for API configuration

## Environment Variables

Your app is configured to use:
- **Development**: `http://localhost:5000/api`
- **Production**: `https://student-record-system-bvb7.onrender.com/api`

## Troubleshooting

### Common Issues:

1. **404 errors on refresh**
   - Fixed by `_redirects` file and `netlify.toml`

2. **API connection issues**
   - Ensure your backend is deployed and accessible
   - Check CORS settings on your backend

3. **Build failures**
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are in package.json

### Build Commands Reference:
- `npm run build:prod` - Production build
- `npm run start` - Development server
- `npm test` - Run tests

## Post-Deployment

1. Test all functionality on the deployed site
2. Update your backend CORS settings to include your Netlify domain
3. Consider setting up custom domain if needed

Your app should now be live on Netlify with automatic deployments on every push!