$.fn.isotopeImagesReveal = function($items) {
    var iso = this.data('isotope');
    var itemSelector = iso.options.itemSelector;
    $items.hide();
    this.append($items);
    $items.imagesLoaded().progress(function(imgLoad, image) {
        var $item = $(image.img).parents(itemSelector);
        $item.show();
        iso.appended($item);
    });

    return this;
};

$(function() {
    $('.js-menuToggle').click(function() {
        $(this).toggleClass('open');
        $('.header__right').toggleClass('opened');
    });
}());