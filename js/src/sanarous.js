// build time:Thu Jan 09 2020 12:55:37 GMT+0800 (GMT+08:00)
!function(){function t(t){function e(){n>180?(clearInterval(a),t.parentNode.removeChild(t)):(n+=2,t.style.top=o-n+"px",t.style.opacity=(180-n)/180)}var n=0,o=parseInt(t.style.top),a=setInterval(e,16.7)}var e=["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"],n=Math.floor(Math.random()*e.length);document.body.addEventListener("click",function(o){if("A"!=o.target.tagName){var a=o.pageX,l=o.pageY,i=document.createElement("span");i.textContent=e[n],n=(n+1)%e.length,i.style.cssText=["z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ",l-20,"px; left: ",a,"px;"].join(""),document.body.appendChild(i),t(i)}})}();
//rebuild by neat 