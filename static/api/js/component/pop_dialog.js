// build time:Thu Jan 30 2020 11:44:30 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_dialog",function(o,a){var e,i,n,t=o("base/tangram").T,d=o("base/class").Class,s=(o("conf/const"),o("component/pop_base")),r=d.create(function(){function o(o){27==o.keyCode&&d.hide()}function a(){var o=6==t.browser.ie?t(window).scrollTop():0,a=i.outerWidth(),e=i.outerHeight(),n=t(window).width(),d=t(window).height(),s=(d-e)/2+o,r=(n-a)/2;return{top:s>0?s:0,left:r>0?r:0}}function e(o,a){var e=t.extend({},d._partnerSort,a.bdDialogPartners),i=[];t.each(e,function(o,a){i[o]='<li><a href="#" onclick="return false;" class="popup_'+a+'" data-cmd="'+a+'">'+d._partners[a].name+"</a></li>"}),d._container.html(i.join(""))}var d=this;d._poptype=2,d._hide=function(){n&&n.hide(),i&&i.hide(),t("body").unbind("keydown",o)},d._show=function(s,r){e(d._container,r);var l=a();t.each([i,n],function(o,a){a.css({top:l.top,left:l.left}).show()}),t("body").bind("keydown",o),window._bd_share_main.F.use("trans/logger",function(o){o.dialog()})},d._init=function(){var o=['<iframe frameborder="0" class="bdshare_dialog_bg" style="display:none;"></iframe>'].join(""),a=['<div class="bdshare_dialog_box" style="display:none;">','<div class="bdshare_dialog_top">','<a class="bdshare_dialog_close" href="#" onclick="return false;" title="关闭"></a>分享到',"</div>",'<ul class="bdshare_dialog_list"></ul>','<div class="bdshare_dialog_bottom">','<a href="http://share.baidu.com/" target="_blank;">百度分享</a>',"</div>","</div>"].join("");t("body").insertHTML("beforeEnd",o+a),d._container=t(".bdshare_dialog_list"),i=t(".bdshare_dialog_box"),n=t(".bdshare_dialog_bg"),t(".bdshare_dialog_close").click(d.hide)}},s.PopBase);a.Dialog=function(){return e||(e=new r,e.init()),e}()});
//rebuild by neat 