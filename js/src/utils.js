// build time:Fri Jan 31 2020 22:10:28 GMT+0800 (GMT+08:00)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this);if(!$(this).hasClass("nofancybox")){var i=e.attr("title"),t=e.parent("a");if(t.size()<1){var n=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=e.wrap('<a href="'+n+'"></a>').parent("a")}t.addClass("fancybox fancybox.image"),t.attr("rel","group"),i&&(t.append('<p class="image-caption">'+i+"</p>"),t.attr("title",i))}}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var e=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var i=location.hash;""!==i&&($(e+'li:has(a[href="'+i+'"])').addClass("active").siblings().removeClass("active"),$(i).addClass("active").siblings().removeClass("active"))}).trigger("hashchange")}),$(e+".tab").on("click",function(e){if(e.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active"),""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var i=27===e.which&&$(".search-popup").is(":visible");i&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var e=50,i=$(".back-to-top");$(window).on("scroll",function(){i.toggleClass("back-to-top-on",window.pageYOffset>e);var t=$(window).scrollTop(),n=NexT.utils.getContentVisibilityHeight(),a=t/n,s=Math.round(100*a),o=s>100?100:s;$("#scrollpercent>span").html(o)}),i.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){function e(e){return{width:e.width(),height:e.height()}}function i(e,i){return i/e*100}var t=$("iframe"),n=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],a=new RegExp(n.join("|"));t.each(function(){var t,n=this,s=$(this),o=e(s);if(this.src.search(a)>0){var r=i(o.width,o.height);s.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids",c.style.position="relative",c.style.marginBottom="20px",c.style.width="100%",c.style.paddingTop=r+"%",""===c.style.paddingTop&&(c.style.paddingTop="50%");var d=n.parentNode;if(d.insertBefore(c,n),c.appendChild(n),this.src.search("music.163.com")>0){t=e(s);var h=t.width>o.width||t.height<o.height;h&&(c.style.paddingTop=i(t.width,o.height)+"%")}}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator,i=e.userAgent,t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height(),t=e>i?e-i:$(document).height()-i;return t},getSidebarb2tHeight:function(){var e=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return e},getSidebarSchemePadding:function(){var e="block"==$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width(),n=this.isPisces()||this.isGemini()?2*t+e+2*CONFIG.sidebar.offset+this.getSidebarb2tHeight():2*t+e/2;return n}},$(document).ready(function(){function e(){var e;$(window).on("resize",function(){e&&clearTimeout(e),e=setTimeout(function(){var e=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();i(e)},0)});var t=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+t+"px)"),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+t+"px)"),i(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function i(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}e()});
//rebuild by neat 