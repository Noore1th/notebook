$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append("<b>追加文本</b>")
        $("p").prepend("<b>开头追加文本</b>")
    })
    $("#btn2").click(function(){
        $("ol").append("<li>追加列表项</li>")
        $("ol").prepend("<li>开头追加列表项</li>")
    })
    $("#btn3").click(appendText)   //这个和添加监听一样，不过把方法后加上()会直接执行
    $("#btn4").click(afterText)
   
    function appendText(){
        var txt1="<p>文本-1。</p>";              // 使用 HTML 标签创建文本
        var txt2=$("<p></p>").text("文本-2。");  // 使用 jQuery 创建文本
        var txt3=document.createElement("p");
        txt3.innerHTML="文本-3。";               // 使用 DOM 创建文本 text with DOM
        $("body").append(txt1,txt2,txt3);        // 追加新元素
    }

//作用在元素外部，多次执行表现为插队

    $("img").after("在后面添加文本");
 
    $("img").before("在前面添加文本");

    function afterText(){
        var txt1="<b>I </b>";                    // 使用 HTML 创建元素
        var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
        var txt3=document.createElement("big");  // 使用 DOM 创建元素(	定义大号文本，HTML5不支持)
        txt3.innerHTML="jQuery!";
        $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
    }



    //删除与清空
    $("#btn5").click(function(){
        $("li").empty();
        /* $("img").empty(); 图片不存在清空*/
        $("img").remove();
    })

    //修改样式
    $("#btn6").click(function(){
        $("h2,p").addClass("blue");
        $("div").addClass("important");
        $("body header:first").addClass("important blue");//添加多个类
      });


    $("#btn7").click(function(){
        $("h2,p").removeClass("blue");
      });

    $("#btn8").click(function(){
        $("h2,p").toggleClass("blue");
      });


    //访问CSS
    $("#btn9").click(function(){
        alert("背景颜色 = " + $("p").css("background-color"));
      });

    $("#btn10").click(function(){
        $("p").css("background-color","yellow");
      });

    $("#btn11").click(function(){
        $("li").css({"background-color":"yellow","font-size":"200%"});
      });


    //访问元素尺寸
    $("#btn12").click(function(){
        var txt="";
        txt+="div 的宽度是: " + $("#div1").width() + "</br>";//+=和=不同，前者可以把两次赋值串起来
        txt+="div 的高度是: " + $("#div1").height();
        $("#div1").html(txt);//类似innerTHML？
      });

    //访问包括内边距的长宽
    $("#btn13").click(function(){
        var txt="";
        txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
        txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
        $("#div1").html(txt);
      });


    


    


})





