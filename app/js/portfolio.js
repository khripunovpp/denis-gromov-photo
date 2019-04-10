$(function() {
    var portfolio = $('.portfolio'),
        gallery = portfolio.find('.portfolio__list'),
        portfolioLinks = $('.portfolio__links span').toArray(),
        page = 0,
        loadingItems = 10,
        loadingClass = 'portfolio--loading',
        infiniteScrollClass = 'portfolio--infiniteScroll',
        moreBtnEl = $('.portfolio__loadmore'),
        galleryOptions = {
            thumbnail: true,
            download: false,
            share: false,
            selector: '.portfolio__item'
        };

    var grid = gallery.isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio__sizer'
        }
    });

    gallery.lightGallery(galleryOptions)

    function getLinks(page) {
        var from = (page - 1) * loadingItems,
            to = page * loadingItems,
            items = portfolioLinks.slice(from, to);

        return items;
    }

    function getItems(linksArr) {
        var items = '';
        for (var i = 0; i < linksArr.length; i++) {
            items += getItem($(linksArr[i]).text());
        }
        return $(items);
    }

    function getItem(link) {
        return '<a href="' + link + '" class="portfolio__item"><img src="' + link + '" /></a>';
    }

    var items

    function addItems() {
        page++
        if (((page - 1) * loadingItems) < portfolioLinks.length) {
            portfolio.addClass(infiniteScrollClass);

            var links = getLinks(page);
            items = getItems(links);
            grid.isotopeImagesReveal(items);

            gallery.data('lightGallery').destroy(true)
            gallery.lightGallery(galleryOptions)
            portfolio.removeClass(loadingClass)
        } else {
            portfolio.removeClass(infiniteScrollClass);
        }
    }

    addItems()
    moreBtnEl.click(addItems);

}())