$(document).ready(function(){
 
    // 开始写 jQuery 代码...  
});
   
$(function(){

// 开始写 jQuery 代码...


    $("#bt").dblclick(function(){
        $(this).css("box-shadow"," 0 0 8px 2px #248f8f,0 0 8px 4px #2eb8b8, 0 0 8px 6px #47d1d1, 0 0 8px 8px #70dbdb");        
    });//参考CSS阴影规则

    $("#bt").mouseenter(function(){
        $(this).css("border","5px double #70dbdb")
    })

    $("#bt").mouseleave(function(){
        $(this.placeholder="别走呀，输入密码谢谢");//参考表单属性     
    });

    $("#bt").mousedown(function(){
        $(this.placeholder="密码最多66位数")//如果与focus事件占用同一个元素，则优先执行focus的事件，第二次点击再执行mousedown
    })

    $("#bt").mouseup(function(){
        $(this).css("background-color","#47d1d1")
    })

    $("#bt").focus(function(){
        $(this).css("background-color","#cccccc");
    });

    $("input").blur(function(){
        $(this).css("background-color","#ffffff");
    });


});
   
   