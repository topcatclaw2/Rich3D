@echo off
cd /d "%~dp0"
echo City Tycoon 3D - http://127.0.0.1:5173
if not exist node_modules call npm.cmd install
call npm.cmd run dev -- --port 5173
pause
