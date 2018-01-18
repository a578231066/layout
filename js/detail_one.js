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

/* 点击外层阴影 */
    $(".main div label input").focus(function(){
        $(this).addClass('active').parent("label").parent("div").siblings().children('label').children('input').removeClass('active');
    });

    $(".main div label input").blur(function(){
        $(this).addClass('active').removeClass('active');
    });

/* 商品属性 */
    var lllls=1;
    $(".main .attribute .yaoqing button").click(function(){
        var changdu=$(".main .attribute .zhuijia .two_wai");

        if(changdu.length>3){
            xianshi("商品属性已到追加上线");
            return;
        }

        var size=$(".main .attribute .zhuijia .two_wai").size()+1;
        var size1=$(".main .attribute .zhuijia .two_wai .two").size()+1;
        lllls++;

        var attr=$(".main .attribute .zhuijia .two_wai:last-child").attr("date-id");
        var num=parseInt(attr)+1;

        append='<div class="two_wai two_wai'+num+'" date-id="'+num+'"><div class="one"><input type="text" placeholder="颜色" /> <button>+</button><strong>删除</strong></div><div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div></div>';
        $(".attribute .zhuijia").append(append);

    /* 整体大区块删除 */
        $(".main .two_wai .one strong").show();
        $(".main .two_wai .one strong").click(function(){
            var size=$(".main .two_wai .one").length;
            console.log(size);
            if(size!=1){
                $(this).parent(".one").parent(".two_wai").remove();
            }else{
                $(".main .two_wai .one strong").hide();
            }
        });

        $(".main .attribute .two_wai div.one button").unbind("click").click(function(e){
            $(this).parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text"  class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
            var size1=$(this).parent("div.one").parent(".two_wai").children('.two').size();
        /* 删除按钮 */
            console.log($(this).parent("div.one").parent(".two_wai"));
            $(this).parent("div.one").parent(".two_wai").children('div.two').children('strong').show();
            $(".main div.two strong").click(function(){
                var cd=$(this).parent(".two").parent(".two_wai").children('.two').length;
                console.log(cd);
                if(cd!=1){
                    $(this).parent("div.two").remove();
                }else{
                    $(this).hide();
                }
            });
            return;
        });
    });
     $(".main .attribute .two_wai div.one button").click(function(){
        $(this).parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
    /* 删除按钮 */
        $(".main div.two strong").show();
        $(".main div.two strong").click(function(){
            var cd=$(".main div.two").length;
            console.log(cd);
            if(cd!=1){
                $(this).parent("div.two").remove();
            }else{
                $(".main div.two strong").hide();
            }
        });
    });

    /*function shuliang(className){
        var input=$(".main .attribute .zhuijia .two_wai"+className+" .two input.oneInp");
        console.log(input);
        var heroA=new Array();
        for(var a=0; a<input.length; a++){
            var inpVal=input[a].value;
            heroA[a]=inpVal;
        }
        var hero1=heroA;
        console.log(hero1);
    }*/

/* 保存编辑 */
    $(".main .attribute div.bcbj button").click(function(){
        /*var input=document.getElementsByClassName("oneInp"); //返回的是多个input元素的集合。*/
        var changdu=$(".main .attribute .zhuijia .two_wai");
        var input=$(".main .attribute .zhuijia .two_wai .two input.oneInp");
        console.log(input.length);

        var input1=$(".main .attribute .zhuijia .two_wai1 .two input.oneInp");
        var input2=$(".main .attribute .zhuijia .two_wai2 .two input.oneInp");
        var input3=$(".main .attribute .zhuijia .two_wai3 .two input.oneInp");
        var input4=$(".main .attribute .zhuijia .two_wai4 .two input.oneInp");

        var heroA=new Array();
        var heroB=new Array();
        var heroC=new Array();
        var heroD=new Array();

        for(var a=0; a<input1.length; a++){
            var inpVal1=input1[a].value;
            heroA[a]=inpVal1;
        } 

        for(var b=0; b<input2.length; b++){
            var inpVal2=input2[b].value;
            heroB[b]=inpVal2;
        } 

        for(var c=0; c<input3.length; c++){
            var inpVal3=input3[c].value;
            heroC[c]=inpVal3;
        }

        for(var d=0; d<input4.length; d++){
            var inpVal4=input4[d].value;
            heroD[d]=inpVal4;
        } 
    

        var hero1=heroA;
        var hero2=heroB;
        var hero3=heroC;
        var hero4=heroD;
        /*console.log(hero1);
        console.log(hero2);
        console.log(hero3);
        console.log(hero4);*/

        var size1=hero1.length;
        var size2=hero2.length;
        var size3=hero3.length;
        var size4=hero4.length;

        var str='';//输出结果
        var oDiv=document.getElementById('juti');
        if(changdu.length==2){
            if(input.length>50){
                xianshi("商品属性总数超过50个,请轻量处理!当前个数为"+input.length+"");
                return;
            }
            $(".main div.juti").show();
            for(var i=0 ;i<size1; i++){//外:时
                for(var j=0; j<size2; j++){//内:分
                    str +='<div class="two"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" disabled="disabled" /> + <input type="text" value="'+hero2[j]+'" disabled="disabled" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量"  /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                }
                oDiv.innerHTML=str;
            }
        }else if(changdu.length==3){
            if(input.length>30){
                xianshi("商品属性总数超过30个,请轻量处理!当前个数为"+input.length+"");
                return;
            }
            $(".main div.juti").show();
            for(var i=0 ;i<size1; i++){//外:时
                for(var j=0; j<size2; j++){//内:分
                    for(var k=0; k<size3; k++){
                        str +='<div class="two"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" disabled="disabled" /> + <input type="text" value="'+hero2[j]+'" disabled="disabled" /> + <input type="text" value="'+hero3[k]+'" disabled="disabled" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                    }
                    oDiv.innerHTML=str;
                }
            }
        }else if(changdu.length==4){
            if(input.length>20){
                xianshi("商品属性总数超过20个,请轻量处理!当前个数为"+input.length+"");
                return;
            }
            $(".main div.juti").show();
            for(var i=0 ;i<size1; i++){//外:时
                for(var j=0; j<size2; j++){//内:分
                    for(var k=0; k<size3; k++){
                        for(var l=0; l<size4; l++){
                            str +='<div class="two two1"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" disabled="disabled" /> + <input type="text" value="'+hero2[j]+'" disabled="disabled" /> + <input type="text" value="'+hero3[k]+'" disabled="disabled" /> + <input type="text" value="'+hero4[l]+'" disabled="disabled" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                        }
                        oDiv.innerHTML=str;
                    }
                }
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

/* 价格 */
    // $(".main .ul li:nth-child(4) input").blur(function(){
    //     var price3=$(".main .ul li:nth-child(4) input").val();
    //     var kucun1=$(".main .ul ul:last-child li:nth-child(1) input");/* 普通会员价格 */
    //     var kucun2=$(".main .ul ul:last-child li:nth-child(2) input");/* 高级会员价格 */
    //     var kucun3=$(".main .ul ul:last-child li:nth-child(4) input");/* 尊贵会员价格 */
    //     var ret = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    //     if(price3==""){
    //         xianshi("PC价格不能为空");
    //         $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
    //             border: '1px solid #f00'
    //         });
    //         kucun1.val("");
    //         kucun2.val("");
    //         kucun3.val("");
    //         return;
    //     }else{
    //         if(ret.test(price3)){
    //             $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
    //                 border: '1px solid #DDD'
    //             });
    //             kucun1.val((price3*0.99).toFixed(2));
    //             kucun2.val((price3*0.95).toFixed(2));
    //             kucun3.val((price3*0.9).toFixed(2));
    //             $(".main .ul ul:last-child li input").css({fontSize: '16px'});
    //         }else{
    //             xianshi("PC价格输入错误");
    //             $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
    //                 border: '1px solid #f00'
    //             });
    //             kucun1.val("");
    //             kucun2.val("");
    //             kucun3.val("");
    //             return;
    //         }
    //     }
    // });

    $(".main .btn input").click(function(){
        var title=$(".main div.one1 input").val();/* 标题 */
        var slect=$(".main div.yes select").val();/* 分类 */
        var picOne=$(".main .four img").attr("src");/* 商品主图 */
        var size=$(".upload_warp_img span").size();/* 副图 */
        var text=$(".main .text textarea").val();
        var price1=$(".main .ul ul:first-child li:nth-child(1) input").val();/* 出厂价 */
        var price2=$(".main .ul ul:first-child li:nth-child(2) input").val();/* 市场价 */
        var price3=$(".main .ul ul:first-child li:nth-child(4) input").val();/* PC价格 */
        var price4=$(".main .ul ul:first-child li:nth-child(5) input").val();/* 库存 */
        var ret = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        var kucun1=$(".main .ul ul:last-child li:nth-child(1) select").val();/* 普通会员折扣 */
        var kucun2=$(".main .ul ul:last-child li:nth-child(2) select").val();/* 高级会员折扣 */
        var kucun3=$(".main .ul ul:last-child li:nth-child(4) select").val();/* 尊贵会员折扣 */
        console.log(kucun1);

        /*var attributeOne1=$(".main .attribute .two_wai .two input").val();
        var attributeOne2=$(".main .attribute .two_wai .two div img").attr("src");*/

    /* 标题 */
        if(title==""){
            xianshi("商品标题不能为空");
            $(".main div.one1 input").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            $(".main div.one1 input").css({
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
            $(".main .ul ul:first-child li:nth-child(2) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price2)){
                $(".main .ul ul:first-child li:nth-child(2) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("市场价输入错误");
                $(".main .ul ul:first-child li:nth-child(2) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* PC价格 */
        if(price3==""){
            xianshi("PC价格不能为空");
            $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price3)){
                $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("PC价格输入错误");
                $(".main .ul ul:first-child li:nth-child(4) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* 库存 */
        if(price4==""){
            xianshi("总库存不能为空");
            $(".main .ul ul:first-child li:nth-child(5) i.inp").css({
                border: '1px solid #f00'
            });
            return;
        }else{
            if(ret.test(price4)){
                $(".main .ul ul:first-child li:nth-child(5) i.inp").css({
                    border: '1px solid #DDD'
                });
            }else{
                xianshi("总库存输入错误");
                $(".main .ul ul:first-child li:nth-child(5) i.inp").css({
                    border: '1px solid #f00'
                });
                return;
            }
        }

    /* 折扣 */
        if(kucun1=="请选择"){
            xianshi("普通会员折扣不能为空");
            $(".main .ul ul:last-child li:nth-child(1) select").css({border: '1px solid #f00'});return;
        }else{
            $(".main .ul ul:last-child li:nth-child(1) select").css({border: '1px solid #DDD'});
        }

        if(kucun2=="请选择"){
            xianshi("高级会员折扣不能为空");
            $(".main .ul ul:last-child li:nth-child(2) select").css({border: '1px solid #f00'});return;
        }else{
            $(".main .ul ul:last-child li select:nth-child(2)").css({border: '1px solid #DDD'});
        }

        if(kucun3=="请选择"){
            xianshi("尊贵会员折扣不能为空");
            $(".main .ul ul:last-child li:nth-child(4) select").css({border: '1px solid #f00'});return;
        }else{
            $(".main .ul ul:last-child li select:nth-child(4)").css({border: '1px solid #DDD'});
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

/* 添加属性 */
var asd=0;
function tianjia(){
    var lllls=1;
    $(".main .attribute .yaoqing button").click(function(){
        var changdu=$(".main .attribute .zhuijia .two_wai");
        console.log(changdu.length);

        if(changdu.length>4){
            xianshi("商品属性已到追加上线");
            return;
        }

        var size=$(".main .attribute .zhuijia .two_wai").size()+1;
        var size1=$(".main .attribute .zhuijia .two_wai .two").size()+1;
        lllls++;

        var attr=$(".main .attribute .zhuijia .two_wai:last-child").attr("date-id");
        var num=parseInt(attr)+1;
        /*shuliang(num);*/

        append='<div class="two_wai two_wai'+num+'" date-id="'+num+'"><div class="one"><input type="text" placeholder="颜色" /> <button>+</button></div><div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div></div>';
        $(".attribute .zhuijia").append(append);
        $(".main .attribute .two_wai div.one button").unbind("click").click(function(e){
            $(this).parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text"  class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
            var size1=$(this).parent("div.one").parent(".two_wai").children('.two').size();
            /*console.log("在内部:"+size1);*/
            return;
        });
    });
}

/* 点击加号 */
function jiahao(){
    $(".main .attribute .two_wai div.one button").parent("div.one").parent(".two_wai").append('<div class="two"><strong>删除</strong><span>商品名称 :</span><input type="text" class="oneInp" /><br /><div><span>商品图片 :</span><img id="photo1" src="images/shangchuanBg.png" width="109" height="109" /><input type="file" name="imgOne" class="imgOne" id="imgOne1" onchange="preI mg(this.id,photo1)" /></div></div>');
}

function shuliang(className){
    var input=$(".main .attribute .zhuijia .two_wai .two input.oneInp");
    var input1=$(".main .attribute .zhuijia .two_wai"+className+" .two input.oneInp");
    console.log(input1.value);
}

/* 点击保存编辑 */
function baocunbj(){
    var changdu=$(".main .attribute .zhuijia .two_wai");
    console.log(changdu.length);
    var input1=$(".main .attribute .zhuijia .two_wai1 .two input.oneInp");
    var input2=$(".main .attribute .zhuijia .two_wai2 .two input.oneInp");
    var input3=$(".main .attribute .zhuijia .two_wai3 .two input.oneInp");
    var input4=$(".main .attribute .zhuijia .two_wai4 .two input.oneInp");
    var input5=$(".main .attribute .zhuijia .two_wai5 .two input.oneInp");

    var heroA=new Array();
    var heroB=new Array();
    var heroC=new Array();
    var heroD=new Array();
    var heroE=new Array();

    for(var a=0; a<input1.length; a++){
        var inpVal1=input1[a].value;
        heroA[a]=inpVal1;
    } 

    for(var b=0; b<input2.length; b++){
        var inpVal2=input2[b].value;
        heroB[b]=inpVal2;
    } 

    for(var c=0; c<input3.length; c++){
        var inpVal3=input3[c].value;
        heroC[c]=inpVal3;
    }

    for(var d=0; d<input4.length; d++){
        var inpVal4=input4[d].value;
        heroD[d]=inpVal4;
    } 

    for(var e=0; e<input5.length; e++){
        var inpVal5=input5[e].value;
        heroE[e]=inpVal5;
    }       

    var hero1=heroA;
    var hero2=heroB;
    var hero3=heroC;
    var hero4=heroD;
    var hero5=heroE;
    console.log(hero1);
    console.log(hero2);
    console.log(hero3);
    console.log(hero4);
    console.log(hero5);

    var size1=hero1.length;
    var size2=hero2.length;
    var size3=hero3.length;
    var size4=hero4.length;
    var size5=hero5.length;

    var str='';//输出结果
    var oDiv=document.getElementById('juti');
    if(changdu.length==2){
        for(var i=0 ;i<size1; i++){//外:时
            for(var j=0; j<size2; j++){//内:分
                str +='<div class="two"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" /> + <input type="text" value="'+hero2[j]+'" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
            }
            oDiv.innerHTML=str;
        }
    }else if(changdu.length==3){
        for(var i=0 ;i<size1; i++){//外:时
            for(var j=0; j<size2; j++){//内:分
                for(var k=0; k<size3; k++){
                    str +='<div class="two"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" /> + <input type="text" value="'+hero2[j]+'" /> + <input type="text" value="'+hero3[k]+'" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                }
                oDiv.innerHTML=str;
            }
        }
    }else if(changdu.length==4){
        for(var i=0 ;i<size1; i++){//外:时
            for(var j=0; j<size2; j++){//内:分
                for(var k=0; k<size3; k++){
                    for(var l=0; l<size4; l++){
                        str +='<div class="two two1"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" /> + <input type="text" value="'+hero2[j]+'" /> + <input type="text" value="'+hero3[k]+'" /> + <input type="text" value="'+hero4[l]+'" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                    }
                    oDiv.innerHTML=str;
                }
            }
        }
    }else if(changdu.length==5){
        for(var i=0 ;i<size1; i++){//外:时
            for(var j=0; j<size2; j++){//内:分
                for(var k=0; k<size3; k++){
                    for(var l=0; l<size4; l++){
                        for(var m=0; m<size5; m++){
                        str +='<div class="two two1"><strong>删除</strong><div><span>名称 :</span><span class="inp"><input type="text" value="'+hero1[i]+'" /> + <input type="text" value="'+hero2[j]+'" /> + <input type="text" value="'+hero3[k]+'" /> + <input type="text" value="'+hero4[l]+'" /> + <input type="text" value="'+hero5[m]+'" /></span></div><div><span>库存 :</span><input type="text" placeholder="数量" /></div><div><span>价格 :</span><input type="text" placeholder="价格" /></div></div>';
                    }
                        oDiv.innerHTML=str;
                    }
                }
            }
        }
    }
}