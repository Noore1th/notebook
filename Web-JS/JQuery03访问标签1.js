document.getElementById("btn5").addEventListener("click",myFunction3);


//JS可以访问的内容很广，但目前没有吧HTML作为不解译的符号标签来访问的属性，jQuery源码没查
function myFunction3(){
    var p1;
    p1 = document.getElementById("testType");
    a=p1.textContent;
    b=p1.innerHTML;
    c=p1.baseURI;
    document.getElementById("testType").innerHTML = ("test的文本内容是：" + a + "<br>" + 
     "HTML内容是：" + b + "<br>" +
     "URL内容是：" + c );
}

document.getElementById("btn6").addEventListener("click",myFunction4);
function myFunction4(){
    var inp1;
    inp1 = document.getElementById("input1");
    a1 = document.getElementById("benben");
    document.getElementById("testValue").innerHTML=("Value是：" + inp1.value + "<br>" +
    "网页链接是：" + a1.href);

}

document.getElementById("btn7").addEventListener("click",myFunction5);
function myFunction5(){
    document.getElementById("test11").innerHTML = "Hello JS!";
    document.getElementById("test22").innerHTML = "<b>Hello JS!</b>";
    document.getElementById("test33").value = "Hello JS!";
}




//测试了十分钟才看出来，JS是不需要用#来访问id的
function myFunction1(){
    document.getElementById("test2").innerHTML = "JS修改成功"
}
function myFunction2(){
    x = document.getElementById("test2");
    x.style.color="yellow";
}

