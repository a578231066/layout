/*
    项目负责人：赵强
    项目创建日期:2017.9.30
    最新更新:2017.9.30
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/
$(function(){

    var h=$(document).height();
    $(".zhedang").height(h+"px");

/* 店铺信息 */
    $(".two div:first-child ul li:last-child input").click(function(){
        $(".vip,.zhedang").show();
    });

/* 银行信息 */
    $(".two div:last-child ul li:last-child input").click(function(){
        $(".vip1,.zhedang").show();
    });

/* 提现 */
    $(".two div:last-child li:first-child button").click(function(){
        $(".zhedang,.tixian").show();
    });

/* 关闭按钮 */
    $(".vipNei h1 span,.txNei h1 span").click(function(){
        $(".vip,.vip1,.tixian,.zhedang").hide();
    });

/* 单选框 */
   $(".tixian .txNei li input").click(function(){
        var list=$("input:radio[name='zhifu']:checked").val();
        if(list==1){
            $(".tixian .txNei li:last-child p").show();
            $(".tixian .txNei li:first-child p").hide();
            return;
        }else if(list==0){
            $(".tixian .txNei li:first-child p").show();
            $(".tixian .txNei li:last-child p").hide();
            return;
        }
    });
 

});