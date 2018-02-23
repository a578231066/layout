/*
    项目负责人：赵强
    项目创建日期:2017.9.30
    最新更新:2017.9.30
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
/* 全选按钮 */
    var oAll=document.getElementById("anniu");
    var oName=document.getElementsByName("probuct");
    oAll.onclick=function(){
        for(var i=0; i<oName.length;i++){
            oName[i].checked=oAll.checked;//如果oAll被选中,那么所有的oName都被选中
        }
    }

    var oAll=document.getElementById("anniu");
    var oName=document.getElementsByName("probuct");
    oAll.onclick=function(){
        for(var i=0; i<oName.length;i++){
            oName[i].checked=oAll.checked;//如果oAll被选中,那么所有的oName都被选中
        }
    }

        
    function show(){
        var flag=true;//标志位
        for(var i=0;i<oName.length;i++){
            if(oName[i].checked==false){
                flag=false;
                break;//中断退出循环   
            }
        }
        oAll.checked=flag;
    }

$(function(){
    var h=$(document).height();
    $(".zhedang").height(h+"px");

/* 隔行换色 */
    jQuery.changeColor = function (ulid) {
        var liset = $(".main_down").find("thead");
        for (var i = 2; i < liset.length; i += 2) {
            liset.eq(i).css({background: '#e1e1e1'});
        }
    }
    $.changeColor("#mytest");

/* 删除 */
    $(".main .main_down thead td span.red").click(function(){
        $(".dele .deleNei p").empty();
        $(".dele .deleNei p").append("是否删除此商品");
        $(".zhedang,.dele").show();
    });

    $(".main .main_top li.cen button").click(function(){
        $(".dele .deleNei p").empty();
        $(".dele .deleNei p").append("是否删除已选商品");
        $(".zhedang,.dele").show();
    });

/* 点击取消 */
    $(".dele .deleNei h2 button:last-child").click(function(){
        $(".zhedang,.dele").hide();
    });

});