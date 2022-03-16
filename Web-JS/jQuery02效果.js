

$(function(){

    
    //<!--隐藏/显示-->

    $("p").click(function(){
        $(this).hide();
            }); //发生点击的p元素本身消失

    $("#hide").click(function(){
        $("p").hide("slow","linear",function(){
        alert("hide()方法已完成！");
    });//点击id为hide的元素，所有p元素消失
    });

    $("#show").click(function(){
        $("p").show(1000,"linear",function(){
            alert("Show()方法已完成！");
        });//点击id为show的元素，所有p元素出现
        //alert会多次弹出，使用unbind也没有成功。

    });



     //<!--淡入/淡出-->

     $("#fadeIn").click(function(){
        $("#d1").fadeIn(3000);
        $("#d2").fadeIn("slow");
        $("#d3").fadeIn();

    })

    $("#fadeOut").click(function(){
        $("#d1").fadeOut();
        $("#d2").fadeOut("slow");
        $("#d3").fadeOut(3000);
    })

    $("#Tog").click(function(){
        $("#d1").fadeToggle();
        $("#d2").fadeToggle("fast");
        $("#d3").fadeToggle(3000);
    })

    $("#d2").mouseenter(function(){
        $("#d1").fadeTo("slow",1);
        $("#d2").fadeTo("slow",1);
        $("#d3").fadeTo("slow",1);//注意别漏写第一个参数
    })            
    $("#d2").mouseleave(function(){
        $("#d1").fadeTo("slow",0.5);
        $("#d2").fadeTo("slow",0.3);
        $("#d3").fadeTo("slow",0.8);//注意别漏写第一个参数
    })


    

    
    //<!--下滑-->
    $("#personH").mouseenter(function(){
        $("#person").slideDown("slow");
    })
    $("#personH").mouseleave(function(){
        $("#person").slideUp("slow");
    })
    /*合并事件
    $("#personH").click(function(){
        $("#person").slideToggle("slow");
    })

    */



    //动画
    $("#d2").dblclick(function(){
        $("#d2").animate({left:"700px"});
        $("#d3").animate({bottom:"30px"});
    })

    $("#closeAll").click(function(){
        $("header").animate({
            left:"1000px"
        });
        $("#d1,#d2,#d3").animate({
            height:"0.5px",
            width:"0.5px",
            opacity:'0.5',
        });
    })

    $("#d2").click(function(){
        $("#d2").animate({
            left:"150px",
            bottom:"20px",
            height:'+=600',
            width:'+=600'
        },300,"linear")
        $("#d3").animate({bottom:"200px"},300);

    })


    $("#d1").click(function(){
        $("#d1").animate({width:'hide'})
    })


})