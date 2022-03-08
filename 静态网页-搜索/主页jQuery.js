
//jQuery

/*show方法不可用于visibility=hidden的显示，所以对于需要设置display属性的元素，必须要再嵌套一层盒子，用于设置display=none
*/


/*尝试用动画实现，依然不支持
$(function(){

    $("#more").mouseenter(function(){
        $("#moreContent").animate({
            visibility: "visible",
        });
    })
})
*/

$(function(){

//进入显示
    $("#more").mouseenter(function(){
        $("#moreContent").show();
    })

//用一个笨办法实现了离开标签内容消失，但离开并进入内容，内容保持显示。
    $("#more").mouseleave(function(){
        $("#moreContent").mouseenter(function(){
            $("#moreContent").show();
        })
    }) 
    
//显示后未进入，直接离开消失
    $("#more").mouseleave(function(){
        $("#moreContent").hide();
    })


//离开消失
    $('#moreContent').mouseleave(function(){
        $("#moreContent").hide();
    })



    
    $("#weather").mouseenter(function(){
        $("#weatherContent").show();
    })

    $("#weather").mouseleave(function(){
        $("#weatherContent").mouseenter(function(){
            $("#weatherContent").show();
        });
    })


    $("#weather").mouseleave(function(){
        $("#weatherContent").hide();
    })


    $("#weatherContent").mouseleave(function(){
        $("#weatherContent").hide();
    })



    //取消鼠标点击后的border效果(没成功难过(ಥ﹏ಥ)
    //默认效果设置的是outline，而不是border
    //但还是没有成功，用CSS伪类成功了


    $("#baidu").focus(function(){
        $("#self").css("outline","none")
    })



})




