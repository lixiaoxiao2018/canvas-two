var div = document.getElementById('canvas')
var painting=false;

//鼠标点击
 div.onmousedown = function(a){
    painting=true
    var x=a.clientX
    var y=a.clientY
    var divA= document.createElement('div')
    divA.style= "width:6px; height:6px;"+
                "background: black; border-radius:3px;"+
                "position:absolute; left: "+x+"px; top: "+y+"px;"
    div.appendChild(divA)
 }


//鼠标移动
  div.onmousemove = function(a){
     if(painting){
         var x=a.clientX
         var y=a.clientY
         var divA= document.createElement('div')
         divA.style= "width:6px; height:6px;"+
                  "background: black; border-radius:3px;"+
                "position:absolute; left: "+x+"px; top: "+y+"px;"
        div.appendChild(divA)
     } else{
       
     }

  }

//鼠标松开
  div.onmouseup = function(z){
    painting=false
  }