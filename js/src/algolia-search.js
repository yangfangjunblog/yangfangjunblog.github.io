// build time:Thu Jan 09 2020 14:05:31 GMT+0800 (GMT+08:00)
$(document).ready(function(){var a=CONFIG.algolia,i=a.applicationID&&a.apiKey&&a.indexName;if(!i)return void window.console.error("Algolia Settings are invalid.");var e=instantsearch({appId:a.applicationID,apiKey:a.apiKey,indexName:a.indexName,searchFunction:function(a){var i=$("#algolia-search-input").find("input");i.val()&&a.search()}});[instantsearch.widgets.searchBox({container:"#algolia-search-input",placeholder:a.labels.input_placeholder}),instantsearch.widgets.hits({container:"#algolia-hits",hitsPerPage:a.hits.per_page||10,templates:{item:function(a){var i=a.permalink?a.permalink:CONFIG.root+a.path;return'<a href="'+i+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(i){return'<div id="algolia-hits-empty">'+a.labels.hits_empty.replace(/\$\{query}/,i.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}),instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(i){var e=a.labels.hits_stats.replace(/\$\{hits}/,i.nbHits).replace(/\$\{time}/,i.processingTimeMS);return e+'<span class="algolia-powered">  <img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia" /></span><hr />'}}}),instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})].forEach(e.addWidget,e),e.start(),$(".popup-trigger").on("click",function(a){a.stopPropagation(),$("body").append('<div class="search-popup-overlay algolia-pop-overlay"></div>').css("overflow","hidden"),$(".popup").toggle(),$("#algolia-search-input").find("input").focus()}),$(".popup-btn-close").click(function(){$(".popup").hide(),$(".algolia-pop-overlay").remove(),$("body").css("overflow","")})});
//rebuild by neat 