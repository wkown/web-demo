/* 代码整理：懒人之家 www.lanrenzhijia.com */
(function() {
    var monkey = "";
    var IMG_URL = "http://nsclick.baidu.com/h.gif";
    $.ClickMonkey = function(options) {
        var defaults = {
            pid: 303,
            v_value: "ttplayer/web"
        };
        var op = $.extend(defaults, options);
        IMG_URL += "?pid=" + op.pid + "&v=" + op.v_value;
        addEvent(document.body, 'mousedown',
        function(ev) {
            var ev = window.event || ev;
            var el = ev.srcElement || ev.target;
            if (el.tagName.toUpperCase() != "A") {
                if (el.parentNode.tagName.toUpperCase() == "A") {
                    el = el.parentNode
                } else {
                    if (! (el.tagName.toUpperCase() == "INPUT" && (el.type.toLowerCase() == 'checkbox' || el.type.toLowerCase() == 'radio'))) {
                        return
                    }
                }
            }
            monkey = "";
            var xp = getXPath(el).join('-');
            var obj = {
                xp: xp
            };
            var href = el.getAttribute('href', 2);
            if (href && !(/^javascript|#/.test(href))) {
                obj.objurl = enc(href)
            } else {
                obj.objurl = "none"
            }
            if (el.innerHTML && !(/^\s*</i.test(el.innerHTML)) && !(/>\s*$/i.test(el.innerHTML))) {
                obj.title = enc(el.innerHTML)
            } else {
                obj.title = "none";
                if (el.getAttribute("params")) {
                    obj.title = el.getAttribute("params")
                }
            }
			if($(el).attr("class") && !(/^\s*</i.test($(el).attr("class"))) && !(/>\s*$/i.test($(el).attr("class")))){
				obj.classMark = enc($(el).attr("class"));
			}else{
				obj.classMark = "none";
			}
            if (monkey) {
                obj.monkey = monkey
            }
            lg(obj)
        });
        return {
            log: ex_call
        }
    };
    var PREFIX = "bd_clickmonkey";
    var lg = function(param) {
        var da = (new Date()).getTime();
        var o = window[PREFIX + da] = new Image();
        var str = "";
        for (var i in param) {
            str += ("&" + i + "=" + param[i])
        }
        o.src = IMG_URL + "&r=" + da + str;
        o.onload = o.onerror = function() {
            o = null
        }
    };
    var getXPath = function(node, path) {
        path = path || [];
        monkey = node.monkey || node.getAttribute('monkey') || monkey;
        if (node.parentNode && node.parentNode.tagName.toUpperCase() != "BODY") {
            path = getXPath(node.parentNode, path)
        }
        if (node.previousSibling) {
            var count = 1;
            var sibling = node.previousSibling;
            do {
                if (sibling.nodeType == 1 && sibling.nodeName == node.nodeName) {
                    count++
                }
                sibling = sibling.previousSibling
            } while ( sibling )
        }
        if (node.nodeType == 1) {
            path.push(node.nodeName.toLowerCase() + (count > 1 ? count: ''))
        }
        return path
    };
    var enc = function(s) {
        return encodeURIComponent(s)
    };
    var addEvent = function(elm, evType, fn, useCapture) {
        if (elm.addEventListener) {
            elm.addEventListener(evType, fn, useCapture);
            return true
        } else if (elm.attachEvent) {
            var r = elm.attachEvent("on" + evType, fn);
            return r
        }
    };
    var ex_call = function(s, hr, ht) {
        var obj = {
            xp: '_' + s + '_'
        };
        if (hr) {
            obj.objurl = enc(hr)
        } else {
            obj.objurl = "none"
        }
        if (ht) {
            obj.title = enc(ht)
        } else {
            obj.title = "none"
        }
        lg(obj)
    }
})(jQuery)
/* 代码整理：懒人之家 www.lanrenzhijia.com */