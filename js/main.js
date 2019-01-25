
//加载
kevin_resize({size: [640, 1136], full:1});
loader_Fun()



//加载

function loader_Fun(){

    var callbacks = [];
    imgLoader(['images/a1.jpg','images/a2.jpg'], function(percentage){

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

                        // if($(window).width()==375&&$(window).height()==724){
                        //
                        //
                        //
                        //
                        // }else{
                        //
                        //
                        //
                        //
                        // }

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


    var i=1

    var timer=setInterval(goTo_img,60)



    function goTo_img() {


        i++
        $('#pic').attr('src', 'images/a' + i + '.jpg')


        if(i==15){


            TweenMax.fromTo($(".bottom_mc"),1,{alpha:0,y:1236,ease:Strong.easeOut},{alpha:1,y:50,ease:Strong.easeOut});

        }

        if (i > 29) {

            clearInterval(timer)
            $('.tips_mc').css('display','block')
            $('#pic').attr('src', 'images/loop1.gif')

            var tips_timer=setInterval(tips_T,3000)

            function tips_T(){

                $('.tips_mc').hide()
                $('.main').bind('click',onC)

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


    TweenMax.fromTo($(".lihua"),32,{y:-1236,ease:Linear.easeOut},{y:1236,ease:Linear.easeOut,repeat:-1});
    TweenMax.fromTo($(".lihua2"),20,{alpha:1,y:-1236,ease:Linear.easeOut,delay:0},{alpha:1,delay:0,y:1236,ease:Linear.easeOut,repeat:-1},);
    TweenMax.fromTo($(".lihua3"),38,{y:-1236,ease:Linear.easeOut,delay:0},{y:1236,ease:Linear.easeOut,delay:0,repeat:-1},);


    function page1_Fun(){

        var t=30
        var timer2=setInterval(goTo_img2,80)

        function goTo_img2() {


            t++
            $('#pic').attr('src', 'images/a' + t + '.jpg')


            if (t > 44) {

                clearInterval(timer2)

                $('.main').bind('click',onC)



            }
        }
    }



    var v=0

    function onC(e){

        $('.main').unbind('click',onC)

        var audio_player=document.getElementById('music_player')


        audio_player.play()

        v++

        if(v==1){

            page1_1_Fun()

        }else if(v==2){

            page1_2_Fun()

        }else if(v==3){




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

            }
        }


    }






})

