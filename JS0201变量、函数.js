//重申变量，值不会丢失
var carname = "Volvo";
var carname;
document.addEventListener("click",myFunction)
function myFunction(){
    document.getElementById("textP").innerHTML = carname; 
}



//数组
var i;
var cars = new Array();
cars = ["Saab","Volvo","BMW"];
for(i=0;i<cars.length;i++)
{
    document.write(cars[i] + "<br>");    
}
document.write("<hr>");


//对象
var person={firstname:"John", lastname:"Doe", id:5566};
document.write(person.lastname + "<br>");
document.write(person["lastname"] + "<br>");
document.write("<hr>");

//把函数作为变量
var person={firstname:"John", lastname:"Doe", id:5566, fullName: function(){return this.firstname + " " + this.lastname}};
document.write(person.fullName() + "<br>")
document.write("<hr>");


//调用带参数的函数
addEventListener("click",function(){
    myFunction01('Harry Potter','Wizard');
}) 
function myFunction01(name,job){
    x = document.getElementById("textP2").innerHTML = ("Welcome " + name + ", the " + job);
}

//使用return语句时函数会停止，函数调用被返回值取代
function myFunction02(a,b){
    return a*b;
}
document.getElementById("textP3").innerHTML = myFunction02(999,999);
document.write(myFunction02(999,999));
document.write("<hr>");


function myFunction03(a,b){
    if(a>b){
        return;
    }
    return x = a+b;
}
document.getElementById("textP4").innerHTML = myFunction03(5,30);
document.write(myFunction03(5,30));
document.write("<hr>");



//var申明的变量是无法删除的
var var1 = 1;
var2 = 2;
document.write(var1 + "<br>");
document.write(var2 + "<br>");
document.write(this.var1 + "<br>");
document.write(this.var2 + "<br>");
document.write(window.var1 + "<br>");
document.write(window.var2 + "<br>");
delete var1;
delete var2;
document.write("<hr>");
document.write(var1 + "<br>");
/* document.write(var2 + "<br>"); */
document.write(this.var1 + "<br>");
document.write(this.var2 + "<br>");
document.write(window.var1 + "<br>");
document.write(window.var2 + "<br>");
document.write("<hr>");


//全选框实践
var checkAll = false;
function allcheck(){
    checkAll = !checkAll;//每次点击都会触发变量变成其相反的值
    let inputs = document.getElementsByName('checkbox')//得到一个类数组
    for(var i =0;i<inputs.length;i++){inputs[i].checked = checkAll}//循环checked属性赋值为false
}
