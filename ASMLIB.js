// ASSEMBLER DHTML LIBRARY b0.3
// (C)2000 Brent Gustafson - brent@assembler.org - www.assembler.org

// Globals
var ns4 = (document.layers) ? 1:0
var w3c = (document.getElementById) ? 1:0
var ie4 = (document.all) ? 1:0
var range = "";
var styleObj = "";

// Functions
function getObject(obj){var theObj=eval("document."+range+obj+styleObj);return theObj;}
function redrawScreen(){location.reload();return false}
function getLeft(obj){var theObj=getObject(obj);if(w3c){return parseInt(theObj.left);}else if(ns4){return theObj.left;}else if(ie4){return theObj.pixelLeft;}}
function getTop(obj){var theObj=getObject(obj);if(w3c){return parseInt(theObj.top);} else if(ns4){return theObj.top;}else if(ie4){return theObj.pixelTop;}}
function shiftTo(obj,x,y){if(w3c){obj.left=x+"px";obj.top=y+"px";}else if(ns4){obj.moveTo(x,y);}else if(ie4){obj.pixelLeft=x;obj.pixelTo=y;}}
function shiftBy(obj,deltaX,deltaY){var theObj=getObject(obj);if(w3c){obj.left=getLeft(obj)+deltaX+"px";obj.top=getTop(obj)+deltaY+"px";}else if(ns4){obj.moveBy(deltaX,deltaY);} else if(ie4){obj.pixelLeft+=deltaX;obj.pixelTop+=deltaY;}}
function showObject(obj){var theObj=getObject(obj);theObj.visibility="visible";}
function hideObject(obj){var theObj=getObject(obj);theObj.visibility = "hidden";}
function setZIndex(obj,z){var theObj=getObject(obj);theObj.zIndex=z;}
function setBGColor(obj,color){var theObj=getObject(obj);if(w3c||ie4){theObj.backgroundColor=color;}else if(ns4){theObj.bgColor=color;}}

// Initializations
if(ns4){window.captureEvents(Event.RESIZE);window.onresize = redrawScreen;}
if(ie4){range="all.";styleObj=".style";if(w3c)ie4=0;}
if(w3c){range="getElementById(\"";styleObj="\").style";}
