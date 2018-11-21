var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var pageWidth = document.documentElement.clientWidth    //获取页面宽高
var pageHeight = document.documentElement.clientHeight  
    canvas.width = pageWidth          //获取页面宽高    
    canvas.height = pageHeight
window.onresize = function(){                           //获取窗口宽高
  var pageWidth = document.documentElement.clientWidth    
  var pageHeight = document.documentElement.clientHeight  
  canvas.width = pageWidth            
  canvas.height = pageHeight
}
// 以画圆和连线方式在画板划线
var painting=false
var lastPoint={x:undefined,y:undefined}
canvas.onmousedown = function(aa){
     painting=true
     var x=aa.clientX
     var y=aa.clientY
     lastPoint={"x":x,"y":y}
  /*   drawCircle(x,y,1)   */  //形式圈 
}
canvas.onmousemove = function(aa){
  if(painting){    
     var x=aa.clientX
     var y=aa.clientY
     var newPoint = {"x":x,"y":y}
  /* drawCircle(x,y,1) */   //形式圈 
     drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
     lastPoint = newPoint

  }else{
    
  }
}
canvas.onmouseup = function(aa){
     painting=false
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle='orange'
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()
 }
function drawLine(x1, y1, x2 ,y2){
    context.beginPath()
    context.strokeStyle = 'red'
    context.lineWidth =5
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}