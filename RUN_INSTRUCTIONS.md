# How to Run the Student Record System

## Quick Start (Automated)
Double-click `start-dev.bat` to start both servers automatically.

## Manual Start (Step by Step)

### 1. Start Backend Server
```bash
cd backend
npm install
npm run dev
```
Backend will run on: http://localhost:5000

### 2. Start Frontend Server (New Terminal)
```bash
cd frontend
npm install --legacy-peer-deps
npm start
```
Frontend will run on: http://localhost:4200

## Verification
- Backend API: http://localhost:5000/api/students
- Frontend App: http://localhost:4200

## Troubleshooting
- Ensure MongoDB connection is working (check .env file)
- If frontend fails, try: `npm install --legacy-peer-deps --force`
- Check if ports 5000 and 4200 are available