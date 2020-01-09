// build time:Thu Jan 09 2020 23:06:22 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/animate",function(t,e,n){var i,r=i=r||{version:"1.5.2.2"};r.guid="$BAIDU$",r.$$=window[r.guid]=window[r.guid]||{global:{}},r.fx=r.fx||{},r.lang=r.lang||{},r.lang.guid=function(){return"TANGRAM$"+r.$$._counter++},r.$$._counter=r.$$._counter||1,r.lang.Class=function(){this.guid=r.lang.guid(),!this.__decontrolled&&(r.$$._instances[this.guid]=this)},r.$$._instances=r.$$._instances||{},r.lang.Class.prototype.dispose=function(){delete r.$$._instances[this.guid];for(var t in this)"function"!=typeof this[t]&&delete this[t];this.disposed=!0},r.lang.Class.prototype.toString=function(){return"[object "+(this.__type||this._className||"Object")+"]"},window.baiduInstance=function(t){return r.$$._instances[t]},r.lang.isString=function(t){return"[object String]"==Object.prototype.toString.call(t)},r.isString=r.lang.isString,r.lang.Event=function(t,e){this.type=t,this.returnValue=!0,this.target=e||null,this.currentTarget=null},r.lang.Class.prototype.fire=r.lang.Class.prototype.dispatchEvent=function(t,e){r.lang.isString(t)&&(t=new r.lang.Event(t)),!this.__listeners&&(this.__listeners={}),e=e||{};for(var n in e)t[n]=e[n];var n,i,o=this,s=o.__listeners,a=t.type;if(t.target=t.target||(t.currentTarget=o),a.indexOf("on")&&(a="on"+a),"function"==typeof o[a]&&o[a].apply(o,arguments),"object"==typeof s[a])for(n=0,i=s[a].length;n<i;n++)s[a][n]&&s[a][n].apply(o,arguments);return t.returnValue},r.lang.Class.prototype.on=r.lang.Class.prototype.addEventListener=function(t,e,n){if("function"==typeof e){!this.__listeners&&(this.__listeners={});var i,r=this.__listeners;for(t.indexOf("on")&&(t="on"+t),"object"!=typeof r[t]&&(r[t]=[]),i=r[t].length-1;i>=0;i--)if(r[t][i]===e)return e;return r[t].push(e),n&&"string"==typeof n&&(r[t][n]=e),e}},r.lang.inherits=function(t,e,n){var i,r,o=t.prototype,s=new Function;s.prototype=e.prototype,r=t.prototype=new s;for(i in o)r[i]=o[i];return t.prototype.constructor=t,t.superClass=e.prototype,"string"==typeof n&&(r.__type=n),t.extend=function(e){for(var n in e)r[n]=e[n];return t},t},r.inherits=r.lang.inherits,r.object=r.object||{},r.extend=r.object.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},r.fx.Timeline=function(t){r.lang.Class.call(this),this.interval=16,this.duration=500,this.dynamic=!0,r.object.extend(this,t)},r.lang.inherits(r.fx.Timeline,r.lang.Class,"baidu.fx.Timeline").extend({launch:function(){var t=this;return t.dispatchEvent("onbeforestart"),"function"==typeof t.initialize&&t.initialize(),t["btime"]=(new Date).getTime(),t["etime"]=t["btime"]+(t.dynamic?t.duration:0),t["pulsed"](),t},"pulsed":function(){var t=this,e=(new Date).getTime();return t.percent=(e-t["btime"])/t.duration,t.dispatchEvent("onbeforeupdate"),e>=t["etime"]?("function"==typeof t.render&&t.render(t.transition(t.percent=1)),"function"==typeof t.finish&&t.finish(),t.dispatchEvent("onafterfinish"),t.dispose(),void 0):("function"==typeof t.render&&t.render(t.transition(t.percent)),t.dispatchEvent("onafterupdate"),t["timer"]=setTimeout(function(){t["pulsed"]()},t.interval),void 0)},transition:function(t){return t},cancel:function(){this["timer"]&&clearTimeout(this["timer"]),this["etime"]=this["btime"],"function"==typeof this.restore&&this.restore(),this.dispatchEvent("oncancel"),this.dispose()},end:function(){this["timer"]&&clearTimeout(this["timer"]),this["etime"]=this["btime"],this["pulsed"]()}}),r.object.each=function(t,e){var n,i,r;if("function"==typeof e)for(i in t)if(t.hasOwnProperty(i)&&(r=t[i],n=e.call(t,r,i),n===!1))break;return t},r.dom=r.dom||{},r.dom.g=function(t){return t?"string"==typeof t||t instanceof String?document.getElementById(t):!t.nodeName||1!=t.nodeType&&9!=t.nodeType?null:t:null},r.g=r.G=r.dom.g,r.dom._g=function(t){return r.lang.isString(t)?document.getElementById(t):t},r._g=r.dom._g,r.dom.getDocument=function(t){return t=r.dom.g(t),9==t.nodeType?t:t.ownerDocument||t.document},r.dom.getComputedStyle=function(t,e){t=r.dom._g(t);var n,i=r.dom.getDocument(t);return i.defaultView&&i.defaultView.getComputedStyle&&(n=i.defaultView.getComputedStyle(t,null))?n[e]||n.getPropertyValue(e):""},r.dom._styleFixer=r.dom._styleFixer||{},r.dom._styleFilter=r.dom._styleFilter||[],r.dom._styleFilter.filter=function(t,e,n){for(var i,o=0,s=r.dom._styleFilter;i=s[o];o++)(i=i[n])&&(e=i(t,e));return e},r.string=r.string||{},r.string.toCamelCase=function(t){return t.indexOf("-")<0&&t.indexOf("_")<0?t:t.replace(/[-_][^-_]/g,function(t){return t.charAt(1).toUpperCase()})},r.dom.getStyle=function(t,e){var n=r.dom;t=n.g(t),e=r.string.toCamelCase(e);var i=t.style[e]||(t.currentStyle?t.currentStyle[e]:"")||n.getComputedStyle(t,e);if(!i||"auto"==i){var o=n._styleFixer[e];o&&(i=o.get?o.get(t,e,i):r.dom.getStyle(t,o))}return(o=n._styleFilter)&&(i=o.filter(e,i,"get")),i},r.getStyle=r.dom.getStyle,r.dom.setStyle=function(t,e,n){var i,o=r.dom;return t=o.g(t),e=r.string.toCamelCase(e),(i=o._styleFilter)&&(n=i.filter(e,n,"set")),i=o._styleFixer[e],i&&i.set?i.set(t,n,e):t.style[i||e]=n,t},r.setStyle=r.dom.setStyle,i.undope=!0;var o=function(t,e,n,o,s){var t=i.g(t);if(t){var a=new r.fx.Timeline({duration:n||400}),l={};i.object.each(e,function(e,n){var r=parseInt(i.dom.getStyle(t,n)),o=parseInt(e),s=o-r;l[n]={gap:s,start:r,end:o}}),a.transition=function(t){return t*(2-t)},a.render=function(n){i.object.each(e,function(e,r){var o=l[r];i.dom.setStyle(t,r,n*o.gap+o.start+"px")}),s&&s(n)},a.finish=function(){i.object.each(e,function(e,n){var r=l[n];i.dom.setStyle(t,n,r.end+"px")}),o&&o()},a.launch()}};e.animate=o});
//rebuild by neat 