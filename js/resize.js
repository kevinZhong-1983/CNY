

function kevin_resize(o) {
    var doc = document.documentElement;

    // 设置字号的标签，如果没有传参则默认为根标签
    var el = o.el || doc;

    // 设计稿的宽度
    var design_w = o.size[0];

    // 设计稿的高度
    var design_h = o.size[1];

    // 设计稿的比例
    var design_r = design_h / design_w;

    // 是否双向检测
    var full = o.full;

    var _resize = function () {
        // 浏览器的宽度
        var window_w = doc.clientWidth;

        // 浏览器的高度
        var window_h = doc.clientHeight;

        if(window_h<500){

            window_h=500
        }

        // 字号;
        var fontSize;


        if (full) {

            /*
            如果浏览器的高宽比例小于设计稿的高度比例时，那如果还仅按照宽度缩放的话，内容肯定是放不下的。
            这就好比设计尺寸是100*200的比例，内容是一个80*180的色块，当浏览器尺寸是50*50时。
            就算是内容宽度跟据宽度比例缩小了一半是40，那内容高度按比例缩小到90也不能在浏览器50*50的尺寸内放展示出来。
            */
            if (window_h / window_w < design_r) {
                // 字号 = 浏览器的高度 ／ 设计稿的比例 ／ 设计稿的宽度
                fontSize = (window_h / design_r / design_w);
            } else {
                fontSize = (window_w / design_w);
            }

        } else {
            // 字号 = （浏览器的宽度 ／ 设计稿的宽度）*100
            fontSize = (window_w / design_w);
        }

        el.style.fontSize = fontSize * 100 + 'px';
        o.then && o.then(fontSize);




    };

    _resize();
    window.addEventListener('resize', _resize);

};
