ASMLIB
==

Cross browser Javascript library for v4.0 browsers.<br>
*v0.3b - Aug 2000*


About
--

ASMLIB was written in 2000 for the website http://assembler.org.  This library includes very simple animation functions that work across all v4.0-style browsers of that time period (Netscape 4, IE 4, Mozilla).  ASMLIB was the first cross browser animation library to support all of these browsers simultaneously.

It is being offered as a historical reference should someone need to build animations with Javascript in these browsers.

Usage
--

All code is fully documented.  Below are the functions offered in ASMLIB:

**getObject(obj)**<br>
Convert an object string name into a valid object reference usable by ASMLIB

**redrawScreeen()**<br>
For Netscape 4 only.  Refreshes the browser window when resized to avoid Netscape CSS loss of info.

**getLeft(obj)**<br>
Returns the X coordinate of an object.

**getTop(obj)**<br>
Returns the Y coordinate of an object.

**shiftTo(obj, x, y)**<br>
Positions an object to a specific X,Y coordinate.

**shiftBy(obj, deltaX, deltaY)**<br>
Moves an object by X and/or Y pixels.

**showObject(obj)**<br>
Sets the visibility of an object to "visible".

**hideObject(obj)**<br>
Sets the visibility of an object to "hidden".

**setZIndex(obj, z)**<br>
Sets the z-index of an object.

**setBGColor(obj, color)**<br>
Sets the background color of an object.
