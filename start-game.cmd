@echo off
cd /d "%~dp0"
echo City Tycoon 3D - http://127.0.0.1:5173
if not exist "node_modules\vite\bin\vite.js" (
  echo Installing project dependencies...
  call npm.cmd ci --cache "%TEMP%\city-tycoon-npm-cache" --no-audit --no-fund
  if errorlevel 1 goto :dependency_failed
  if not exist "node_modules\vite\bin\vite.js" goto :dependency_failed
)
call npm.cmd run dev -- --port 5173
pause
exit /b %errorlevel%

:dependency_failed
echo Dependency installation failed. Please check your npm cache permissions and network settings.
pause
exit /b 1
