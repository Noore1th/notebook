

a = 5;
b = 6;
c = a + b;
console.log(c);//控制台调试语法,可以不用先创建好元素，直接调试变量

/* 可以写入各种数据类型 */
/* 文本 数字 数组 字典 算式 串联 */
document.getElementById("number").innerHTML = "123";
document.getElementById("text").innerHTML = "John Doe";
document.getElementById("calculate").innerHTML = (6+89)/2;

var x,personA,count,odd1
x = [40, 100, 1, 5, 25, 10]
personA = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
count=multiplication(5,6)
odd1=16 + "hello"

document.getElementById("x2").innerHTML=x[0];//40
document.getElementById("ageA").innerHTML=personA["age"]//50;
document.getElementById("countResult").innerHTML=count;///30
document.getElementById("odd1").innerHTML=odd1//16hello

//带参数的函数
function multi(aa,bb)
{
    document.getElementById("mult1").innerHTML= aa+bb;
    return aa*bb;   
}




//测试是否为数组
var arr = [40, 100, 1, 5, 25, 10]
var ok = blur
ok = typeof(arr) === 'object' // true

if (Array.isArray) {
    if(Array.isArray(arr)) {
        document.write("该对象是一个数组。");
    }
}

if (arr instanceof Array) {
    document.write("<p>该对象是一个数组。</p>") ;
}


//
document.write("你好\
 编程");
