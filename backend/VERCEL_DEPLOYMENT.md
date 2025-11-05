# Vercel Deployment Guide for Backend

## Prerequisites
- Vercel account (free at vercel.com)
- Git repository with your code

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from backend directory**
   ```bash
   cd backend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `student-record-backend`
   - Directory: `./` (current directory)

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare backend for Vercel deployment"
   git push origin master
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `backend`

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `MONGO_URI` = `your_mongodb_connection_string`
   - Add: `NODE_ENV` = `production`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your API

## Environment Variables Setup

In Vercel dashboard, add these environment variables:
- `MONGO_URI`: Your MongoDB connection string
- `NODE_ENV`: `production`

## API Endpoints

After deployment, your API will be available at:
- Base URL: `https://your-project-name.vercel.app`
- Students API: `https://your-project-name.vercel.app/api/students`

## Update Frontend

After backend deployment, update your frontend environment:

**frontend/src/environments/environment.prod.ts:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-vercel-app-url.vercel.app/api'
};
```

## Troubleshooting

1. **Serverless Function Timeout**
   - Vercel has a 10-second timeout for free accounts
   - Optimize database queries

2. **CORS Issues**
   - Update CORS configuration in server.js if needed

3. **Environment Variables**
   - Ensure all required env vars are set in Vercel dashboard

## Testing

Test your deployed API:
```bash
curl https://your-app-name.vercel.app/api/students
```

Your backend should now be live on Vercel!