(function ($) {

	for(var div=document.createElement("div"),divStyle=div.style,propertyName="transform",suffix="Transform",testProperties=["O"+suffix,"ms"+suffix,"Webkit"+suffix,"Moz"+suffix,propertyName],i=testProperties.length,supportProperty,supportMatrixFilter,propertyHook,propertyGet,rMatrix=/Matrix([^)]*)/;i--;)testProperties[i]in divStyle&&($.support[propertyName]=supportProperty=testProperties[i]);supportProperty||($.support.matrixFilter=supportMatrixFilter=""===divStyle.filter);div=divStyle=null;
	$.cssNumber[propertyName]=!0;
	supportProperty&&supportProperty!=propertyName?($.cssProps[propertyName]=supportProperty,supportProperty=="Moz"+suffix?propertyHook={get:function(b,e){return e?$.css(b,supportProperty).split("px").join(""):b.style[supportProperty]},set:function(b,e){b.style[supportProperty]=/matrix[^)p]*\)/.test(e)?e.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,"matrix$1$2px,$3px"):e}}:/^1\.[0-5](?:\.|$)/.test($.fn.jquery)&&(propertyHook={get:function(b,e){return e?$.css(b,supportProperty.replace(/^ms/,"Ms")):b.style[supportProperty]}})):
	supportMatrixFilter&&(propertyHook={get:function(b,e){var d=e&&b.currentStyle?b.currentStyle:b.style,a;d&&rMatrix.test(d.filter)?(a=RegExp.$1.split(","),a=[a[0].split("=")[1],a[2].split("=")[1],a[1].split("=")[1],a[3].split("=")[1]]):a=[1,0,0,1];a[4]=d?d.left:0;a[5]=d?d.top:0;return"matrix("+a+")"},set:function(b,e,d){var a=b.style,g,c,h;d||(a.zoom=1);e=matrix(e);if(!d||d.M)if(c=["Matrix(M11="+e[0],"M12="+e[2],"M21="+e[1],"M22="+e[3],"SizingMethod='auto expand'"].join(),h=(g=b.currentStyle)&&g.filter||
	a.filter||"",a.filter=rMatrix.test(h)?h.replace(rMatrix,c):h+" progid:DXImageTransform.Microsoft."+c+")",centerOrigin=$.transform.centerOrigin)a["margin"==centerOrigin?"marginLeft":"left"]=-(b.offsetWidth/2)+b.clientWidth/2+"px",a["margin"==centerOrigin?"marginTop":"top"]=-(b.offsetHeight/2)+b.clientHeight/2+"px";if(!d||d.T)a.left=e[4]+"px",a.top=e[5]+"px"}});propertyHook&&($.cssHooks[propertyName]=propertyHook);propertyGet=propertyHook&&propertyHook.get||$.css;
	$.fx.step.transform=function(b){var e=b.elem,d=b.start,a=b.end,g,c=b.pos,h,f,j,n,l=!1,m=!1,k;h=f=j=n="";if(!d||"string"===typeof d)for(k in d||(d=propertyGet(e,supportProperty)),supportMatrixFilter&&(e.style.zoom=1),g=a.split(d),2==g.length&&(a=g.join(""),b.origin=d,d="none"),b.start=d="none"==d?{translate:[0,0],rotate:0,scale:[1,1],skew:[0,0]}:unmatrix(toArray(d)),b.end=a=~a.indexOf("matrix")?unmatrix(matrix(a)):components(a),d)("rotate"==k?d[k]==a[k]:d[k][0]==a[k][0]&&d[k][1]==a[k][1])&&delete d[k];
	d.translate&&(h=" translate("+(d.translate[0]+(a.translate[0]-d.translate[0])*c+0.5|0)+"px,"+(d.translate[1]+(a.translate[1]-d.translate[1])*c+0.5|0)+"px)",l=!0);void 0!=d.rotate&&(f=" rotate("+(d.rotate+(a.rotate-d.rotate)*c)+"rad)",m=!0);d.scale&&(j=" scale("+(d.scale[0]+(a.scale[0]-d.scale[0])*c)+","+(d.scale[1]+(a.scale[1]-d.scale[1])*c)+")",m=!0);d.skew&&(n=" skew("+(d.skew[0]+(a.skew[0]-d.skew[0])*c)+"rad,"+(d.skew[1]+(a.skew[1]-d.skew[1])*c)+"rad)",m=!0);b=b.origin?b.origin+h+n+j+f:h+f+j+n;
	propertyHook&&propertyHook.set?propertyHook.set(e,b,{M:m,T:l}):e.style[supportProperty]=b};
	function matrix(b){b=b.split(")");for(var e=$.trim,d=b.length-1,a,g,c,h=1,f=0,j=0,n=1,l,m,k,p=0,q=0;d--;){a=b[d].split("(");g=e(a[0]);c=a[1];l=a=m=k=0;switch(g){case "translateX":p+=parseInt(c,10);continue;case "translateY":q+=parseInt(c,10);continue;case "translate":c=c.split(",");p+=parseInt(c[0],10);q+=parseInt(c[1]||0,10);continue;case "rotate":c=toRadian(c);l=Math.cos(c);a=Math.sin(c);m=-Math.sin(c);k=Math.cos(c);break;case "scaleX":l=c;k=1;break;case "scaleY":l=1;k=c;break;case "scale":c=c.split(",");
	l=c[0];k=1<c.length?c[1]:c[0];break;case "skewX":l=k=1;m=Math.tan(toRadian(c));break;case "skewY":l=k=1;a=Math.tan(toRadian(c));break;case "skew":l=k=1;c=c.split(",");m=Math.tan(toRadian(c[0]));a=Math.tan(toRadian(c[1]||0));break;case "matrix":c=c.split(","),l=+c[0],a=+c[1],m=+c[2],k=+c[3],p+=parseInt(c[4],10),q+=parseInt(c[5],10)}g=h*l+f*m;f=h*a+f*k;l=j*l+n*m;n=j*a+n*k;h=g;j=l}return[h,f,j,n,p,q]}
	function unmatrix(b){var e,d,a,g=b[0],c=b[1],h=b[2],f=b[3];g*f-c*h?(e=Math.sqrt(g*g+c*c),g/=e,c/=e,a=g*h+c*f,h-=g*a,f-=c*a,d=Math.sqrt(h*h+f*f),a/=d,g*(f/d)<c*(h/d)&&(g=-g,c=-c,a=-a,e=-e)):rotate=e=d=a=0;return{translate:[+b[4],+b[5]],rotate:Math.atan2(c,g),scale:[e,d],skew:[a,0]}}
	function components(b){b=b.split(")");for(var e=[0,0],d=0,a=[1,1],g=[0,0],c=b.length-1,h=$.trim,f,j;c--;)f=b[c].split("("),j=h(f[0]),f=f[1],"translateX"==j?e[0]+=parseInt(f,10):"translateY"==j?e[1]+=parseInt(f,10):"translate"==j?(f=f.split(","),e[0]+=parseInt(f[0],10),e[1]+=parseInt(f[1]||0,10)):"rotate"==j?d+=toRadian(f):"scaleX"==j?a[0]*=f:"scaleY"==j?a[1]*=f:"scale"==j?(f=f.split(","),a[0]*=f[0],a[1]*=1<f.length?f[1]:f[0]):"skewX"==j?g[0]+=toRadian(f):"skewY"==j?g[1]+=toRadian(f):"skew"==j&&(f=
	f.split(","),g[0]+=toRadian(f[0]),g[1]+=toRadian(f[1]||"0"));return{translate:e,rotate:d,scale:a,skew:g}}function toRadian(b){return~b.indexOf("deg")?parseInt(b,10)*(2*Math.PI/360):~b.indexOf("grad")?parseInt(b,10)*(Math.PI/200):parseFloat(b)}function toArray(b){b=/\(([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(b);return[b[1],b[2],b[3],b[4],b[5],b[6]]}$.transform={centerOrigin:"margin"};

	$.fn.pointPoint=function(j){var k=$.extend({"class":"pointPointArrow",distance:30},j),a=[];if(!$.support.transform)return this.destroyPointPoint=function(){},this;this.each(function(){var l=$(this),c=$('<div class="'+k["class"]+'">').appendTo("body"),m,r,s,n,p,b={},d,e,f,g,h,q=!0,j=180/Math.PI;a.push(c);$("html").bind("mousemove.pointPoint",function(a){q&&(c.show(),q=!1);m=l.offset();r=m.left+l.outerWidth()/2;s=m.top+l.outerHeight()/2;n=a.pageX;p=a.pageY;d=p-s;e=r-n;f=Math.sqrt(d*d+e*e);g=Math.atan2(d,
	e);h=1;50>f?h=0:160>f&&(h=(f-50)/110);b.marginTop=p-k.distance*Math.sin(g);b.marginLeft=n+k.distance*Math.cos(g);b.transform="rotate("+-g*j+"deg)";b.opacity=h;c.css(b)}).bind("mouseleave.pointPoint",function(){c.hide();q=!0})});this.destroyPointPoint=function(){$("html").unbind(".pointPoint");$.each(a,function(){this.remove()})};return this};


	$(function(){
		var html, timeOut, pp, items = [];
			items.push({
			name: "mightySlider &middot; Mighty Responsive Slider",
			description: "SMOOTH, POWERFUL, LIMITLESS, FULLY RESPONSIVE AND TOUCH-ENABLED JQUERY SLIDER PLUGIN FOR EVERYONE INCLUDING DESIGNERS & DEVELOPERS.",
			url: "http://mightyslider.com/"
		});
		items.push({
			name: "mightySlider &middot; Mighty Responsive Slider",
			description: "SMOOTH, POWERFUL, LIMITLESS, FULLY RESPONSIVE AND TOUCH-ENABLED JQUERY SLIDER PLUGIN FOR EVERYONE INCLUDING DESIGNERS & DEVELOPERS.",
			url: "http://mightyslider.com/"
		});
				items.push({
			name: "iLightBox &middot; Revolutionary Lightbox Plugin",
			description: "iLightBox allows you to easily create the most beautiful overlay windows using the jQuery Javascript library.<br />By combining support for a wide range of media with gorgeous skins and a user-friendly API, iLightBox aims to push the Lightbox concept as far as possible.",
			url: "http://ilightbox.net/"
		});
	
		html = '<style>'+
		'#iprodev-widget { position: fixed; z-index: 1000; bottom: 0; right: -550px; background: #FFF; -webkit-box-shadow: 0 0 5px rgba(0,0,0,.6); box-shadow: 0 0 5px rgba(0,0,0,.6); }'+
		'#iprodev-widget > div { position: relative; padding: 15px 20px 15px 20px; }'+
		'#iprodev-widget h3 { margin: 0 0 5px 0; padding: 0; text-transform: uppercase; font: bold 10px arial,helvetica,sans-serif; color: #000; }'+
		'#iprodev-widget #iprodev-widget-close { display: block; position: absolute; left: -15px; top: -15px; width: 25px; height: 25px; cursor: pointer; background-repeat: no-repeat; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQwQjg1ODk5NTM1QjExRTI5RUVGQTY4MkZCQTAxNjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQwQjg1ODlBNTM1QjExRTI5RUVGQTY4MkZCQTAxNjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDBCODU4OTc1MzVCMTFFMjlFRUZBNjgyRkJBMDE2NUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDBCODU4OTg1MzVCMTFFMjlFRUZBNjgyRkJBMDE2NUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FXlwOAAAFdElEQVR42txYS0ikRxDumfExysSIGh/riCL4hPjG6EUFIRpEEAlL0Ise1KOiKB7EF168CHqJCoogohjUg+CCJzX4uEQUBB+ERFF8KxHf7jp/6mv6H/r/Z5x1YfewW1A0XdVV31/dXdU1Y2Avk4HYROwu2IPYTcgV4g/ET8TvBT8L+afQZ8MwuHBuJrYQ+wq2CJlJOHwgviH+T/CNkL0moM+OYXACgF35jjiQ2Nra2vpLSkpKamxsrDU4ODjAQnRDdHx8fL61tXWwurr6F615R2sPiE+Jr8UuKi6C+KIYBrEbb4gzmpqaOpeXl9cVRbEprsmGdVgPO2FvdnHaXxQDAk+xIKu/v3/07OzsHB5oR5Suri6lqKhIiYiIUEwmEx8xhxx6ENbDDvbCj6cO6EWM3d1dZWRkRKmrq1MKCwuV9PR0PmIOOfSvxOAJFoBosfDu7u4Whr29vQoduSKO0ClDj3Ug2AmgDOHP7WMYExMTSmlpqZKWlvYiQ491rjBMIiJvREhH91tZWdmv3xN1dHSw+vp6dnh46DJrj46O2MzMDKOTYrm5ue7h4eEhnp6e9wsLC3+T+lZUG6cYAwMDrKenh52fn7vEuLi4YEtLS8xoNDI6LacYRhEMqoW1oKAgPyAgwL+vr4+1tLQwm832qhqKdVgPO9jDD/wJvyZnGJOTk4x29pMwsB52zjCMon77onJkZGT8uL297QBQXl7OAgMDNY4xh1wPBHv4gT9RUt31GHt7e/yDZAw6TUaHpMHAHHIZA3aw12PYA0H5wxXANaFyZzeuqqpig4ODbHZ21h4MRswhh14l2MEefoQ/TSAqxuLiIg9Ypfz8fFZTU8Pa29vtwWDEHHLoVYId7PUYRlHTLajh0NK90+zK1NQU29jYYImJifzj4+Li+Ig55NDLpNoLfxbhX4MhbxSISiujysQiIyP5x1utVj5iDjn0Mqn2MoZRZL0ZDxGUa2trGqPT01N+vGowcKIGATn0Mqn2wp9Z+Ndg7OzsaGyurq4YFQF7MN3d3fYgIIdeJtVexjCq7QJeUyj39/cdEg0f+/btW/b4+MjMZjMfMdcHIdsLf2pV1GCcnJw42OFjOzs72dPTE/Pw8OAj5vogZHsZwyjeg2e0BFCGhYU5GCInRkdHGZU8HgRGzPUFQLYX/p6lN8eOERQU5GCHnEC5V4PAiLm+AMj2MoZRdJgP6GugTEpKcghCzonk5GRNzuiDUe2FvwfhX4MRHR3tEIScE9XV1Zqc0Qej2ssYRtF83aA5gzIrK0tjVFJSosmJzc1NTc5AL5NqL/zdCP8aDKo2Gpvs7GxNThwcHGhyBnqZVHsZA/cLwZhjYmLe5OTk/OTn52fAK4oXG7SyssIuLy9ZQ0ODPSdub28ZtQw8H/AyywCNjY14sJSxsbGpubk51MlLPAEyho+Pj2F9fZ2/2GpJvb6+ZkNDQ/acwBXGd1B/xaanp+0Y5INRZ8B8fX31GLyiBBP/LDpR3jtRO+Cyx9Iz1qs9F/zAn/Dr5gwDvROaQ1c9lp6xXu259Bgmqac3hISEWBISEmLpenijd5qfn2dk89H2AT1QW1sbq62tRd90MTw8/Ae9J3+S6gyb6wwjNTXVG3Yo56/FqKysZNRAOsUwqa8/sp8Up1FRUT/Ex8dHogGkOs2bRvWaOSNcp+bmZh7E/f393fj4+DuqNkOoxOL+2l7CQAPo7+/Pr496zZwRrlNFRQUP4iUMNRBFlLH3dB//oe7SBx0mTobuNE84Ly8v9vDwwO8y6Rjk2CHkRF5eHt8lAJDsd/Lzr/hp+kH6HqcYOBliFhoayss6Si+16njsGOTFxcU8JzIzM1+D8fX/QvxmfrN/s/+ifLX/a/0vwABkRtslyLz9vAAAAABJRU5ErkJggg==) }'+
		'#iprodev-widget #iprodev-widget-close:hover { background-position: right; }'+
		'#iprodev-widget #iprodev-project { color: #A00!important; font-size: 15px; font-weight: 700; text-decoration: underline; }'+
		'#iprodev-widget #iprodev-project:hover { color: #000!important; }'+
		'#iprodev-widget #iprodev-description { text-transform: uppercase; font: bold 10px arial,helvetica,sans-serif; color: #777; margin-top: 5px; max-width: 420px; line-height: 130%; }'+
		'.pointPointArrow{ width:16px; height:16px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAQCAYAAADAvYV+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDdDODhCMEJEQkNEMTFFMDg1QTNGNzRGNDc2QjRBQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDdDODhCMENEQkNEMTFFMDg1QTNGNzRGNDc2QjRBQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowN0M4OEIwOURCQ0QxMUUwODVBM0Y3NEY0NzZCNEFCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowN0M4OEIwQURCQ0QxMUUwODVBM0Y3NEY0NzZCNEFCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmdsgNMAAAIKSURBVHjabFJNbBJBFH47DMvuNkuidwKWWELP9URMihSjJ2NJrBevjYc2NfbQAx5NLNoYYSlbsFbC0ZMHY5RCY+rJGyHBXijhTMCyYin/45utVdFO8jLJm+/n/YxQLBZBlqQLqe3trMfj2ffPzq62Wi0471BFli9GY7H3mqbNqHb7TDweH1z1+da+n0OwtDudz1u6fsUiitA5OYFcLufzTk/b0SXb7XbHwOTy1JQhEAKj4RCozQY/jo9haXn5YX5vL2pX1XHp0Wgkb+r6B2KxMAGDShIDQWDyxATbSiYTlcNDKBQKZkCz2QTGmC2ZSr0jlDI4IxDCJFlmm4lEqlKp/AE3DYMTxJ10+i0VxTGCDe+Ypu1wAtRqtd/R6/VoOpPJKKrKBHTBHk5LQ4FnGxtvaC6fN2tHZVAUZYAT+IT3vXa7beZ584N+Hz7u7gJBNa6IzhYol8v3H4XDr+roQq1W3jwISAjMzb32er13qCAIIMsyVKvVpUgkojXqdcB6zVESfPP7/S/dk5OLfRQkHIjFP3iyvq41Go1T4GBgAq8FArrb7V7sItBcd6lUCr+IRh8bOBW+FA7kJaF17JLLtfL3FsnXg4NbxtER8HUPOZBSCAaDz11O58p/6w7Nz9+4HQp9GeIDReD1YPCp0+lc7f2yHvt1mPx2d2HhppXSLP60fYfDsfav4tn5KcAAMAQCYM0O6l4AAAAASUVORK5CYII=) no-repeat; position:absolute; display:none; z-index: 100000; top:0; left:0; }'+
		'</style>';
		
		$('body').append(html);
		
		function showWidget(){
			if($('#iprodev-widget').length == 0){
				var rand = items[Math.floor(Math.random() * items.length)];
				
				var html = '<div id="iprodev-widget"><div><a id="iprodev-widget-close" title="Close"></a>'+
				'<h3>More projects from iProDev</h3>'+
				'<a href="'+rand.url+'" id="iprodev-project" target="_parent">'+rand.name+'</a>'+
				'<div id="iprodev-description">'+rand.description+'</div>'+
				'</div></div>';
		
				$('body').append(html);
				var widget = $('#iprodev-widget');
				widget.animate({ right:0 }, 600, 'easeOutCirc', function(){
					pp = $('#iprodev-project').pointPoint();
				});
				$('a#iprodev-widget-close', widget).bind('click', function(){
					$(this).unbind('click');
					widget.animate({ right:'-560px' }, 400, 'easeInCirc', function(){
						widget.remove();
						pp.destroyPointPoint();
						clearTimeout(timeOut);
						timeOut = setTimeout(function(){ showWidget(); }, 20000);
					});
				});
			}
		}
		
		timeOut = setTimeout(function(){ showWidget(); }, 10000);
	});
	$.extend( $.easing,
	{
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		}
	});
})(jQuery);