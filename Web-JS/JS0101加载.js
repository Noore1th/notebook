
document.write("<hr><hr>");
document.write("<p>双线内是通过<mark>JS</mark>加载的内容</p>");
//alert("我的第一个 JavaScript");
//alert(5+6);


document.write("日期测试："+Date()+"<br>");


//几乎所有元素都可以直接写入

document.write("<span>度量测试：</span><meter id='storage' value='2' min='0' max='10'>2 out of 10</meter><br>");
document.write("注释测试：The<abbr title='World Health Organization'>WHO</abbr> was founded in 1948.<br>");
document.write("<code>代码标签测试 print('Hello World')</code><br>");
document.write("<i>斜体文本标签测试</i>");
/* document.write("<ol><li>我是写在JS里的列表</li> <li>我是写在JS里的列表</li><ol>"); */
/* 直接在载入列表，会把后面的代码都变成列表的子项目 */

document.getElementById("textP2").innerHTML = "载入修改成功";
/* 这是一个调用了id的函数，放在加载前执行无效，放在后面则可以载入。 */
document.write("<hr><hr>");


/* write方法没有调用元素，所有直接修改整个HTML */
function clearall()
{
    document.write("<h1>O(∩_∩)O哈哈~，整个都被我重写了</h1><h1>一直不成功，原来是clear这个关键词已经被占用了，改成clearall就OK啦</h1>");
}