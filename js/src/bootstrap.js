// build time:Tue Feb 04 2020 20:25:42 GMT+0800 (GMT+08:00)
$(document).ready(function(){$(document).trigger("bootstrap:before"),NexT.utils.isMobile()&&window.FastClick.attach(document.body),NexT.utils.lazyLoadPostsImages(),NexT.utils.registerESCKeyEvent(),NexT.utils.registerBackToTop(),$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav"),t="site-nav-on",o=e.hasClass(t),i=o?"slideUp":"slideDown",s=o?"removeClass":"addClass";e.stop()[i]("fast",function(){e[s](t)})}),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.tabs&&NexT.utils.registerTabsTag(),NexT.utils.embeddedVideoTransformer(),NexT.utils.addActiveClassToMenuItem(),NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),CONFIG.motion.enable&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")});
//rebuild by neat 