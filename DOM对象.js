
//DOM对象式访问，用click取代onclick
document.addEventListener("click",function(){
    document.getElementById("textP").innerHTML = "Hello DOM";
})
/* 
document.addEventListener("click",function(){
    document.getElementsByClassName("").innerHTML = "Hello DOM";
}) */

/* document.getElementById("textP2").addEventListener("click",function(){
    document.getElementById("textP2").innerHTML = "Hello DOM2";
}) */


document.addEventListener("click",myfunction);
function myfunction(){
    document.getElementById("textP2").innerHTML = "DOM嵌套函数测试OK"
}

//DOM添加多个事件并不会覆盖
document.addEventListener("click",myFunction01);
document.addEventListener("click",myFunction02);
function myFunction01(){
    alert("Hello DOM!")
}
function myFunction02(){
    alert("again, Hello DOM!! 事件并不会覆盖")
}

document.addEventListener("mouseover", myFunction03);
document.addEventListener("click",myFunction04);
document.addEventListener("mouseout",myFunction05);
function myFunction03(){
    document.getElementById("textP3").innerHTML += "Moused over!<br>"
}
function myFunction04(){
    document.getElementById("textP3").innerHTML += "Clicked!<br>"
}
function myFunction05(){
    document.getElementById("textP3").innerHTML += "Moused out!<br>"
}

//传参数时，调用函数需要用一个“匿名函数”嵌套一下，也就是不能简写
var p1 = 5;
var p2 = 7;
document.addEventListener("click",function(){
    myFunction06(p1,p2);
})
function myFunction06(a, b){
    var result = a * b;
    document.getElementById("textP4").innerHTML = result;
}


//移除事件
document.addEventListener("click",function(){
    document.body.style.backgroundColor = "green";
})

document.addEventListener("mousemove",myFunction07);
function myFunction07() {
    document.getElementById("textP5").innerHTML = Math.random();
}
function removeHandler(){
    document.removeEventListener("mousemove",myFunction07)
}


