// build time:Fri Feb 21 2020 15:35:32 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_popup_slide",function(e,o){var n,t,i,a,s=e("base/tangram").T,p=e("base/class").Class,r=(e("conf/const"),e("component/pop_base")),d=p.create(function(){function e(e){var o=s(e).offset(),n=o.top+s(e).height()+5,i=o.left,a=t.outerHeight();return n+a>s("body").height()&&n+a>s(window).height()&&(n=o.top-a-5,n=n<0?0:n),{top:n,left:i}}function o(e,o){var p=o.mini||2,r=o.miniList||n._partnerSort.slice(0,8*p),d=[];s.each(r,function(e,o){/(iPhone | iPad | Android)/i.test(navigator.userAgent)&&"weixin"===o||(d[e]='<li><a href="#" onclick="return false;" class="popup_'+o+'" data-cmd="'+o+'">'+n._partners[o].name+"</a></li>")}),a.html(d.join("")),t.width(110*p+6),i.width(110*p+6)}var n=this;n._hide=function(){i&&i.hide(),t&&t.hide()},n._show=function(a,p){o(n._container,p);var r=e(a.element);s.each([t,i],function(e,o){o.css({top:r.top,left:r.left}).show()}),s(a.element).one("mouseout",function(){var e=!1;t.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&n.hide()},300)})},n._init=function(){var e=['<iframe frameborder="0" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),o=['<div class="bdshare_popup_box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="http://share.baidu.com/" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");s("body").insertHTML("beforeEnd",e+o),n._container=s(".bdshare_popup_box"),t=s(".bdshare_popup_box"),a=s(".bdshare_popup_list"),i=s(".bdshare_popup_bg"),t.mouseleave(n.hide)}},r.PopBase);o.Popup=function(){return n||(n=new d,n.init()),n}()});
//rebuild by neat 