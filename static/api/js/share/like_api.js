// build time:Wed Jan 29 2020 15:04:42 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("share/like_api",function(e,n,t){var i=(e("base/tangram").T,e("base/class").Class),c=e("share/api_base");n.Api=i.create(function(e){function n(e){window._bd_share_main.F.use("trans/data",function(n){n.get({type:"like_count",url:document.location.href,callback:function(n){var t={count:n};e&&e(t)}})})}function t(e){window._bd_share_main.F.use("trans/trans",function(n){n.run({type:"like",url:document.location.href,callback:function(n){var t={err:n};e&&e(t)}})})}var i=this,c={count:0,clicked:!1};i._init=function(){var e=i.getView();e.render(),e.init(),n(function(n){c.count=n.count,e.setNumber(n.count)})},i._processAction=function(e){"like"==e.cmd&&(c.clicked?i.getView().showDoneState(e.element):t(function(n){c.clicked=!0,0==n.err?(c.count++,i.getView().addOne(e.element,c.count)):i.getView().showDoneState(e.element)}))}},c.ApiBase)});
//rebuild by neat 