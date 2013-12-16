// object to contain images for the gallery.
var images = {
    1: [
            {
                href: 'images/content/placeholder.png',
                title: '<center>Coming Soon! </center>'
            }
        ],
    2: [
            {
                href: 'images/content/placeholder.png',
                title: '<center>Coming Soon! </center>'
            }
        ],
    3: [
            {
                href: 'images/content/placeholder.png',
                title: '<center>Coming Soon! </center>'
            }
        ],
    4: [
            {
                href: 'images/content/placeholder.png',
                title: '<center>Coming Soon! </center>'
            }
        ]
};


/**** DOC READY *****/
$(function () {
    /**** VARS & OBJS *****/
    $logo           = $('div.logo-container');
    $main           = $('section.main');
    $bubble         = $('div.bubble-container');
    $bubbleCloseBtn = $('span.speech-bubble-close');
    $openFancyBox   = $('.open_fancybox');
    $aboutBtn       = $('#aboutBtn');

    var hue = {
        defaultColor: "#598cff",
        randomColor: function(){ return '#'+Math.floor(Math.random()*16777215).toString(16); }
    };

    /**** INIT *****/

    NProgress.start();
    if ($.fn.placeholder) { $('input, textarea').placeholder(); }

    /**** EVENT DELEGATION *****/

    // Toggle about dropdown on logo click
    $logo.on("click", function(event) {
        event.preventDefault();

        $bubble
            .toggleClass('animated fadeInDown')
            .toggleClass('animated fadeOutUp')
            .slideToggle();

    // randomize color on logo mouseenter, return to default on mouseleave
    }).on("mouseenter", "a", function() {
        $logo
            .stop()
            .animate({backgroundColor: hue.randomColor()}, 600);
    }).on("mouseleave", "a", function() {
        $logo
            .stop()
            .animate({backgroundColor: hue.defaultColor}, 600);
    });

    // button to close about dropdown
    $bubbleCloseBtn.on('click', function() {
        $logo.click();
    });

    // more info from dropdown
    $aboutBtn.on('click', function(event){
        event.preventDefault();
        $aboutBtn.fadeOut('fast', $aboutBtn.remove());
        $('#continue').slideDown('slow');

    });

    var fancyOpt = {
            padding: 3,
            helpers: {
                overlay: { closeClick: true},
                title:   { type: 'inside' }
            }
    };

    $(".open_fancybox").each(function (i) {
        $(this).on("click", function () {
            $.fancybox.open(images[i + 1], fancyOpt);
            return false;
        });
    });
});

/**** DOC. LOAD *****/
$(window).load(function() {
    $('body').fadeIn(50);
    NProgress.done();
    $logo.addClass('animated fadeInDown');
    $main.addClass('animated fadeInUp');
    $bubble.fadeIn().addClass('animated fadeInDown');

});




