// build time:Wed Jan 29 2020 13:41:50 GMT+0800 (GMT+08:00)
!window._bd_share_is_recently_loaded&&window._bd_share_main.F.module("base/class",function(n,a,e){var s=n("base/min_tangram").T;a.BaseClass=function(){var n=this,a={};n.on=function(n,e){var s=a[n];s||(s=a[n]=[]),s.push(e)},n.un=function(n,e){if(!n)return void(a={});var i=a[n];i&&(e?s.each(i,function(n,a){if(a==e)return i.splice(n,1),!1}):a[n]=[])},n.fire=function(e,i){var t=a[e];t&&(i=i||{},s.each(t,function(a,e){i._result=e.call(n,s.extend({_ctx:{src:n}},i))}))}};var i={};i.create=function(n,e){return e=e||a.BaseClass,function(){e.apply(this,arguments);var a=s.extend({},this);n.apply(this,arguments),this._super=a}},a.Class=i});
//rebuild by neat 