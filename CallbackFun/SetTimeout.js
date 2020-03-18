//let j=0;
for(let j =0,i=10;i>=0;i--){
    
    setTimeout(function () {
        var newData = i;
        if(newData>0){
            document.getElementById("aji").innerHTML=newData;
        }else{
            document.getElementById("aji").innerHTML=" ";
            document.getElementById("aji1").innerHTML="Happy New Year";
        }
    },j=j+1000);
}

/*
function execute(val1, val2, cb) {
    setTimeout(function () {
        var result = val1 + val2;
        cb(result)
    }, 5000)
}

execute(5, 5, function (data) {
    setTimeout(function () {
        var newData = parseInt(data) + 500;
        console.log(newData)
    }, 5000)
});
*/