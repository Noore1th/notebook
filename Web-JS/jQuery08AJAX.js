$(document).ready(function(){
	$("button1").click(function(){
		$("#div1").load("../文本练习/2022-02-22.txt");
	});


  $("button1").click(function(){
    $("#div2").load("../文本练习/2022-02-22.txt #p1");//在文本里加了标签
  });


//是否加载成功的回调函数
$("button1").click(function(){
  $("#div3").load("../文本练习/2022-02-22.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
    alert("外部内容加载成功！");
    if(statusTxt=="error")
    alert("Error: "+ xhr.status + ": " + xhr.statusText)
  })
})


//参数写在HTML里
//没怎么看懂，但能运行成功
  $(".include").each(function() {
    if (!!$(this).attr("file")) {
        var $includeObj = $(this);
        $(this).load($(this).attr("file"), function(html) {
            $includeObj.after(html).remove(); //加载的文件内容写入到当前标签后面并移除当前标签
        })
    }
})

//使用 $.get() 方法从服务器上的一个文件中取回数据：
//服务器没搭建成功
$("button2").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});

//使用 $.post() 连同请求一起发送数据：
$("button3").click(function(){
  $.post("/try/ajax/demo_test_post.php",{
    name:"菜鸟教程",
    url:"http://www.runoob.com"
  },
  function(data,status){
    alert("数据: \n" + data + "\n状态: " + status);
  });
});




});