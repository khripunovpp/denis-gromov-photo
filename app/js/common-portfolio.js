$(function() {
    var gallery = $('.portfolio--notGallery .portfolio__list');

    var $grid = gallery.imagesLoaded(function() {
        setTimeout(function() {
            gallery.closest('.portfolio').removeClass('portfolio--loading')
            $('.portfolio__item').show()
            $grid.masonry();
        }, 1000)
    });
}())