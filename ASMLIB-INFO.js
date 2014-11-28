/***********************************************************************
*  ASSEMBLER DHTML LIBRARY b0.3 - INFO
*
*  Purpose:  A simple cross-browser DHTML library for use with any site
*            that needs DHTML support.  This file is for reference
*            purposes only.  Use ASMLIB.js for Javascript includes.
*
*  Author:   Brent Gustafson - brent@assembler.org - www.assembler.org
*  Created:  August 21, 2000
*
*  Modified: Brent Gustafson, September 7, 2000
*            Added shiftBy, getLeft, getTop, and setBGColor
*
*  Contents: getObject, redrawScreen, getLeft, getTop, shiftTo, shiftBy,
*            hideObject, showObject, setZIndex, setBGColor
***********************************************************************/


/***********************************************************************
*  GLOBALS
***********************************************************************/

var ns4 = (document.layers) ? 1:0            // Netscape 4.
var w3c = (document.getElementById) ? 1:0    // W3C compatible browser.
var ie4 = (document.all) ? 1:0               // Internet Explorer 4.
var range = "";                              // Object range reference.
var styleObj = "";                           // Object style reference.


/***********************************************************************
*  FUNCTIONS
***********************************************************************/

function getObject(obj)
/**************************************
*  Function getObject
*
*  Purpose: Used to convert an object string name into a valid object 
*           reference.
*
*  In:      obj - Object string name.
*  Out:     theObj - Valid object reference.
***************************************/
{
  var theObj = eval("document." + range + obj + styleObj); 
  return theObj;
}

function redrawScreen()
/**************************************
*  Function redrawScreen
*
*  Purpose: For Netscape 4 only.  Used to refresh the browser window
*           when resized to avoid Netscape CSS loss of info.
*
*  In:      None.
*  Out:     None.
***************************************/
{
  location.reload();
  return false
}

function getLeft(obj)
/**************************************
*  Function getLeft
*
*  Purpose: Retrieves the X coordinate of an object.
*
*  In:      obj - Object string name.
*  Out:     The X coordinate of the object.
***************************************/
{
  var theObj = getObject(obj);
  if (w3c) {
    return parseInt(theObj.left);
  } 
  else if (ns4) {
    return theObj.left;
  }
  else if (ie4) {
    return theObj.pixelLeft;
  }
}

function getTop(obj)
/**************************************
*  Function getTop
*
*  Purpose: Retrieves the Y coordinate of an object.
*
*  In:      obj - Object string name.
*  Out:     The Y coordinate of the object.
***************************************/
{
  var theObj = getObject(obj);
  if (w3c) {
    return parseInt(theObj.top);
  } 
  else if (ns4) {
    return theObj.top;
  }
  else if (ie4) {
    return theObj.pixelTop;
  }
}

function shiftTo(obj, x, y)
/**************************************
*  Function shiftTo
*
*  Purpose: Used to position an object to a specific X,Y coordinate.
*
*  In:      obj - Object string name.
*           x - X position.
*           y - Y position.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj);
  if (w3c) {
    obj.left = x + "px";
    obj.top = y + "px";
  }
  else if (ns4) {
	 obj.moveTo(x,y);
  } 
  else if (ie4) {
    obj.pixelLeft = x;
	 obj.pixelTop = y;
  }
}

function shiftBy(obj, deltaX, deltaY)
/**************************************
*  Function shiftBy
*
*  Purpose: Used to move an object by X and/or Y pixels.
*
*  In:      obj - Object string name.
*           deltaX - X offset.
*           deltaY - Y offset.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj);
  if (w3c) {
    obj.left = getLeft(obj) + deltaX + "px";
    obj.top = getTop(obj) + deltaY + "px";
  }
  else if (ns4) {
	 obj.moveBy(deltaX,deltaY);
  } 
  else if (ie4) {
    obj.pixelLeft += deltaX;
	 obj.pixelTop += deltaY;
  }
}

function showObject(obj)
/**************************************
*  Function showObject
*
*  Purpose: Sets the visibility of an object to "visible".
*
*  In:      obj - Object string name.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj);
  theObj.visibility = "visible";
}

function hideObject(obj)
/**************************************
*  Function hideObject
*
*  Purpose: Sets the visibility of an object to "hidden".
*
*  In:      obj - Object string name.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj);
  theObj.visibility = "hidden";
}

function setZIndex(obj, z) 
/**************************************
*  Function setZIndex
*
*  Purpose: Sets the z-index of an object.
*
*  In:      obj - Object string name.
*           z - Z-index.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj);
  theObj.zIndex = z;
}

function setBGColor(obj, color)
/**************************************
*  Function setBGColor
*
*  Purpose: Sets the background color of an object.
*
*  In:      obj - Object string name.
*           color - Hex color value.
*  Out:     None.
***************************************/
{
  var theObj = getObject(obj)
  if (w3c || ie4) {
    theObj.backgroundColor = color;
  }
  else if (ns4) {
    theObj.bgColor = color;
  }
}


/***********************************************************************
*  INITIALIZATIONS
***********************************************************************/

if (ns4) {
   window.captureEvents(Event.RESIZE);     // Capture resize event.
	window.onresize = redrawScreen;         // Redraw screen on resize.
}

if (ie4) {
  range = "all.";
  styleObj = ".style";
  if (w3c) ie4 = 0;                        // If W3C compliant as well,
}                                          // use that instead.

if (w3c) {
  range = "getElementById(\"";
  styleObj = "\").style";
}


/***********************************************************************
*  END OF LINE
***********************************************************************/