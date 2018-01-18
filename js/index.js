/* 
* @Author: anchen
* @Date:   2017-09-29 14:14:07
* @Last Modified by:   anchen
* @Last Modified time: 2017-10-04 12:43:09
*/

$(function(){
    var h=$(document).height();
    $(".layui-tab-content").height(h-150+"px");
    $(".layui-body .layui-tab-content iframe").height(h-160+"px");
    var i=0;
    $(".layui-nav-item dd").click(function(){
        i++;
        var a=$(this).children('a').html();
        var href=$(this).children('a').attr('href');
        $(".layui-tab-title").children("li").removeClass("layui-this");
        $(".layui-body .layui-tab .layui-tab-title").append('<li class="layui-this">'+a+'<i class="layui-icon layui-unselect layui-tab-close">&#x1006;</i></li>');
        $(".layui-tab-content").children("div").removeClass("layui-show");
        $(".layui-body .layui-tab-content").append('<div class="layui-tab-item layui-show"><iframe src='+href+' frameborder="0" marginheight="0" marginwidth="0" name="main" class="iframemain" allowtransparency="yes" border="0"></iframe></div>');
        $(".layui-body .layui-tab-content iframe").css({
            height: h-160+'px'
        });
        $(".layui-body .layui-tab .layui-tab-title i.layui-icon").click(function(){
            $(this).parent("li.layui-this").remove();
            $(this).parent("li.layui-this").parent("ul.layui-tab-title").parent("div.layui-tab").children("div.layui-tab-content").empty();
        });
    });
});