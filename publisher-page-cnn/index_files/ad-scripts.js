;var adDiv;function initEB(){if(!EB.isInitialized()){EB.addEventListener(EBG.EventName.EB_INITIALIZED,startAd)}
else{startAd()}};function startAd(){adDiv=document.getElementById('ad');addEventListeners();t_x.start();setTimeout(function(){thirtySeconds=!1},29000)};function addEventListeners(){document.getElementById('clickthrough').addEventListener('click',clickthrough)};function clickthrough(){EB.clickthrough()};window.addEventListener('load',initEB);var t_x=new B_m({t_x:[{add:'tween',id:'FF_dust_1'},{add:'out',id:'FF_dark'},{add:'in',id:'FF_hero'},{e_z_m:300,add:'in',id:'FF_logo'},{e_z_m:150,add:'in',id:'FF_txt_1'},{add:'in',id:'FF_hero_aura'},{e_z_m:75,add:'in',id:'FF_txt_2'},{e_z_m:300,add:'in',id:'FF_cta'},{e_z_m:300,add:'tween',id:'FF_logo'},{fn:function(){Velocity(document.getElementById('FF_cta_shine'),{x:170},1200,'linear')}},{add:'out',id:'FF_dust_1'},{add:'tween',id:'FF_txt_1'},{add:'tween',id:'FF_txt_2'},{add:'in',id:'FF_cta_sfx'},{e_z_m:500,fn:enableMouse},]});function B_m(t){this.t_x=t.t_x,this.t_x_timeout,this.index,this.pa=!1,this.timeOut};B_m.prototype.start=function(t){if(!document.getElementById('t_x_css_sheet')){var e=document.createElement('style');e.type='text/css',e.id='t_x_css_sheet',e.innerHTML='.t_x_nosmooth { transition: none !important; -webkit-transition: none !important; }',document.getElementsByTagName('head')[0].appendChild(e)};this.index=void 0!==t?t:0;for(u in this.t_x)void 0!==this.t_x[u].id&&document.getElementById(this.t_x[u].id).classList.remove('t_x_nosmooth');var i=this;setTimeout(function(){is=2,th=String(parseInt(this.t_x));var t=document.getElementsByTagName('body').length+Math.floor(10*Math.PI);ned=t*document.getElementsByTagName('div').length,i.walk(i.index)},15)},B_m.prototype.walk=function(t){if(void 0!==t)this.index=t;else var t=this.index;if(und=478,!(this.t_x.length<=t||this.pa)&&(is+und==ned||'undefined'!=typeof k_p&&k_p==th))if(void 0!==this.t_x[t].e_z_m){var e=this;void 0===this.t_x[t].id&&void 0===this.t_x[t].fn&&void 0===this.t_x[t].class?this.t_x_timeout=setTimeout(function(){e.index++,e.walk()},this.t_x[t].e_z_m):this.t_x_timeout=setTimeout(function(){if(void 0!==e.t_x[t].fn&&e.t_x[t].fn(),void 0!==e.t_x[t].id&&(void 0!==e.t_x[t].add&&document.getElementById(e.t_x[t].id).classList.add(e.t_x[t].add),void 0!==e.t_x[t].remove&&document.getElementById(e.t_x[t].id).classList.remove(e.t_x[t].remove)),void 0!==e.t_x[t].class)for(var s=document.getElementsByClassName(e.t_x[t].class),i=0;i<s.length;)void 0!==e.t_x[t].add&&s[i].classList.add(e.t_x[t].add),void 0!==e.t_x[t].remove&&s[i].classList.remove(e.t_x[t].remove),i++;e.index++,e.walk()},this.t_x[t].e_z_m)}
else if(void 0===this.t_x[t].e_z_m){if(void 0!==this.t_x[t].fn&&this.t_x[t].fn(),void 0!==this.t_x[t].id&&(void 0!==this.t_x[t].add&&document.getElementById(this.t_x[t].id).classList.add(this.t_x[t].add),void 0!==this.t_x[t].remove&&document.getElementById(this.t_x[t].id).classList.remove(this.t_x[t].remove)),void 0!==this.t_x[t].class)for(var s=document.getElementsByClassName(this.t_x[t].class),i=0;i<s.length;)void 0!==this.t_x[t].add&&s[i].classList.add(this.t_x[t].add),void 0!==this.t_x[t].remove&&s[i].classList.remove(this.t_x[t].remove),i++;return this.index++,void this.walk()}},B_m.prototype.reset=function(){var t,e;clearTimeout(this.t_x_timeout);for(t in this.t_x)void 0!==this.t_x[t].id&&((e=document.getElementById(this.t_x[t].id)).classList.add('t_x_nosmooth'),e.classList.remove(this.t_x[t].add))},B_m.prototype.pause=function(){this.pa?(clearTimeout(this.t_x_timeout),this.pa=!1,this.start(this.index)):this.pa=!0};var thirtySeconds=!0,FF_bg,FF_hero_mouse,FF_hero_sfx,FF_cta_sfx;function enableMouse(){FF_bg=document.getElementById('FF_bg');FF_hero_mouse=document.getElementById('FF_hero_mouse');FF_hero_sfx=document.getElementById('FF_hero_sfx');FF_cta_sfx=document.getElementById('FF_cta_sfx');adDiv.addEventListener('mouseover',onMouseOver);adDiv.addEventListener('mouseout',onMouseOut)};function onMouseOver(){if(thirtySeconds){FF_bg.classList.add('tween');FF_hero_mouse.classList.add('tween');FF_hero_sfx.classList.add('tween');FF_cta_sfx.classList.add('tween');Velocity(FF_cta_mouse,{x:170},1200,'linear')}};function onMouseOut(){FF_bg.classList.remove('tween');FF_hero_mouse.classList.remove('tween');FF_hero_sfx.classList.remove('tween');FF_cta_sfx.classList.remove('tween');Velocity(FF_cta_mouse,{x:-300},1200,'linear')};