canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
var color=["black","red","green","yellow","blue"]
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.rect(150,143,430,200);
    ctx.stroke(); 


canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("x="+mouseX+",y="+mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
    ctx.stroke();
}
