var div1 = document.createElement('div');
document.body.appendChild(div1);
div1.id = "demo1";
div1.innerHTML="MOUSE OVER";

var div2 = document.createElement('div');
document.body.appendChild(div2);
div2.id = "demo2";
div2.innerHTML="CAT OVER";

var btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerHTML="click Here";
btn.id='change';

function changeover(){
    var c = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = document.getElementById("demo2").innerHTML
    document.getElementById("demo2").innerHTML = c

}

btn.addEventListener("click",changeover);