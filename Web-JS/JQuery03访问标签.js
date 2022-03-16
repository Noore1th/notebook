$(document).ready(function(){
//访问
    $("#btn1").click(function(){
        alert("Text:" + $("#testTypejQ").text());
    })
    $("#btn2").click(function(){
        alert("HTML:" + $("#testTypejQ").html());//把标签作为html源代码返回，不解析html
    })
    $("#btn3").click(function(){
        alert("值为：" + $("#input1").val());
    })

    $("#btn4").click(function(){
        alert("网页链接为：" + $("#benben").attr("href"));
    })


//修改
    $("#btn11").click(function(){
        $("#test11").text("Hello world!");
      });
      $("#btn22").click(function(){
        $("#test22").html("<b>Hello world!</b>");
      });
      $("#btn33").click(function(){
        $("#test33").val("RUNOOB");
      });


//回调{
    $("#ocheck").click(function(){
        $("#test11").text(function(i,origText){
            return "旧：" + origText + "<br>" +
                    "新index：" + i
        })
        $("#test22").text(function(i,origText){
            return "旧：" + origText + "<br>" +
                    "新index：" + i
        })        
/*         $("#test33").text(function(i,origText){
            return "旧：" + origText + "<br>" +
                    "新index：" + i
        }) 失败*/
    })


    //修改属性
    $("#test33").mouseenter(function(){
        $("#test33").attr({
            "value" : "change value",
        });
      });
    //多个属性加花括号{}
      $("#benben").mouseenter(function(){
        $("#benben").attr({
            "href":"http://www.baidu.com",
            "title":"Baidu",
        });
      });
      //回调
      $("#benben").click(function(){
          $("#benben").attr("href",function(i,origValue){
              return origValue + "/benben1";
          })
      })
      

})






//下面尝试用JS获取jquery的内容，发现不行，jQ能访问的内容，并不能作为值会对象，存入变量中
/* 
$(document).ready(function(){
    $("#btn1").click(function(){
        a ="Text:" + $("#testTypejQ").text;
        alert(a);
       
    })
    $("#btn2").click(function(){
        alert("HTML:" + $("#testTypejQ").html());//把标签作为html源代码返回，不解析html
    })
}) */
/* 
document.addEventListener("click",myFunction4);
var myHTML = a
var myHTML = "HELLO";
function myFunction4(){
    document.getElementById("testTypejQ").innerHTML = myHTML;
} */

