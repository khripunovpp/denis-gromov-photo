$(function() {
    var gallery = $('.portfolio__list'),
        galleryItems = $('.portfolio__item'),
        portfolioLinks = $('.portfolio__links a'),
        linksArr = [],
        page = 0,
        loadingItems = 10,
        loadingClass = 'portfolio--loading',
        moreBtnEl = $('.portfolio__loadmore'),
        galleryOptions = {
            thumbnail: true,
            download: false,
            share: false
        };

    _init()

    function addItems() {
        page++

        if (((page - 1) * loadingItems) < linksArr.length) {
            var items = _getMarkup(page);

            gallery.append(items);
            setTimeout(function() {
                gallery.masonry('reload')
                gallery.data('lightGallery').destroy(true)
                gallery.lightGallery(galleryOptions)
                gallery.closest('.portfolio').removeClass(loadingClass)
            }, 10)
        }
    }

    function _getMarkup(page) {
        var from = (page - 1) * loadingItems,
            to = page * loadingItems,
            items = linksArr.slice(from, to);

        return items;
    }

    function _loaded() {
        _init()
    }

    function _init() {
        portfolioLinks.each(function(i, elem) {
            elem.href = $(elem).html()
            var imgEl = document.createElement('IMG')
            imgEl.src = $(elem).html()
            $(elem).html(imgEl).addClass('portfolio__item')
            linksArr.push(elem);
        })

        addItems()

        gallery.lightGallery(galleryOptions);

        gallery.masonry();

        if (linksArr.length > loadingItems) gallery.closest('.portfolio').addClass('portfolio--infiniteScroll');
    }

    moreBtnEl.on('click', addItems);
}())