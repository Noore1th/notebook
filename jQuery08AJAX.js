/* $(document).ready(function(){
	$("button").click(function(){
		$("#div1").load("../文本练习/2022-02-22.txt");
	});
}); */


$(document).ready(function(){
    $("button").click(function(){
      $("#div2").load("../文本练习/2022-02-22.txt #p1");
    });
  });



  $(".include").each(function() {
    if (!!$(this).attr("file")) {
        var $includeObj = $(this);
        $(this).load($(this).attr("file"), function(html) {
            $includeObj.after(html).remove(); //加载的文件内容写入到当前标签后面并移除当前标签
        })
    }
});