@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\bin\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\bin\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules;E:\Web Development\React Lectures\Lecture_1\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\bin\eslint.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\.pnpm\eslint@9.21.0_jiti@2.4.2\node_modules\eslint\bin\eslint.js" %*
)
