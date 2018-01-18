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

/* 商品属性 */
    var a=1;
    $(".main .attribute .yaoqing button").click(function(){
        var size=$(".main .attribute .zhuijia .two_wai").size()+1;
        /*console.log(size);*/
        a++;
        var size1=$(".main .attribute .zhuijia .two_wai .two").size()+1;
        /*console.log(size1);*/

        append='<div class="two_wai"><div class="one"><input type="text" value="颜色" /> <button>+</button></div><div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div></div>';
        $(".attribute .zhuijia").append(append);
        $(".main .attribute .two_wai div.one button").unbind("click").click(function(e){
            $(this).parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text"  class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
            var size1=$(this).parent("div.one").parent(".two_wai").children('.two').size();
            console.log("在内部:"+size1);
            return;
        });
    });

    $(".main .attribute .two_wai div.one button").click(function(){
        $(this).parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
        
    });

/* 保存编辑 */
    $(".main .attribute div.bcbj button").click(function(){

        /*var input = doucment.getElementsByClassName('oneInp'); 返回的是多个input元素的集合。
        for(var i =0;i < input.length;i++){
            input[i].value
        }*/

        var ao=$(".main .attribute .zhuijia .two_wai .two input.one").val();
        /*console.log(ao);*/
        /*var hero1=new Array("虞姬","东皇太一","黄忠");
        var hero2=new Array("芈月");*/

        var hero3=new Array(
            {a:["虞姬","东皇太一","黄忠"]},
            {b:["芈月"]}
            );

        for(var key in hero3){
            var size3=hero3[0].a[0];
            console.log(size3);
            var size=hero3[].length;
            console.log(size);
            var str='';//输出结果
            var oDiv=document.getElementById('juti');
            for(var i=0 ;i<size; i++){//外:时
                for(var j=0; j<i; j++){//内:分
                    str +='<div class="two"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero3[i]+'" /> + <input type="text" value="'+hero3[i]+'" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                }
                oDiv.innerHTML=str;
            }
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
        var title=$(".main div.one input").val();/* 标题 */
        var slect=$(".main div.yes select").val();/* 分类 */
        var picOne=$(".main .four img").attr("src");/* 商品主图 */
        var size=$(".upload_warp_img span").size();/* 副图 */
        var text=$(".main .text textarea").val();
        var price1=$(".main .ul li:nth-child(1) input").val();/* 出厂价 */
        var price2=$(".main .ul li:nth-child(2) input").val();/* 市场价 */
        var price3=$(".main .ul li:nth-child(4) input").val();/* PC价格 */
        var price4=$(".main .ul li:nth-child(5) input").val();/* APP价格 */
        var kucun=$(".main .ul ul:last-child li input").val();/* 库存 */
        var ret = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;

        /*var attributeOne1=$(".main .attribute .two_wai .two input").val();
        var attributeOne2=$(".main .attribute .two_wai .two div img").attr("src");*/

    /* 标题 */
        if(title==""){
            xianshi("商品标题不能为空");
            $(".main div.one input").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main div.one input").css({
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

    /* 商品主图 */
        if(picOne=="images/shangchuanBg.png"){
            xianshi("商品主图不能为空");
            $(".main .four img").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main .four img").css({
                border: '1px solid #DDD'
            });
        }

    /* 商品副图 */
        if(size==0){
            xianshi("商品副图不能为空");
            $("#photo3").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $("#photo3").css({
                border: '1px solid #DDD'
            });
        }

    /* 商品简介 */
        if(text==""){
            xianshi("商品简介不能为空");
            $(".main .text textarea").css({
                border: '1px solid #F00'
            });
            return;
        }else{
            $(".main .text textarea").css({
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

    /* 总库存 */
        if(kucun==""){
            xianshi("总库存不能为空");
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
                xianshi("总库存输入错误");
                $(".main .ul ul:last-child li i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /*// 商品属性 
        if(attributeOne1==""){
            xianshi("商品名称不能为空");
            $(".main .attribute .two_wai .two input").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main .attribute .two_wai .two input").css({
                border: '1px solid #DDD'
            });
        }

        if(attributeOne2=="images/shangchuanBg.png"){
            xianshi("商品图片不能为空");
            $(".main .attribute .two_wai .two div img").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main .attribute .two_wai .two div img").css({
                border: '1px solid #DDD'
            });
        }*/
    });
});