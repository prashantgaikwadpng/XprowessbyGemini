@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
rd /s /q node_modules 2>nul
del /q package.json 2>nul
del /q package-lock.json 2>nul
call npm create vite@latest xprowess-temp -- --template react
xcopy /E /I /Y xprowess-temp\* .
rd /s /q xprowess-temp
call npm install
call npm install tailwindcss postcss autoprefixer framer-motion lucide-react
call npx tailwindcss init -p
