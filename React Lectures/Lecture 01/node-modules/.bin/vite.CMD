@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\bin\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\bin\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\bin\vite.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\.pnpm\vite@6.2.1_jiti@2.4.2_lightningcss@1.29.2\node_modules\vite\bin\vite.js" %*
)
