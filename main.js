var mouseevent="";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
   mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
   mouseevent="mouseup";
}


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
   mouseevent="mousedown";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
   current_x=e.clientX-canvas.offsetLeft;
   current_y=e.clientY-canvas.offsetTop;
   if (mouseevent=="mousedown") {
     ctx.beginPath();
     ctx.strokeStyle="purple";
     ctx.lineWidth=2;
     ctx.moveTo(last_x,last_y);
     ctx.lineTo(current_x,current_y);
     ctx.stroke();
   } 
   last_x=current_x;
   last_y=current_y;
}



var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if (width<992) {
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.stye.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
  last_x=e.touches[0].clientX-canvas.offsetLeft;
  last_y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
   current_x=e.touches[0].clientX-canvas.offsetLeft;
   current_y=e.touches[0].clientY-canvas.offsetTop;
  
     ctx.beginPath();
     ctx.strokeStyle="purple";
     ctx.lineWidth=2;
     ctx.moveTo(last_x,last_y);
     ctx.lineTo(current_x,current_y);
     ctx.stroke();
   last_x=current_x;
   last_y=current_y;
}
