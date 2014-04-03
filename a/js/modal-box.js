//Clean up AJAX rudiments
$('.modal-box title, .modal-box meta').remove();

//Lists captions
$('ol, ul').prev('p').css('margin-bottom', '0');

//Close modal box
$('.modal-box').click(function(e) {
    if ($(e.target).is('.modal-box *')) {
        return;
    }
    $('.body').removeClass('modal-open');
    $('.modal-box').fadeOut('fast');
    $('.overlay').fadeOut('fast');
    $('.modal-box').empty();
});

$('.modal-box .btn-close').click(function(e) {
    //Cancel the link behavior
    e.preventDefault();
    $('.body').removeClass('modal-open');
    $('.modal-box').fadeOut('fast');
    $('.overlay').fadeOut('fast');
    $('.modal-box').empty();
});

//Tabs in modal box
// $('.modal-box header .tabs, .modal-box .header .tabs').tabs('.modal-box .pane', {
//     effect: 'fade',
//     onBeforeClick: function(event, i) {
//         // get the pane to be opened
//         var pane = this.getPanes().eq(i);
//         // only load once. remove the if ( ... ){ } clause if you want the page to be loaded every time
//         if (pane.is(':empty')) {
//             // load it with a page specified in the tab's href attribute
//             pane.load(this.getTabs().eq(i).attr('href'));
//         }
//     }
// });
