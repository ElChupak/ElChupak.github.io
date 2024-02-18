$(function() {

    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll (scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll (scrollOffset);

    });

    function checkScroll (scrollOffset) {

        if(   scrollOffset >= introH  ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /* Menu nav toggle */

    $('#nav_toggle').on('click', function(Event) {
        Event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');

    });

    /* Collapse */
    $('[data-collapse]').on('click', function(Event) {
        Event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');
        
        $this.toggleClass('active');
    });

    /* Slider */
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      });
});