var isFocus = function() {
    var fieldEl = '.form__field',
        groupEl = '.form__group',
        labelEl = '.form__label',
        onfocusClass = 'onfocus',
        value;

    $('body').addClass('js-placeholder')

    $(fieldEl).each(function() {
        value = $(this).val();
        $(this).removeAttr('placeholder')
        if (value.length > 0) $(this).closest(groupEl).addClass(onfocusClass).find(labelEl).fadeOut(200);
    })

    $(labelEl).on('click', function() {
        $(this).closest(groupEl).find(fieldEl).focus()
    });

    $(fieldEl).on('focus', function() {
        $(this).closest(groupEl).addClass(onfocusClass).find(labelEl).fadeOut(200);
    });

    $(fieldEl).on('blur', function() {
        value = $(this).val();
        if (value.length == 0) $(this).closest(groupEl).find(labelEl).fadeIn(200),
            $(this).closest(groupEl).removeClass(onfocusClass);
        if (value.length > 0) $(this).closest(groupEl).addClass(onfocusClass);
    });
}

$(function() {

	isFocus()
});