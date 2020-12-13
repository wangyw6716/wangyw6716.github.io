src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js">
var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
            var $i = $("<span />").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({　　　　　　//文字样式--------------------------
                "z-index": 9999999999999 ,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651",
                "-webkit-user-select":"none",
                "-moz-user-select":"none",
                "-ms-user-select":"none",
                "user-select":"none",
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 150,  //点击后文字上升高度
                    "opacity": 0    //透明度
                },
                1000,
                function() {
                    $i.remove();//文字消失时间
                });
        });
    });

