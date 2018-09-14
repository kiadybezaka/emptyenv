(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/classes\\cl-slider.js","/classes")},{"buffer":9,"ngpmcQ":12}],2:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var Sticky=function(){'use strict';var instance=this;instance.headerSticky=$('.js-sticky-header');var scrollHandler=function(offset,element){if($(window).scrollTop()>offset){$(element).addClass('sticky')}else{$(element).removeClass('sticky')}};var headerScroll=function(offset,element){var previousScroll=0;$(window).scroll(function(){var currentScroll=$(this).scrollTop();if(currentScroll>previousScroll){}else{}
scrollHandler(offset,element)
previousScroll=currentScroll})};var initSticky=function(){var menuOffset;menuOffset=60;if((instance.headerSticky).length){headerScroll(menuOffset,(instance.headerSticky))}};instance.initSticky=initSticky};module.exports=new Sticky()}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/classes\\cl-sticky.js","/classes")},{"buffer":9,"ngpmcQ":12}],3:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var alertify=require('alertifyjs');var JsTest=function(){   
   
   
    var instance=this;   
   
   
    instance.jsTestBtn='.js-test-btn';   
    var testJs=function(){console.log('Javascript cl-test ok');   }
var testWsFunc=function(){var webserviceUrl='/testWs';$.ajax({url:webserviceUrl,type:'get',dataType:'json',contentType:'application/json',complete:function(){console.log('WS completed')},success:function(response){console.log('WS success');if(response.Success===!0){console.log('WS success true')}},error:function(){console.log('Webservice error')}})};   
   
   
    instance.testJs=testJs;instance.testWsFunc=testWsFunc}
module.exports=new JsTest()}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/classes\\cl-test.js","/classes")},{"alertifyjs":8,"buffer":9,"ngpmcQ":12}],4:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var slick=require('slick-carousel');var _sliders=require('../classes/cl-slider');module.exports=function(){'use strict';var homeBanner='.js-slider-banner';$(homeBanner).slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4000,fade:!0,speed:500,cssEase:'linear',dots:!1,center:!0,infinite:!0,arrows:!1});var roadSlider='.js-slide-road';var fixBrokenAreaReference=function(className){$(className).each(function(){const $slide=$(this);if($slide.attr('aria-describedby')){$(this).attr('id',$slide.attr('aria-describedby'))}})}
$(roadSlider).slick({rows:1,adaptiveHeight:!0,slidesToShow:3,slidesToScroll:3,dots:!1,infinite:!1,arrows:!0});fixBrokenAreaReference('.section-road__item');var bjjSlider='.js-slide-bjj-medal';$(bjjSlider).slick({rows:1,adaptiveHeight:!0,slidesToShow:3,slidesToScroll:3,dots:!1,infinite:!1,nextArrow:'<i class="fa slick-next fa-angle-right"></i>',prevArrow:'<i class="fa slick-prev fa-angle-left"></i>',arrows:!0,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});fixBrokenAreaReference('.section-bjj__box');var certifSlider='.js-slide-certification';$(certifSlider).slick({rows:1,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!1,nextArrow:'<i class="fa slick-next fa-angle-right"></i>',prevArrow:'<i class="fa slick-prev fa-angle-left"></i>',arrows:!0});fixBrokenAreaReference('.certification__content-item')}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\co-slider.js","/controllers")},{"../classes/cl-slider":1,"buffer":9,"ngpmcQ":12,"slick-carousel":16}],5:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var _sticky=require('../classes/cl-sticky');module.exports=function(){'use strict';_sticky.initSticky()}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\co-sticky.js","/controllers")},{"../classes/cl-sticky":2,"buffer":9,"ngpmcQ":12}],6:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var _jsTest=require('./../classes/cl-test');var slick=require('slick-carousel');var simpleParallax=require('simple-parallax-jquery');var lightbox=require('lightbox2');module.exports=function(){  'use strict';$('.js-parallax').simpleParallax({scale:'1.30',orientation:'up'});$(_jsTest.jsTestBtn).on('click',function(e){e.preventDefault();_jsTest.testWsFunc();  })
$(document).on('click','a[href^="#"]',function(event){event.preventDefault();$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top-150},800)});lightbox.option({showImageNumberLabel:!0,albumLabel:"Image %1 sur %2"})
$('.lb-image').attr('alt','lightbox image');$('.lb-prev').append("<span class='hide-only'>no text</span>");$('.lb-next').append("<span class='hide-only'>no text</span>");$('.lb-cancel').append("<span class='hide-only'>no text</span>")}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\co-test.js","/controllers")},{"./../classes/cl-test":3,"buffer":9,"lightbox2":14,"ngpmcQ":12,"simple-parallax-jquery":15,"slick-carousel":16}],7:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){global.jQuery=require('jquery');global.$=require('jquery');var slick=require('./controllers/co-slider');var sticky=require('./controllers/co-sticky');var jsTest=require('./controllers/co-test');$(window).on("load",function(){slick();jsTest();sticky()})}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b4beb4d6.js","/")},{"./controllers/co-slider":4,"./controllers/co-sticky":5,"./controllers/co-test":6,"buffer":9,"jquery":13,"ngpmcQ":12}],8:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){(function(window){'use strict';var keys={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39};var defaults={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:'pulse',notifier:{delay:5,position:'bottom-right',closeButton:!1},glossary:{title:'AlertifyJS',ok:'OK',cancel:'Cancel',acccpt:'Accept',deny:'Deny',confirm:'Confirm',decline:'Decline',close:'Close',maximize:'Maximize',restore:'Restore',},theme:{input:'ajs-input',ok:'ajs-ok',cancel:'ajs-cancel',}};var openDialogs=[];function addClass(element,classNames){element.className+=' '+classNames}
function removeClass(element,classNames){var original=element.className.split(' ');var toBeRemoved=classNames.split(' ');for(var x=0;x<toBeRemoved.length;x+=1){var index=original.indexOf(toBeRemoved[x]);if(index>-1){original.splice(index,1)}}
element.className=original.join(' ')}
function isRightToLeft(){return window.getComputedStyle(document.body).direction==='rtl'}
function getScrollTop(){return((document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop)}
function getScrollLeft(){return((document.documentElement&&document.documentElement.scrollLeft)||document.body.scrollLeft)}
function clearContents(element){while(element.lastChild){element.removeChild(element.lastChild)}}
function copy(src){if(null===src){return src}
var cpy;if(Array.isArray(src)){cpy=[];for(var x=0;x<src.length;x+=1){cpy.push(copy(src[x]))}
return cpy}
if(src instanceof Date){return new Date(src.getTime())}
if(src instanceof RegExp){cpy=new RegExp(src.source);cpy.global=src.global;cpy.ignoreCase=src.ignoreCase;cpy.multiline=src.multiline;cpy.lastIndex=src.lastIndex;return cpy}
if(typeof src==='object'){cpy={};for(var prop in src){if(src.hasOwnProperty(prop)){cpy[prop]=copy(src[prop])}}
return cpy}
return src}
function destruct(instance,initialize){var root=instance.elements.root;root.parentNode.removeChild(root);delete instance.elements;instance.settings=copy(instance.__settings);instance.__init=initialize;delete instance.__internal}
var on=(function(){if(document.addEventListener){return function(el,event,fn,useCapture){el.addEventListener(event,fn,useCapture===!0)}}else if(document.attachEvent){return function(el,event,fn){el.attachEvent('on'+event,fn)}}}());var off=(function(){if(document.removeEventListener){return function(el,event,fn,useCapture){el.removeEventListener(event,fn,useCapture===!0)}}else if(document.detachEvent){return function(el,event,fn){el.detachEvent('on'+event,fn)}}}());var transition=(function(){var t,type;var supported=!1;var transitions={'animation':'animationend','OAnimation':'oAnimationEnd oanimationend','msAnimation':'MSAnimationEnd','MozAnimation':'animationend','WebkitAnimation':'webkitAnimationEnd'};for(t in transitions){if(document.documentElement.style[t]!==undefined){type=transitions[t];supported=!0;break}}
return{type:type,supported:supported}}());function delegate(context,method){return function(){if(arguments.length>0){var args=[];for(var x=0;x<arguments.length;x+=1){args.push(arguments[x])}
args.push(context);return method.apply(context,args)}
return method.apply(context,[null,context])}}
function createCloseEvent(index,button){return{index:index,button:button,cancel:!1}}
function dispatchEvent(eventType,instance){if(typeof instance.get(eventType)==='function'){return instance.get(eventType).call(instance)}}
var dialog=(function(){var
usedKeys=[],reflow=null,isSafari=window.navigator.userAgent.indexOf('Safari')>-1&&window.navigator.userAgent.indexOf('Chrome')<0,templates={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>',},classes={animationIn:'ajs-in',animationOut:'ajs-out',base:'alertify',basic:'ajs-basic',capture:'ajs-capture',closable:'ajs-closable',fixed:'ajs-fixed',frameless:'ajs-frameless',hidden:'ajs-hidden',maximize:'ajs-maximize',maximized:'ajs-maximized',maximizable:'ajs-maximizable',modeless:'ajs-modeless',movable:'ajs-movable',noSelection:'ajs-no-selection',noOverflow:'ajs-no-overflow',noPadding:'ajs-no-padding',pin:'ajs-pin',pinnable:'ajs-pinnable',prefix:'ajs-',resizable:'ajs-resizable',restore:'ajs-restore',shake:'ajs-shake',unpinned:'ajs-unpinned',};function initialize(instance){if(!instance.__internal){delete instance.__init;if(!instance.__settings){instance.__settings=copy(instance.settings)}
if(null===reflow){document.body.setAttribute('tabindex','0')}
var setup;if(typeof instance.setup==='function'){setup=instance.setup();setup.options=setup.options||{};setup.focus=setup.focus||{}}else{setup={buttons:[],focus:{element:null,select:!1},options:{}}}
if(typeof instance.hooks!=='object'){instance.hooks={}}
var buttonsDefinition=[];if(Array.isArray(setup.buttons)){for(var b=0;b<setup.buttons.length;b+=1){var ref=setup.buttons[b],cpy={};for(var i in ref){if(ref.hasOwnProperty(i)){cpy[i]=ref[i]}}
buttonsDefinition.push(cpy)}}
var internal=instance.__internal={isOpen:!1,activeElement:document.body,timerIn:undefined,timerOut:undefined,buttons:buttonsDefinition,focus:setup.focus,options:{title:undefined,modal:undefined,basic:undefined,frameless:undefined,pinned:undefined,movable:undefined,moveBounded:undefined,resizable:undefined,autoReset:undefined,closable:undefined,closableByDimmer:undefined,maximizable:undefined,startMaximized:undefined,pinnable:undefined,transition:undefined,padding:undefined,overflow:undefined,onshow:undefined,onclosing:undefined,onclose:undefined,onfocus:undefined,onmove:undefined,onmoved:undefined,onresize:undefined,onresized:undefined,onmaximize:undefined,onmaximized:undefined,onrestore:undefined,onrestored:undefined},resetHandler:undefined,beginMoveHandler:undefined,beginResizeHandler:undefined,bringToFrontHandler:undefined,modalClickHandler:undefined,buttonsClickHandler:undefined,commandsClickHandler:undefined,transitionInHandler:undefined,transitionOutHandler:undefined,destroy:undefined};var elements={};elements.root=document.createElement('div');elements.root.className=classes.base+' '+classes.hidden+' ';elements.root.innerHTML=templates.dimmer+templates.modal;elements.dimmer=elements.root.firstChild;elements.modal=elements.root.lastChild;elements.modal.innerHTML=templates.dialog;elements.dialog=elements.modal.firstChild;elements.dialog.innerHTML=templates.reset+templates.commands+templates.header+templates.body+templates.footer+templates.resizeHandle+templates.reset;elements.reset=[];elements.reset.push(elements.dialog.firstChild);elements.reset.push(elements.dialog.lastChild);elements.commands={};elements.commands.container=elements.reset[0].nextSibling;elements.commands.pin=elements.commands.container.firstChild;elements.commands.maximize=elements.commands.pin.nextSibling;elements.commands.close=elements.commands.maximize.nextSibling;elements.header=elements.commands.container.nextSibling;elements.body=elements.header.nextSibling;elements.body.innerHTML=templates.content;elements.content=elements.body.firstChild;elements.footer=elements.body.nextSibling;elements.footer.innerHTML=templates.buttons.auxiliary+templates.buttons.primary;elements.resizeHandle=elements.footer.nextSibling;elements.buttons={};elements.buttons.auxiliary=elements.footer.firstChild;elements.buttons.primary=elements.buttons.auxiliary.nextSibling;elements.buttons.primary.innerHTML=templates.button;elements.buttonTemplate=elements.buttons.primary.firstChild;elements.buttons.primary.removeChild(elements.buttonTemplate);for(var x=0;x<instance.__internal.buttons.length;x+=1){var button=instance.__internal.buttons[x];if(usedKeys.indexOf(button.key)<0){usedKeys.push(button.key)}
button.element=elements.buttonTemplate.cloneNode();button.element.innerHTML=button.text;if(typeof button.className==='string'&&button.className!==''){addClass(button.element,button.className)}
for(var key in button.attrs){if(key!=='className'&&button.attrs.hasOwnProperty(key)){button.element.setAttribute(key,button.attrs[key])}}
if(button.scope==='auxiliary'){elements.buttons.auxiliary.appendChild(button.element)}else{elements.buttons.primary.appendChild(button.element)}}
instance.elements=elements;internal.resetHandler=delegate(instance,onReset);internal.beginMoveHandler=delegate(instance,beginMove);internal.beginResizeHandler=delegate(instance,beginResize);internal.bringToFrontHandler=delegate(instance,bringToFront);internal.modalClickHandler=delegate(instance,modalClickHandler);internal.buttonsClickHandler=delegate(instance,buttonsClickHandler);internal.commandsClickHandler=delegate(instance,commandsClickHandler);internal.transitionInHandler=delegate(instance,handleTransitionInEvent);internal.transitionOutHandler=delegate(instance,handleTransitionOutEvent);for(var opKey in internal.options){if(setup.options[opKey]!==undefined){instance.set(opKey,setup.options[opKey])}else if(alertify.defaults.hasOwnProperty(opKey)){instance.set(opKey,alertify.defaults[opKey])}else if(opKey==='title'){instance.set(opKey,alertify.defaults.glossary[opKey])}}
if(typeof instance.build==='function'){instance.build()}}
document.body.appendChild(instance.elements.root)}
var scrollX,scrollY;function saveScrollPosition(){scrollX=getScrollLeft();scrollY=getScrollTop()}
function restoreScrollPosition(){window.scrollTo(scrollX,scrollY)}
function ensureNoOverflow(){var requiresNoOverflow=0;for(var x=0;x<openDialogs.length;x+=1){var instance=openDialogs[x];if(instance.isModal()||instance.isMaximized()){requiresNoOverflow+=1}}
if(requiresNoOverflow===0&&document.body.className.indexOf(classes.noOverflow)>=0){removeClass(document.body,classes.noOverflow);preventBodyShift(!1)}else if(requiresNoOverflow>0&&document.body.className.indexOf(classes.noOverflow)<0){preventBodyShift(!0);addClass(document.body,classes.noOverflow)}}
var top='',topScroll=0;function preventBodyShift(add){if(alertify.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight){if(add){topScroll=scrollY;top=window.getComputedStyle(document.body).top;addClass(document.body,classes.fixed);document.body.style.top=-scrollY+'px'}else{scrollY=topScroll;document.body.style.top=top;removeClass(document.body,classes.fixed);restoreScrollPosition()}}}
function updateTransition(instance,value,oldValue){if(typeof oldValue==='string'){removeClass(instance.elements.root,classes.prefix+oldValue)}
addClass(instance.elements.root,classes.prefix+value);reflow=instance.elements.root.offsetWidth}
function updateDisplayMode(instance){if(instance.get('modal')){removeClass(instance.elements.root,classes.modeless);if(instance.isOpen()){unbindModelessEvents(instance);updateAbsPositionFix(instance);ensureNoOverflow()}}else{addClass(instance.elements.root,classes.modeless);if(instance.isOpen()){bindModelessEvents(instance);updateAbsPositionFix(instance);ensureNoOverflow()}}}
function updateBasicMode(instance){if(instance.get('basic')){addClass(instance.elements.root,classes.basic)}else{removeClass(instance.elements.root,classes.basic)}}
function updateFramelessMode(instance){if(instance.get('frameless')){addClass(instance.elements.root,classes.frameless)}else{removeClass(instance.elements.root,classes.frameless)}}
function bringToFront(event,instance){var index=openDialogs.indexOf(instance);for(var x=index+1;x<openDialogs.length;x+=1){if(openDialogs[x].isModal()){return}}
if(document.body.lastChild!==instance.elements.root){document.body.appendChild(instance.elements.root);openDialogs.splice(openDialogs.indexOf(instance),1);openDialogs.push(instance);setFocus(instance)}
return!1}
function optionUpdated(instance,option,oldValue,newValue){switch(option){case 'title':instance.setHeader(newValue);break;case 'modal':updateDisplayMode(instance);break;case 'basic':updateBasicMode(instance);break;case 'frameless':updateFramelessMode(instance);break;case 'pinned':updatePinned(instance);break;case 'closable':updateClosable(instance);break;case 'maximizable':updateMaximizable(instance);break;case 'pinnable':updatePinnable(instance);break;case 'movable':updateMovable(instance);break;case 'resizable':updateResizable(instance);break;case 'transition':updateTransition(instance,newValue,oldValue);break;case 'padding':if(newValue){removeClass(instance.elements.root,classes.noPadding)}else if(instance.elements.root.className.indexOf(classes.noPadding)<0){addClass(instance.elements.root,classes.noPadding)}
break;case 'overflow':if(newValue){removeClass(instance.elements.root,classes.noOverflow)}else if(instance.elements.root.className.indexOf(classes.noOverflow)<0){addClass(instance.elements.root,classes.noOverflow)}
break;case 'transition':updateTransition(instance,newValue,oldValue);break}
if(typeof instance.hooks.onupdate==='function'){instance.hooks.onupdate.call(instance,option,oldValue,newValue)}}
function update(instance,obj,callback,key,value){var result={op:undefined,items:[]};if(typeof value==='undefined'&&typeof key==='string'){result.op='get';if(obj.hasOwnProperty(key)){result.found=!0;result.value=obj[key]}else{result.found=!1;result.value=undefined}}
else{var old;result.op='set';if(typeof key==='object'){var args=key;for(var prop in args){if(obj.hasOwnProperty(prop)){if(obj[prop]!==args[prop]){old=obj[prop];obj[prop]=args[prop];callback.call(instance,prop,old,args[prop])}
result.items.push({'key':prop,'value':args[prop],'found':!0})}else{result.items.push({'key':prop,'value':args[prop],'found':!1})}}}else if(typeof key==='string'){if(obj.hasOwnProperty(key)){if(obj[key]!==value){old=obj[key];obj[key]=value;callback.call(instance,key,old,value)}
result.items.push({'key':key,'value':value,'found':!0})}else{result.items.push({'key':key,'value':value,'found':!1})}}else{throw new Error('args must be a string or object')}}
return result}
function triggerClose(instance){var found;triggerCallback(instance,function(button){return found=(button.invokeOnClose===!0)});if(!found&&instance.isOpen()){instance.close()}}
function commandsClickHandler(event,instance){var target=event.srcElement||event.target;switch(target){case instance.elements.commands.pin:if(!instance.isPinned()){pin(instance)}else{unpin(instance)}
break;case instance.elements.commands.maximize:if(!instance.isMaximized()){maximize(instance)}else{restore(instance)}
break;case instance.elements.commands.close:triggerClose(instance);break}
return!1}
function pin(instance){instance.set('pinned',!0)}
function unpin(instance){instance.set('pinned',!1)}
function maximize(instance){dispatchEvent('onmaximize',instance);addClass(instance.elements.root,classes.maximized);if(instance.isOpen()){ensureNoOverflow()}
dispatchEvent('onmaximized',instance)}
function restore(instance){dispatchEvent('onrestore',instance);removeClass(instance.elements.root,classes.maximized);if(instance.isOpen()){ensureNoOverflow()}
dispatchEvent('onrestored',instance)}
function updatePinnable(instance){if(instance.get('pinnable')){addClass(instance.elements.root,classes.pinnable)}else{removeClass(instance.elements.root,classes.pinnable)}}
function addAbsPositionFix(instance){var scrollLeft=getScrollLeft();instance.elements.modal.style.marginTop=getScrollTop()+'px';instance.elements.modal.style.marginLeft=scrollLeft+'px';instance.elements.modal.style.marginRight=(-scrollLeft)+'px'}
function removeAbsPositionFix(instance){var marginTop=parseInt(instance.elements.modal.style.marginTop,10);var marginLeft=parseInt(instance.elements.modal.style.marginLeft,10);instance.elements.modal.style.marginTop='';instance.elements.modal.style.marginLeft='';instance.elements.modal.style.marginRight='';if(instance.isOpen()){var top=0,left=0;if(instance.elements.dialog.style.top!==''){top=parseInt(instance.elements.dialog.style.top,10)}
instance.elements.dialog.style.top=(top+(marginTop-getScrollTop()))+'px';if(instance.elements.dialog.style.left!==''){left=parseInt(instance.elements.dialog.style.left,10)}
instance.elements.dialog.style.left=(left+(marginLeft-getScrollLeft()))+'px'}}
function updateAbsPositionFix(instance){if(!instance.get('modal')&&!instance.get('pinned')){addAbsPositionFix(instance)}else{removeAbsPositionFix(instance)}}
function updatePinned(instance){if(instance.get('pinned')){removeClass(instance.elements.root,classes.unpinned);if(instance.isOpen()){removeAbsPositionFix(instance)}}else{addClass(instance.elements.root,classes.unpinned);if(instance.isOpen()&&!instance.isModal()){addAbsPositionFix(instance)}}}
function updateMaximizable(instance){if(instance.get('maximizable')){addClass(instance.elements.root,classes.maximizable)}else{removeClass(instance.elements.root,classes.maximizable)}}
function updateClosable(instance){if(instance.get('closable')){addClass(instance.elements.root,classes.closable);bindClosableEvents(instance)}else{removeClass(instance.elements.root,classes.closable);unbindClosableEvents(instance)}}
var cancelClick=!1;function modalClickHandler(event,instance){var target=event.srcElement||event.target;if(!cancelClick&&target===instance.elements.modal&&instance.get('closableByDimmer')===!0){triggerClose(instance)}
cancelClick=!1;return!1}
var cancelKeyup=!1;function triggerCallback(instance,check){for(var idx=0;idx<instance.__internal.buttons.length;idx+=1){var button=instance.__internal.buttons[idx];if(!button.element.disabled&&check(button)){var closeEvent=createCloseEvent(idx,button);if(typeof instance.callback==='function'){instance.callback.apply(instance,[closeEvent])}
if(closeEvent.cancel===!1){instance.close()}
break}}}
function buttonsClickHandler(event,instance){var target=event.srcElement||event.target;triggerCallback(instance,function(button){return button.element===target&&(cancelKeyup=!0)})}
function keyupHandler(event){if(cancelKeyup){cancelKeyup=!1;return}
var instance=openDialogs[openDialogs.length-1];var keyCode=event.keyCode;if(instance.__internal.buttons.length===0&&keyCode===keys.ESC&&instance.get('closable')===!0){triggerClose(instance);return!1}else if(usedKeys.indexOf(keyCode)>-1){triggerCallback(instance,function(button){return button.key===keyCode});return!1}}
function keydownHandler(event){var instance=openDialogs[openDialogs.length-1];var keyCode=event.keyCode;if(keyCode===keys.LEFT||keyCode===keys.RIGHT){var buttons=instance.__internal.buttons;for(var x=0;x<buttons.length;x+=1){if(document.activeElement===buttons[x].element){switch(keyCode){case keys.LEFT:buttons[(x||buttons.length)-1].element.focus();return;case keys.RIGHT:buttons[(x+1)%buttons.length].element.focus();return}}}}else if(keyCode<keys.F12+1&&keyCode>keys.F1-1&&usedKeys.indexOf(keyCode)>-1){event.preventDefault();event.stopPropagation();triggerCallback(instance,function(button){return button.key===keyCode});return!1}}
function setFocus(instance,resetTarget){if(resetTarget){resetTarget.focus()}else{var focus=instance.__internal.focus;var element=focus.element;switch(typeof focus.element){case 'number':if(instance.__internal.buttons.length>focus.element){if(instance.get('basic')===!0){element=instance.elements.reset[0]}else{element=instance.__internal.buttons[focus.element].element}}
break;case 'string':element=instance.elements.body.querySelector(focus.element);break;case 'function':element=focus.element.call(instance);break}
if((typeof element==='undefined'||element===null)&&instance.__internal.buttons.length===0){element=instance.elements.reset[0]}
if(element&&element.focus){element.focus();if(focus.select&&element.select){element.select()}}}}
function onReset(event,instance){if(!instance){for(var x=openDialogs.length-1;x>-1;x-=1){if(openDialogs[x].isModal()){instance=openDialogs[x];break}}}
if(instance&&instance.isModal()){var resetTarget,target=event.srcElement||event.target;var lastResetElement=target===instance.elements.reset[1]||(instance.__internal.buttons.length===0&&target===document.body);if(lastResetElement){if(instance.get('maximizable')){resetTarget=instance.elements.commands.maximize}else if(instance.get('closable')){resetTarget=instance.elements.commands.close}}
if(resetTarget===undefined){if(typeof instance.__internal.focus.element==='number'){if(target===instance.elements.reset[0]){resetTarget=instance.elements.buttons.auxiliary.firstChild||instance.elements.buttons.primary.firstChild}else if(lastResetElement){resetTarget=instance.elements.reset[0]}}else{if(target===instance.elements.reset[0]){resetTarget=instance.elements.buttons.primary.lastChild||instance.elements.buttons.auxiliary.lastChild}}}
setFocus(instance,resetTarget)}}
function handleTransitionInEvent(event,instance){clearTimeout(instance.__internal.timerIn);setFocus(instance);restoreScrollPosition();cancelKeyup=!1;dispatchEvent('onfocus',instance);off(instance.elements.dialog,transition.type,instance.__internal.transitionInHandler);removeClass(instance.elements.root,classes.animationIn)}
function handleTransitionOutEvent(event,instance){clearTimeout(instance.__internal.timerOut);off(instance.elements.dialog,transition.type,instance.__internal.transitionOutHandler);resetMove(instance);resetResize(instance);if(instance.isMaximized()&&!instance.get('startMaximized')){restore(instance)}
if(alertify.defaults.maintainFocus&&instance.__internal.activeElement){instance.__internal.activeElement.focus();instance.__internal.activeElement=null}
if(typeof instance.__internal.destroy==='function'){instance.__internal.destroy.apply(instance)}}
var movable=null,offsetX=0,offsetY=0,xProp='pageX',yProp='pageY',bounds=null,refreshTop=!1,moveDelegate=null;function moveElement(event,element){var left=(event[xProp]-offsetX),top=(event[yProp]-offsetY);if(refreshTop){top-=document.body.scrollTop}
element.style.left=left+'px';element.style.top=top+'px'}
function moveElementBounded(event,element){var left=(event[xProp]-offsetX),top=(event[yProp]-offsetY);if(refreshTop){top-=document.body.scrollTop}
element.style.left=Math.min(bounds.maxLeft,Math.max(bounds.minLeft,left))+'px';if(refreshTop){element.style.top=Math.min(bounds.maxTop,Math.max(bounds.minTop,top))+'px'}else{element.style.top=Math.max(bounds.minTop,top)+'px'}}
function beginMove(event,instance){if(resizable===null&&!instance.isMaximized()&&instance.get('movable')){var eventSrc,left=0,top=0;if(event.type==='touchstart'){event.preventDefault();eventSrc=event.targetTouches[0];xProp='clientX';yProp='clientY'}else if(event.button===0){eventSrc=event}
if(eventSrc){var element=instance.elements.dialog;addClass(element,classes.capture);if(element.style.left){left=parseInt(element.style.left,10)}
if(element.style.top){top=parseInt(element.style.top,10)}
offsetX=eventSrc[xProp]-left;offsetY=eventSrc[yProp]-top;if(instance.isModal()){offsetY+=instance.elements.modal.scrollTop}else if(instance.isPinned()){offsetY-=document.body.scrollTop}
if(instance.get('moveBounded')){var current=element,offsetLeft=-left,offsetTop=-top;do{offsetLeft+=current.offsetLeft;offsetTop+=current.offsetTop}while(current=current.offsetParent);bounds={maxLeft:offsetLeft,minLeft:-offsetLeft,maxTop:document.documentElement.clientHeight-element.clientHeight-offsetTop,minTop:-offsetTop};moveDelegate=moveElementBounded}else{bounds=null;moveDelegate=moveElement}
dispatchEvent('onmove',instance);refreshTop=!instance.isModal()&&instance.isPinned();movable=instance;moveDelegate(eventSrc,element);addClass(document.body,classes.noSelection);return!1}}}
function move(event){if(movable){var eventSrc;if(event.type==='touchmove'){event.preventDefault();eventSrc=event.targetTouches[0]}else if(event.button===0){eventSrc=event}
if(eventSrc){moveDelegate(eventSrc,movable.elements.dialog)}}}
function endMove(){if(movable){var instance=movable;movable=bounds=null;removeClass(document.body,classes.noSelection);removeClass(instance.elements.dialog,classes.capture);dispatchEvent('onmoved',instance)}}
function resetMove(instance){movable=null;var element=instance.elements.dialog;element.style.left=element.style.top=''}
function updateMovable(instance){if(instance.get('movable')){addClass(instance.elements.root,classes.movable);if(instance.isOpen()){bindMovableEvents(instance)}}else{resetMove(instance);removeClass(instance.elements.root,classes.movable);if(instance.isOpen()){unbindMovableEvents(instance)}}}
var resizable=null,startingLeft=Number.Nan,startingWidth=0,minWidth=0,handleOffset=0;function resizeElement(event,element,pageRelative){var current=element;var offsetLeft=0;var offsetTop=0;do{offsetLeft+=current.offsetLeft;offsetTop+=current.offsetTop}while(current=current.offsetParent);var X,Y;if(pageRelative===!0){X=event.pageX;Y=event.pageY}else{X=event.clientX;Y=event.clientY}
var isRTL=isRightToLeft();if(isRTL){X=document.body.offsetWidth-X;if(!isNaN(startingLeft)){offsetLeft=document.body.offsetWidth-offsetLeft-element.offsetWidth}}
element.style.height=(Y-offsetTop+handleOffset)+'px';element.style.width=(X-offsetLeft+handleOffset)+'px';if(!isNaN(startingLeft)){var diff=Math.abs(element.offsetWidth-startingWidth)*0.5;if(isRTL){diff*=-1}
if(element.offsetWidth>startingWidth){element.style.left=(startingLeft+diff)+'px'}else if(element.offsetWidth>=minWidth){element.style.left=(startingLeft-diff)+'px'}}}
function beginResize(event,instance){if(!instance.isMaximized()){var eventSrc;if(event.type==='touchstart'){event.preventDefault();eventSrc=event.targetTouches[0]}else if(event.button===0){eventSrc=event}
if(eventSrc){dispatchEvent('onresize',instance);resizable=instance;handleOffset=instance.elements.resizeHandle.offsetHeight/2;var element=instance.elements.dialog;addClass(element,classes.capture);startingLeft=parseInt(element.style.left,10);element.style.height=element.offsetHeight+'px';element.style.minHeight=instance.elements.header.offsetHeight+instance.elements.footer.offsetHeight+'px';element.style.width=(startingWidth=element.offsetWidth)+'px';if(element.style.maxWidth!=='none'){element.style.minWidth=(minWidth=element.offsetWidth)+'px'}
element.style.maxWidth='none';addClass(document.body,classes.noSelection);return!1}}}
function resize(event){if(resizable){var eventSrc;if(event.type==='touchmove'){event.preventDefault();eventSrc=event.targetTouches[0]}else if(event.button===0){eventSrc=event}
if(eventSrc){resizeElement(eventSrc,resizable.elements.dialog,!resizable.get('modal')&&!resizable.get('pinned'))}}}
function endResize(){if(resizable){var instance=resizable;resizable=null;removeClass(document.body,classes.noSelection);removeClass(instance.elements.dialog,classes.capture);cancelClick=!0;dispatchEvent('onresized',instance)}}
function resetResize(instance){resizable=null;var element=instance.elements.dialog;if(element.style.maxWidth==='none'){element.style.maxWidth=element.style.minWidth=element.style.width=element.style.height=element.style.minHeight=element.style.left='';startingLeft=Number.Nan;startingWidth=minWidth=handleOffset=0}}
function updateResizable(instance){if(instance.get('resizable')){addClass(instance.elements.root,classes.resizable);if(instance.isOpen()){bindResizableEvents(instance)}}else{resetResize(instance);removeClass(instance.elements.root,classes.resizable);if(instance.isOpen()){unbindResizableEvents(instance)}}}
function windowResize(){for(var x=0;x<openDialogs.length;x+=1){var instance=openDialogs[x];if(instance.get('autoReset')){resetMove(instance);resetResize(instance)}}}
function bindEvents(instance){if(openDialogs.length===1){on(window,'resize',windowResize);on(document.body,'keyup',keyupHandler);on(document.body,'keydown',keydownHandler);on(document.body,'focus',onReset);on(document.documentElement,'mousemove',move);on(document.documentElement,'touchmove',move);on(document.documentElement,'mouseup',endMove);on(document.documentElement,'touchend',endMove);on(document.documentElement,'mousemove',resize);on(document.documentElement,'touchmove',resize);on(document.documentElement,'mouseup',endResize);on(document.documentElement,'touchend',endResize)}
on(instance.elements.commands.container,'click',instance.__internal.commandsClickHandler);on(instance.elements.footer,'click',instance.__internal.buttonsClickHandler);on(instance.elements.reset[0],'focus',instance.__internal.resetHandler);on(instance.elements.reset[1],'focus',instance.__internal.resetHandler);cancelKeyup=!0;on(instance.elements.dialog,transition.type,instance.__internal.transitionInHandler);if(!instance.get('modal')){bindModelessEvents(instance)}
if(instance.get('resizable')){bindResizableEvents(instance)}
if(instance.get('movable')){bindMovableEvents(instance)}}
function unbindEvents(instance){if(openDialogs.length===1){off(window,'resize',windowResize);off(document.body,'keyup',keyupHandler);off(document.body,'keydown',keydownHandler);off(document.body,'focus',onReset);off(document.documentElement,'mousemove',move);off(document.documentElement,'mouseup',endMove);off(document.documentElement,'mousemove',resize);off(document.documentElement,'mouseup',endResize)}
off(instance.elements.commands.container,'click',instance.__internal.commandsClickHandler);off(instance.elements.footer,'click',instance.__internal.buttonsClickHandler);off(instance.elements.reset[0],'focus',instance.__internal.resetHandler);off(instance.elements.reset[1],'focus',instance.__internal.resetHandler);on(instance.elements.dialog,transition.type,instance.__internal.transitionOutHandler);if(!instance.get('modal')){unbindModelessEvents(instance)}
if(instance.get('movable')){unbindMovableEvents(instance)}
if(instance.get('resizable')){unbindResizableEvents(instance)}}
function bindModelessEvents(instance){on(instance.elements.dialog,'focus',instance.__internal.bringToFrontHandler,!0)}
function unbindModelessEvents(instance){off(instance.elements.dialog,'focus',instance.__internal.bringToFrontHandler,!0)}
function bindMovableEvents(instance){on(instance.elements.header,'mousedown',instance.__internal.beginMoveHandler);on(instance.elements.header,'touchstart',instance.__internal.beginMoveHandler)}
function unbindMovableEvents(instance){off(instance.elements.header,'mousedown',instance.__internal.beginMoveHandler);off(instance.elements.header,'touchstart',instance.__internal.beginMoveHandler)}
function bindResizableEvents(instance){on(instance.elements.resizeHandle,'mousedown',instance.__internal.beginResizeHandler);on(instance.elements.resizeHandle,'touchstart',instance.__internal.beginResizeHandler)}
function unbindResizableEvents(instance){off(instance.elements.resizeHandle,'mousedown',instance.__internal.beginResizeHandler);off(instance.elements.resizeHandle,'touchstart',instance.__internal.beginResizeHandler)}
function bindClosableEvents(instance){on(instance.elements.modal,'click',instance.__internal.modalClickHandler)}
function unbindClosableEvents(instance){off(instance.elements.modal,'click',instance.__internal.modalClickHandler)}
return{__init:initialize,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(classes.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(classes.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(classes.unpinned)<0},maximize:function(){if(!this.isMaximized()){maximize(this)}
return this},restore:function(){if(this.isMaximized()){restore(this)}
return this},pin:function(){if(!this.isPinned()){pin(this)}
return this},unpin:function(){if(this.isPinned()){unpin(this)}
return this},bringToFront:function(){bringToFront(null,this);return this},moveTo:function(x,y){if(!isNaN(x)&&!isNaN(y)){dispatchEvent('onmove',this);var element=this.elements.dialog,current=element,offsetLeft=0,offsetTop=0;if(element.style.left){offsetLeft-=parseInt(element.style.left,10)}
if(element.style.top){offsetTop-=parseInt(element.style.top,10)}
do{offsetLeft+=current.offsetLeft;offsetTop+=current.offsetTop}while(current=current.offsetParent);var left=(x-offsetLeft);var top=(y-offsetTop);if(isRightToLeft()){left*=-1}
element.style.left=left+'px';element.style.top=top+'px';dispatchEvent('onmoved',this)}
return this},resizeTo:function(width,height){var w=parseFloat(width),h=parseFloat(height),regex=/(\d*\.\d+|\d+)%/;if(!isNaN(w)&&!isNaN(h)&&this.get('resizable')===!0){dispatchEvent('onresize',this);if((''+width).match(regex)){w=w/100*document.documentElement.clientWidth}
if((''+height).match(regex)){h=h/100*document.documentElement.clientHeight}
var element=this.elements.dialog;if(element.style.maxWidth!=='none'){element.style.minWidth=(minWidth=element.offsetWidth)+'px'}
element.style.maxWidth='none';element.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+'px';element.style.width=w+'px';element.style.height=h+'px';dispatchEvent('onresized',this)}
return this},setting:function(key,value){var self=this;var result=update(this,this.__internal.options,function(k,o,n){optionUpdated(self,k,o,n)},key,value);if(result.op==='get'){if(result.found){return result.value}else if(typeof this.settings!=='undefined'){return update(this,this.settings,this.settingUpdated||function(){},key,value).value}else{return undefined}}else if(result.op==='set'){if(result.items.length>0){var callback=this.settingUpdated||function(){};for(var x=0;x<result.items.length;x+=1){var item=result.items[x];if(!item.found&&typeof this.settings!=='undefined'){update(this,this.settings,callback,item.key,item.value)}}}
return this}},set:function(key,value){this.setting(key,value);return this},get:function(key){return this.setting(key)},setHeader:function(content){if(typeof content==='string'){clearContents(this.elements.header);this.elements.header.innerHTML=content}else if(content instanceof window.HTMLElement&&this.elements.header.firstChild!==content){clearContents(this.elements.header);this.elements.header.appendChild(content)}
return this},setContent:function(content){if(typeof content==='string'){clearContents(this.elements.content);this.elements.content.innerHTML=content}else if(content instanceof window.HTMLElement&&this.elements.content.firstChild!==content){clearContents(this.elements.content);this.elements.content.appendChild(content)}
return this},showModal:function(className){return this.show(!0,className)},show:function(modal,className){initialize(this);if(!this.__internal.isOpen){this.__internal.isOpen=!0;openDialogs.push(this);if(alertify.defaults.maintainFocus){this.__internal.activeElement=document.activeElement}
if(typeof this.prepare==='function'){this.prepare()}
bindEvents(this);if(modal!==undefined){this.set('modal',modal)}
saveScrollPosition();ensureNoOverflow();if(typeof className==='string'&&className!==''){this.__internal.className=className;addClass(this.elements.root,className)}
if(this.get('startMaximized')){this.maximize()}else if(this.isMaximized()){restore(this)}
updateAbsPositionFix(this);removeClass(this.elements.root,classes.animationOut);addClass(this.elements.root,classes.animationIn);clearTimeout(this.__internal.timerIn);this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,transition.supported?1000:100);if(isSafari){var root=this.elements.root;root.style.display='none';setTimeout(function(){root.style.display='block'},0)}
reflow=this.elements.root.offsetWidth;removeClass(this.elements.root,classes.hidden);if(typeof this.hooks.onshow==='function'){this.hooks.onshow.call(this)}
dispatchEvent('onshow',this)}else{resetMove(this);resetResize(this);addClass(this.elements.dialog,classes.shake);var self=this;setTimeout(function(){removeClass(self.elements.dialog,classes.shake)},200)}
return this},close:function(){if(this.__internal.isOpen){if(dispatchEvent('onclosing',this)!==!1){unbindEvents(this);removeClass(this.elements.root,classes.animationIn);addClass(this.elements.root,classes.animationOut);clearTimeout(this.__internal.timerOut);this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,transition.supported?1000:100);addClass(this.elements.root,classes.hidden);reflow=this.elements.modal.offsetWidth;if(typeof this.__internal.className!=='undefined'&&this.__internal.className!==''){removeClass(this.elements.root,this.__internal.className)}
if(typeof this.hooks.onclose==='function'){this.hooks.onclose.call(this)}
dispatchEvent('onclose',this);openDialogs.splice(openDialogs.indexOf(this),1);this.__internal.isOpen=!1;ensureNoOverflow()}}
return this},closeOthers:function(){alertify.closeAll(this);return this},destroy:function(){if(this.__internal.isOpen){this.__internal.destroy=function(){destruct(this,initialize)};this.close()}else{destruct(this,initialize)}
return this},}}());var notifier=(function(){var reflow,element,openInstances=[],classes={base:'alertify-notifier',message:'ajs-message',top:'ajs-top',right:'ajs-right',bottom:'ajs-bottom',left:'ajs-left',center:'ajs-center',visible:'ajs-visible',hidden:'ajs-hidden',close:'ajs-close'};function initialize(instance){if(!instance.__internal){instance.__internal={position:alertify.defaults.notifier.position,delay:alertify.defaults.notifier.delay,};element=document.createElement('DIV');updatePosition(instance)}
if(element.parentNode!==document.body){document.body.appendChild(element)}}
function pushInstance(instance){instance.__internal.pushed=!0;openInstances.push(instance)}
function popInstance(instance){openInstances.splice(openInstances.indexOf(instance),1);instance.__internal.pushed=!1}
function updatePosition(instance){element.className=classes.base;switch(instance.__internal.position){case 'top-right':addClass(element,classes.top+' '+classes.right);break;case 'top-left':addClass(element,classes.top+' '+classes.left);break;case 'top-center':addClass(element,classes.top+' '+classes.center);break;case 'bottom-left':addClass(element,classes.bottom+' '+classes.left);break;case 'bottom-center':addClass(element,classes.bottom+' '+classes.center);break;default:case 'bottom-right':addClass(element,classes.bottom+' '+classes.right);break}}
function create(div,callback){function clickDelegate(event,instance){if(!instance.__internal.closeButton||event.target.getAttribute('data-close')==='true'){instance.dismiss(!0)}}
function transitionDone(event,instance){off(instance.element,transition.type,transitionDone);element.removeChild(instance.element)}
function initialize(instance){if(!instance.__internal){instance.__internal={pushed:!1,delay:undefined,timer:undefined,clickHandler:undefined,transitionEndHandler:undefined,transitionTimeout:undefined};instance.__internal.clickHandler=delegate(instance,clickDelegate);instance.__internal.transitionEndHandler=delegate(instance,transitionDone)}
return instance}
function clearTimers(instance){clearTimeout(instance.__internal.timer);clearTimeout(instance.__internal.transitionTimeout)}
return initialize({element:div,push:function(_content,_wait){if(!this.__internal.pushed){pushInstance(this);clearTimers(this);var content,wait;switch(arguments.length){case 0:wait=this.__internal.delay;break;case 1:if(typeof(_content)==='number'){wait=_content}else{content=_content;wait=this.__internal.delay}
break;case 2:content=_content;wait=_wait;break}
this.__internal.closeButton=alertify.defaults.notifier.closeButton;if(typeof content!=='undefined'){this.setContent(content)}
if(notifier.__internal.position.indexOf('top')<0){element.appendChild(this.element)}else{element.insertBefore(this.element,element.firstChild)}
reflow=this.element.offsetWidth;addClass(this.element,classes.visible);on(this.element,'click',this.__internal.clickHandler);return this.delay(wait)}
return this},ondismiss:function(){},callback:callback,dismiss:function(clicked){if(this.__internal.pushed){clearTimers(this);if(!(typeof this.ondismiss==='function'&&this.ondismiss.call(this)===!1)){off(this.element,'click',this.__internal.clickHandler);if(typeof this.element!=='undefined'&&this.element.parentNode===element){this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,transition.supported?1000:100);removeClass(this.element,classes.visible);if(typeof this.callback==='function'){this.callback.call(this,clicked)}}
popInstance(this)}}
return this},delay:function(wait){clearTimers(this);this.__internal.delay=typeof wait!=='undefined'&&!isNaN(+wait)?+wait:notifier.__internal.delay;if(this.__internal.delay>0){var self=this;this.__internal.timer=setTimeout(function(){self.dismiss()},this.__internal.delay*1000)}
return this},setContent:function(content){if(typeof content==='string'){clearContents(this.element);this.element.innerHTML=content}else if(content instanceof window.HTMLElement&&this.element.firstChild!==content){clearContents(this.element);this.element.appendChild(content)}
if(this.__internal.closeButton){var close=document.createElement('span');addClass(close,classes.close);close.setAttribute('data-close',!0);this.element.appendChild(close)}
return this},dismissOthers:function(){notifier.dismissAll(this);return this}})}
return{setting:function(key,value){initialize(this);if(typeof value==='undefined'){return this.__internal[key]}else{switch(key){case 'position':this.__internal.position=value;updatePosition(this);break;case 'delay':this.__internal.delay=value;break}}
return this},set:function(key,value){this.setting(key,value);return this},get:function(key){return this.setting(key)},create:function(type,callback){initialize(this);var div=document.createElement('div');div.className=classes.message+((typeof type==='string'&&type!=='')?' ajs-'+type:'');return create(div,callback)},dismissAll:function(except){var clone=openInstances.slice(0);for(var x=0;x<clone.length;x+=1){var instance=clone[x];if(except===undefined||except!==instance){instance.dismiss()}}}}})();function Alertify(){var dialogs={};function extend(sub,base){for(var prop in base){if(base.hasOwnProperty(prop)){sub[prop]=base[prop]}}
return sub}
function get_dialog(name){var dialog=dialogs[name].dialog;if(dialog&&typeof dialog.__init==='function'){dialog.__init(dialog)}
return dialog}
function register(name,Factory,transient,base){var definition={dialog:null,factory:Factory};if(base!==undefined){definition.factory=function(){return extend(new dialogs[base].factory(),new Factory())}}
if(!transient){definition.dialog=extend(new definition.factory(),dialog)}
return dialogs[name]=definition}
return{defaults:defaults,dialog:function(name,Factory,transient,base){if(typeof Factory!=='function'){return get_dialog(name)}
if(this.hasOwnProperty(name)){throw new Error('alertify.dialog: name already exists')}
var definition=register(name,Factory,transient,base);if(transient){this[name]=function(){if(arguments.length===0){return definition.dialog}else{var instance=extend(new definition.factory(),dialog);if(instance&&typeof instance.__init==='function'){instance.__init(instance)}
instance.main.apply(instance,arguments);return instance.show.apply(instance)}}}else{this[name]=function(){if(definition.dialog&&typeof definition.dialog.__init==='function'){definition.dialog.__init(definition.dialog)}
if(arguments.length===0){return definition.dialog}else{var dialog=definition.dialog;dialog.main.apply(definition.dialog,arguments);return dialog.show.apply(definition.dialog)}}}},closeAll:function(except){var clone=openDialogs.slice(0);for(var x=0;x<clone.length;x+=1){var instance=clone[x];if(except===undefined||except!==instance){instance.close()}}},setting:function(name,key,value){if(name==='notifier'){return notifier.setting(key,value)}
var dialog=get_dialog(name);if(dialog){return dialog.setting(key,value)}},set:function(name,key,value){return this.setting(name,key,value)},get:function(name,key){return this.setting(name,key)},notify:function(message,type,wait,callback){return notifier.create(type,callback).push(message,wait)},message:function(message,wait,callback){return notifier.create(null,callback).push(message,wait)},success:function(message,wait,callback){return notifier.create('success',callback).push(message,wait)},error:function(message,wait,callback){return notifier.create('error',callback).push(message,wait)},warning:function(message,wait,callback){return notifier.create('warning',callback).push(message,wait)},dismissAll:function(){notifier.dismissAll()}}}
var alertify=new Alertify();alertify.dialog('alert',function(){return{main:function(_title,_message,_onok){var title,message,onok;switch(arguments.length){case 1:message=_title;break;case 2:if(typeof _message==='function'){message=_title;onok=_message}else{title=_title;message=_message}
break;case 3:title=_title;message=_message;onok=_onok;break}
this.set('title',title);this.set('message',message);this.set('onok',onok);return this},setup:function(){return{buttons:[{text:alertify.defaults.glossary.ok,key:keys.ESC,invokeOnClose:!0,className:alertify.defaults.theme.ok,}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(message){this.setContent(message)},settings:{message:undefined,onok:undefined,label:undefined,},settingUpdated:function(key,oldValue,newValue){switch(key){case 'message':this.setMessage(newValue);break;case 'label':if(this.__internal.buttons[0].element){this.__internal.buttons[0].element.innerHTML=newValue}
break}},callback:function(closeEvent){if(typeof this.get('onok')==='function'){var returnValue=this.get('onok').call(this,closeEvent);if(typeof returnValue!=='undefined'){closeEvent.cancel=!returnValue}}}}});alertify.dialog('confirm',function(){var autoConfirm={timer:null,index:null,text:null,duration:null,task:function(event,self){if(self.isOpen()){self.__internal.buttons[autoConfirm.index].element.innerHTML=autoConfirm.text+' (&#8207;'+autoConfirm.duration+'&#8207;) ';autoConfirm.duration-=1;if(autoConfirm.duration===-1){clearAutoConfirm(self);var button=self.__internal.buttons[autoConfirm.index];var closeEvent=createCloseEvent(autoConfirm.index,button);if(typeof self.callback==='function'){self.callback.apply(self,[closeEvent])}
if(closeEvent.close!==!1){self.close()}}}else{clearAutoConfirm(self)}}};function clearAutoConfirm(self){if(autoConfirm.timer!==null){clearInterval(autoConfirm.timer);autoConfirm.timer=null;self.__internal.buttons[autoConfirm.index].element.innerHTML=autoConfirm.text}}
function startAutoConfirm(self,index,duration){clearAutoConfirm(self);autoConfirm.duration=duration;autoConfirm.index=index;autoConfirm.text=self.__internal.buttons[index].element.innerHTML;autoConfirm.timer=setInterval(delegate(self,autoConfirm.task),1000);autoConfirm.task(null,self)}
return{main:function(_title,_message,_onok,_oncancel){var title,message,onok,oncancel;switch(arguments.length){case 1:message=_title;break;case 2:message=_title;onok=_message;break;case 3:message=_title;onok=_message;oncancel=_onok;break;case 4:title=_title;message=_message;onok=_onok;oncancel=_oncancel;break}
this.set('title',title);this.set('message',message);this.set('onok',onok);this.set('oncancel',oncancel);return this},setup:function(){return{buttons:[{text:alertify.defaults.glossary.ok,key:keys.ENTER,className:alertify.defaults.theme.ok,},{text:alertify.defaults.glossary.cancel,key:keys.ESC,invokeOnClose:!0,className:alertify.defaults.theme.cancel,}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(message){this.setContent(message)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null,},settingUpdated:function(key,oldValue,newValue){switch(key){case 'message':this.setMessage(newValue);break;case 'labels':if('ok' in newValue&&this.__internal.buttons[0].element){this.__internal.buttons[0].text=newValue.ok;this.__internal.buttons[0].element.innerHTML=newValue.ok}
if('cancel' in newValue&&this.__internal.buttons[1].element){this.__internal.buttons[1].text=newValue.cancel;this.__internal.buttons[1].element.innerHTML=newValue.cancel}
break;case 'reverseButtons':if(newValue===!0){this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element)}else{this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}
break;case 'defaultFocus':this.__internal.focus.element=newValue==='ok'?0:1;break}},callback:function(closeEvent){clearAutoConfirm(this);var returnValue;switch(closeEvent.index){case 0:if(typeof this.get('onok')==='function'){returnValue=this.get('onok').call(this,closeEvent);if(typeof returnValue!=='undefined'){closeEvent.cancel=!returnValue}}
break;case 1:if(typeof this.get('oncancel')==='function'){returnValue=this.get('oncancel').call(this,closeEvent);if(typeof returnValue!=='undefined'){closeEvent.cancel=!returnValue}}
break}},autoOk:function(duration){startAutoConfirm(this,0,duration);return this},autoCancel:function(duration){startAutoConfirm(this,1,duration);return this}}});alertify.dialog('prompt',function(){var input=document.createElement('INPUT');var p=document.createElement('P');return{main:function(_title,_message,_value,_onok,_oncancel){var title,message,value,onok,oncancel;switch(arguments.length){case 1:message=_title;break;case 2:message=_title;value=_message;break;case 3:message=_title;value=_message;onok=_value;break;case 4:message=_title;value=_message;onok=_value;oncancel=_onok;break;case 5:title=_title;message=_message;value=_value;onok=_onok;oncancel=_oncancel;break}
this.set('title',title);this.set('message',message);this.set('value',value);this.set('onok',onok);this.set('oncancel',oncancel);return this},setup:function(){return{buttons:[{text:alertify.defaults.glossary.ok,key:keys.ENTER,className:alertify.defaults.theme.ok,},{text:alertify.defaults.glossary.cancel,key:keys.ESC,invokeOnClose:!0,className:alertify.defaults.theme.cancel,}],focus:{element:input,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){input.className=alertify.defaults.theme.input;input.setAttribute('type','text');input.value=this.get('value');this.elements.content.appendChild(p);this.elements.content.appendChild(input)},prepare:function(){},setMessage:function(message){if(typeof message==='string'){clearContents(p);p.innerHTML=message}else if(message instanceof window.HTMLElement&&p.firstChild!==message){clearContents(p);p.appendChild(message)}},settings:{message:undefined,labels:undefined,onok:undefined,oncancel:undefined,value:'',type:'text',reverseButtons:undefined,},settingUpdated:function(key,oldValue,newValue){switch(key){case 'message':this.setMessage(newValue);break;case 'value':input.value=newValue;break;case 'type':switch(newValue){case 'text':case 'color':case 'date':case 'datetime-local':case 'email':case 'month':case 'number':case 'password':case 'search':case 'tel':case 'time':case 'week':input.type=newValue;break;default:input.type='text';break}
break;case 'labels':if(newValue.ok&&this.__internal.buttons[0].element){this.__internal.buttons[0].element.innerHTML=newValue.ok}
if(newValue.cancel&&this.__internal.buttons[1].element){this.__internal.buttons[1].element.innerHTML=newValue.cancel}
break;case 'reverseButtons':if(newValue===!0){this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element)}else{this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}
break}},callback:function(closeEvent){var returnValue;switch(closeEvent.index){case 0:this.settings.value=input.value;if(typeof this.get('onok')==='function'){returnValue=this.get('onok').call(this,closeEvent,this.settings.value);if(typeof returnValue!=='undefined'){closeEvent.cancel=!returnValue}}
break;case 1:if(typeof this.get('oncancel')==='function'){returnValue=this.get('oncancel').call(this,closeEvent);if(typeof returnValue!=='undefined'){closeEvent.cancel=!returnValue}}
if(!closeEvent.cancel){input.value=this.settings.value}
break}}}});if(typeof module==='object'&&typeof module.exports==='object'){module.exports=alertify}else if(typeof define==='function'&&define.amd){define([],function(){return alertify})}else if(!window.alertify){window.alertify=alertify}}(typeof window!=='undefined'?window:this))}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\alertifyjs\\build\\alertify.js","/..\\..\\node_modules\\alertifyjs\\build")},{"buffer":9,"ngpmcQ":12}],9:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var base64=require('base64-js')
var ieee754=require('ieee754')
exports.Buffer=Buffer
exports.SlowBuffer=Buffer
exports.INSPECT_MAX_BYTES=50
Buffer.poolSize=8192
Buffer._useTypedArrays=(function(){try{var buf=new ArrayBuffer(0)
var arr=new Uint8Array(buf)
arr.foo=function(){return 42}
return 42===arr.foo()&&typeof arr.subarray==='function'}catch(e){return!1}})()
function Buffer(subject,encoding,noZero){if(!(this instanceof Buffer))
return new Buffer(subject,encoding,noZero)
var type=typeof subject
if(encoding==='base64'&&type==='string'){subject=stringtrim(subject)
while(subject.length%4!==0){subject=subject+'='}}
var length
if(type==='number')
length=coerce(subject)
else if(type==='string')
length=Buffer.byteLength(subject,encoding)
else if(type==='object')
length=coerce(subject.length)
else throw new Error('First argument needs to be a number, array or string.')
var buf
if(Buffer._useTypedArrays){buf=Buffer._augment(new Uint8Array(length))}else{buf=this
buf.length=length
buf._isBuffer=!0}
var i
if(Buffer._useTypedArrays&&typeof subject.byteLength==='number'){buf._set(subject)}else if(isArrayish(subject)){for(i=0;i<length;i++){if(Buffer.isBuffer(subject))
buf[i]=subject.readUInt8(i)
else buf[i]=subject[i]}}else if(type==='string'){buf.write(subject,0,encoding)}else if(type==='number'&&!Buffer._useTypedArrays&&!noZero){for(i=0;i<length;i++){buf[i]=0}}
return buf}
Buffer.isEncoding=function(encoding){switch(String(encoding).toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'raw':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return!0
default:return!1}}
Buffer.isBuffer=function(b){return!!(b!==null&&b!==undefined&&b._isBuffer)}
Buffer.byteLength=function(str,encoding){var ret
str=str+''
switch(encoding||'utf8'){case 'hex':ret=str.length/2
break
case 'utf8':case 'utf-8':ret=utf8ToBytes(str).length
break
case 'ascii':case 'binary':case 'raw':ret=str.length
break
case 'base64':ret=base64ToBytes(str).length
break
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':ret=str.length*2
break
default:throw new Error('Unknown encoding')}
return ret}
Buffer.concat=function(list,totalLength){assert(isArray(list),'Usage: Buffer.concat(list, [totalLength])\n'+'list should be an Array.')
if(list.length===0){return new Buffer(0)}else if(list.length===1){return list[0]}
var i
if(typeof totalLength!=='number'){totalLength=0
for(i=0;i<list.length;i++){totalLength+=list[i].length}}
var buf=new Buffer(totalLength)
var pos=0
for(i=0;i<list.length;i++){var item=list[i]
item.copy(buf,pos)
pos+=item.length}
return buf}
function _hexWrite(buf,string,offset,length){offset=Number(offset)||0
var remaining=buf.length-offset
if(!length){length=remaining}else{length=Number(length)
if(length>remaining){length=remaining}}
var strLen=string.length
assert(strLen%2===0,'Invalid hex string')
if(length>strLen/2){length=strLen/2}
for(var i=0;i<length;i++){var byte=parseInt(string.substr(i*2,2),16)
assert(!isNaN(byte),'Invalid hex string')
buf[offset+i]=byte}
Buffer._charsWritten=i*2
return i}
function _utf8Write(buf,string,offset,length){var charsWritten=Buffer._charsWritten=blitBuffer(utf8ToBytes(string),buf,offset,length)
return charsWritten}
function _asciiWrite(buf,string,offset,length){var charsWritten=Buffer._charsWritten=blitBuffer(asciiToBytes(string),buf,offset,length)
return charsWritten}
function _binaryWrite(buf,string,offset,length){return _asciiWrite(buf,string,offset,length)}
function _base64Write(buf,string,offset,length){var charsWritten=Buffer._charsWritten=blitBuffer(base64ToBytes(string),buf,offset,length)
return charsWritten}
function _utf16leWrite(buf,string,offset,length){var charsWritten=Buffer._charsWritten=blitBuffer(utf16leToBytes(string),buf,offset,length)
return charsWritten}
Buffer.prototype.write=function(string,offset,length,encoding){if(isFinite(offset)){if(!isFinite(length)){encoding=length
length=undefined}}else{var swap=encoding
encoding=offset
offset=length
length=swap}
offset=Number(offset)||0
var remaining=this.length-offset
if(!length){length=remaining}else{length=Number(length)
if(length>remaining){length=remaining}}
encoding=String(encoding||'utf8').toLowerCase()
var ret
switch(encoding){case 'hex':ret=_hexWrite(this,string,offset,length)
break
case 'utf8':case 'utf-8':ret=_utf8Write(this,string,offset,length)
break
case 'ascii':ret=_asciiWrite(this,string,offset,length)
break
case 'binary':ret=_binaryWrite(this,string,offset,length)
break
case 'base64':ret=_base64Write(this,string,offset,length)
break
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':ret=_utf16leWrite(this,string,offset,length)
break
default:throw new Error('Unknown encoding')}
return ret}
Buffer.prototype.toString=function(encoding,start,end){var self=this
encoding=String(encoding||'utf8').toLowerCase()
start=Number(start)||0
end=(end!==undefined)?Number(end):end=self.length
if(end===start)
return''
var ret
switch(encoding){case 'hex':ret=_hexSlice(self,start,end)
break
case 'utf8':case 'utf-8':ret=_utf8Slice(self,start,end)
break
case 'ascii':ret=_asciiSlice(self,start,end)
break
case 'binary':ret=_binarySlice(self,start,end)
break
case 'base64':ret=_base64Slice(self,start,end)
break
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':ret=_utf16leSlice(self,start,end)
break
default:throw new Error('Unknown encoding')}
return ret}
Buffer.prototype.toJSON=function(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)}}
Buffer.prototype.copy=function(target,target_start,start,end){var source=this
if(!start)start=0
if(!end&&end!==0)end=this.length
if(!target_start)target_start=0
if(end===start)return
if(target.length===0||source.length===0)return
assert(end>=start,'sourceEnd < sourceStart')
assert(target_start>=0&&target_start<target.length,'targetStart out of bounds')
assert(start>=0&&start<source.length,'sourceStart out of bounds')
assert(end>=0&&end<=source.length,'sourceEnd out of bounds')
if(end>this.length)
end=this.length
if(target.length-target_start<end-start)
end=target.length-target_start+start
var len=end-start
if(len<100||!Buffer._useTypedArrays){for(var i=0;i<len;i++)
target[i+target_start]=this[i+start]}else{target._set(this.subarray(start,start+len),target_start)}}
function _base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}
function _utf8Slice(buf,start,end){var res=''
var tmp=''
end=Math.min(buf.length,end)
for(var i=start;i<end;i++){if(buf[i]<=0x7F){res+=decodeUtf8Char(tmp)+String.fromCharCode(buf[i])
tmp=''}else{tmp+='%'+buf[i].toString(16)}}
return res+decodeUtf8Char(tmp)}
function _asciiSlice(buf,start,end){var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;i++)
ret+=String.fromCharCode(buf[i])
return ret}
function _binarySlice(buf,start,end){return _asciiSlice(buf,start,end)}
function _hexSlice(buf,start,end){var len=buf.length
if(!start||start<0)start=0
if(!end||end<0||end>len)end=len
var out=''
for(var i=start;i<end;i++){out+=toHex(buf[i])}
return out}
function _utf16leSlice(buf,start,end){var bytes=buf.slice(start,end)
var res=''
for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256)}
return res}
Buffer.prototype.slice=function(start,end){var len=this.length
start=clamp(start,len,0)
end=clamp(end,len,len)
if(Buffer._useTypedArrays){return Buffer._augment(this.subarray(start,end))}else{var sliceLen=end-start
var newBuf=new Buffer(sliceLen,undefined,!0)
for(var i=0;i<sliceLen;i++){newBuf[i]=this[i+start]}
return newBuf}}
Buffer.prototype.get=function(offset){console.log('.get() is deprecated. Access using array indexes instead.')
return this.readUInt8(offset)}
Buffer.prototype.set=function(v,offset){console.log('.set() is deprecated. Access using array indexes instead.')
return this.writeUInt8(v,offset)}
Buffer.prototype.readUInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset<this.length,'Trying to read beyond buffer length')}
if(offset>=this.length)
return
return this[offset]}
function _readUInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+1<buf.length,'Trying to read beyond buffer length')}
var len=buf.length
if(offset>=len)
return
var val
if(littleEndian){val=buf[offset]
if(offset+1<len)
val|=buf[offset+1]<<8}else{val=buf[offset]<<8
if(offset+1<len)
val|=buf[offset+1]}
return val}
Buffer.prototype.readUInt16LE=function(offset,noAssert){return _readUInt16(this,offset,!0,noAssert)}
Buffer.prototype.readUInt16BE=function(offset,noAssert){return _readUInt16(this,offset,!1,noAssert)}
function _readUInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+3<buf.length,'Trying to read beyond buffer length')}
var len=buf.length
if(offset>=len)
return
var val
if(littleEndian){if(offset+2<len)
val=buf[offset+2]<<16
if(offset+1<len)
val|=buf[offset+1]<<8
val|=buf[offset]
if(offset+3<len)
val=val+(buf[offset+3]<<24>>>0)}else{if(offset+1<len)
val=buf[offset+1]<<16
if(offset+2<len)
val|=buf[offset+2]<<8
if(offset+3<len)
val|=buf[offset+3]
val=val+(buf[offset]<<24>>>0)}
return val}
Buffer.prototype.readUInt32LE=function(offset,noAssert){return _readUInt32(this,offset,!0,noAssert)}
Buffer.prototype.readUInt32BE=function(offset,noAssert){return _readUInt32(this,offset,!1,noAssert)}
Buffer.prototype.readInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset<this.length,'Trying to read beyond buffer length')}
if(offset>=this.length)
return
var neg=this[offset]&0x80
if(neg)
return(0xff-this[offset]+1)*-1
else return this[offset]}
function _readInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+1<buf.length,'Trying to read beyond buffer length')}
var len=buf.length
if(offset>=len)
return
var val=_readUInt16(buf,offset,littleEndian,!0)
var neg=val&0x8000
if(neg)
return(0xffff-val+1)*-1
else return val}
Buffer.prototype.readInt16LE=function(offset,noAssert){return _readInt16(this,offset,!0,noAssert)}
Buffer.prototype.readInt16BE=function(offset,noAssert){return _readInt16(this,offset,!1,noAssert)}
function _readInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+3<buf.length,'Trying to read beyond buffer length')}
var len=buf.length
if(offset>=len)
return
var val=_readUInt32(buf,offset,littleEndian,!0)
var neg=val&0x80000000
if(neg)
return(0xffffffff-val+1)*-1
else return val}
Buffer.prototype.readInt32LE=function(offset,noAssert){return _readInt32(this,offset,!0,noAssert)}
Buffer.prototype.readInt32BE=function(offset,noAssert){return _readInt32(this,offset,!1,noAssert)}
function _readFloat(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset+3<buf.length,'Trying to read beyond buffer length')}
return ieee754.read(buf,offset,littleEndian,23,4)}
Buffer.prototype.readFloatLE=function(offset,noAssert){return _readFloat(this,offset,!0,noAssert)}
Buffer.prototype.readFloatBE=function(offset,noAssert){return _readFloat(this,offset,!1,noAssert)}
function _readDouble(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset+7<buf.length,'Trying to read beyond buffer length')}
return ieee754.read(buf,offset,littleEndian,52,8)}
Buffer.prototype.readDoubleLE=function(offset,noAssert){return _readDouble(this,offset,!0,noAssert)}
Buffer.prototype.readDoubleBE=function(offset,noAssert){return _readDouble(this,offset,!1,noAssert)}
Buffer.prototype.writeUInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset<this.length,'trying to write beyond buffer length')
verifuint(value,0xff)}
if(offset>=this.length)return
this[offset]=value}
function _writeUInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+1<buf.length,'trying to write beyond buffer length')
verifuint(value,0xffff)}
var len=buf.length
if(offset>=len)
return
for(var i=0,j=Math.min(len-offset,2);i<j;i++){buf[offset+i]=(value&(0xff<<(8*(littleEndian?i:1-i))))>>>(littleEndian?i:1-i)*8}}
Buffer.prototype.writeUInt16LE=function(value,offset,noAssert){_writeUInt16(this,value,offset,!0,noAssert)}
Buffer.prototype.writeUInt16BE=function(value,offset,noAssert){_writeUInt16(this,value,offset,!1,noAssert)}
function _writeUInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+3<buf.length,'trying to write beyond buffer length')
verifuint(value,0xffffffff)}
var len=buf.length
if(offset>=len)
return
for(var i=0,j=Math.min(len-offset,4);i<j;i++){buf[offset+i]=(value>>>(littleEndian?i:3-i)*8)&0xff}}
Buffer.prototype.writeUInt32LE=function(value,offset,noAssert){_writeUInt32(this,value,offset,!0,noAssert)}
Buffer.prototype.writeUInt32BE=function(value,offset,noAssert){_writeUInt32(this,value,offset,!1,noAssert)}
Buffer.prototype.writeInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset<this.length,'Trying to write beyond buffer length')
verifsint(value,0x7f,-0x80)}
if(offset>=this.length)
return
if(value>=0)
this.writeUInt8(value,offset,noAssert)
else this.writeUInt8(0xff+value+1,offset,noAssert)}
function _writeInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+1<buf.length,'Trying to write beyond buffer length')
verifsint(value,0x7fff,-0x8000)}
var len=buf.length
if(offset>=len)
return
if(value>=0)
_writeUInt16(buf,value,offset,littleEndian,noAssert)
else _writeUInt16(buf,0xffff+value+1,offset,littleEndian,noAssert)}
Buffer.prototype.writeInt16LE=function(value,offset,noAssert){_writeInt16(this,value,offset,!0,noAssert)}
Buffer.prototype.writeInt16BE=function(value,offset,noAssert){_writeInt16(this,value,offset,!1,noAssert)}
function _writeInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+3<buf.length,'Trying to write beyond buffer length')
verifsint(value,0x7fffffff,-0x80000000)}
var len=buf.length
if(offset>=len)
return
if(value>=0)
_writeUInt32(buf,value,offset,littleEndian,noAssert)
else _writeUInt32(buf,0xffffffff+value+1,offset,littleEndian,noAssert)}
Buffer.prototype.writeInt32LE=function(value,offset,noAssert){_writeInt32(this,value,offset,!0,noAssert)}
Buffer.prototype.writeInt32BE=function(value,offset,noAssert){_writeInt32(this,value,offset,!1,noAssert)}
function _writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+3<buf.length,'Trying to write beyond buffer length')
verifIEEE754(value,3.4028234663852886e+38,-3.4028234663852886e+38)}
var len=buf.length
if(offset>=len)
return
ieee754.write(buf,value,offset,littleEndian,23,4)}
Buffer.prototype.writeFloatLE=function(value,offset,noAssert){_writeFloat(this,value,offset,!0,noAssert)}
Buffer.prototype.writeFloatBE=function(value,offset,noAssert){_writeFloat(this,value,offset,!1,noAssert)}
function _writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,'missing value')
assert(typeof littleEndian==='boolean','missing or invalid endian')
assert(offset!==undefined&&offset!==null,'missing offset')
assert(offset+7<buf.length,'Trying to write beyond buffer length')
verifIEEE754(value,1.7976931348623157E+308,-1.7976931348623157E+308)}
var len=buf.length
if(offset>=len)
return
ieee754.write(buf,value,offset,littleEndian,52,8)}
Buffer.prototype.writeDoubleLE=function(value,offset,noAssert){_writeDouble(this,value,offset,!0,noAssert)}
Buffer.prototype.writeDoubleBE=function(value,offset,noAssert){_writeDouble(this,value,offset,!1,noAssert)}
Buffer.prototype.fill=function(value,start,end){if(!value)value=0
if(!start)start=0
if(!end)end=this.length
if(typeof value==='string'){value=value.charCodeAt(0)}
assert(typeof value==='number'&&!isNaN(value),'value is not a number')
assert(end>=start,'end < start')
if(end===start)return
if(this.length===0)return
assert(start>=0&&start<this.length,'start out of bounds')
assert(end>=0&&end<=this.length,'end out of bounds')
for(var i=start;i<end;i++){this[i]=value}}
Buffer.prototype.inspect=function(){var out=[]
var len=this.length
for(var i=0;i<len;i++){out[i]=toHex(this[i])
if(i===exports.INSPECT_MAX_BYTES){out[i+1]='...'
break}}
return'<Buffer '+out.join(' ')+'>'}
Buffer.prototype.toArrayBuffer=function(){if(typeof Uint8Array!=='undefined'){if(Buffer._useTypedArrays){return(new Buffer(this)).buffer}else{var buf=new Uint8Array(this.length)
for(var i=0,len=buf.length;i<len;i+=1)
buf[i]=this[i]
return buf.buffer}}else{throw new Error('Buffer.toArrayBuffer not supported in this browser')}}
function stringtrim(str){if(str.trim)return str.trim()
return str.replace(/^\s+|\s+$/g,'')}
var BP=Buffer.prototype
Buffer._augment=function(arr){arr._isBuffer=!0
arr._get=arr.get
arr._set=arr.set
arr.get=BP.get
arr.set=BP.set
arr.write=BP.write
arr.toString=BP.toString
arr.toLocaleString=BP.toString
arr.toJSON=BP.toJSON
arr.copy=BP.copy
arr.slice=BP.slice
arr.readUInt8=BP.readUInt8
arr.readUInt16LE=BP.readUInt16LE
arr.readUInt16BE=BP.readUInt16BE
arr.readUInt32LE=BP.readUInt32LE
arr.readUInt32BE=BP.readUInt32BE
arr.readInt8=BP.readInt8
arr.readInt16LE=BP.readInt16LE
arr.readInt16BE=BP.readInt16BE
arr.readInt32LE=BP.readInt32LE
arr.readInt32BE=BP.readInt32BE
arr.readFloatLE=BP.readFloatLE
arr.readFloatBE=BP.readFloatBE
arr.readDoubleLE=BP.readDoubleLE
arr.readDoubleBE=BP.readDoubleBE
arr.writeUInt8=BP.writeUInt8
arr.writeUInt16LE=BP.writeUInt16LE
arr.writeUInt16BE=BP.writeUInt16BE
arr.writeUInt32LE=BP.writeUInt32LE
arr.writeUInt32BE=BP.writeUInt32BE
arr.writeInt8=BP.writeInt8
arr.writeInt16LE=BP.writeInt16LE
arr.writeInt16BE=BP.writeInt16BE
arr.writeInt32LE=BP.writeInt32LE
arr.writeInt32BE=BP.writeInt32BE
arr.writeFloatLE=BP.writeFloatLE
arr.writeFloatBE=BP.writeFloatBE
arr.writeDoubleLE=BP.writeDoubleLE
arr.writeDoubleBE=BP.writeDoubleBE
arr.fill=BP.fill
arr.inspect=BP.inspect
arr.toArrayBuffer=BP.toArrayBuffer
return arr}
function clamp(index,len,defaultValue){if(typeof index!=='number')return defaultValue
index=~~index;if(index>=len)return len
if(index>=0)return index
index+=len
if(index>=0)return index
return 0}
function coerce(length){length=~~Math.ceil(+length)
return length<0?0:length}
function isArray(subject){return(Array.isArray||function(subject){return Object.prototype.toString.call(subject)==='[object Array]'})(subject)}
function isArrayish(subject){return isArray(subject)||Buffer.isBuffer(subject)||subject&&typeof subject==='object'&&typeof subject.length==='number'}
function toHex(n){if(n<16)return'0'+n.toString(16)
return n.toString(16)}
function utf8ToBytes(str){var byteArray=[]
for(var i=0;i<str.length;i++){var b=str.charCodeAt(i)
if(b<=0x7F)
byteArray.push(str.charCodeAt(i))
else{var start=i
if(b>=0xD800&&b<=0xDFFF)i++
var h=encodeURIComponent(str.slice(start,i+1)).substr(1).split('%')
for(var j=0;j<h.length;j++)
byteArray.push(parseInt(h[j],16))}}
return byteArray}
function asciiToBytes(str){var byteArray=[]
for(var i=0;i<str.length;i++){byteArray.push(str.charCodeAt(i)&0xFF)}
return byteArray}
function utf16leToBytes(str){var c,hi,lo
var byteArray=[]
for(var i=0;i<str.length;i++){c=str.charCodeAt(i)
hi=c>>8
lo=c%256
byteArray.push(lo)
byteArray.push(hi)}
return byteArray}
function base64ToBytes(str){return base64.toByteArray(str)}
function blitBuffer(src,dst,offset,length){var pos
for(var i=0;i<length;i++){if((i+offset>=dst.length)||(i>=src.length))
break
dst[i+offset]=src[i]}
return i}
function decodeUtf8Char(str){try{return decodeURIComponent(str)}catch(err){return String.fromCharCode(0xFFFD)}}
function verifuint(value,max){assert(typeof value==='number','cannot write a non-number as a number')
assert(value>=0,'specified a negative value for writing an unsigned value')
assert(value<=max,'value is larger than maximum value for type')
assert(Math.floor(value)===value,'value has a fractional component')}
function verifsint(value,max,min){assert(typeof value==='number','cannot write a non-number as a number')
assert(value<=max,'value larger than maximum allowed value')
assert(value>=min,'value smaller than minimum allowed value')
assert(Math.floor(value)===value,'value has a fractional component')}
function verifIEEE754(value,max,min){assert(typeof value==='number','cannot write a non-number as a number')
assert(value<=max,'value larger than maximum allowed value')
assert(value>=min,'value smaller than minimum allowed value')}
function assert(test,message){if(!test)throw new Error(message||'Failed assertion')}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\index.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer")},{"base64-js":10,"buffer":9,"ieee754":11,"ngpmcQ":12}],10:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var lookup='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';(function(exports){'use strict';var Arr=(typeof Uint8Array!=='undefined')?Uint8Array:Array
var PLUS='+'.charCodeAt(0)
var SLASH='/'.charCodeAt(0)
var NUMBER='0'.charCodeAt(0)
var LOWER='a'.charCodeAt(0)
var UPPER='A'.charCodeAt(0)
var PLUS_URL_SAFE='-'.charCodeAt(0)
var SLASH_URL_SAFE='_'.charCodeAt(0)
function decode(elt){var code=elt.charCodeAt(0)
if(code===PLUS||code===PLUS_URL_SAFE)
return 62
if(code===SLASH||code===SLASH_URL_SAFE)
return 63
if(code<NUMBER)
return-1
if(code<NUMBER+10)
return code-NUMBER+26+26
if(code<UPPER+26)
return code-UPPER
if(code<LOWER+26)
return code-LOWER+26}
function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr
if(b64.length%4>0){throw new Error('Invalid string. Length must be a multiple of 4')}
var len=b64.length
placeHolders='='===b64.charAt(len-2)?2:'='===b64.charAt(len-1)?1:0
arr=new Arr(b64.length*3/4-placeHolders)
l=placeHolders>0?b64.length-4:b64.length
var L=0
function push(v){arr[L++]=v}
for(i=0,j=0;i<l;i+=4,j+=3){tmp=(decode(b64.charAt(i))<<18)|(decode(b64.charAt(i+1))<<12)|(decode(b64.charAt(i+2))<<6)|decode(b64.charAt(i+3))
push((tmp&0xFF0000)>>16)
push((tmp&0xFF00)>>8)
push(tmp&0xFF)}
if(placeHolders===2){tmp=(decode(b64.charAt(i))<<2)|(decode(b64.charAt(i+1))>>4)
push(tmp&0xFF)}else if(placeHolders===1){tmp=(decode(b64.charAt(i))<<10)|(decode(b64.charAt(i+1))<<4)|(decode(b64.charAt(i+2))>>2)
push((tmp>>8)&0xFF)
push(tmp&0xFF)}
return arr}
function uint8ToBase64(uint8){var i,extraBytes=uint8.length%3,output="",temp,length
function encode(num){return lookup.charAt(num)}
function tripletToBase64(num){return encode(num>>18&0x3F)+encode(num>>12&0x3F)+encode(num>>6&0x3F)+encode(num&0x3F)}
for(i=0,length=uint8.length-extraBytes;i<length;i+=3){temp=(uint8[i]<<16)+(uint8[i+1]<<8)+(uint8[i+2])
output+=tripletToBase64(temp)}
switch(extraBytes){case 1:temp=uint8[uint8.length-1]
output+=encode(temp>>2)
output+=encode((temp<<4)&0x3F)
output+='=='
break
case 2:temp=(uint8[uint8.length-2]<<8)+(uint8[uint8.length-1])
output+=encode(temp>>10)
output+=encode((temp>>4)&0x3F)
output+=encode((temp<<2)&0x3F)
output+='='
break}
return output}
exports.toByteArray=b64ToByteArray
exports.fromByteArray=uint8ToBase64}(typeof exports==='undefined'?(this.base64js={}):exports))}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib")},{"buffer":9,"ngpmcQ":12}],11:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m
var eLen=nBytes*8-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var nBits=-7
var i=isLE?(nBytes-1):0
var d=isLE?-1:1
var s=buffer[offset+i]
i+=d
e=s&((1<<(-nBits))-1)
s>>=(-nBits)
nBits+=eLen
for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}
m=e&((1<<(-nBits))-1)
e>>=(-nBits)
nBits+=mLen
for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}
if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:((s?-1:1)*Infinity)}else{m=m+Math.pow(2,mLen)
e=e-eBias}
return(s?-1:1)*m*Math.pow(2,e-mLen)}
exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c
var eLen=nBytes*8-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var rt=(mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0)
var i=isLE?0:(nBytes-1)
var d=isLE?1:-1
var s=value<0||(value===0&&1/value<0)?1:0
value=Math.abs(value)
if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0
e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2)
if(value*(c=Math.pow(2,-e))<1){e--
c*=2}
if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}
if(value*c>=2){e++
c/=2}
if(e+eBias>=eMax){m=0
e=eMax}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen)
e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen)
e=0}}
for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}
e=(e<<mLen)|m
eLen+=mLen
for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}
buffer[offset+i-d]|=s*128}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754\\index.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754")},{"buffer":9,"ngpmcQ":12}],12:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){var process=module.exports={};process.nextTick=(function(){var canSetImmediate=typeof window!=='undefined'&&window.setImmediate;var canPost=typeof window!=='undefined'&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}
if(canPost){var queue=[];window.addEventListener('message',function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==='process-tick'){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},!0);return function nextTick(fn){queue.push(fn);window.postMessage('process-tick','*')}}
return function nextTick(fn){setTimeout(fn,0)}})();process.title='browser';process.browser=!0;process.env={};process.argv=[];function noop(){}
process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported')}
process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported')}}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process\\browser.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process")},{"buffer":9,"ngpmcQ":12}],13:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,!0):function(w){if(!w.document){throw new Error("jQuery requires a window with a document")}
return factory(w)}}else{factory(global)}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number"};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window};var preservedScriptAttributes={type:!0,src:!0,noModule:!0};function DOMEval(code,doc,node){doc=doc||document;var i,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){if(node[i]){script[i]=node[i]}}}
doc.head.appendChild(script).parentNode.removeChild(script)}
function toType(obj){if(obj==null){return obj+""}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj}
var version="3.3.1",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this)},get:function(num){if(num==null){return slice.call(this)}
return num<0?this[num+this.length]:this[num]},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret},each:function(callback){return jQuery.each(this,callback)},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},slice:function(){return this.pushStack(slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},end:function(){return this.prevObject||this.constructor()},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++}
if(typeof target!=="object"&&!isFunction(target)){target={}}
if(i===length){target=this;i--}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=!1;clone=src&&Array.isArray(src)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}
target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}
return target};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:!0,error:function(msg){throw new Error(msg)},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return!1}
proto=getProto(obj);if(!proto){return!0}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString},isEmptyObject:function(obj){var name;for(name in obj){return!1}
return!0},globalEval:function(code){DOMEval(code)},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===!1){break}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===!1){break}}}
return obj},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)}else{push.call(ret,arr)}}
return ret},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j]}
first.length=i;return first},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i])}}
return matches},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}
return concat.apply([],ret)},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator]}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});function isArrayLike(obj){var length=!!obj&&"length" in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return!1}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=!0}
return 0},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i}}
return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00)},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD"}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" "}
return"\\"+ch},unloadHandler=function(){setDocument()},disabledAncestor=addCombinator(function(elem){return elem.disabled===!0&&("form" in elem||"label" in elem)},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1}}}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results}}else{return results}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape)}else{context.setAttribute("id",(nid=expando))}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i])}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id")}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed)}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]}
return(cache[key+" "]=value)}
return cache}
function markFunction(fn){fn[expando]=!0;return fn}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el)}catch(e){return!1}finally{if(el.parentNode){el.parentNode.removeChild(el)}
el=null}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1}}}
return a?1:-1}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}
function createDisabledPseudo(disabled){return function(elem){if("form" in elem){if(elem.parentNode&&elem.disabled===!1){if("label" in elem){if("label" in elem.parentNode){return elem.parentNode.disabled===disabled}else{return elem.disabled===disabled}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled}
return elem.disabled===disabled}else if("label" in elem){return elem.disabled===disabled}
return!1}}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])}}})})}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":!1};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,!1)}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler)}}
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className")});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length});if(support.getById){Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}};Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[]}}}else{Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId}};Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem]}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem]}}}
return[]}}}
Expr.find.TAG=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag)}else if(support.qsa){return context.querySelectorAll(tag)}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)}}
return tmp}
return results};Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=")}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]")}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")}
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled")}
docElem.appendChild(el).disabled=!0;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled")}
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos)})}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return!0}}}
return!1};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=!0;return 0}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0}
return compare&4?-1:1}:function(a,b){if(a===b){hasDuplicate=!0;return 0}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0}else if(aup===bup){return siblingCheck(a,b)}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur)}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur)}
while(ap[i]===bp[i]){i++}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0};return document};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)}
return contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape)};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)}}
while(j--){results.splice(duplicates[j],1)}}
sortInput=null;return results};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node)}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}}else if(nodeType===3||nodeType===4){return elem.nodeValue}
return ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" "}
return match.slice(0,4)},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd")}else if(match[3]){Sizzle.error(match[0])}
return match},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr.CHILD.test(match[0])){return null}
if(match[3]){match[2]=match[4]||match[5]||""}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,!0))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}
return match.slice(0,3)}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return!0}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"")})},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}
if(!operator){return!0}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":!1}},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=!1;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return!1}}
start=dir=type==="only"&&!start&&"nextSibling"}
return!0}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex}
if(diff===!1){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff]}
if(node===elem){break}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0)}}},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(elem){return fn(elem,0,args)}}
return fn}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop()}}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0}}while((elem=elem.parentNode)&&elem.nodeType===1);return!1}}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},"root":function(elem){return elem===docElem},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},"enabled":createDisabledPseudo(!1),"disabled":createDisabledPseudo(!0),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}
return elem.selected===!0},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return!1}}
return!0},"parent":function(elem){return!Expr.pseudos.empty(elem)},"header":function(elem){return rheader.test(elem.nodeName)},"input":function(elem){return rinputs.test(elem.nodeName)},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")},"first":createPositionalPseudo(function(){return[0]}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1]}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)}
return matchIndexes}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i)}
return matchIndexes})}};Expr.pseudos.nth=Expr.pseudos.eq;for(i in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){Expr.pseudos[i]=createInputPseudo(i)}
for(i in{submit:!0,reset:!0}){Expr.pseudos[i]=createButtonPseudo(i)}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0)}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}
groups.push((tokens=[]))}
matched=!1;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length)}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length)}}
if(!matched){break}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value}
return selector}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)}}
return!1}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return!0}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2])}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return!0}}}}}
return!1}}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return!1}}
return!0}:matchers[0]}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}
return results}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}
return newUnmatched}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))}}
postFinder(null,(matcherOut=[]),temp,xml)}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)}else{push.apply(results,matcherOut)}}})}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,!0),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1},implicitRelative,!0),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))}
matchers.push(matcher)}}
return elementMatcher(matchers)}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break}}
if(outermost){dirruns=dirrunsUnique}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--}
if(seed){unmatched.push(elem)}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}
setMatched=condense(setMatched)}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}
return unmatched};return bySet?markFunction(superMatcher):superMatcher}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector)}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached)}else{elementMatchers.push(cached)}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector}
return cached};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results}else if(compiled){context=context.parentNode}
selector=selector.slice(tokens.shift().value.length)}
i=matchExpr.needsContext.test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results}
break}}}}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#"})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")===""})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue}})}
if(!assert(function(el){return el.getAttribute("disabled")==null})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===!0?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null}})}
return Sizzle})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break}
matched.push(elem)}}
return matched};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n)}}
return matched};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()};var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not})}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not})}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not})}
return jQuery.filter(qualifier,elements,not)}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")"}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[]}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1}))};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return!0}}}))}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}
return len>1?jQuery.uniqueSort(ret):ret},filter:function(selector){return this.pushStack(winnow(this,selector||[],!1))},not:function(selector){return this.pushStack(winnow(this,selector||[],!0))},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],!1).length}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]}else{match=rquickExpr.exec(selector)}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,!0));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match])}else{this.attr(match,context[match])}}}
return this}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1}
return this}}else if(!context||context.jquery){return(context||root).find(selector)}else{return this.constructor(context).find(selector)}}else if(selector.nodeType){this[0]=selector;this.length=1;return this}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery)}
return jQuery.makeArray(selector,this)};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return!0}}})},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched)},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0])}
return indexOf.call(this,elem.jquery?elem[0]:elem)},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))))},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents:function(elem){return dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return dir(elem,"nextSibling")},prevAll:function(elem){return dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until)},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem)},children:function(elem){return siblings(elem.firstChild)},contents:function(elem){if(nodeName(elem,"iframe")){return elem.contentDocument}
if(nodeName(elem,"template")){elem=elem.content||elem}
return jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched)}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched)}
if(rparentsprev.test(name)){matched.reverse()}}
return this.pushStack(matched)}});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=!0});return object}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=!0;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===!1&&options.stopOnFalse){firingIndex=list.length;memory=!1}}}
if(!options.memory){memory=!1}
firing=!1;if(locked){if(memory){list=[]}else{list=""}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory)}(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg)}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg)}})})(arguments);if(memory&&!firing){fire()}}
return this},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--}}});return this},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0},empty:function(){if(list){list=[]}
return this},disable:function(){locked=queue=[];list=memory="";return this},disabled:function(){return!list},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory=""}
return this},locked:function(){return!!locked},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire()}}
return this},fire:function(){self.fireWith(this,arguments);return this},fired:function(){return!!fired}};return self};function Identity(v){return v}
function Thrower(ex){throw ex}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject)}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject)}else{resolve.apply(undefined,[value].slice(noValue))}}catch(value){reject.apply(undefined,[value])}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state},always:function(){deferred.done(arguments).fail(arguments);return this},"catch":function(fn){return promise.then(null,fn)},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments)}})});fns=null}).promise()},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution")}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special))}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith))}}else{if(handler!==Identity){that=undefined;args=[returned]}(special||deferred.resolveWith)(that,args)}},process=special?mightThrow:function(){try{mightThrow()}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace)}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e]}
deferred.rejectWith(that,args)}}};if(depth){process()}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook()}
window.setTimeout(process)}}}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower))}).promise()},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock)}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}
return deferred},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),master=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){master.resolveWith(resolveContexts,resolveValues)}}};if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then()}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject)}
return master.promise()}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack)}};jQuery.readyException=function(error){window.setTimeout(function(){throw error})};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error)});return this};jQuery.extend({isReady:!1,readyWait:1,ready:function(wait){if(wait===!0?--jQuery.readyWait:jQuery.isReady){return}
jQuery.isReady=!0;if(wait!==!0&&--jQuery.readyWait>0){return}
readyList.resolveWith(document,[jQuery])}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready()}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready)}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed)}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=!0;for(i in key){access(elems,fn,i,key[i],!0,emptyGet,raw)}}else if(value!==undefined){chainable=!0;if(!isFunction(value)){raw=!0}
if(bulk){if(raw){fn.call(elems,value);fn=null}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value)}}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}
if(chainable){return elems}
if(bulk){return fn.call(elems)}
return len?fn(elems[0],key):emptyGet};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(all,letter){return letter.toUpperCase()}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType)};function Data(){this.expando=jQuery.expando+Data.uid++}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value}else{Object.defineProperty(owner,this.expando,{value:value,configurable:!0})}}}
return value},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value}else{for(prop in data){cache[camelCase(prop)]=data[prop]}}
return cache},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)]},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key)}
this.set(owner,key,value);return value!==undefined?value:key},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase)}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[])}
i=key.length;while(i--){delete cache[key[i]]}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined}else{delete owner[this.expando]}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache)}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return!0}
if(data==="false"){return!1}
if(data==="null"){return null}
if(data===+data+""){return+data}
if(rbrace.test(data)){return JSON.parse(data)}
return data}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data)}catch(e){}
dataUser.set(elem,key,data)}else{data=undefined}}
return data}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem)},data:function(elem,name,data){return dataUser.access(elem,name,data)},removeData:function(elem,name){dataUser.remove(elem,name)},_data:function(elem,name,data){return dataPriv.access(elem,name,data)},_removeData:function(elem,name){dataPriv.remove(elem,name)}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name])}}}
dataPriv.set(elem,"hasDataAttrs",!0)}}
return data}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key)})}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data}
data=dataAttr(elem,key);if(data!==undefined){return data}
return}
this.each(function(){dataUser.set(this,key,value)})},null,value,arguments.length>1,null,!0)},removeData:function(key){return this.each(function(){dataUser.remove(this,key)})}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data))}else{queue.push(data)}}
return queue||[]}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}
if(fn){if(type==="fx"){queue.unshift("inprogress")}
delete hooks.stop;fn.call(elem,next,hooks)}
if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key])})})}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}
if(arguments.length<setter){return jQuery.queue(this[0],type)}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},clearQueue:function(type){return this.queue(type||"fx",[])},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}
resolve();return defer.promise(obj)}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none"};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name]}
return ret};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur()}:function(){return jQuery.css(elem,prop,"")},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0}
initialInUnit=initialInUnit/scale}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[]}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted}}
return adjusted}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block"}
defaultDisplayMap[nodeName]=display;return display}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display=""}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem)}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display)}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index]}}
return elements}
jQuery.fn.extend({show:function(){return showHide(this,!0)},hide:function(){return showHide(this)},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show()}else{jQuery(this).hide()}})}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*")}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*")}else{ret=[]}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret)}
return ret}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"))}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent=""}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem)}
continue}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp)}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)}}}}
return fragment}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(!0).cloneNode(!0).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(!0).lastChild.defaultValue})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return!0}
function returnFalse(){return!1}
function safeActiveElement(){try{return document.activeElement}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}
for(type in types){on(elem,type,selector,data,types[type],one)}
return elem}
if(data==null&&fn==null){fn=selector;data=selector=undefined}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;selector=undefined}}
if(fn===!1){fn=returnFalse}else if(!fn){return elem}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector)})}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}
if(selector){jQuery.find.matchesSelector(documentElement,selector)}
if(!handler.guid){handler.guid=jQuery.guid++}
if(!(events=elemData.events)){events=elemData.events={}}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined}}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===!1){if(elem.addEventListener){elem.addEventListener(type,eventHandle)}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)}else{handlers.push(handleObj)}
jQuery.event.global[type]=!0}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,!0)}
continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--}
if(special.remove){special.remove.call(elem,handleObj)}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===!1){jQuery.removeEvent(elem,type,elemData.handle)}
delete events[type]}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events")}},dispatch:function(nativeEvent){var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i]}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===!1){return}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===!1){event.preventDefault();event.stopPropagation()}}}}}
if(special.postDispatch){special.postDispatch.call(this,event)}
return event.result},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===!0)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj)}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers})}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)})}
return handlerQueue},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:!0,configurable:!0,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent)}}:function(){if(this.originalEvent){return this.originalEvent[name]}},set:function(value){Object.defineProperty(this,name,{enumerable:!0,configurable:!0,writable:!0,value:value})}})},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return!1}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return!1}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){this.click();return!1}},_default:function(event){return nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result}}}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===!1?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget}else{this.type=src}
if(props){jQuery.extend(this,props)}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=!0};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault()}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation()}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation()}
this.stopPropagation()}};jQuery.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(event){var button=event.button;if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1}
if(button&2){return 3}
if(button&4){return 2}
return 0}
return event.which}},jQuery.event.addProp);jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}
return ret}}});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn)},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}
return this}
if(selector===!1||typeof selector==="function"){fn=selector;selector=undefined}
if(fn===!1){fn=returnFalse}
return this.each(function(){jQuery.event.remove(this,types,fn,selector)})}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem}
return elem}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5)}else{elem.removeAttribute("type")}
return elem}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur)}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html())}
domManip(self,args,callback,ignored)})}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,!1,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,!0,!0);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}
callback.call(collection[i],node,i)}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl){jQuery._evalUrl(node.src)}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc,node)}}}}}}
return collection}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node))}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"))}
node.parentNode.removeChild(node)}}
return elem}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>")},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(!0),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i])}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i])}}else{cloneCopyEvent(elem,clone)}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))}
return clone},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.removeEvent(elem,type,data.handle)}}}
elem[dataPriv.expando]=undefined}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,!0)},remove:function(selector){return remove(this,selector)},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value}})},null,value,arguments.length)},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)}})},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)}})},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,!1));elem.textContent=""}}
return this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?!1:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,!1));elem.innerHTML=value}}
elem=0}catch(e){}}
if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this)}}},ignored)}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(!0);jQuery(insert[i])[original](elems);push.apply(ret,elems.get())}
return this.pushStack(ret)}});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window}
return view.getComputedStyle(elem)};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=div.offsetWidth===36||"absolute";documentElement.removeChild(container);div=null}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure))}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return}
div.style.backgroundClip="content-box";div.cloneNode(!0).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal},pixelPosition:function(){computeStyleTests();return pixelPositionVal},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal}})})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}
return ret!==undefined?ret+"":ret}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return}
return(this.get=hookFn).apply(this,arguments)}}}
var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name}
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name}}}
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name}
return ret}
function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0}
for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],!0,styles)}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],!0,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],!0,styles)}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-0.5))}
return delta}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),val=curCSS(elem,dimension,styles),isBorderBox=jQuery.css(elem,"boxSizing",!1,styles)==="border-box",valueIsBorderBox=isBorderBox;if(rnumnonpx.test(val)){if(!extra){return val}
val="auto"}
valueIsBorderBox=valueIsBorderBox&&(support.boxSizingReliable()||val===elem.style[dimension]);if(val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",!1,styles)==="inline"){val=elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)];valueIsBorderBox=!0}
val=parseFloat(val)||0;return(val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px"}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{"animationIterationCount":!0,"columnCount":!0,"fillOpacity":!0,"flexGrow":!0,"flexShrink":!0,"fontWeight":!0,"lineHeight":!0,"opacity":!0,"order":!0,"orphans":!0,"widows":!0,"zIndex":!0,"zoom":!0},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName)}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number"}
if(value==null||value!==value){return}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px")}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"}
if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value)}else{style[name]=value}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,!1,extra))!==undefined){return ret}
return style[name]}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName)}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get" in hooks){val=hooks.get(elem,!0,extra)}
if(val===undefined){val=curCSS(elem,name,styles)}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}
if(extra===""||extra){num=parseFloat(val);return extra===!0||isFinite(num)?num||0:val}
return val}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra)}):getWidthOrHeight(elem,dimension,extra)}},set:function(elem,value,extra){var matches,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",!1,styles)==="border-box",subtract=extra&&boxModelAdjustment(elem,dimension,extra,isBorderBox,styles);if(isBorderBox&&support.scrollboxSize()===styles.position){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,"border",!1,styles)-0.5)}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension)}
return setPositiveNumber(elem,value,subtract)}}});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left}))+"px"}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}
return expanded}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],!1,styles)}
return map}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)}else{this.pos=eased=percent}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}
if(hooks&&hooks.set){hooks.set(this)}else{Tween.propHooks._default.set(this)}
return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop]}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.easing={linear:function(p){return p},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===!1&&window.requestAnimationFrame){window.requestAnimationFrame(schedule)}else{window.setTimeout(schedule,jQuery.fx.interval)}
jQuery.fx.tick()}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined});return(fxNow=Date.now())}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}
if(includeWidth){attrs.opacity=attrs.width=type}
return attrs}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width" in props||"height" in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=!0}else{continue}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display")}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay}else{showHide([elem],!0);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem])}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display}}
style.display="inline-block"}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}
propTween=!1;for(prop in orig){if(!propTween){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay})}
if(toggle){dataShow.hidden=!hidden}
if(hidden){showHide([elem],!0)}
anim.done(function(){if(!hidden){showHide([elem])}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop])}})}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0]}
if(index!==name){props[name]=value;delete props[index]}
hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}}else{specialEasing[name]=easing}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem}),tick=function(){if(stopped){return!1}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent)}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining}
if(!length){deferred.notifyWith(elem,[animation,1,0])}
deferred.resolveWith(elem,[animation]);return!1},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(!0,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this}
stopped=!0;for(;index<length;index++){animation.tweens[index].run(1)}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd])}else{deferred.rejectWith(elem,[animation,gotoEnd])}
return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result)}
return result}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"]}else{props=props.match(rnothtmlwhite)}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback)}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback)}else{Animation.prefilters.push(callback)}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration]}else{opt.duration=jQuery.fx.speeds._default}}}
if(opt.queue==null||opt.queue===!0){opt.queue="fx"}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this)}
if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(!0)}};doAnimation.finish=doAnimation;return empty||optall.queue===!1?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}
if(clearQueue&&type!==!1){this.queue(type||"fx",[])}
return this.each(function(){var dequeue=!0,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=!1;timers.splice(index,1)}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})},finish:function(type){if(type!==!1){type=type||"fx"}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=!0;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,!0)}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(!0);timers.splice(index,1)}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)}}
delete data.finish})}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,!0),speed,easing,callback)}});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}
if(!timers.length){jQuery.fx.stop()}
fxNow=undefined};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start()};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return}
inProgress=!0;schedule()};jQuery.fx.stop=function(){inProgress=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout)}})};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t"})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value)}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined)}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return}
if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}
elem.setAttribute(name,value+"");return value}
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}
return value}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name)}}}});boolHook={set:function(elem,value,name){if(value===!1){jQuery.removeAttr(elem,name)}else{elem.setAttribute(name,name)}
return name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle}
return ret}});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]})}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}
if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}
return(elem[name]=value)}
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret}
return elem[name]},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10)}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0}
return-1}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex}
return null},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex}}}}}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ")}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||""}
function classesToArray(value){if(Array.isArray(value)){return value}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[]}
return[]}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)))})}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue)}}}}
return this},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)))})}
if(!arguments.length){return this.attr("class","")}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ")}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue)}}}}
return this},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value)}
if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal)})}
return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)}else{self.addClass(className)}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className)}
if(this.setAttribute){this.setAttribute("class",className||value===!1?"":dataPriv.get(this,"__className__")||"")}}})},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return!0}}
return!1}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"")}
return ret==null?"":ret}
return}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val())}else{val=value}
if(val==null){val=""}else if(typeof val==="number"){val+=""}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""})}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem))}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max}else{i=one?index:0}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}
values.push(value)}}
return values},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=!0}}
if(!optionSet){elem.selectedIndex=-1}
return values}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1)}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value}}});support.focusin="onfocusin" in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation()};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}
if(rfocusMorph.test(type+jQuery.event.triggered)){return}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===!1){return}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data)}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===!1){event.preventDefault()}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===!1)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback)}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback)}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp}}}}
return event.result},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:!0});jQuery.event.trigger(e,null,elem)}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,!0)}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event))};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,!0)}
dataPriv.access(doc,fix,(attaches||0)+1)},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,!0);dataPriv.remove(doc,fix)}else{dataPriv.access(doc,fix,attaches)}}}})}
var location=window.location;var nonce=Date.now();var rquery=(/\?/);jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml")}catch(e){xml=undefined}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}
return xml};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add)}})}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{add(prefix,obj)}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value)};if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)})}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}
return s.join("&")};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}})}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func)}else{(structure[dataType]=structure[dataType]||[]).push(func)}}}}}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=!0;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return!1}else if(seekingTransport){return!(selected=dataTypeOrTransport)}});return selected}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]}}
if(deep){jQuery.extend(!0,target,deep)}
return target}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0]}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}
if(!firstDataType){firstDataType=type}}
finalDataType=finalDataType||firstDataType}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}
return responses[finalDataType]}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===!0){conv=converters[conv2]}else if(converters[conv2]!==!0){current=tmp[0];dataTypes.unshift(tmp[1])}
break}}}}
if(conv!==!0){if(conv&&s.throws){response=conv(response)}else{try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}}}
return{state:"success",data:response}}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]}}
match=responseHeaders[key.toLowerCase()]}
return match==null?null:match},getAllResponseHeaders:function(){return completed?responseHeadersString:null},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value}
return this},overrideMimeType:function(type){if(completed==null){s.mimeType=type}
return this},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status])}else{for(code in map){statusCode[code]=[statusCode[code],map[code]]}}}
return this},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText)}
done(0,finalText);return this}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host}catch(e){s.crossDomain=!0}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data}
if(s.cache===!1){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached}
s.url=cacheURL+uncached}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+")}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])}}
if(s.data&&s.hasContent&&s.contentType!==!1||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===!1||completed)){return jqXHR.abort()}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}
if(completed){return jqXHR}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}
try{completed=!1;transport.send(requestHeaders,done)}catch(e){if(completed){throw e}
done(-1,e)}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return}
completed=!0;if(timeoutTimer){window.clearTimeout(timeoutTimer)}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified}}
if(status===204||s.type==="HEAD"){statusText="nocontent"}else if(status===304){statusText="notmodified"}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")}}}
return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url))}});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0])}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(!0);if(this[0].parentNode){wrap.insertBefore(this[0])}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild}
return elem}).append(this)}
return this},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html)})},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes)});return this}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem)};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length)};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest()}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}
for(i in headers){xhr.setRequestHeader(i,headers[i])}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort()}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error")}else{complete(xhr.status,xhr.statusText)}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders())}}}};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback()}})}}}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null)}catch(e){if(callback){throw e}}},abort:function(){if(callback){callback()}}}}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=!1}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=!1}
if(s.crossDomain){s.type="GET"}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type)}});document.head.appendChild(script[0])},abort:function(){if(callback){callback()}}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=!0;return callback}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==!1&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)}else if(s.jsonp!==!1){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}
return responseContainer[0]};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName)}else{window[callbackName]=overwritten}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0])}
responseContainer=overwritten=undefined});return"script"}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[]}
if(typeof context==="boolean"){keepScripts=context;context=!1}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base)}else{context=document}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])]}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove()}
return jQuery.merge([],parsed.childNodes)};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off)}
if(isFunction(params)){callback=params;params=undefined}else if(params&&typeof params==="object"){type="POST"}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR])})})}
return this};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative"}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset))}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft}
if("using" in options){options.using.call(elem,props)}else{curElem.css(props)}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}
var rect,win,elem=this[0];if(!elem){return}
if(!elem.getClientRects().length){return{top:0,left:0}}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset}},position:function(){if(!this[0]){return}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",!0);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",!0)}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",!0),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",!0)}},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent}
return offsetParent||documentElement})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem}else if(elem.nodeType===9){win=elem.defaultView}
if(val===undefined){return win?win[prop]:elem[method]}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset)}else{elem[method]=val}},method,val,arguments.length)}});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}})});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===!0||value===!0?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name]}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable)}})});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)}});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)}});jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}
if(!isFunction(fn)){return undefined}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++}else{jQuery.ready(!0)}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj))};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery})}
var _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}
return jQuery};if(!noGlobal){window.jQuery=window.$=jQuery}
return jQuery})}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\jquery\\dist\\jquery.js","/..\\..\\node_modules\\jquery\\dist")},{"buffer":9,"ngpmcQ":12}],14:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{root.lightbox=factory(root.jQuery)}}(this,function($){function Lightbox(options){this.album=[];this.currentImageIndex=void 0;this.init();this.options=$.extend({},this.constructor.defaults);this.option(options)}
Lightbox.defaults={albumLabel:'Image %1 of %2',alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1};Lightbox.prototype.option=function(options){$.extend(this.options,options)};Lightbox.prototype.imageCountLabel=function(currentImageNum,totalImages){return this.options.albumLabel.replace(/%1/g,currentImageNum).replace(/%2/g,totalImages)};Lightbox.prototype.init=function(){var self=this;$(document).ready(function(){self.enable();self.build()})};Lightbox.prototype.enable=function(){var self=this;$('body').on('click','a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',function(event){self.start($(event.currentTarget));return!1})};Lightbox.prototype.build=function(){if($('#lightbox').length>0){return}
var self=this;$('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));this.$lightbox=$('#lightbox');this.$overlay=$('#lightboxOverlay');this.$outerContainer=this.$lightbox.find('.lb-outerContainer');this.$container=this.$lightbox.find('.lb-container');this.$image=this.$lightbox.find('.lb-image');this.$nav=this.$lightbox.find('.lb-nav');this.containerPadding={top:parseInt(this.$container.css('padding-top'),10),right:parseInt(this.$container.css('padding-right'),10),bottom:parseInt(this.$container.css('padding-bottom'),10),left:parseInt(this.$container.css('padding-left'),10)};this.imageBorderWidth={top:parseInt(this.$image.css('border-top-width'),10),right:parseInt(this.$image.css('border-right-width'),10),bottom:parseInt(this.$image.css('border-bottom-width'),10),left:parseInt(this.$image.css('border-left-width'),10)};this.$overlay.hide().on('click',function(){self.end();return!1});this.$lightbox.hide().on('click',function(event){if($(event.target).attr('id')==='lightbox'){self.end()}
return!1});this.$outerContainer.on('click',function(event){if($(event.target).attr('id')==='lightbox'){self.end()}
return!1});this.$lightbox.find('.lb-prev').on('click',function(){if(self.currentImageIndex===0){self.changeImage(self.album.length-1)}else{self.changeImage(self.currentImageIndex-1)}
return!1});this.$lightbox.find('.lb-next').on('click',function(){if(self.currentImageIndex===self.album.length-1){self.changeImage(0)}else{self.changeImage(self.currentImageIndex+1)}
return!1});this.$nav.on('mousedown',function(event){if(event.which===3){self.$nav.css('pointer-events','none');self.$lightbox.one('contextmenu',function(){setTimeout(function(){this.$nav.css('pointer-events','auto')}.bind(self),0)})}});this.$lightbox.find('.lb-loader, .lb-close').on('click',function(){self.end();return!1})};Lightbox.prototype.start=function($link){var self=this;var $window=$(window);$window.on('resize',$.proxy(this.sizeOverlay,this));$('select, object, embed').css({visibility:'hidden'});this.sizeOverlay();this.album=[];var imageNumber=0;function addToAlbum($link){self.album.push({alt:$link.attr('data-alt'),link:$link.attr('href'),title:$link.attr('data-title')||$link.attr('title')})}
var dataLightboxValue=$link.attr('data-lightbox');var $links;if(dataLightboxValue){$links=$($link.prop('tagName')+'[data-lightbox="'+dataLightboxValue+'"]');for(var i=0;i<$links.length;i=++i){addToAlbum($($links[i]));if($links[i]===$link[0]){imageNumber=i}}}else{if($link.attr('rel')==='lightbox'){addToAlbum($link)}else{$links=$($link.prop('tagName')+'[rel="'+$link.attr('rel')+'"]');for(var j=0;j<$links.length;j=++j){addToAlbum($($links[j]));if($links[j]===$link[0]){imageNumber=j}}}}
var top=$window.scrollTop()+this.options.positionFromTop;var left=$window.scrollLeft();this.$lightbox.css({top:top+'px',left:left+'px'}).fadeIn(this.options.fadeDuration);if(this.options.disableScrolling){$('html').addClass('lb-disable-scrolling')}
this.changeImage(imageNumber)};Lightbox.prototype.changeImage=function(imageNumber){var self=this;this.disableKeyboardNav();var $image=this.$lightbox.find('.lb-image');this.$overlay.fadeIn(this.options.fadeDuration);$('.lb-loader').fadeIn('slow');this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();this.$outerContainer.addClass('animating');var preloader=new Image();preloader.onload=function(){var $preloader;var imageHeight;var imageWidth;var maxImageHeight;var maxImageWidth;var windowHeight;var windowWidth;$image.attr({'alt':self.album[imageNumber].alt,'src':self.album[imageNumber].link});$preloader=$(preloader);$image.width(preloader.width);$image.height(preloader.height);if(self.options.fitImagesInViewport){windowWidth=$(window).width();windowHeight=$(window).height();maxImageWidth=windowWidth-self.containerPadding.left-self.containerPadding.right-self.imageBorderWidth.left-self.imageBorderWidth.right-20;maxImageHeight=windowHeight-self.containerPadding.top-self.containerPadding.bottom-self.imageBorderWidth.top-self.imageBorderWidth.bottom-120;if(self.options.maxWidth&&self.options.maxWidth<maxImageWidth){maxImageWidth=self.options.maxWidth}
if(self.options.maxHeight&&self.options.maxHeight<maxImageWidth){maxImageHeight=self.options.maxHeight}
if((preloader.width>maxImageWidth)||(preloader.height>maxImageHeight)){if((preloader.width/maxImageWidth)>(preloader.height/maxImageHeight)){imageWidth=maxImageWidth;imageHeight=parseInt(preloader.height/(preloader.width/imageWidth),10);$image.width(imageWidth);$image.height(imageHeight)}else{imageHeight=maxImageHeight;imageWidth=parseInt(preloader.width/(preloader.height/imageHeight),10);$image.width(imageWidth);$image.height(imageHeight)}}}
self.sizeContainer($image.width(),$image.height())};preloader.src=this.album[imageNumber].link;this.currentImageIndex=imageNumber};Lightbox.prototype.sizeOverlay=function(){this.$overlay.width($(document).width()).height($(document).height())};Lightbox.prototype.sizeContainer=function(imageWidth,imageHeight){var self=this;var oldWidth=this.$outerContainer.outerWidth();var oldHeight=this.$outerContainer.outerHeight();var newWidth=imageWidth+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right;var newHeight=imageHeight+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function postResize(){self.$lightbox.find('.lb-dataContainer').width(newWidth);self.$lightbox.find('.lb-prevLink').height(newHeight);self.$lightbox.find('.lb-nextLink').height(newHeight);self.showImage()}
if(oldWidth!==newWidth||oldHeight!==newHeight){this.$outerContainer.animate({width:newWidth,height:newHeight},this.options.resizeDuration,'swing',function(){postResize()})}else{postResize()}};Lightbox.prototype.showImage=function(){this.$lightbox.find('.lb-loader').stop(!0).hide();this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};Lightbox.prototype.updateNav=function(){var alwaysShowNav=!1;try{document.createEvent('TouchEvent');alwaysShowNav=(this.options.alwaysShowNavOnTouchDevices)?!0:!1}catch(e){}
this.$lightbox.find('.lb-nav').show();if(this.album.length>1){if(this.options.wrapAround){if(alwaysShowNav){this.$lightbox.find('.lb-prev, .lb-next').css('opacity','1')}
this.$lightbox.find('.lb-prev, .lb-next').show()}else{if(this.currentImageIndex>0){this.$lightbox.find('.lb-prev').show();if(alwaysShowNav){this.$lightbox.find('.lb-prev').css('opacity','1')}}
if(this.currentImageIndex<this.album.length-1){this.$lightbox.find('.lb-next').show();if(alwaysShowNav){this.$lightbox.find('.lb-next').css('opacity','1')}}}}};Lightbox.prototype.updateDetails=function(){var self=this;if(typeof this.album[this.currentImageIndex].title!=='undefined'&&this.album[this.currentImageIndex].title!==''){var $caption=this.$lightbox.find('.lb-caption');if(this.options.sanitizeTitle){$caption.text(this.album[this.currentImageIndex].title)}else{$caption.html(this.album[this.currentImageIndex].title)}
$caption.fadeIn('fast').find('a').on('click',function(event){if($(this).attr('target')!==undefined){window.open($(this).attr('href'),$(this).attr('target'))}else{location.href=$(this).attr('href')}})}
if(this.album.length>1&&this.options.showImageNumberLabel){var labelText=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast')}else{this.$lightbox.find('.lb-number').hide()}
this.$outerContainer.removeClass('animating');this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration,function(){return self.sizeOverlay()})};Lightbox.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var preloadNext=new Image();preloadNext.src=this.album[this.currentImageIndex+1].link}
if(this.currentImageIndex>0){var preloadPrev=new Image();preloadPrev.src=this.album[this.currentImageIndex-1].link}};Lightbox.prototype.enableKeyboardNav=function(){$(document).on('keyup.keyboard',$.proxy(this.keyboardAction,this))};Lightbox.prototype.disableKeyboardNav=function(){$(document).off('.keyboard')};Lightbox.prototype.keyboardAction=function(event){var KEYCODE_ESC=27;var KEYCODE_LEFTARROW=37;var KEYCODE_RIGHTARROW=39;var keycode=event.keyCode;var key=String.fromCharCode(keycode).toLowerCase();if(keycode===KEYCODE_ESC||key.match(/x|o|c/)){this.end()}else if(key==='p'||keycode===KEYCODE_LEFTARROW){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}else if(this.options.wrapAround&&this.album.length>1){this.changeImage(this.album.length-1)}}else if(key==='n'||keycode===KEYCODE_RIGHTARROW){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}else if(this.options.wrapAround&&this.album.length>1){this.changeImage(0)}}};Lightbox.prototype.end=function(){this.disableKeyboardNav();$(window).off('resize',this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);$('select, object, embed').css({visibility:'visible'});if(this.options.disableScrolling){$('html').removeClass('lb-disable-scrolling')}};return new Lightbox()}))}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\lightbox2\\dist\\js\\lightbox.js","/..\\..\\node_modules\\lightbox2\\dist\\js")},{"buffer":9,"jquery":13,"ngpmcQ":12}],15:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){;(function(factory){if(typeof module==="object"&&typeof module.exports==="object"){factory(require("jquery"),window,document)}else{factory(jQuery,window,document)}}(function($,window,document,undefined){'use strict';(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id)}}());var vendor=(function(){var styles=window.getComputedStyle(document.documentElement,''),pre=(Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)||(styles.OLink===''&&['','o']))[1];if(pre=='moz')return'Moz';else return pre})();$.fn.simpleParallax=function(options){var pluginName='simpleParallax',defaultOptions={'orientation':'up','scale':'1.2'},params=$.extend(defaultOptions,options);var isInit=!1;function simpleParallax(element){this.name=pluginName;this.$element=element;this.$elementContainer=this.$element.closest('.simpleParallax');this.init();this.scrollEvent=this.scrollEvent.bind(this);$(window).on('scroll',this.scrollEvent)}
$.extend(simpleParallax.prototype,{init:function(){var self=this;if(!isInit){self.getViewportOffset();isInit=!0}
self.$element[0].style[vendor+'Transform']='scale('+params.scale+')';this.proceedElement()},getViewportOffset:function(){var self=this,edge=20;self.viewportHeight=$(window).outerHeight();self.viewportTopX=$(window).scrollTop();self.viewportBottomX=self.viewportTopX+self.viewportHeight;self.viewportTopX-=edge;self.viewportBottomX+=edge},getElementOffset:function(){var self=this;self.elementHeight=self.$elementContainer.outerHeight();self.elementWidth=self.$elementContainer.outerWidth();self.elementTopX=self.$elementContainer.offset().top;self.elementBottomX=self.elementTopX+self.elementHeight},getElementDimension:function(){var self=this;self.elementImageHeight=self.$element[0].getBoundingClientRect().height;self.elementImageWidth=self.$element[0].getBoundingClientRect().width;self.elementRange=Math.abs(self.elementHeight-self.elementImageHeight)},isVisible:function(){var self=this;return((self.elementTopX>self.viewportTopX&&self.elementTopX<self.viewportBottomX)||(self.elementBottomX<self.viewportBottomX&&self.elementBottomX>self.viewportTopX)||(self.elementTopX<self.viewportTopX&&self.elementBottomX>self.viewportBottomX))},calculate:function(){var self=this;var rangeMax=self.elementRange;var rangeMax=rangeMax-(rangeMax*.20);if(params.orientation==='down'||params.orientation==='right'){rangeMax*=-1}
var percentage=(self.viewportBottomX-self.elementTopX)/((self.viewportHeight+self.elementHeight)/100);self.translateValue=((percentage/100)*rangeMax)-(rangeMax/2)},animate:function(){var self=this,translateAxe,inlineCss;if(params.orientation=='up'||params.orientation=='down'){translateAxe='translateY'}else if(params.orientation=='left'||params.orientation=='right'){translateAxe='translateX'}
inlineCss='scale('+params.scale+') '+translateAxe+'('+self.translateValue+'px)';self.$element[0].style[vendor+'Transform']=inlineCss},scrollEvent:function(){var self=this;self.getViewportOffset();self.proceedElement()},proceedElement:function(){var self=this;self.getElementOffset();if(!self.isVisible())return;self.getElementDimension();self.calculate();window.requestAnimationFrame(function(){self.animate()})},});return this.each(function(){var $elementToWrap=$(this);if($elementToWrap.closest('picture').length)$elementToWrap=$(this).closest('picture');$elementToWrap.wrap('<div class="simpleParallax" style="overflow:hidden"></div>');new simpleParallax($(this))})}}))}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\simple-parallax-jquery\\src\\simpleParallax.js","/..\\..\\node_modules\\simple-parallax-jquery\\src")},{"buffer":9,"jquery":13,"ngpmcQ":12}],16:[function(require,module,exports){(function(process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:$(element),appendDots:$(element),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" />').text(i+1)},dots:!1,dotsClass:'slick-dots',draggable:!0,easing:'linear',edgeFriction:0.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:'ondemand',mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:'window',responsive:null,rows:1,rtl:!1,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000};_.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=!1;_.focussed=!1;_.interrupted=!1;_.hidden='hidden';_.paused=!0;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=!0;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange'}
_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(!0)}
return Slick}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==='boolean'){addBefore=index;index=null}else if(index<0||(index>=_.slideCount)){return!1}
_.unload();if(typeof(index)==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===!0){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===!0&&_.options.vertical===!1){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===!0&&_.options.vertical===!1){targetLeft=-targetLeft}
if(_.transformsEnabled===!1){if(_.options.vertical===!1){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===!1){if(_.options.rtl===!0){_.currentLeft=-(_.currentLeft)}
$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===!1){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps)}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===!1){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)'}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)'}
_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}
return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,!0)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===!1){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase}
if(_.options.fade===!1){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===!1){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0}
else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}
_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===!0){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}
if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}
if(_.options.infinite!==!0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true')}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)))}
_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active')}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'')});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===!0||_.options.swipeToSlide===!0){_.options.slidesToScroll=1}
$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===!0){_.$list.addClass('draggable')}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}
slide.appendChild(row)}
newSlides.appendChild(slide)}
_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':(100/_.options.slidesPerRow)+'%','display':'inline-block'})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=!1;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth}else if(_.respondTo==='slider'){respondToWidth=sliderWidth}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth)}
if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===!1){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}
if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial)}
triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial)}
triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial);triggerBreakpoint=targetBreakpoint}}
if(!initial&&triggerBreakpoint!==!1){_.$slider.trigger('breakpoint',[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is('a')){event.preventDefault()}
if(!$target.is('li')){$target=$target.closest('li')}
unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case 'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,!1,dontAnimate)}
break;case 'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,!1,dontAnimate)}
break;case 'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),!1,dontAnimate);$target.children().trigger('focus');break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}
prevNavigable=navigables[n]}}
return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,!0)).off('mouseleave.slick',$.proxy(_.interrupt,_,!1));if(_.options.accessibility===!0){_.$dots.off('keydown.slick',_.keyHandler)}}
_.$slider.off('focus.slick blur.slick');if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===!0){_.$prevArrow&&_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow&&_.$nextArrow.off('keydown.slick',_.keyHandler)}}
_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===!0){_.$list.off('keydown.slick',_.keyHandler)}
if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().off('click.slick',_.selectHandler)}
$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,!0));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,!1))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===!1){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove()}
if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}
if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}
if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}
_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=!0;if(!refresh){_.$slider.trigger('destroy',[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===!1){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===!1){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===!1){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay()}},0)})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===!0){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===!0){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}
return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(!0);if(_.options.infinite===!0){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;coef=-1
if(_.options.vertical===!0&&_.options.centerMode===!0){if(_.options.slidesToShow===2){coef=-1.5}else if(_.options.slidesToShow===1){coef=-2}}
verticalOffset=(verticalHeight*_.options.slidesToShow)*coef}
if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight}}
if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}
if(_.options.centerMode===!0&&_.slideCount<=_.options.slidesToShow){_.slideOffset=((_.slideWidth*Math.floor(_.options.slidesToShow))/2)-((_.slideWidth*_.slideCount)/2)}else if(_.options.centerMode===!0&&_.options.infinite===!0){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===!0){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}
if(_.options.vertical===!1){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset}
if(_.options.variableWidth===!0){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===!1){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow)}
if(_.options.rtl===!0){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}
if(_.options.centerMode===!0){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===!1){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1)}
if(_.options.rtl===!0){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}
targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}
return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===!1){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}
while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}
return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===!0?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===!0){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return!1}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(!0);_.focusHandler()}
if(creation){_.$slider.trigger('init',[_])}
if(_.options.accessibility===!0){_.initADA()}
if(_.options.autoplay){_.paused=!1;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return(val>=0)&&(val<_.slideCount)});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){var ariaButtonControl='slick-slide-control'+_.instanceUid+slideControlIndex
if($('#'+ariaButtonControl).length){$(this).attr({'aria-describedby':ariaButtonControl})}}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':(i+1)+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'})}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end()}
for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({'tabindex':'0'})}else{_.$slides.eq(i).removeAttr('tabindex')}}
_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===!0){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler)}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===!0){_.$dots.on('keydown.slick',_.keyHandler)}}
if(_.options.dots===!0&&_.options.pauseOnDotsHover===!0&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,!0)).on('mouseleave.slick',$.proxy(_.interrupt,_,!1))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,!0));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,!1))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===!0){_.$list.on('keydown.slick',_.keyHandler)}
if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().on('click.slick',_.selectHandler)}
$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}
if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===!0){_.changeSlide({data:{message:_.options.rtl===!0?'next':'previous'}})}else if(event.keyCode===39&&_.options.accessibility===!0){_.changeSlide({data:{message:_.options.rtl===!0?'previous':'next'}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes)}}
image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading')});_.$slider.trigger('lazyLoaded',[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource])};imageToLoad.src=imageSource})}
if(_.options.centerMode===!0){if(_.options.infinite===!0){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===!0){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}
loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}
loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=!0};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=!0;_.paused=!1;_.focussed=!1;_.interrupted=!1};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=!1;if(_.slideCount>_.options.slidesToShow){_.setPosition()}
_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}
if(_.options.accessibility===!0){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus()}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes)}}
image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===!0){_.setPosition()}
_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger('allImagesLoaded',[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}
currentSlide=_.currentSlide;_.destroy(!0);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},!1)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}
l--}
_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}
_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}
_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(!1,!0);if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().on('click.slick',_.selectHandler)}
_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==='boolean'){removeBefore=index;index=removeBefore===!0?0:_.slideCount-1}else{index=removeBefore===!0?--index:index}
if(_.slideCount<1||index<0||index>_.slideCount-1){return!1}
_.unload();if(removeAll===!0){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===!0){position=-position}
x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===!1){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===!1){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps)}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===!1){if(_.options.centerMode===!0){_.$list.css({padding:('0px '+_.options.centerPadding)})}}else{_.$list.height(_.$slides.first().outerHeight(!0)*_.options.slidesToShow);if(_.options.centerMode===!0){_.$list.css({padding:(_.options.centerPadding+' 0px')})}}
_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===!1&&_.options.variableWidth===!1){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)))}else if(_.options.variableWidth===!0){_.$slideTrack.width(5000*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(!0)*_.$slideTrack.children('.slick-slide').length)))}
var offset=_.$slides.first().outerWidth(!0)-_.$slides.first().width();if(_.options.variableWidth===!1)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===!0){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===!0&&_.options.vertical===!1){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.css('height',targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=!1,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple'}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive'}else if(typeof arguments[1]!=='undefined'){type='single'}}
if(type==='single'){_.options[option]=value}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}
l--}
_.options.responsive.push(value[item])}}}
if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===!1){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}
_.$slider.trigger('setPosition',[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===!0?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical')}else{_.$slider.removeClass('slick-vertical')}
if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===!0){_.cssTransitions=!0}}
if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}
if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=!1}
if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=!1}
if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=!1}
if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=!1}
if(bodyStyle.transform!==undefined&&_.animType!==!1){_.animType='transform';_.transformType='transform';_.transitionType='transition'}
_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==!1)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===!0){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===!0){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false')}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false')}
if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center')}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center')}}
_.$slides.eq(index).addClass('slick-center')}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false')}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===!0?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false')}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')}}}
if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===!0){_.options.centerMode=!1}
if(_.options.infinite===!0&&_.options.fade===!1){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===!0){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}
for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(!0).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned')}
for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(!0).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned')}
_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','')})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}
_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,!1,!0);return}
_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||!1;if(_.animating===!0&&_.options.waitForAnimate===!0){return}
if(_.options.fade===!0&&_.currentSlide===index){return}
if(sync===!1){_.asNavFor(index)}
targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===!1&&_.options.centerMode===!1&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===!1){targetSlide=_.currentSlide;if(dontAnimate!==!0&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}
return}else if(_.options.infinite===!1&&_.options.centerMode===!0&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===!1){targetSlide=_.currentSlide;if(dontAnimate!==!0&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}
return}
if(_.options.autoplay){clearInterval(_.autoPlayTimer)}
if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll)}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}
_.animating=!0;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}
_.updateDots();_.updateArrows();if(_.options.fade===!0){if(dontAnimate!==!0){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}
_.animateHeight();return}
if(dontAnimate!==!0&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}
if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}
_.$slider.addClass('slick-loading')};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}
if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===!1?'left':'right')}
if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===!1?'left':'right')}
if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===!1?'right':'left')}
if(_.options.verticalSwiping===!0){if((swipeAngle>=35)&&(swipeAngle<=135)){return'down'}else{return'up'}}
return'vertical'};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=!1;_.swiping=!1;if(_.scrolling){_.scrolling=!1;return!1}
_.interrupted=!1;_.shouldClick=(_.touchObject.swipeLength>10)?!1:!0;if(_.touchObject.curX===undefined){return!1}
if(_.touchObject.edgeHit===!0){_.$slider.trigger('edge',[_,_.swipeDirection()])}
if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case 'left':case 'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case 'right':case 'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}
if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===!1)||('ontouchend' in document&&_.options.swipe===!1)){return}else if(_.options.draggable===!1&&event.type.indexOf('mouse')!==-1){return}
_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===!0){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}
switch(event.data.action){case 'start':_.swipeStart(event);break;case 'move':_.swipeMove(event);break;case 'end':_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=!1,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return!1}
curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=!0;return!1}
if(_.options.verticalSwiping===!0){_.touchObject.swipeLength=verticalSwipeLength}
swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=!0;event.preventDefault()}
positionOffset=(_.options.rtl===!1?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===!0){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}
swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=!1;if(_.options.infinite===!1){if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=!0}}
if(_.options.vertical===!1){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset}
if(_.options.verticalSwiping===!0){_.swipeLeft=curLeft+swipeLength*positionOffset}
if(_.options.fade===!0||_.options.touchMove===!1){return!1}
if(_.animating===!0){_.swipeLeft=null;return!1}
_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=!0;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return!1}
if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}
_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=!0};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove()}
if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}
if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}
_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','')};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===!1){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===!0){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active')}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=!0}else{_.interrupted=!1}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')
_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret}
return _}}))}).call(this,require("ngpmcQ"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\slick-carousel\\slick\\slick.js","/..\\..\\node_modules\\slick-carousel\\slick")},{"buffer":9,"jquery":13,"ngpmcQ":12}]},{},[7])