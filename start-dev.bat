@echo off
echo Starting Student Record System...
echo.

echo Installing Backend Dependencies...
cd backend
call npm install
echo.

echo Installing Frontend Dependencies...
cd ..\frontend
call npm install --legacy-peer-deps
echo.

echo Starting Backend Server...
cd ..\backend
start "Backend Server" cmd /k "npm run dev"

echo Waiting for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
cd ..\frontend
start "Frontend Server" cmd /k "npm start"

echo.
echo ✅ Both servers are starting!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:4200
echo.
pause