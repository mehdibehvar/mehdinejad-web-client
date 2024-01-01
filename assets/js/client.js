$(function ($) {
    let filterMenu=$('.filter-menu');
    //HamburgerMenu Toggle
    $(document).on('click', '[data-jsc=hamburger-menu-toggle]', function (e) {
        MenuUtils.HamburgerMenuToggle(
            e.target.getAttribute('data-toggle-target')
        );
    });
    $('body').on('click', function (event) {
        if (!$(event.target).is('.hamburger-menu, .hamburger-menu *')) {
            $(".hamburger-menu").removeClass("show");
            filterMenu.removeClass("show");
        }
    });

    $(document).on('click', '.accordions .accordion .title', function () {
        let _this = $(this);
        _this.closest('.accordion').toggleClass('expanded');
        $('.accordions .accordion').not(_this.closest('.accordion')).removeClass('expanded');
    });

    $(document).on('click', '.collapse-dot > li > .header', function () {
        let _this = $(this);
        _this.closest('li').toggleClass('active');
        $('.collapse-dot > li').not(_this.closest('li')).removeClass('active');
    });
});

const MenuUtils = {
    HamburgerMenuToggle: function (e) {
        let HamburgerMenuToggleTarget = e;
        $(HamburgerMenuToggleTarget).toggleClass('show')
    },

};




