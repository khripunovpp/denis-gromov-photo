$(function() {
    var portfolio = $('.portfolio--notGallery'),
        gallery = portfolio.find('.portfolio__list');

    var grid = gallery.isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio__sizer'
        }
    });
    
    portfolio.removeClass('portfolio--loading')
}())