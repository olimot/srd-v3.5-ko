@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\workbench.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\workbench.js" %*
)