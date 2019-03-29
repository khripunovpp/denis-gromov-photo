$(function() {
    var gallery = $('.set__list'),
        galleryItems = $('.set__item'),
        setLinks = $('.set__links a'),
        linksArr = [],
        page = 0,
        loadingItems = 10,
        loadingClass = 'set--loading',
        moreBtnEl = $('.set__loadmore'),
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
                gallery.closest('.set').removeClass(loadingClass)
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
        setLinks.each(function(i, elem) {
            elem.href = $(elem).html()
            var imgEl = document.createElement('IMG')
            imgEl.src = $(elem).html()
            $(elem).html(imgEl).addClass('set__item')
            linksArr.push(elem);
        })

        addItems()

        gallery.lightGallery(galleryOptions);

        gallery.masonry();

        

        if (linksArr.length > loadingItems) gallery.closest('.set').addClass('set--infiniteScroll');
    }

    moreBtnEl.on('click', addItems);

}())