var div = document.createElement('div');
document.body.appendChild(div);
div.id = "demo";
div.innerHTML="MOUSE OVER";

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.color = "black";
  }


