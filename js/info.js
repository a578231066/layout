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

/* 点击关闭按钮 */
    $(".tishi .tanc span input").click(function(){
        $(".zhedang").hide();
        $(".tishi").hide();
    });

    $(".tishi , .zhedang").click(function(){
        $(".zhedang").hide();
        $(".tishi").hide();
    });

    $("body").keydown(function(){
        if(event.keyCode == "13"){
            $(".main .btn input").click();
        }
    });

/* 质检报告 */
    $(".upload input").click(function(){
        geshu();
    });

/* 质检报告方法 */
    function geshu(){
        var size=$(".upload_warp_img span").size();
        console.log(size);
        if(size>=4){
            $(".upload").hide();
            $(".upload_warp_left").hide();
        }
    }

/* 遮罩层显示 */
    function xianshi(china){
        $(".zhedang").show();
        $(".tishi").show();
        $(".tishi .tanc p").empty();
        $(".tishi .tanc p").append(china);
        $(".tishi span input").show();
    }

    $(".main .btn input").click(function(){
        var title=$(".main div:first-child input").val();/* 标题 */
        var slect=$(".main div.yes select").val();/* 分类 */
        var slect1=$(".main div:nth-child(3) select").val();/* 活动 */
        var size=$(".main div.four img").attr('src');/* 图片 */
        console.log(size);
        var price1=$(".main .ul li:nth-child(1) input").val();/* 出厂价 */
        var price2=$(".main .ul li:nth-child(2) input").val();/* 市场价 */
        var price3=$(".main .ul li:nth-child(4) input").val();/* PC价格 */
        var price4=$(".main .ul li:nth-child(5) input").val();/* APP价格 */
        var kucun=$(".main .ul ul:last-child li input").val();/* 库存 */
        var ret = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        /*alert(kucun);*/

    /* 标题 */
        if(title==""){
            xianshi("商品标题不能为空");
            $(".main div:first-child input").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main div:first-child input").css({
                border: '1px solid #DDD'
            });
        }

    /* 分类 */
        if(slect==0){
            xianshi("商品分类不能为空");
            $(".main div.yes select").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main div.yes select").css({
                border: '1px solid #DDD'
            });
        }

    /* 活动 */
        if(slect1==0){
            xianshi("报名活动专场不能为空");
            $(".main div:nth-child(3) select").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main div:nth-child(3) select").css({
                border: '1px solid #DDD'
            });
        }

    /* 图片 */
        if(size=="images/shangchuanBg.png"){
            xianshi("图片不能为空");
            $("#photo").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $("#photo").css({
                border: '1px solid #DDD'
            });
        }

    /* 出厂价 */
        if(price1==""){
            xianshi("出厂价不能为空");
            $(".main .ul ul:first-child li:nth-child(1) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            /*var ret=/^[0-9]$/;*/
            if(ret.test(price1)){
                $(".main .ul ul:first-child li:nth-child(1) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("出厂价输入错误");
                $(".main .ul ul:first-child li:nth-child(1) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* 市场价 */
        if(price2==""){
            xianshi("市场价不能为空");
            $(".main .ul li:nth-child(2) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price2)){
                $(".main .ul li:nth-child(2) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("市场价输入错误");
                $(".main .ul li:nth-child(2) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* PC价格 */
        if(price3==""){
            xianshi("PC价格不能为空");
            $(".main .ul li:nth-child(4) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price3)){
                $(".main .ul li:nth-child(4) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("PC价格输入错误");
                $(".main .ul li:nth-child(4) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* APP价格 */
        if(price4==""){
            xianshi("APP价格不能为空");
            $(".main .ul li:nth-child(5) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price4)){
                $(".main .ul li:nth-child(5) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("APP价格输入错误");
                $(".main .ul li:nth-child(5) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* PC价格和APP价格比较 */
        if(price3<price4 || price3==price4){
            xianshi("app价格要比pc价格低");
            $(".main .ul li:nth-child(5) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main .ul li:nth-child(5) i.inp").css({
                border: '1px solid #DDD'
            });
        }

    /* 库存 */
        if(kucun==""){
            xianshi("库存不能为空");
            $(".main .ul ul:last-child li i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(kucun)){
                $(".main .ul ul:last-child li i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("库存输入错误");
                $(".main .ul ul:last-child li i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }
    });
});