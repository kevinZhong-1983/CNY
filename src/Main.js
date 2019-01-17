
window.A2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 因为这是个文件是入口文件,加载时间越短越好,那么就需要这个文件里代码量越少越好，尽量在其他文件写项目逻辑
     * 装载引擎的Canvas的div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1136,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    //默认关闭自动旋转和自动resize
    //stage.autoResize=true;
    //stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE,function (e) {
    	//想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene("index",function(per){
            //加载进度
            trace("加载进度:"+per+"%");
        },function(result){
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal){



            	stage.addChild(new index.Index());


            	var page1_mc=new index.Page1()
                var arr=[]
                var k=-1
                var _iit=true
                var point_Num=new annie.Point()
                var y_num=0
                var player = $("#audio_mc")[0];
            	var click_Num=0


                stage.addChild(page1_mc)

                if($(window).width()==375&&$(window).height()==724){

                    stage.scaleMode=annie.StageScaleMode.FIXED_WIDTH
                    stage.resize()
                    stage.y=430


                }else{

                    stage.scaleMode=annie.StageScaleMode.FIXED_HEIGHT
                    stage.resize()

                }



                page1_mc.addEventListener(annie.Event.CALL_FRAME,function (e) {


                    console.log(e.data.frameName)
                    if(e.data.frameName=="open"){


                        stage.addEventListener(annie.MouseEvent.MOUSE_DOWN,onC)


                    }else{


                        if($(window).width()==375&&$(window).height()==724){


                            page1_mc.flower_mc.y=838+60

                        }else{

                            page1_mc.flower_mc.y=838


                        }

                        page1_mc.flower_mc.gotoAndPlay(2)

                        console.log(page1_mc.flower_mc.y)

                    }

                });







                function onC(e){


                    stage.removeEventListener(annie.MouseEvent.MOUSE_DOWN,onC)

                    click_Num++
            	    loop_Fun()



                    _iit=true
                }




                function loop_Fun(){




            	    for(var i=0;i<10;i++){


            	        var gold_mc=new index.gold_MC()


                        stage.addChild(gold_mc)

                        arr.push(gold_mc)

                        gold_mc.gotoAndStop(Math.floor(Math.random()*3)+1)



                        gold_mc.x=320+Math.floor(Math.random()*200)
                        gold_mc.y=-100



                        y_num=page1_mc.pig_mc.hit_mc.y

                        //console.log(page1_mc.pig_mc.hit_mc.y)



                        annie.Tween.to(gold_mc, .6, {x:page1_mc.pig_mc.hit_mc.x,y:y_num,scaleX:.4,scaleY:.4,delay:i/10,onComplete:function(){

                            k++
                            stage.removeChild(arr[k])


                            if(_iit){

                                player.play()
                                page1_mc.pig_mc.mc.gotoAndPlay(2)
                                _iit=false
                            }


                        }})


                    }



                }



                page1_mc.pig_mc.mc.addEventListener(annie.Event.END_FRAME,function (e) {


                    page1_mc.pig_mc.gotoAndPlay("in"+click_Num)


                });

                page1_mc.pig_mc.addEventListener(annie.Event.CALL_FRAME,function (e) {


                    console.log(e.data.frameName)
                    if(e.data.frameName=="end1"||e.data.frameName=="end2"){

                        stage.addEventListener(annie.MouseEvent.MOUSE_DOWN,onC)

                    }else{




                    }

                });









            }
        });
    })
});