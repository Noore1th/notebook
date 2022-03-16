
$(document).ready(function(){
    //访问父元素
    $("#span1").parents().css({"color":"red","border":"2px solid red"});

    $("#span2").parents("ul").css({"color":"red","border":"2px solid red"});

    $("#span3").parentsUntil("div").css({"color":"red","border":"2px solid red"});

    //访问直接子元素
    $("div").children().css({"color":"green","border":"2px dotted green"});

    $("div").children("ul.ul1").css({"color":"green","border":"4px dotted green"});

    //访问所有子元素
    $("div").find("span").css({"color":"green","border":"4px dotted blue"})
    $("div").find("*").css({"backgroundColor":"lightblue"})

    





});



