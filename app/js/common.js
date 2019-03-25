var portfolioCategories = function() {
    var $grid = $('.portfolio--notGallery .portfolio__list').imagesLoaded(function() {
        setTimeout(function() {
            $('.portfolio--notGallery').removeClass('portfolio--loading')
            $('.portfolio__item').show()
            $grid.masonry();
        }, 1000)
    });
}

$(function() {
    portfolioCategories()
});