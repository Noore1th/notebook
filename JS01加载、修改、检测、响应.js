//alert("我的第一个 JavaScript");
//alert(5+6);
document.write("<h1>JS 能够直接写入 HTML 输出流中</h1>");
document.write("<li>不能写入图片？<li>");
document.write(Date());
document.getElementById("text2").innerHTML = "这样不行吗？"

function clearall()
{
    document.write("<h1>O(∩_∩)O哈哈~，整个都被我重写了</h1><h1>一直不成功，原来是clear这个关键词已经被占用了，改成clearall就OK啦</h1>");
}



function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

function changeColor(s)
{
    /*
    x=document.getElementById("demo") // 找到元素
    x.style.color="#ff0000";          // 改变样式
    */
    s.style.color="#ff0000";//直接传入参数
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
    s.src = s.src.match('bulboff')?"../图标样式//pic_bulbon.gif":"../图标样式//pic_bulboff.gif"//直接传入参数+三目运算
}



function checkNumber()
{
    var x=document.getElementById("number").value;
    if(x==""||isNaN(x))
    {
        alert("不是数字");
    }
}

function changeText()
{
    
    //x=document.getElementById("text");  // 找到元素
    //x.innerHTML="使用x.innerHTML方法改变内容"; //改变内容

    document.getElementById("text").innerHTML = "改呀改呀改改改，文字都被改掉了"
}
    
