var device_type=''
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);


if(isIos){

    device_type="ios"
}

if(isAndroid){

    device_type="android"
}


//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


var openid_num = getUrlParam('openid');


if(openid_num==null||openid_num==''){


    openid_num=''
}




if (isWeixin) {

    //授权跳转

    if(openid_num==null||openid_num==""){


        //location.href='/201812xmas-api/wx-auth.php?type=snsapi_base&return_url='+encodeURIComponent(window.location.href)

    }

}




var utm_source = getUrlParam('utm_source');
var utm_medium = getUrlParam('utm_medium');
var utm_content = getUrlParam('utm_content');
var utm_campaign = getUrlParam('utm_campaign');


if(utm_source==null||utm_source==''){


    utm_source=''
}

if(utm_medium==null||utm_medium==''){


    utm_medium=''
}

if(utm_content==null||utm_content==''){


    utm_content=''
}

if(utm_campaign==null||utm_campaign==''){


    utm_campaign=''
}




//初始化适应

kevin_resize({size: [640, 1136], full:1});


//获取定位信息
var geolocation = new qq.maps.Geolocation("5LSBZ-25J3V-SY3PK-UK574-HDNTK-JWFJM", "biothermh5");


//加载

loader_Fun()

//加载

function loader_Fun(){

    var callbacks = [];
    imgLoader(['images/AdviseVertical.png','images/bg.jpg','images/guize.png','images/p1_mobile.png','images/p1_txt.png','images/yun1.png','images/p1_yun2.png','images/p2.gif','images/p3.jpg','images/p3-01.png','images/p3-01_1.png','images/p3-02.png','images/p3-03.png','images/p3-04.png','images/p3-05.png','images/p3-06.png','images/p3-07.png','images/p3_btn.png','images/p3_btn2.png','images/p3_title.png','images/p5_bg.jpg','images/page1_bg.jpg','images/qr.jpg','images/text.png','images/text1.png','images/title2.png','images/title3.png'], function(percentage){

        var i = callbacks.length;
        callbacks.push(function(){
            setTimeout(function(){
                var percentT = percentage * 100;
                $('.loading b').html((parseInt(percentT)) + '%');
                if (percentage == 1) {
                    setTimeout(function(){
                        $('.loading').remove();
                        $('.main').css('display','block')


                    }, 100);
                }
                callbacks[i + 1] && callbacks[i + 1]();
            },50);
        });

        if(percentage == 1) {

            callbacks[0]();
        }


    });

}


//横屏提示

function rotate(){
    var orientation=window.orientation;
    if(orientation==90||orientation==-90){

        $('.orientation').show()
        $('.back_btn').hide()
    }

}

window.onorientationchange=function(){

    $('.orientation').hide()
    $('.back_btn').show()
    rotate();
};


$(document).ready(function(){



    //微信浏览器后退重新刷新

    $(function () {
        window.addEventListener("popstate", function(e) {
            self.location.reload();
        }, false);
        var state = {
            title : "",
            url : "#"
        };
        window.history.replaceState(state, "", "#");
    });




    //重力感应

    var SHAKE_THRESHOLD = 3000;
    var last_update = 0;
    var x = y = z = last_x = last_y = last_z = 0;
    function shakingGesture_init() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        } else {
            alert('not support mobile event');
        }
    }
    function deviceMotionHandler(eventData) {
        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime - last_update) > 100) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {


                $('.page1').hide()
                $('.page2').show()

                var _timeout = setTimeout(function () {

                    $('.page2').hide()
                    $('.page3').show()
                    clearTimeout(_timeout);

                }, 2600);


            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }

    shakingGesture_init();



    //免费申领

    $('.btn1').click(function(){


        $('.page3').hide()
        $('.page4').show()



    })







    var setTimeInterval



    //初始化

    function init(){

        shop_fun()
        location_fun()

    }


    //init()

    if(isIos&&isWeixin){


        $('#name_txt').blur(function(){

            document.body.scrollTop =0;

        })

        $('#mobile_txt').blur(function(){

            document.body.scrollTop =0;

        })

        $('#verify_code').blur(function(){

            document.body.scrollTop =0;

        })


        $('#phone_code').blur(function(){

            document.body.scrollTop =0;

        })


        $('#province').blur(function(){


            document.body.scrollTop =0;

        })

        $('#city').blur(function(){


            document.body.scrollTop =0;

        })

        $('#district').blur(function(){


            document.body.scrollTop =0;

        })


    }




    //地图定位
    function location_fun(){


        var options = {timeout: 8000};

        function showPosition(position) {

            console.log(position)

            location_Post(position.city,position.lat,position.lng)

        }

        function showErr() {

            //document.getElementById("demo").appendChild(document.createElement('p')).innerHTML = "定位失败！";
            //alert( " 定位失败！")

        }

        geolocation.getLocation(showPosition, showErr, options);


    }


    //定位接口

    function location_Post(c,lat,lng){


        $.ajax({
            type: "POST",
            dataType: 'json',
            data:{lat:lat,lng:lng,city:c},
            url: "/201812xmas-api/counter-nearest.php",
            success: function(res){

                // console.log(res+"定位接口返回专柜")

                console.log(JSON.stringify(res))
                //document.getElementById("data_box").innerHTML = JSON.stringify(res);

                //alert(res.data.city)

                if(res.result==1){


                    $("#province").val(res.data.province)
                    // $("#province").find("option:contains("+res.data.province+")").attr("selected",true)
                    $("#province").trigger("change");
                    //
                    $("#city").val(res.data.city)
                    // $("#city").find("option:contains("+res.data.city+")").attr("selected",true)
                    $("#city").trigger("change");
                    //
                    //
                    $("#district").val(res.data.counter)

                    // $("#district").find("option:contains("+res.data.counter+")").attr("selected",true)


                    //专柜No.
                    shoppe_code_txt=res.data.counter_no



                }
            }
        });




    }




    //省市联动

    function shop_fun(){


        var province = $("#province");
        var city = $("#city");
        var district = $("#district");
        //定义省、市下标
        var p_num;
        var c_num;
        var d_num;

        for (var i = 0; i < couter_data.data.length; i++) {

            province.append("<option value=" + couter_data.data[i].province + ">" + couter_data.data[i].province + "</option>");

        }
        province.change(function () {
            var p = province.find("option:selected").text();

            if(p=="线上申领"){

                $("#city").attr("disabled","disabled")
                $("#district").attr("disabled","disabled")

                $('#city').css({'background':'#666','opacity':0.6})
                $('#district').css({'background':'#666','opacity':0.6})

                city.empty();
                district.empty();
                $("#city").append("<option value=''>选择城市</option>");
                $("#district").append("<option value=''>选择柜台</option>");
                // c_num=0



            }else{

                $("#city").removeAttr("disabled")
                $("#district").removeAttr("disabled")

                $('#city').css({'background':'none','opacity':1})
                $('#district').css({'background':'none','opacity':1})

                city.empty();
                district.empty();
                city.append("<option value='-1'>选择城市</option>");
                district.append("<option value='-1'>选择柜台</option>");

                for (var i in couter_data.data) {

                    if (couter_data.data[i].province == p) {

                        p_num = i;
                    }
                }

                for (var i in couter_data.data[p_num].city) {

                    //console.log(couter_data.data[p_num].city)

                    city.append("<option value="+couter_data.data[p_num].city[i].cityDesc+">" + couter_data.data[p_num].city[i].cityDesc + "</option>");
                }


            }






        });

        city.change(function () {

            var c = city.find("option:selected").text();
            district.empty();
            district.append("<option value='-1'>选择柜台</option>");

            for (var i in couter_data.data[p_num].city) {

                if (c == couter_data.data[p_num].city[i].cityDesc) {

                    c_num = i;
                }
            }
            for (var i in couter_data.data[p_num].city[c_num].counter) {

                console.log(couter_data.data[p_num].city[c_num].counter[i])
                district.append("<option value="+couter_data.data[p_num].city[c_num].counter[i].counterDesc+">" + couter_data.data[p_num].city[c_num].counter[i].counterDesc + "</option>");
            }



        })

        district.change(function () {

            var d = district.find("option:selected").text();

            for (var i in couter_data.data[p_num].city[c_num].counter) {

                if (d == couter_data.data[p_num].city[c_num].counter[i].counterDesc) {

                    d_num = i;
                }
            }

            //console.log(couter_data.data[p_num].city[c_num].counter[d_num].counterDesc)

            //专柜No.
            shoppe_code_txt=couter_data.data[p_num].city[c_num].counter[d_num].counterNo



        })



    }



    //短信验证码

    $('#smsCode_btn').bind("click",send_sms)

    function send_sms() {

        //手机号码
        var mobile_num = $("#mobile_txt").val();

        var reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
        if(mobile_num==null || mobile_num=="" || !reg.exec(mobile_num))
        {
            alert('手机号码不正确!')

        }else if(!$('#verify_code').val()){

            alert('请输入图形验证码!')

        } else
        {
            //sms_timeOut();

            //POST  判断图形验证码

            $.ajax({
                type: "POST",
                dataType: 'json',
                data:{captcha:$('#verify_code').val()},
                url: "http://biotherm.nurunci.com/201812xmas-api/verify-captcha.php",
                success: function(data){


                    console.log("短信验证码:"+data)


                    if(data.result==1){

                        sms_timeOut();

                        //POST  获取短信验证码

                        $.ajax({
                            type: "POST",
                            dataType: 'json',
                            data:{mobile:$("#mobile_txt").val(),captcha:$('#verify_code').val()},
                            url: "http://biotherm.nurunci.com/201812xmas-api/mobile-captcha.php",
                            success: function(data){

                                console.log("短信验证码:"+data)

                            }
                        });


                    }else{

                        alert("输入的图形验证码不正确！")

                    }


                }
            });


        }



    }

    //短信验证码倒计时
    function sms_timeOut() {

        $('#smsCode_btn').unbind("click",send_sms)

        var time_num = 60;

        $("#smsCode_btn").html(time_num + "s后重新发送");
        setTimeInterval = setInterval(function () {

            if (--time_num <= 0) {
                clearInterval(setTimeInterval);
                $("#smsCode_btn").html("获取验证码");
                $('#smsCode_btn').bind("click",send_sms)
                return false;
            }
            $("#smsCode_btn").html(time_num + "s后重新发送");


        }, 1000);

    }



    //获取新图形验证码


    $('#pic_code').bind('click',pic_C)

    function pic_C(e){

        $('#pic_code').attr('src','http://biotherm.nurunci.com/201812xmas-api/captcha.php?v='+Math.random()*1000)

    }



    //同意

    var _iis=false
    $('.click_mc').bind('click',ok_C)

    function ok_C(e){


        if (_iis) {

            $('#click_img').attr('src','images/p3-06.png')
            _iis=false

        }else{

            $('#click_img').attr('src','images/p3-05.png')
            _iis=true

        }


    }

    //提交


    $('.submit').bind('click',submit_C)

    function submit_C(e){


        $('.page4').hide()
        $('.page5').show()




        var name_txt=$('#name_txt').val()
        var mobile_num = $("#mobile_txt").val();
        var phone_code_num=$('#phone_code').val()
        var reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/;

        var province_txt=$('#province').val()
        var city_txt=$('#city').val()
        var counter_txt=$('#district').val()



        if(!name_txt){

            alert(" 请输入姓名！")

        }else if(mobile_num==null || mobile_num=="" || !reg.exec(mobile_num)){


            alert('手机号码不正确!')

        }else if(!phone_code_num){

            alert('请输入手机短信验证码!')

        }else if(province_txt=='-1'){

            alert('请选择省份!')


        }else if(city_txt=='-1'){

            alert('请选择城市!')


        }else if(counter_txt=='-1'){


            alert('请选择柜台!')


        }else if(_iis){

            alert('请选择同意隐私政策!')


        }else{


            //关闭提交

            $('.submit').unbind('click',submit_C)

            datapush(gaTrackingData['xmas_05'], FloodTrackingData['xmas_05'])

            console.log('提交!')

            var data_obj={mobile:mobile_num,user_from:1,mobile_captcha:phone_code_num,openid:openid_num,user_name:name_txt,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign,constellation:start_arr[temp_num],province:province_txt,city:city_txt,shoppe_name:counter_txt,shoppe_code:shoppe_code_txt}
            //console.log(data_obj)
            //document.getElementById("data_box").innerHTML = JSON.stringify(data_obj);

            console.log(JSON.stringify(data_obj))


            //POST  提交表单

            $.ajax({
                type: "POST",
                dataType: 'json',
                data:{mobile:mobile_num,user_from:1,mobile_captcha:phone_code_num,openid:openid_num,user_name:name_txt,utm_source:utm_source,utm_medium:utm_medium,utm_content:utm_content,utm_campaign:utm_campaign,constellation:start_arr[temp_num],province:province_txt,city:city_txt,shoppe_name:counter_txt,shoppe_code:shoppe_code_txt},
                url: "/201812xmas-api/apply.php",
                success: function(data){

                    console.log("表单:"+data)

                    if(data.result==1){//成功

                        stage.removeAllChildren()
                        stage.removeAllEventListener()
                        page2_init(1)


                    }else if(data.result==2){ //重复领取

                        stage.removeAllChildren()
                        stage.removeAllEventListener()
                        page2_init(2)


                    }else if(data.result==3){//在线申领同时返回申领地址

                        location.href=data.online_apply_url

                    }else if(data.result==4){//验证码错误


                        $('.submit').bind('click',submit_C);
                        $('#pic_code').attr('src','/201812xmas-api/captcha.php?v='+Math.random()*1000)
                        $('#verify_code').val('');
                        $('#phone_code').val('');

                        clearInterval(setTimeInterval);
                        $("#smsCode_btn").html("获取验证码");
                        $('#smsCode_btn').bind("click",send_sms)

                        alert("验证码错误!")



                    }else{


                        $('.submit').bind('click',submit_C)
                        $('#pic_code').attr('src','/201812xmas-api/captcha.php?v='+Math.random()*1000)
                        $('#verify_code').val('');
                        $('#phone_code').val('');

                        clearInterval(setTimeInterval);
                        $("#smsCode_btn").html("获取验证码");
                        $('#smsCode_btn').bind("click",send_sms)

                        alert("提交失败！")
                    }

                }
            });

        }
    }



    //活动规则

    $('.title2').click(function(){

        $('.guize').show()
        $('.form_mc').hide()


    })


    $('.guize').click(function(){


        $('.guize').hide()
        $('.form_mc').show()

    })


    //隐私条款

    $('#Private').click(function(){


        //datapush(gaTrackingData['xmas_07'], FloodTrackingData['xmas_07'])

        location.href='http://policy.lorealchina.com/privacypolicy'

    })








})