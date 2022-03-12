$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append("<b>追加文本</b>")
        $("p").prepend("<b>开头追加文本</b>")
    })
    $("#btn2").click(function(){
        $("ol").append("<li>追加列表项</li>")
        $("ol").prepend("<li>开头追加列表项</li>")
    })
})

