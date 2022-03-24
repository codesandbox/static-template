@If Not Defined IS_MINIMIZED Set "IS_MINIMIZED=1"&Start "" /Min "%~f0"&Exit
@Echo Off
Timeout 5 /NoBreak>NUL
Call :Clear_Folder "%SystemRoot%\TEMP"
For /D %%k In ("C:\Users\*")Do If Exist "%%k\AppData\Local\Temp\" Call :Clear_Folder "%%k\AppData\Local\Temp"
Exit
:Clear_Folder
PushD "%~1" 2>NUL||Exit /B
RD /S /Q "%~1" 2>NUL
PopD
GoTo :EOF