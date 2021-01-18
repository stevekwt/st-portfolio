// adapted from https://codepen.io/sergioandrade/pen/onkub

$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    $('.mobile-nav a').on('click', function () {
        setTimeout(function(){ 
            $('.open').removeClass('oppenned');
        }, 50);
    });
});