// build time:Wed Jan 29 2020 16:56:17 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/share_view",function(t,e,n){var a=t("base/tangram").T,i=t("base/class").Class,s=t("conf/const"),r=t("view/view_base"),o={btn:"bdsharebuttonbox",count:"bds_count"};e.View=i.create(function(t){function e(){var e=t.tag||"";return a("."+o.btn).each(function(t,n){e&&a(n).attr(s.CONFIG_TAG_ATTR)!=e||(r._entities.push(n),a(n).removeClass(function(t,e){var n=e.match(/bdshare-button-style\d*-\d*/g);if(n)return n.join(" ")}),a(n).addClass("bdshare-button-style"+c+"-"+u))}),r._entities}function n(){if(t.bdCustomStyle){var e=document.createElement("link");e.href=t.bdCustomStyle,e.rel="styleSheet",e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e)}else window._bd_share_main.F.use("share_style"+c+"_"+u+".css")}function i(){a("."+o.btn).each(function(t,e){a(e).children("a,span").each(function(t,e){var n=a(e).attr(s.CMD_ATTR);n&&window._bd_share_main.F.use("component/partners",function(t){var i=t.partners,s=i[n]?"分享到"+i[n].name:"";!a(e).attr("title")&&s&&a(e).attr("title",s)})})})}var r=this,c=t.bdStyle||0,u="|16|24|32|".indexOf("|"+t.bdSize+"|")>-1?t.bdSize:16;r._buttonType=0,r.render=function(t){e(),i()},r._init=function(){n(),a(r._entities).find("."+o.count).length>0&&r.fire("getsharecount")},r.setNumber=function(t,e){a(r._entities).find("."+o.count).html(e).attr("title","累计分享"+t+"次")}},r.ViewBase)});
//rebuild by neat 