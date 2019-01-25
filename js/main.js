
//加载
kevin_resize({size: [640, 1136], full:1});
loader_Fun()



//加载

function loader_Fun(){

    var callbacks = [];
    imgLoader(['images/001.png','images/002.png','images/003.png','images/004.png','images/a1.jpg','images/a2.jpg','images/a3.jpg','images/a4.jpg','images/a5.jpg','images/a6.jpg','images/a7.jpg','images/a8.jpg','images/a9.jpg','images/a10.jpg','images/a11.jpg','images/a12.jpg','images/a13.jpg','images/a14.jpg','images/a15.jpg','images/a16.jpg','images/a17.jpg','images/a18.jpg','images/a19.jpg','images/a20.jpg','images/a21.jpg','images/a22.jpg','images/a23.jpg','images/a24.jpg','images/a25.jpg','images/a26.jpg','images/a27.jpg','images/a28.jpg','images/a29.jpg','images/loop1.gif','images/AdviseVertical.png','images/b1.jpg','images/b2.jpg','images/b3.jpg','images/b4.jpg','images/b5.jpg','images/b6.jpg','images/b7.jpg','images/b8.jpg','images/b9.jpg','images/b10.jpg','images/b11.jpg','images/b12.jpg','images/b13.jpg','images/b14.jpg','images/b1.jpg','images/b15.jpg','images/b16.jpg','images/b17.jpg','images/b18.jpg','images/b19.jpg','images/b20.jpg','images/b21.jpg','images/b22.jpg','images/b23.jpg','images/b24.jpg','images/b25.jpg','images/b26.jpg','images/b27.jpg','images/loop2.gif','images/on.png','images/off.png','images/tips_01.png','images/tips_02.png','images/tips_03.png','images/tips_04.png'], function(percentage){

        var i = callbacks.length;
        callbacks.push(function(){
            setTimeout(function(){
                var percentT = percentage * 100;
                $('.loading span').html((parseInt(percentT)) + '%');
                if (percentage == 1) {
                    setTimeout(function(){


                        //SH=$(window).height()

                        $('.loading').remove();
                        $('.main').css('display','block')

                        loader_Fun2()


                    }, 50);
                }
                callbacks[i + 1] && callbacks[i + 1]();
            },5);
        });

        if(percentage == 1) {

            callbacks[0]();
        }


    });

}

//加载2

function loader_Fun2(){

    var callbacks = [];
    imgLoader(['images/c1.jpg','images/c2.jpg','images/c3.jpg','images/c4.jpg','images/c5.jpg','images/c6.jpg','images/c7.jpg','images/c8.jpg','images/c9.jpg','images/c10.jpg','images/c11.jpg','images/c12.jpg','images/c13.jpg','images/c14.jpg','images/c15.jpg','images/c16.jpg','images/c17.jpg','images/c18.jpg','images/c19.jpg','images/c20.jpg','images/c21.jpg','images/c22.jpg','images/c23.jpg','images/c24.jpg','images/c25.jpg','images/c26.jpg','images/c27.jpg','images/c28.jpg','images/loop3.gif','images/d-1.jpg','images/d-2.jpg','images/d-3.jpg','images/d-4.jpg','images/d-5.jpg','images/d-6.jpg','images/d-7.jpg','images/d-8.jpg','images/d-9.jpg','images/d-10.jpg','images/d-11.jpg','images/d-12.jpg','images/d-13.jpg','images/d-14.jpg','images/d-15.jpg','images/d-16.jpg','images/d-17.jpg','images/d-18.jpg','images/d-19.jpg','images/d-20.jpg','images/d-21.jpg','images/d-22.jpg','images/d-23.jpg','images/d-24.jpg','images/d-25.jpg','images/d-26.jpg','images/d-27.jpg','images/d-28.jpg','images/d-29.jpg','images/d-30.jpg','images/d-31.jpg','images/d-32.jpg','images/d-33.jpg','images/d-34.jpg','images/d-35.jpg','images/d-36.jpg','images/d-37.jpg','images/d-38.jpg','images/d-39.jpg','images/d-40.jpg','images/d-41.jpg','images/d-42.jpg','images/d-43.jpg','images/d-44.jpg','images/d-45.jpg','images/d-46.jpg','images/d-47.jpg','images/d-48.jpg','images/d-49.jpg','images/d-50.jpg','images/d-51.jpg','images/d-52.jpg','images/d-53.jpg','images/d-54.jpg','images/d-55.jpg','images/d-56.jpg','images/d-57.jpg','images/d-58.jpg','images/d-59.jpg','images/d-60.jpg','images/d-61.jpg','images/d-62.jpg','images/d-63.jpg','images/d-64.jpg','images/d-65.jpg','images/d-66.jpg','images/d-67.jpg','images/d-68.jpg','images/d-69.jpg','images/d-70.jpg','images/d-71.jpg','images/d-72.jpg','images/d-73.jpg','images/d-74.jpg','images/d-75.jpg','images/d-76.jpg','images/d-77.jpg','images/d-78.jpg','images/d-79.jpg','images/d-80.jpg','images/d-81.jpg','images/d-82.jpg','images/d-83.jpg','images/d-84.jpg','images/d-85.jpg','images/d-86.jpg','images/d-87.jpg','images/d-88.jpg','images/d-89.jpg','images/d-90.jpg','images/d-91.jpg','images/d-92.jpg','images/loop4.gif'], function(percentage){

        var i = callbacks.length;
        callbacks.push(function(){
            setTimeout(function(){
               // var percentT = percentage * 100;
               // $('.loading span').html((parseInt(percentT)) + '%');
                if (percentage == 1) {
                    setTimeout(function(){

                      console.log("分步加载2")


                    }, 100);
                }
                callbacks[i + 1] && callbacks[i + 1]();
            },5);
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

    var audio_player=document.getElementById('music_player')

    //背景音乐

    function play_music(){

        document.getElementById("music_player2").play();
        $("#audioBtn").css("background-image","url(images/on.png)")

    }


    function stop_music(){

        document.getElementById("music_player2").pause();
        $("#audioBtn").css("background-image","url(images/off.png)")

    }

    //解决苹果在微信端不能自动音乐的问题
    setTimeout(function(){

        $(window).scrollTop(1);

    },0);

    var audio = $('#music_player2');
    var isPlaying = false;

    document.getElementById("audioBtn").addEventListener("click",function(e){


        if(isPlaying){

            stop_music()
            isPlaying=false
        }else{

            play_music()
            isPlaying=true
        }


    })
    function playAudio() {

        var audio = $('#music_player2');
        if (audio.attr('src') == undefined) {

            audio.attr('src', audio.data('src'));
        }
        audio[0].play();
        isPlaying = true;
    }
    $(function(){

        playAudio();
        document.addEventListener("WeixinJSBridgeReady", function () {

            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {

                //network = e.err_msg.split(":")[1];  //结果在这里
                playAudio();
            });
        }, false);
    })



    var i=1

    var timer=setInterval(goTo_img,70)



    function goTo_img() {


        i++
        $('#pic').attr('src', 'images/a' + i + '.jpg')


        if(i==15){

            if($(window).width()==375&&$(window).height()==724){


                TweenMax.fromTo($(".bottom_mc"),1,{alpha:0,y:1236,ease:Strong.easeOut},{alpha:1,y:40,ease:Strong.easeOut});


            }else{

                TweenMax.fromTo($(".bottom_mc"),1,{alpha:0,y:1236,ease:Strong.easeOut},{alpha:1,y:10,ease:Strong.easeOut});


            }



        }

        if (i > 29) {

            clearInterval(timer)
            $('.tips_mc').css('display','block')
            $('#pic').attr('src', 'images/loop1.gif')

            var tips_timer=setInterval(tips_T,3000)

            function tips_T(){

                $('.tips_mc').hide()
                $('.main').bind('click',onC)
                clearInterval(tips_timer)

            }


            $('.tips_mc').click(function(){

                clearInterval(tips_timer)
                $('.tips_mc').hide()

                setTimeout(function(){

                    $('.main').bind('click',onC)

                },100)

            })
        }

    }


    TweenMax.fromTo($(".lihua"),5,{y:-$(".lihua").height()/2-100,ease:Linear.easeOut},{y:0,ease:Linear.easeOut,repeat:-1});
    TweenMax.fromTo($(".lihua2"),7,{alpha:1,y:-$(".lihua2").height()/2-100,ease:Linear.easeOut},{alpha:1,y:0,ease:Linear.easeOut,repeat:-1});
    TweenMax.fromTo($(".lihua3"),9,{y:-$(".lihua3").height()/2-100,ease:Linear.easeOut},{y:0,ease:Linear.easeOut,repeat:-1});



    var v=0

    function onC(e){


        if(!_isWeiXin){

            var audio_player2 =document.getElementById("music_player2")
            audio_player2.play();

        }


        $('.main').unbind('click',onC)




        v++

        console.log(v)

        if(v==1){

            page1_1_Fun()
            audio_player.play()

        }else if(v==2){

            page1_2_Fun()
            audio_player.play()

        }else if(v==3){


            page1_3_Fun()

        }


    }


    function page1_1_Fun(){

        var c=0
        var timer3=setInterval(goTo_img3,80)

        function goTo_img3() {


            c++
            $('#pic').attr('src', 'images/b' + c + '.jpg')


            if (c > 27) {

                clearInterval(timer3)
                $('#pic').attr('src', 'images/loop2.gif')

                $('.main').bind('click',onC)


            }
        }


    }

    function page1_2_Fun(){

        var s=0
        var timer4=setInterval(goTo_img4,80)

        function goTo_img4() {


            s++
            $('#pic').attr('src', 'images/c' + s + '.jpg')


            if (s > 28) {

                clearInterval(timer4)
                $('#pic').attr('src', 'images/loop3.gif')
                $('.main').bind('click',onC)

            }
        }


    }

    function page1_3_Fun(){


        var audio_player3 =document.getElementById("music_player3")
        audio_player3.play();


        var w=0
        var timer5=setInterval(goTo_img5,110)

        function goTo_img5() {


            w++
            $('#pic').attr('src', 'images/d-' + w + '.jpg')




            if(w==26){

                TweenMax.to($(".lihua"),.5,{alpha:0});
                TweenMax.to($(".lihua2"),.5,{alpha:0});
                TweenMax.to($(".lihua3"),.5,{alpha:0});

                TweenMax.to($(".bottom_mc"),1,{y:1236,ease:Strong.easeOut});

            }

            if(w==51){

                if($(window).width()==375&&$(window).height()==724){


                    TweenMax.fromTo($(".bottom_mc"),1,{alpha:0,y:1236,ease:Strong.easeOut},{alpha:1,y:40,ease:Strong.easeOut});


                }else{

                    TweenMax.fromTo($(".bottom_mc"),1,{alpha:0,y:1236,ease:Strong.easeOut},{alpha:1,y:10,ease:Strong.easeOut});


                }




                    TweenMax.to($(".lihua"),1,{alpha:1,});
                    TweenMax.to($(".lihua2"),1,{alpha:1});
                    TweenMax.to($(".lihua3"),1,{alpha:1});




            }


            if (w > 92) {

                clearInterval(timer5)
                $('#pic').attr('src', 'images/loop4.gif')

            }
        }


    }






})

