/*
SNIPPET:jsresource — Useful Resources, Plugins: UI Librraries, Touch Events,
Responsive Galleries / Sliders / Slideshows / Carousels, A Responsive Images
Approach, Lightweight Datepicker, Lightweight Modal Box, Markup Editor,
Tiny Scrollbar
*/

// SNIPPET:jscarousel — Carousel

// SNIPPET:jscollaps — Collapsibles

// SNIPPET:jscontext — Context Menu and Popups on Right Button Click

// SNIPPET:jsdownload — Platform Contextual Downloads

// SNIPPET:jsflash — Flash / SWFogject

// SNIPPET:jsfluidvideo — Fluid Width Video (New Style)

// SNIPPET:jsmodal — Modal Box

// SNIPPET:jsmq — JavaScript Media Query

// SNIPPET:jsrotator — Rotator

// SNIPPET:jsscaf — jQuery Self Calling Anonymous Function

// SNIPPET:jssticky — Sticky Menu

// SNIPPET:jstabs — Tabs



/*
|-------------------------------------------------------------------------------
| CONSOLE ERRORS CURE
|-------------------------------------------------------------------------------
|
| Avoid 'console' errors in browsers that lack a console.
|
*/
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()

/*
|-------------------------------------------------------------------------------
| EASING — jQuery Easing v1.3
|-------------------------------------------------------------------------------
|
| © 2001 Robert Penner - http://gsgd.co.uk/sandbox/jquery/easing/
|
*/

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInSine:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeInSine:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeInSine(e,i-t,0,r,i)+n},easeInSine:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeInSine(e,t*2-i,0,r,i)*.5+r*.5+n}})

/*
|-------------------------------------------------------------------------------
| CHARTS — Chart.js
|-------------------------------------------------------------------------------
|
| © 2013 Nick Downie - http://chartjs.org/
|
*/
var Chart=function(e){function t(e,t,n){e=s((e-t.graphMin)/(t.steps*t.stepValue),1,0);return n*t.steps*e}function n(e,t,n,r){function i(){a+=o;var f=e.animation?s(u(a),null,0):1;r.clearRect(0,0,l,c);e.scaleOverlay?(n(f),t()):(t(),n(f));if(1>=a)y(i);else if("function"==typeof e.onAnimationComplete)e.onAnimationComplete()}var o=e.animation?1/s(e.animationSteps,Number.MAX_VALUE,1):1,u=f[e.animationEasing],a=e.animation?0:1;"function"!==typeof t&&(t=function(){});y(i)}function r(e,t,n,r,s,o){var u;e=Math.floor(Math.log(r-s)/Math.LN10);s=Math.floor(s/(1*Math.pow(10,e)))*Math.pow(10,e);r=Math.ceil(r/(1*Math.pow(10,e)))*Math.pow(10,e)-s;e=Math.pow(10,e);for(u=Math.round(r/e);u<n||u>t;)e=u<n?e/2:2*e,u=Math.round(r/e);t=[];i(o,t,u,s,e);return{steps:u,stepValue:e,graphMin:s,labels:t}}function i(e,t,n,r,i){if(e)for(var s=1;s<n+1;s++)t.push(u(e,{value:(r+i*s).toFixed(0!=i%1?i.toString().split(".")[1].length:0)}))}function s(e,t,n){return!isNaN(parseFloat(t))&&isFinite(t)&&e>t?t:!isNaN(parseFloat(n))&&isFinite(n)&&e<n?n:e}function o(e,t){var n={},r;for(r in e)n[r]=e[r];for(r in t)n[r]=t[r];return n}function u(e,t){var n=!/\W/.test(e)?b[e]=b[e]||u(document.getElementById(e).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("   ").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("   ").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return t?n(t):n}var a=this,f={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-1*e*(e-2)},easeInOutQuad:function(e){return 1>(e/=.5)?.5*e*e:-.5*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1*((e=e/1-1)*e*e+1)},easeInOutCubic:function(e){return 1>(e/=.5)?.5*e*e*e:.5*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-1*((e=e/1-1)*e*e*e-1)},easeInOutQuart:function(e){return 1>(e/=.5)?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},easeInQuint:function(e){return 1*(e/=1)*e*e*e*e},easeOutQuint:function(e){return 1*((e=e/1-1)*e*e*e*e+1)},easeInOutQuint:function(e){return 1>(e/=.5)?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return-1*Math.cos(e/1*(Math.PI/2))+1},easeOutSine:function(e){return 1*Math.sin(e/1*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e/1)-1)},easeInExpo:function(e){return 0==e?1:1*Math.pow(2,10*(e/1-1))},easeOutExpo:function(e){return 1==e?1:1*(-Math.pow(2,-10*e/1)+1)},easeInOutExpo:function(e){return 0==e?0:1==e?1:1>(e/=.5)?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)},easeInCirc:function(e){return 1<=e?e:-1*(Math.sqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return 1*Math.sqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return 1>(e/=.5)?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var t=1.70158,n=0,r=1;if(0==e)return 0;if(1==(e/=1))return 1;n||(n=.3);r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r);return-(r*Math.pow(2,10*(e-=1))*Math.sin((1*e-t)*2*Math.PI/n))},easeOutElastic:function(e){var t=1.70158,n=0,r=1;if(0==e)return 0;if(1==(e/=1))return 1;n||(n=.3);r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r);return r*Math.pow(2,-10*e)*Math.sin((1*e-t)*2*Math.PI/n)+1},easeInOutElastic:function(e){var t=1.70158,n=0,r=1;if(0==e)return 0;if(2==(e/=.5))return 1;n||(n=1*.3*1.5);r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r);return 1>e?-.5*r*Math.pow(2,10*(e-=1))*Math.sin((1*e-t)*2*Math.PI/n):.5*r*Math.pow(2,-10*(e-=1))*Math.sin((1*e-t)*2*Math.PI/n)+1},easeInBack:function(e){return 1*(e/=1)*e*(2.70158*e-1.70158)},easeOutBack:function(e){return 1*((e=e/1-1)*e*(2.70158*e+1.70158)+1)},easeInOutBack:function(e){var t=1.70158;return 1>(e/=.5)?.5*e*e*(((t*=1.525)+1)*e-t):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:function(e){return 1-f.easeOutBounce(1-e)},easeOutBounce:function(e){return(e/=1)<1/2.75?1*7.5625*e*e:e<2/2.75?1*(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1*(7.5625*(e-=2.25/2.75)*e+.9375):1*(7.5625*(e-=2.625/2.75)*e+.984375)},easeInOutBounce:function(e){return.5>e?.5*f.easeInBounce(2*e):.5*f.easeOutBounce(2*e-1)+.5}},l=e.canvas.width,c=e.canvas.height;window.devicePixelRatio&&(e.canvas.style.width=l+"px",e.canvas.style.height=c+"px",e.canvas.height=c*window.devicePixelRatio,e.canvas.width=l*window.devicePixelRatio,e.scale(window.devicePixelRatio,window.devicePixelRatio));this.PolarArea=function(t,n){a.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var r=n?o(a.PolarArea.defaults,n):a.PolarArea.defaults;return new h(t,r,e)};this.Radar=function(t,n){a.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var r=n?o(a.Radar.defaults,n):a.Radar.defaults;return new p(t,r,e)};this.Pie=function(t,n){a.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var r=n?o(a.Pie.defaults,n):a.Pie.defaults;return new d(t,r,e)};this.Doughnut=function(t,n){a.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var r=n?o(a.Doughnut.defaults,n):a.Doughnut.defaults;return new v(t,r,e)};this.Line=function(t,n){a.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var r=n?o(a.Line.defaults,n):a.Line.defaults;return new m(t,r,e)};this.Bar=function(t,n){a.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var r=n?o(a.Bar.defaults,n):a.Bar.defaults;return new g(t,r,e)};var h=function(e,s,o){var u,a,f,h,p,d,v,m,g;p=Math.min.apply(Math,[l,c])/2;p-=Math.max.apply(Math,[.5*s.scaleFontSize,.5*s.scaleLineWidth]);h=2*s.scaleFontSize;s.scaleShowLabelBackdrop&&(h+=2*s.scaleBackdropPaddingY,p-=1.5*s.scaleBackdropPaddingY);m=p;h=h?h:5;u=Number.MIN_VALUE;a=Number.MAX_VALUE;for(f=0;f<e.length;f++)e[f].value>u&&(u=e[f].value),e[f].value<a&&(a=e[f].value);f=Math.floor(m/(.66*h));h=Math.floor(.5*(m/h));g=s.scaleShowLabels?s.scaleLabel:null;s.scaleOverride?(v={steps:s.scaleSteps,stepValue:s.scaleStepWidth,graphMin:s.scaleStartValue,labels:[]},i(g,v.labels,v.steps,s.scaleStartValue,s.scaleStepWidth)):v=r(m,f,h,u,a,g);d=p/v.steps;n(s,function(){for(var e=0;e<v.steps;e++)if(s.scaleShowLine&&(o.beginPath(),o.arc(l/2,c/2,d*(e+1),0,2*Math.PI,!0),o.strokeStyle=s.scaleLineColor,o.lineWidth=s.scaleLineWidth,o.stroke()),s.scaleShowLabels){o.textAlign="center";o.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;var t=v.labels[e];if(s.scaleShowLabelBackdrop){var n=o.measureText(t).width;o.fillStyle=s.scaleBackdropColor;o.beginPath();o.rect(Math.round(l/2-n/2-s.scaleBackdropPaddingX),Math.round(c/2-d*(e+1)-.5*s.scaleFontSize-s.scaleBackdropPaddingY),Math.round(n+2*s.scaleBackdropPaddingX),Math.round(s.scaleFontSize+2*s.scaleBackdropPaddingY));o.fill()}o.textBaseline="middle";o.fillStyle=s.scaleFontColor;o.fillText(t,l/2,c/2-d*(e+1))}},function(n){var r=-Math.PI/2,i=2*Math.PI/e.length,u=1,a=1;s.animation&&(s.animateScale&&(u=n),s.animateRotate&&(a=n));for(n=0;n<e.length;n++)o.beginPath(),o.arc(l/2,c/2,u*t(e[n].value,v,d),r,r+a*i,!1),o.lineTo(l/2,c/2),o.closePath(),o.fillStyle=e[n].color,o.fill(),s.segmentShowStroke&&(o.strokeStyle=s.segmentStrokeColor,o.lineWidth=s.segmentStrokeWidth,o.stroke()),r+=a*i},o)},p=function(e,o,u){var a,f,h,p,d,v,m,g,y;e.labels||(e.labels=[]);d=Math.min.apply(Math,[l,c])/2;p=2*o.scaleFontSize;for(a=g=0;a<e.labels.length;a++)u.font=o.pointLabelFontStyle+" "+o.pointLabelFontSize+"px "+o.pointLabelFontFamily,f=u.measureText(e.labels[a]).width,f>g&&(g=f);d-=Math.max.apply(Math,[g,1.5*(o.pointLabelFontSize/2)]);d-=o.pointLabelFontSize;g=d=s(d,null,0);p=p?p:5;a=Number.MIN_VALUE;f=Number.MAX_VALUE;for(h=0;h<e.datasets.length;h++)for(y=0;y<e.datasets[h].data.length;y++)e.datasets[h].data[y]>a&&(a=e.datasets[h].data[y]),e.datasets[h].data[y]<f&&(f=e.datasets[h].data[y]);h=Math.floor(g/(.66*p));p=Math.floor(.5*(g/p));y=o.scaleShowLabels?o.scaleLabel:null;o.scaleOverride?(m={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},i(y,m.labels,m.steps,o.scaleStartValue,o.scaleStepWidth)):m=r(g,h,p,a,f,y);v=d/m.steps;n(o,function(){var t=2*Math.PI/e.datasets[0].data.length;u.save();u.translate(l/2,c/2);if(o.angleShowLineOut){u.strokeStyle=o.angleLineColor;u.lineWidth=o.angleLineWidth;for(var n=0;n<e.datasets[0].data.length;n++)u.rotate(t),u.beginPath(),u.moveTo(0,0),u.lineTo(0,-d),u.stroke()}for(n=0;n<m.steps;n++){u.beginPath();if(o.scaleShowLine){u.strokeStyle=o.scaleLineColor;u.lineWidth=o.scaleLineWidth;u.moveTo(0,-v*(n+1));for(var r=0;r<e.datasets[0].data.length;r++)u.rotate(t),u.lineTo(0,-v*(n+1));u.closePath();u.stroke()}o.scaleShowLabels&&(u.textAlign="center",u.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,u.textBaseline="middle",o.scaleShowLabelBackdrop&&(r=u.measureText(m.labels[n]).width,u.fillStyle=o.scaleBackdropColor,u.beginPath(),u.rect(Math.round(-r/2-o.scaleBackdropPaddingX),Math.round(-v*(n+1)-.5*o.scaleFontSize-o.scaleBackdropPaddingY),Math.round(r+2*o.scaleBackdropPaddingX),Math.round(o.scaleFontSize+2*o.scaleBackdropPaddingY)),u.fill()),u.fillStyle=o.scaleFontColor,u.fillText(m.labels[n],0,-v*(n+1)))}for(n=0;n<e.labels.length;n++){u.font=o.pointLabelFontStyle+" "+o.pointLabelFontSize+"px "+o.pointLabelFontFamily;u.fillStyle=o.pointLabelFontColor;var r=Math.sin(t*n)*(d+o.pointLabelFontSize),i=Math.cos(t*n)*(d+o.pointLabelFontSize);u.textAlign=t*n==Math.PI||0==t*n?"center":t*n>Math.PI?"right":"left";u.textBaseline="middle";u.fillText(e.labels[n],r,-i)}u.restore()},function(n){var r=2*Math.PI/e.datasets[0].data.length;u.save();u.translate(l/2,c/2);for(var i=0;i<e.datasets.length;i++){u.beginPath();u.moveTo(0,n*-1*t(e.datasets[i].data[0],m,v));for(var s=1;s<e.datasets[i].data.length;s++)u.rotate(r),u.lineTo(0,n*-1*t(e.datasets[i].data[s],m,v));u.closePath();u.fillStyle=e.datasets[i].fillColor;u.strokeStyle=e.datasets[i].strokeColor;u.lineWidth=o.datasetStrokeWidth;u.fill();u.stroke();if(o.pointDot){u.fillStyle=e.datasets[i].pointColor;u.strokeStyle=e.datasets[i].pointStrokeColor;u.lineWidth=o.pointDotStrokeWidth;for(s=0;s<e.datasets[i].data.length;s++)u.rotate(r),u.beginPath(),u.arc(0,n*-1*t(e.datasets[i].data[s],m,v),o.pointDotRadius,2*Math.PI,!1),u.fill(),u.stroke()}u.rotate(r)}u.restore()},u)},d=function(e,t,r){for(var i=0,s=Math.min.apply(Math,[c/2,l/2])-5,o=0;o<e.length;o++)i+=e[o].value;n(t,null,function(n){var o=-Math.PI/2,u=1,a=1;t.animation&&(t.animateScale&&(u=n),t.animateRotate&&(a=n));for(n=0;n<e.length;n++){var f=a*e[n].value/i*2*Math.PI;r.beginPath();r.arc(l/2,c/2,u*s,o,o+f);r.lineTo(l/2,c/2);r.closePath();r.fillStyle=e[n].color;r.fill();t.segmentShowStroke&&(r.lineWidth=t.segmentStrokeWidth,r.strokeStyle=t.segmentStrokeColor,r.stroke());o+=f}},r)},v=function(e,t,r){for(var i=0,s=Math.min.apply(Math,[c/2,l/2])-5,o=s*(t.percentageInnerCutout/100),u=0;u<e.length;u++)i+=e[u].value;n(t,null,function(n){var u=-Math.PI/2,a=1,f=1;t.animation&&(t.animateScale&&(a=n),t.animateRotate&&(f=n));for(n=0;n<e.length;n++){var h=f*e[n].value/i*2*Math.PI;r.beginPath();r.arc(l/2,c/2,a*s,u,u+h,!1);r.arc(l/2,c/2,a*o,u+h,u,!0);r.closePath();r.fillStyle=e[n].color;r.fill();t.segmentShowStroke&&(r.lineWidth=t.segmentStrokeWidth,r.strokeStyle=t.segmentStrokeColor,r.stroke());u+=h}},r)},m=function(e,s,o){var u,a,f,h,p,d,v,m,g,y,b,w,E,S=0;p=c;o.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;y=1;for(h=0;h<e.labels.length;h++)u=o.measureText(e.labels[h]).width,y=u>y?u:y;l/e.labels.length<y?(S=45,l/e.labels.length<Math.cos(S)*y?(S=90,p-=y):p-=Math.sin(S)*y):p-=s.scaleFontSize;h=s.scaleFontSize;p=p-5-h;u=Number.MIN_VALUE;a=Number.MAX_VALUE;for(f=0;f<e.datasets.length;f++)for(m=0;m<e.datasets[f].data.length;m++)e.datasets[f].data[m]>u&&(u=e.datasets[f].data[m]),e.datasets[f].data[m]<a&&(a=e.datasets[f].data[m]);f=Math.floor(p/(.66*h));h=Math.floor(.5*(p/h));m=s.scaleShowLabels?s.scaleLabel:"";s.scaleOverride?(v={steps:s.scaleSteps,stepValue:s.scaleStepWidth,graphMin:s.scaleStartValue,labels:[]},i(m,v.labels,v.steps,s.scaleStartValue,s.scaleStepWidth)):v=r(p,f,h,u,a,m);d=Math.floor(p/v.steps);h=1;if(s.scaleShowLabels){o.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;for(u=0;u<v.labels.length;u++)a=o.measureText(v.labels[u]).width,h=a>h?a:h;h+=10}b=l-h-y;g=Math.floor(b/(e.labels.length-1));w=l-y/2-b;E=p+s.scaleFontSize/2;n(s,function(){o.lineWidth=s.scaleLineWidth;o.strokeStyle=s.scaleLineColor;o.beginPath();o.moveTo(l-y/2+5,E);o.lineTo(l-y/2-b-5,E);o.stroke();0<S?(o.save(),o.textAlign="right"):o.textAlign="center";o.fillStyle=s.scaleFontColor;for(var t=0;t<e.labels.length;t++)o.save(),0<S?(o.translate(w+t*g,E+s.scaleFontSize),o.rotate(-(S*(Math.PI/180))),o.fillText(e.labels[t],0,0),o.restore()):o.fillText(e.labels[t],w+t*g,E+s.scaleFontSize+3),o.beginPath(),o.moveTo(w+t*g,E+3),s.scaleShowGridLines&&0<t?(o.lineWidth=s.scaleGridLineWidth,o.strokeStyle=s.scaleGridLineColor,o.lineTo(w+t*g,5)):o.lineTo(w+t*g,E+3),o.stroke();o.lineWidth=s.scaleLineWidth;o.strokeStyle=s.scaleLineColor;o.beginPath();o.moveTo(w,E+5);o.lineTo(w,5);o.stroke();o.textAlign="right";o.textBaseline="middle";for(t=0;t<v.steps;t++)o.beginPath(),o.moveTo(w-3,E-(t+1)*d),s.scaleShowGridLines?(o.lineWidth=s.scaleGridLineWidth,o.strokeStyle=s.scaleGridLineColor,o.lineTo(w+b+5,E-(t+1)*d)):o.lineTo(w-.5,E-(t+1)*d),o.stroke(),s.scaleShowLabels&&o.fillText(v.labels[t],w-8,E-(t+1)*d)},function(n){function r(r,i){return E-n*t(e.datasets[r].data[i],v,d)}for(var i=0;i<e.datasets.length;i++){o.strokeStyle=e.datasets[i].strokeColor;o.lineWidth=s.datasetStrokeWidth;o.beginPath();o.moveTo(w,E-n*t(e.datasets[i].data[0],v,d));for(var u=1;u<e.datasets[i].data.length;u++)s.bezierCurve?o.bezierCurveTo(w+g*(u-.5),r(i,u-1),w+g*(u-.5),r(i,u),w+g*u,r(i,u)):o.lineTo(w+g*u,r(i,u));o.stroke();s.datasetFill?(o.lineTo(w+g*(e.datasets[i].data.length-1),E),o.lineTo(w,E),o.closePath(),o.fillStyle=e.datasets[i].fillColor,o.fill()):o.closePath();if(s.pointDot){o.fillStyle=e.datasets[i].pointColor;o.strokeStyle=e.datasets[i].pointStrokeColor;o.lineWidth=s.pointDotStrokeWidth;for(u=0;u<e.datasets[i].data.length;u++)o.beginPath(),o.arc(w+g*u,E-n*t(e.datasets[i].data[u],v,d),s.pointDotRadius,0,2*Math.PI,!0),o.fill(),o.stroke()}}},o)},g=function(e,s,o){var u,a,f,h,p,d,v,m,g,y,b,w,E,S,T=0;p=c;o.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;y=1;for(h=0;h<e.labels.length;h++)u=o.measureText(e.labels[h]).width,y=u>y?u:y;l/e.labels.length<y?(T=45,l/e.labels.length<Math.cos(T)*y?(T=90,p-=y):p-=Math.sin(T)*y):p-=s.scaleFontSize;h=s.scaleFontSize;p=p-5-h;u=Number.MIN_VALUE;a=Number.MAX_VALUE;for(f=0;f<e.datasets.length;f++)for(m=0;m<e.datasets[f].data.length;m++)e.datasets[f].data[m]>u&&(u=e.datasets[f].data[m]),e.datasets[f].data[m]<a&&(a=e.datasets[f].data[m]);f=Math.floor(p/(.66*h));h=Math.floor(.5*(p/h));m=s.scaleShowLabels?s.scaleLabel:"";s.scaleOverride?(v={steps:s.scaleSteps,stepValue:s.scaleStepWidth,graphMin:s.scaleStartValue,labels:[]},i(m,v.labels,v.steps,s.scaleStartValue,s.scaleStepWidth)):v=r(p,f,h,u,a,m);d=Math.floor(p/v.steps);h=1;if(s.scaleShowLabels){o.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;for(u=0;u<v.labels.length;u++)a=o.measureText(v.labels[u]).width,h=a>h?a:h;h+=10}b=l-h-y;g=Math.floor(b/e.labels.length);S=(g-2*s.scaleGridLineWidth-2*s.barValueSpacing-(s.barDatasetSpacing*e.datasets.length-1)-(s.barStrokeWidth/2*e.datasets.length-1))/e.datasets.length;w=l-y/2-b;E=p+s.scaleFontSize/2;n(s,function(){o.lineWidth=s.scaleLineWidth;o.strokeStyle=s.scaleLineColor;o.beginPath();o.moveTo(l-y/2+5,E);o.lineTo(l-y/2-b-5,E);o.stroke();0<T?(o.save(),o.textAlign="right"):o.textAlign="center";o.fillStyle=s.scaleFontColor;for(var t=0;t<e.labels.length;t++)o.save(),0<T?(o.translate(w+t*g,E+s.scaleFontSize),o.rotate(-(T*(Math.PI/180))),o.fillText(e.labels[t],0,0),o.restore()):o.fillText(e.labels[t],w+t*g+g/2,E+s.scaleFontSize+3),o.beginPath(),o.moveTo(w+(t+1)*g,E+3),o.lineWidth=s.scaleGridLineWidth,o.strokeStyle=s.scaleGridLineColor,o.lineTo(w+(t+1)*g,5),o.stroke();o.lineWidth=s.scaleLineWidth;o.strokeStyle=s.scaleLineColor;o.beginPath();o.moveTo(w,E+5);o.lineTo(w,5);o.stroke();o.textAlign="right";o.textBaseline="middle";for(t=0;t<v.steps;t++)o.beginPath(),o.moveTo(w-3,E-(t+1)*d),s.scaleShowGridLines?(o.lineWidth=s.scaleGridLineWidth,o.strokeStyle=s.scaleGridLineColor,o.lineTo(w+b+5,E-(t+1)*d)):o.lineTo(w-.5,E-(t+1)*d),o.stroke(),s.scaleShowLabels&&o.fillText(v.labels[t],w-8,E-(t+1)*d)},function(n){o.lineWidth=s.barStrokeWidth;for(var r=0;r<e.datasets.length;r++){o.fillStyle=e.datasets[r].fillColor;o.strokeStyle=e.datasets[r].strokeColor;for(var i=0;i<e.datasets[r].data.length;i++){var u=w+s.barValueSpacing+g*i+S*r+s.barDatasetSpacing*r+s.barStrokeWidth*r;o.beginPath();o.moveTo(u,E);o.lineTo(u,E-n*t(e.datasets[r].data[i],v,d)+s.barStrokeWidth/2);o.lineTo(u+S,E-n*t(e.datasets[r].data[i],v,d)+s.barStrokeWidth/2);o.lineTo(u+S,E);s.barShowStroke&&o.stroke();o.closePath();o.fill()}}},o)},y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},b={}}

/*
|-------------------------------------------------------------------------------
| DROPDOWNS
|-------------------------------------------------------------------------------
|
| Close on mobiles solution: extra element .dropdown-backdrop.
| @SEE snippet and https://github.com/twbs/bootstrap/blob/master/js/dropdown.js
|
|
*/

function dropDowns(){
    var label = $('.dropdown-toggle'),
        allDropDowns = $('.dropdown-menu, .rmb-popup');

    if(window.matchMedia('(min-width: 768px)').matches) {
        label.click(function(event) {
            allDropDowns.hide();
            $(this).parents('.dropdown').children('.dropdown-menu').toggle('fast');
            label.removeClass('active');
            $(this).addClass('active');
            return false;
        });
    }

    // var ua = navigator.userAgent,
        // event = ((ua.match(/iPad/i)) || (ua.match(/iPhone/i))) ? "touchstart" : "click";

    // $(document).bind(event, function() {
    $(document).click(function() {
        allDropDowns.hide();
        label.removeClass('active');
    });

    // Close dropdowns on Esc
    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            allDropDowns.hide();
            label.removeClass('active');
        }
    });

    // @FIXME: this did not work
    if (label.hasClass('active')) {
        $('.sec-billboard a').click(function(e) {
                e.preventDefault();
            });
    }

    allDropDowns.click(function(event) {
        event.stopPropagation();
    });

    // Hide open Dropdown on window resize
    // $(window).resize(function(){
    //     allDropDowns.hide();
    // });

}


/*
|-------------------------------------------------------------------------------
| SLIDE-OUT MENU
|-------------------------------------------------------------------------------
|
| TODO: This function is called by pressing the same buttons as a dropdowns
| function.
|
*/


function slideOut(){
    var menuStatus;
    var contentPanel = $('.page, .doc-header, .sec-billboard');

    if(window.matchMedia('(max-width: 767px)').matches) {

        $('.btn-menu').click(function() {

            if (menuStatus !== true) {

                contentPanel.removeAttr('style').animate({
                    marginLeft: '270px'
                }, 400, function() {
                    menuStatus = true;
                });

                if ($('.slide-out-left').css('visibility') != 'visible') {
                    $('.slide-out-left').css('visibility', 'visible');
                }

                return false;

            } else {

                contentPanel.animate({
                    marginLeft: '0'
                }, 400, function() {
                    menuStatus = false;
                });
                return false;
            }
        });

        $('.btn-menu-secd').click(function() {
            if (menuStatus !== true) {

                contentPanel.removeAttr('style').animate({
                    marginLeft: '-240px'
                }, 400, function() {
                    menuStatus = true;
                });

                if ($('.slide-out-right').css('visibility') != 'visible') {
                    $('.slide-out-right').css('visibility', 'visible');
                }

                return false;

            } else {

                contentPanel.animate({
                    marginLeft: '0'
                }, 400, function() {
                    menuStatus = false;
                });
                return false;
            }
        });

    }

    // Restore on window resize
    $(window).resize(function(){
        contentPanel.removeAttr('style');
    });


    // $('.slide-out li a').click(function() {
    //     var p = $(this).parent();
    //     if (p.hasClass('active')) {
    //         $('.slide-out li').removeClass('active');
    //     } else {
    //         $('.slide-out li').removeClass('active');
    //         p.addClass('active');
    //     }
    // });
}

/*
|-------------------------------------------------------------------------------
| SHOW ELEMENTS ON RIGHT MOUSE BUTTON CLICK
|-------------------------------------------------------------------------------
*/

$(function() {
    var el = $('.rmb-enabled');
    var popup = $('.rmb-popup');

    el.bind('contextmenu', function () {
        return false;
    });

    el.mousedown(function(e) {
        if (e.button == 2) {
            $(this).children('.rmb-popup').show('fast');
            return false;
        }
        return true;
    });

    // Close popups
    $(document).click(function() {
        popup.hide();
    });

    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            popup.hide();
        }
    });
});


/*
|-------------------------------------------------------------------------------
| TOOLTIP
|-------------------------------------------------------------------------------
*/
$(function () {
    if (window.matchMedia('(min-width: 980px)').matches) {
        $('.dfn').hover(
            function () {
                var el = $(this);
                var txtTitle = el.prop('title');
                el.attr('title', '');
                el.append('<p class="tooltip">' + txtTitle + '</p>');
                el.find('.tooltip').show('fast');
            }, function () {
                var el = $(this);
                var tT = el.find('.tooltip');
                var txtTitle = tT.text();
                tT.hide('fast').remove();
                el.attr('title', txtTitle);
            }
        );
    }
});


/*
|-------------------------------------------------------------------------------
| SET THE ORDERED NUMBERS BOLD
|-------------------------------------------------------------------------------
*/
$(function(){
    $('ol:not(.unstyled) li').wrapInner('<div class="inline" />');
    $('ol:not(.unstyled)').css('font-weight', 'bold');
    $('ol li div.inline').css('font-weight', 'normal');
});


/*
|-------------------------------------------------------------------------------
| PLUGINS CALLS AND MISC
|-------------------------------------------------------------------------------
| After the DOM is loaded
|
*/
$(document).ready(function(){

    $('ol:not(.bcol), ul:not(.bcol)').prev('p').css('margin-bottom', '0'); //lists captions
    dropDowns(); // TODO: make self calling on window resize anonymous function
    slideOut(); // TODO: the same

    // $('.sec-gallery').tinycarousel();

    // SNIPPET:jsfluidvideold — Fluid Width Video Old Style
    // SNIPPET:jsmbphelp — Mobile Bolilerplate Helpers

});

/*
|---------------------------------------
| On window resize
|---------------------------------------
*/
$(window).resize(function(){
    /* @FIXME: ometimes this function is called multiple times
        TODO: @see dropDowns() in .ready() comment */
    dropDowns();
    slideOut(); // TODO: @see dropDowns() in .ready() comment
});


/*
|-------------------------------------------------------------------------------
| IE status bar error fix
|-------------------------------------------------------------------------------
*/
function noError() {
    return true;
}
window.onerror = noError;
