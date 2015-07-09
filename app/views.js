var Controls,Current,Menu,Page,Preview,__indexOf=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};Controls=function(e,t){var n,i;return null==t&&(t=!1),i=[document.querySelector(e),this],this.element=i[0],n=i[1],null==this.element?!1:(this.tilt=function(e){return null==e&&(e=!1),this.tile.setAttribute("class","controls-tile controls-tile-"+(e?"right":"left"))},this.init=function(){return this.element.innerHTML='<div class="controls">\n  <svg class="controls-left" width="68px" height="68px" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <circle fill="#000000" cx="34" cy="34" r="34"></circle>\n    <path d="M20.4345414,17.0146985 C20.5335111,17.0048995 20.6354204,17 20.7412494,17 L44.2930903,17 C46.3655739,17 48.0421788,18.6775848 48.0431587,20.7490886 C48.0421788,22.8176526 46.3636141,24.4962173 44.29603,24.4962173 L29.7964839,24.4962173 L49.9020246,44.5997983 C51.3659918,46.0647453 51.3659918,48.4390374 49.9020246,49.9020246 C48.4400173,51.3650119 46.0657252,51.3650119 44.6007782,49.9000648 L24.4962173,29.7964839 L24.4962173,44.29603 C24.4971972,46.364594 22.8176526,48.0441386 20.7471288,48.0451185 C18.6785647,48.0431587 17.0019598,46.3655739 17,44.2979898 L17.0009799,20.7500684 C17,20.6373802 17.0048995,20.5325312 17.0176382,20.428662 C17.019598,20.3845666 17.0254773,20.3404712 17.0303768,20.2973557 C17.0342964,20.2630593 17.0391959,20.2258232 17.0489949,20.1944665 C17.1607032,19.4281865 17.5085669,18.6913034 18.0974854,18.0984653 C18.6913034,17.5066071 19.4281865,17.1597233 20.1983861,17.0450753 C20.3257728,17.028417 20.3786872,17.0186181 20.4345414,17.0146985 Z" fill="#FFFFFF"></path>\n  </svg>\n  <svg class="controls-right" width="68px" height="68px" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <circle fill="#000000" cx="34" cy="34" r="34"></circle>\n    <path d="M20.4345414,17.0146985 C20.5335111,17.0048995 20.6354204,17 20.7412494,17 L44.2930903,17 C46.3655739,17 48.0421788,18.6775848 48.0431587,20.7490886 C48.0421788,22.8176526 46.3636141,24.4962173 44.29603,24.4962173 L29.7964839,24.4962173 L49.9020246,44.5997983 C51.3659918,46.0647453 51.3659918,48.4390374 49.9020246,49.9020246 C48.4400173,51.3650119 46.0657252,51.3650119 44.6007782,49.9000648 L24.4962173,29.7964839 L24.4962173,44.29603 C24.4971972,46.364594 22.8176526,48.0441386 20.7471288,48.0451185 C18.6785647,48.0431587 17.0019598,46.3655739 17,44.2979898 L17.0009799,20.7500684 C17,20.6373802 17.0048995,20.5325312 17.0176382,20.428662 C17.019598,20.3845666 17.0254773,20.3404712 17.0303768,20.2973557 C17.0342964,20.2630593 17.0391959,20.2258232 17.0489949,20.1944665 C17.1607032,19.4281865 17.5085669,18.6913034 18.0974854,18.0984653 C18.6913034,17.5066071 19.4281865,17.1597233 20.1983861,17.0450753 C20.3257728,17.028417 20.3786872,17.0186181 20.4345414,17.0146985 Z" id="Path" fill="#FFFFFF" sketch:type="MSShapeGroup" transform="translate(34.000000, 33.999510) scale(-1, 1) translate(-34.000000, -33.999510) "></path>\n  </svg>\n  <svg class="controls-tile" width="130px" height="150px" viewBox="0 0 260 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <polygon fill="#32394B" points="130 0 259.903811 75 259.903811 225 130 300 0.0961894323 225 0.0961894323 75 "></polygon>\n  </svg>\n</div>',this.tile=document.querySelector(".controls-tile"),document.querySelector(".controls-left").addEventListener("click",function(){return null!=t.call?t(!0):void 0}),document.querySelector(".controls-right").addEventListener("click",function(){return null!=t.call?t(!1):void 0})},this.init(),this)},Preview=function(e){var t,n;return n=[document.querySelector(e),this],this.element=n[0],t=n[1],null==this.element?!1:(this.tpl='<header class="preview-header">\n  <small class="preview-context">{{contextFull}}</small>\n  <h1 class="preview-title">{{title}}</h1>\n  {{#date}}<time class="preview-date" date="{{date}}">{{dateFormat}}</time>{{/date}}\n  <span class="preview-icon"><span class="icon-{{icon}}"></span></span>\n</header>',this.init=function(){return this.element.innerHTML='<article class="preview"></article>',this.box=this.element.querySelector(".preview")},this.show=function(e){return requestAnimFrame(function(){return t.element.className="preview-"+e.context,t.box.classList.add("preview-show"),t.box.innerHTML=Mustache.render(t.tpl,extend(e,{icon:e.text?"text":e.video?"film":"idea"}))})},this.hide=function(){return requestAnimFrame(function(){return t.box.classList.remove("preview-show")})},this.open=function(){return this.box.classList.contains("preview-show")},this.init(),this)},Current=function(e,t){var n,i;return null==t&&(t=!1),i=[document.querySelector(e),t,this],this.element=i[0],this.callback=i[1],n=i[2],null==this.element?!1:(this.tpl='<article class="current-wrap">\n  <h1 class="current-title{{^date}} current-title-style{{/date}}">{{title}}</h1>\n  {{#date}}<time class="current-date" date="{{date}}">{{dateFormat}}</time>{{/date}}\n  <div class="current-excerpt"><p>{{{excerpt}}}</p></div>\n  {{#text}}<label for="page-token" class="current-btn js-open js-page" title="touche ENTRÉE du clavier">Consulter la fiche</label>{{/text}}\n  {{#more}}<label for="page-token" class="current-btn js-page" title="touche ENTRÉE du clavier">Lire la suite</label>{{/more}}\n  {{#video}}<label for="page-token" class="current-btn js-open js-page" title="touche ENTRÉE du clavier">Voir la vidéo</label>{{/video}}\n  {{#skip}}<button class="current-btn js-skip" title="touche ENTRÉE du clavier">Passer le tutoriel</label>{{/skip}}\n  {{#end}}<label for="menu-token" class="current-btn" title="touche ESPACE du clavier">Ouvrir le tableau de bord</label>{{/end}}\n</article>',this.init=function(){return this.element.innerHTML='<section class="current"></section><div class="current-bg"></div>',this.box=this.element.querySelector(".current")},this.update=function(e,t){return null==t&&(t=!1),requestAnimFrame(function(){var i;return n.box.innerHTML=Mustache.render(n.tpl,extend(e,{skip:null!=t.call,end:"fin"===e.context})),(i=n.box.querySelector(".js-open"))&&i.addEventListener("click",function(){var t;return t=e.id,__indexOf.call(STATS.open,t)<0?STATS.open.push(e.id):void 0}),null!=t.call&&(sessionStorage.skip?t():n.box.querySelector(".js-skip").addEventListener("click",function(e){return e.preventDefault(),sessionStorage.skip=!0,t()})),null!=n.callback.call?n.callback.call(n,e):void 0})},this.isPage=function(){return null!=this.box.querySelector(".js-page")},this.init(),this)},Page=function(e,t){var n,i;return i=[document.querySelector(e),document.querySelector(t),!1,this],this.element=i[0],this.token=i[1],this.id=i[2],n=i[3],null==this.element?!1:(this.tpl='<label for="page-token" class="page-exit" title="touche ECHAP du clavier"></label>\n<article class="page-wrap{{#image}} page-full{{/image}}">\n  <div class="page-content">\n    <div class="page-content-wrap">\n      {{#video}}\n      <div class="page-video">\n        <iframe class="page-video-frame" src="https://player.vimeo.com/video/{{video}}" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n      </div>\n      {{/video}}\n      <header class="page-header">\n        <h1 class="page-title{{^date}} page-title-style{{/date}}">{{title}}</h1>\n        {{#date}}<time class="page-date" date="{{date}}">{{dateFormat}}</time>{{/date}}\n        {{#text}}<div class="page-excerpt">{{{excerptFull}}}</div>{{/text}}\n      </header>\n      {{#text}}\n      <a href="http://flottillenumerique.com" target="_blank" class="page-app">\n        <img src="public/images/app.png" width="64" height="64" class="page-app-img">\n        <p class="page-app-text">Plus d\'informations à ce sujet sur l\'application PC et tablettes <b>L\'Hermione, la Traversée des Lumières</b>.\n        <br><small>Télécharger sur flottillenumerique.com</small></p>\n      </a>\n      {{/text}}\n      <div class="page-text">{{#text}}{{{text}}}{{/text}}{{^text}}{{{excerptFull}}}{{/text}}</div>\n    </div>\n  </div>\n  {{#image}}\n  <aside class="page-cover">\n    <figure class="page-cover-img" style="background-image:url({{image}})"></figure>\n  </aside>\n  {{/image}}\n</article>\n<footer class="page-context">{{contextFull}}</footer>',this.init=function(){return this.element.innerHTML='<section class="page"></section>',this.box=this.element.querySelector(".page")},this.update=function(e){return requestAnimFrame(function(){return n.box.dataset.id=e.id,(e.text||e.video)&&(n.box.dataset.open=!0),n.box.className="page page-"+e.context,n.box.innerHTML=Mustache.render(n.tpl,e)})},this.open=function(){var e;return this.token.checked=!0,e=parseInt(n.box.dataset.id),__indexOf.call(STATS.open,e)<0&&n.box.dataset.open?STATS.open.push(e):void 0},this.close=function(){return this.token.checked=!1},this.isOpen=function(){return this.token.checked},this.init(),this)},Menu=function(e,t,n,i){var s,l;return null==n&&(n=[]),null==i&&(i=!1),l=[n.sort(function(e,t){return e.date.toString().localeCompare(t.date.toString())}),document.querySelector(e),document.querySelector(t),i,this],this.data=l[0],this.element=l[1],this.token=l[2],this.callback=l[3],s=l[4],this.contexts=[],null==this.element?!1:(this._tl='<section class="tl">\n  <div class="tl-wrap">\n    {{#items}}\n    {{#card}}<label for="page-token"{{/card}}{{^card}}<div{{/card}} class="tl-item tl-{{context}}{{#landmark}} tl-landmark{{/landmark}}{{#unlocked}} tl-unlocked{{/unlocked}}" data-id="{{id}}">\n      <span class="tl-item-title">{{title}}</span>\n      <time class="tl-item-date{{^showDate}} tl-item-date-hide{{/showDate}}" date="{{date}}">{{dateFormat}}</time>\n    {{#card}}</label>{{/card}}{{^card}}</div>{{/card}}\n    {{/items}}\n  </div>\n</section>',this._stats='<div class="stats">\n  <section class="stats-numbers-wrap">\n    {{#numbers}}\n    <article class="stats-numbers-item stats-numbers-{{key}}">\n      <span class="stats-numbers-value">{{value}}</span>\n      <span class="stats-numbers-label">{{{label}}}</span>\n    </article>\n    {{/numbers}}\n  </section>\n  <section class="stats-contexts">\n    {{#contexts}}\n    <article class="stats-context stats-context-{{key}}" data-value="{{value}}/{{total}}">\n      <div class="stats-context-progress" style="width:{{progress}}%"></div>\n      <div class="stats-context-label">{{name}}</div>\n    </article>\n    {{/contexts}}\n  </section>\n</div>',this._skip='<label class="skip-btn"><input type="checkbox" id="skip-token"{{#skip}} checked="true"{{/skip}}> Passer automatiquement le tutoriel au lancement.</label>',this.init=function(){var e,t,n,i,l,r,a,c,o,u;for(this.element.innerHTML='<label for="menu-token" class="menu-exit" title="touche ECHAP du clavier"></label>\n<section class="menu">\n  <label for="menu-token" class="menu-count" title="touche ESPACE du clavier"></label>\n  <div class="menu-wrap">\n    <div class="menu-layout">\n      <section id="timeline"></section>\n      <section class="info">\n        <section id="stats"></section>\n        <footer class="credits">\n          <div id="skip" class="skip"></div>\n          <a href="http://flottillenumerique.com" target="_blank" class="credits-app">\n            <img src="public/images/app.png" width="64" height="64" class="credits-app-img">\n            <p class="credits-app-text">Retrouvez plus de contenus sur notre application ludo-éducative PC et tablettes <b>L\'Hermione, la Traversée des Lumières</b>.\n            <br><small>Télécharger sur www.flottillenumerique.com</small></p>\n          </a>\n          <p class="credits-copyright">\n            © 2015 <a href="http://www.flottillenumerique.com" target="_blank">La Flottille Numérique</a> —\n            <a href="mailto:contact@hermione-story.com">contact@hermione-story.com</a> —\n            <a href="https://github.com/NyxSquad/hermione-story">Github</a>\n          </p>\n        </footer>\n      </section>\n    </div>\n  </div>\n</section>\n<div class="menu-bg"></div>',this.box=this.element.querySelector(".menu-wrap"),this.count=this.element.querySelector(".menu-count"),t=[],c=this.data,i=0,r=c.length;r>i;i++)n=c[i],o=n.context,__indexOf.call(t.map(function(e){return e.k}),o)<0&&t.push({k:n.context,v:n.contextFull});for(t.sort(function(e,t){return e.v.localeCompare(t.v)}),l=0,a=t.length;a>l;l++)e=t[l],"repere"!==(u=e.k)&&"fin"!==u&&this.contexts.push({key:e.k,name:e.v,total:s.data.filter(function(t){return t.context===e.k}).length,value:0});return this.count.addEventListener("click",this.load),this.update()},this.update=function(e){return requestAnimFrame(function(){var t,n,i,l;if(e)for(l=s.data,n=0,i=l.length;i>n;n++)t=l[n],t.id===e&&(t.unlocked=!0);return s.count.dataset.count=STATS.markers.length})},this.open=function(){return this.load(function(){return this.token.checked=!0})},this.close=function(){return this.token.checked=!1},this.isOpen=function(){return this.token.checked},this.load=function(e){return null==e&&(e=!1),requestAnimFrame(function(){var t,i,l,r,a,c,o,u,d,h,p,m;for(s.box.querySelector("#skip").innerHTML=Mustache.render(s._skip,{skip:sessionStorage.skip}),s.box.querySelector("#skip-token").addEventListener("click",function(e){return sessionStorage.skip?delete sessionStorage.skip:sessionStorage.skip=!0}),n=s.data.filter(function(e){return"tutoriel"!==e.context&&e.date!==!1}),a=0,u=n.length;u>a;a++)l=n[a],l.card=l.ref&&l.unlocked,l.showDate=l.date!==r,r=l.date;for(s.box.querySelector("#timeline").innerHTML=Mustache.render(s._tl,{items:n}),p=s.box.querySelectorAll("label.tl-item"),c=0,d=p.length;d>c;c++)t=p[c],t.addEventListener("click",function(e){var t;return e.preventDefault(),t=parseInt(this.dataset.id),l=s.data.filter(function(e){return e.id===t})[0],console.log(t,l,s.data),null!=s.callback.call&&null!=l&&l.ref&&s.callback.call(s,l),timeout(100,function(){return document.querySelector("#page-token").checked=!0})});for(m=s.contexts,o=0,h=m.length;h>o;o++)i=m[o],i.value=s.data.filter(function(e){return e.context===i.key&&e.unlocked}).length,i.progress=i.value/i.total*100;return s.box.querySelector("#stats").innerHTML=Mustache.render(s._stats,{contexts:s.contexts,numbers:[{key:"days",value:STATS.days,label:(STATS.days>1?"Jours":"Jour")+"<br>en mer"},{key:"markers",value:STATS.markers.length,label:STATS.markers.length>1?"Balises<br>franchies":"Balise<br>franchie"},{key:"open",value:STATS.open.length,label:STATS.open.length>1?"Escales":"Escale"}]}),null!=e.call?e.call(s):void 0})},this.init(),this)};
