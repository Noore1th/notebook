document.write("<p>执行顺序测试：放在JS开始（成功）</p>");
//找到并修改元素样式和文本内容（暂时只能分开写）
function displayDate(){
    document.getElementById("textP").innerHTML=Date();
}

function changeColorBtn()
{
    x=document.getElementById("textP") // 找到元素
    x.style.color="#ff0000";// 改变样式
    x.style.fontWeight="bolder";
    x.style.textDecoration= 'line-through';
}

function changeSelfColor(s){
    s.style.color="green";//直接传入自身作为参数
}

document.write("<p>执行顺序测试：放在JS中间（成功）</p>");

function welcome(){
    x=document.getElementById("textP").innerHTML="欢迎光临，新手村！";
    s.style.color="yellow"; /* 执行失败，写入后再修改样式不是这样写的? */
   
}
function welcome2(){
    document.getElementById("textP").innerHTML = "目前只会单次事件，所以只能点另一个按钮，修改成别的内容。"  
}

function changeMeter(s){
    s.value="0.8";
}

/*
function changeImage()
{       
    element=document.getElementById('myimage')         
    if (element.src.match("bulbon"))
    {               
        element.src="../图标样式//pic_bulbon.gif";    
    }           
    else
    {
        element.src="../图标样式//pic_bulbon.gif";
    }           
}
*/
function changeImage(s){
    s.src = s.src.match('bulboff')?"../素材/图标样式/pic_bulbon.gif":"../素材/图标样式/pic_bulboff.gif"//直接传入参数+三目运算
}


document.write("<p>执行顺序测试：放在JS末尾（成功）</p>");
