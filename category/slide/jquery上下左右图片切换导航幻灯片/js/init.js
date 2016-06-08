/* 代码整理：懒人之家 www.lanrenzhijia.com */
var o = {
	init: function(){
		this.portfolio.init();
	},
	portfolio: {
		data: {
		},
		init: function(){
			$('#portfolio').portfolio(o.portfolio.data);
		}
	}
}

$(function(){ o.init(); });
