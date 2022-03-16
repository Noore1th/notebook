
//使用转义字符
var x = 'It\'s alright' + "<br>";
var y = "He is called \"Johnny\""+ "<br>";

document.write(x);
document.write(y);

//length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.write("txt的字符长度为："+sln+ "<br>")


//string 
var x = "John";// 返回 String
var y = new String("John");// 返回 Object
document.write("x的类型是："+ typeof x + "<br>");
document.write("x的类型是："+ typeof y + "<br>");
ok = x===y;//=== 为绝对相等，即数据类型与值都必须相等。
document.write("x y是否相等：" + ok) ;
document.write("<hr>");

//循环语句
var d = new Date();
var time = d.getHours();
if (time<10)
{
	document.write("<b>早上好</b>");
}
else if (time>=10 && time<20)
{
	document.write("<b>今天好</b>");
}
else
{
	document.write("<b>晚上好!</b>");
}


function myFunction04(){
	var myWeek;
	var d1=new Date().getDay();
	switch (d1){
  		case 0:myWeek="今天是星期日";
    	break;
 		case 1:myWeek="今天是星期一";
        break;
  		case 2:myWeek="今天是星期二";
        break;
        case 3:myWeek="今天是星期三";
   	 	break;
  		case 4:myWeek="今天是星期四";
    	break;
  		case 5:myWeek="今天是星期五";
        break;
  		case 6:myWeek="今天是星期六";
    	break;
 	}
     document.getElementById("myWeek1").innerHTML= myWeek;
}
document.addEventListener("click",myFunction04);//如果在函数名后加上()，则无需点击，自动执行。

var d=new Date().getDay();
switch (d)
{
    case 6:omyWeek="今天是星期六";
    break;
    case 0:omyWeek="今天是星期日";
    break;
    default:
        omyWeek="期待周末";
}
document.write(omyWeek);