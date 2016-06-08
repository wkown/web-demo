/* 代码整理：懒人之家 www.lanrenzhijia.com */
function Slideid() {
    var url = location.search;
    if (url.length > 1) {
        url = url.substring(1);
        var Url__ = url.split("&");
        var oid = "";
        for (var i = 0; i < Url__.length; i++) {
            var Url___ = Url__[i].split("=");
            if (Url___.length > 1) {
                if (Url___[0].toLowerCase() == "oid") {
                    oid = Url___[1] - 1;
                }
            }
        }
        if (oid < 1 || oid == "") {
            oid = 0;
        }
    } else {
        oid = 0;
    }
    return oid;
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */
$.fn.extend({
    TrunAd: function (options) {
        var auto = null;
        var obj = $(this);
        counta = $("a", obj).size();
        if (p_num == null || p_num == "") {
            var na = 0;
        } else {
            var na = p_num;
        }
        var settings = { timer: 4000, menu: "#play_text" };
        options = options || {};
        $.extend(settings, options);

        $("a", this).hide();
        $(this).children("a").eq(na).show()
        $(settings.menu + " li").eq(na).css({ "background": "#7f0019" });

        $(settings.menu + " li").mouseover(function () {
            ia = $(this).attr("value") - 1;
            na = ia;
            //alert(na);
            if (na >= counta) return;
            $("a", obj).filter(":visible").fadeOut(200, function () { $(this).parent().children().eq(na).fadeIn(300); });
            $(this).css({ "background": "#7f0019" }).siblings().css({ "background": "#fff" });
            clearInterval(auto);
        }).mouseout(function () {
            //auto = setInterval(showAuto, settings.timer);
        });

        auto = setInterval(showAuto, settings.timer);
        obj.hover(function () { clearInterval(auto) }, function () { auto = setInterval(showAuto, settings.timer); }); 
        function showAuto() {
            na = na >= (counta - 1) ? 0 : ++na;
            if (na >= counta) return;
            $("a", obj).filter(":visible").fadeOut(200, function () { $(this).parent().children().eq(na).fadeIn(300); });
            $(settings.menu + " li").eq(na).css({ "background": "#7f0019" }).siblings().css({ "background": "#fff" });
        }
    }
});
/* 代码整理：懒人之家 www.lanrenzhijia.com */