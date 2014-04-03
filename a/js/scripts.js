/*
SNIPPET:jsresource — Useful Resources, Plugins: UI Librraries, Touch Events,
Responsive Galleries / Sliders / Slideshows / Carousels, A Responsive Images
Approach, Lightweight Datepicker, Lightweight Modal Box, Markup Editor,
Tiny Scrollbar
*/

// SNIPPET:jsdropdown — Dropdowns

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
