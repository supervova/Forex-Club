/*
SNIPPET:jsresource — Useful Resources, Plugins: UI Librraries, Touch Events,
Responsive Galleries / Sliders / Slideshows / Carousels, A Responsive Images
Approach, Lightweight Datepicker, Lightweight Modal Box, Markup Editor,
Tiny Scrollbar
*/

// SNIPPET:jsslideout — Slide Out

// SNIPPET:jsmodal — Modal Box

// SNIPPET:jsfluidvideo — Fluid Width Video New Style

// SNIPPET:jssticky — Sticky Menu

// SNIPPET:jstooltip — Tooltip

// SNIPPET:jsrotator — Rotator

// SNIPPET:jscarousel — Carousel

// SNIPPET:jstabs — Tabs

// SNIPPET:jscollaps — Collapsibles

// SNIPPET:jsflash — Flash / SWFogject

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
| LIBRARIES
|-------------------------------------------------------------------------------
|
| http://jqueryui.com
| http://addyosmani.github.com/jquery-ui-bootstrap/
| http://semantic-ui.com/
|
| https://github.com/eightmedia/hammer.js // touch events
|
|-------------------------------------------------------------------------------
| RESPONSIVE GALLERIES / SLIDERS / SLIDESHOWS / CAROUSELS
|-------------------------------------------------------------------------------
|
| Bootstrap carousel is tricky and jQuery Tools one is buggy
| http://responsive-slides.viljamis.com
| http://webdesignandsuch.com/top-30-responsive-jquery-slider-plugins-for-websites/
|
|-------------------------------------------------------------------------------
| A RESPONSIVE IMAGES approach including Retina image replacement
|-------------------------------------------------------------------------------
| Picturefill - https://github.com/scottjehl/picturefill.
|
|-------------------------------------------------------------------------------
| OTHER USEFUL jQUERY PLUGINS
|-------------------------------------------------------------------------------
| Lightweight datepicker — http://stefangabos.ro/jquery/zebra-datepicker/
| Lightweight modal box - http://www.jacklmoore.com/colorbox/example2/
| Turn any textarea into a markup editor - http://markitup.jaysalvat.com/home/
| Tiny scrollbar - http://baijs.nl/tinyscrollbar/
|
*/

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
| DROPDOWNS
|-------------------------------------------------------------------------------
|
| Close om mobiles solution: extra element .dropdown-backdrop.
| @SEE snippet and https://github.com/twbs/bootstrap/blob/master/js/dropdown.js
|
*/
$(function(){
    var label = $('.dropdown-toggle'),
        allDropDowns = $('.dropdown-menu');

    label.click(function(event) {
        allDropDowns.hide();
        $(this).parents('.dropdown').children('.dropdown-menu').toggle();
        label.removeClass('down');
        $(this).addClass('down');
        return false;
    });

    // var ua = navigator.userAgent,
        // event = ((ua.match(/iPad/i)) || (ua.match(/iPhone/i))) ? "touchstart" : "click";

    // $(document).bind(event, function() {
    $(document).click(function() {
        allDropDowns.hide();
        label.removeClass('down');
    });

    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            allDropDowns.hide();
            label.removeClass('down');
        }
    });

    // @FIXME: this did not work
    if ($('.dropdown-toggle').hasClass('down')) {
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

});

/*
|-------------------------------------------------------------------------------
| SLIDE-OUT MENU
|-------------------------------------------------------------------------------
*/
$(function() {
    var menuStatus;
    var contentPanel = $('.page, .doc-header, .sec-billboard');

    $('.btn-menu').click(function() {

        if (menuStatus !== true) {

            contentPanel.removeAttr('style').animate({
                marginLeft: '240px'
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

    // Restore on window resize
    $(window).resize(function(){
        contentPanel.removeAttr('style');
    });


    $('.slide-out li a').click(function() {
        var p = $(this).parent();
        if (p.hasClass('active')) {
            $('.slide-out li').removeClass('active');
        } else {
            $('.slide-out li').removeClass('active');
            p.addClass('active');
        }
    });
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

    // $('.sec-gallery').tinycarousel();

    // SNIPPET:jsfluidvideold — Fluid Width Video Old Style
    // SNIPPET:jsmbphelp — Mobile Bolilerplate Helpers

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
