// build time:Wed Jan 29 2020 13:32:16 GMT+0800 (GMT+08:00)
$(document).ready(function(){function t(){function t(){$(s+" "+i).removeClass(i.substring(1))}var s=".post-toc",o=$(s),i=".active-current";o.on("activate.bs.scrollspy",function(){var i=$(s+" .active").last();t(),i.addClass("active-current"),o.scrollTop(i.offset().top-o.offset().top+o.scrollTop()-o.height()/2)}).on("clear.bs.scrollspy",t),$("body").scrollspy({target:s})}t()}),$(document).ready(function(){var t=$("html"),s=200,o=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this),i="sidebar-nav-active",a="sidebar-panel-active";if(!t.hasClass(i)){var e=$("."+a),l=$("."+t.data("target"));o?e.velocity("transition.slideUpOut",s,function(){l.velocity("stop").velocity("transition.slideDownIn",s).addClass(a)}):e.animate({opacity:0},s,function(){e.hide(),l.stop().css({opacity:0,display:"block"}).animate({opacity:1},s,function(){e.removeClass(a),l.addClass(a)})}),t.siblings().removeClass(i),t.addClass(i)}}),$(".post-toc a").on("click",function(s){s.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href")),a=$(i).offset().top;o?t.velocity("stop").velocity("scroll",{offset:a+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:a},500)});var i=$(".post-toc-content"),a="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,e=i.length>0&&i.html().trim().length>0;a&&e&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});
//rebuild by neat 