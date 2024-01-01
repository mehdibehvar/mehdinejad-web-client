$(function () {
    let courseTitleBtn=$('.course-title-btn');
    const courseTitle=$('.course-title');
    courseTitleBtn.on('click',function () {
        courseTitle.get(0).scrollIntoView({behavior: 'smooth'});
    })
    /////toggle search bar////
    let toggleSearchBar = $('.toggle-search-bar');
    let searchBar = $('.search-bar');
    let navBarBrand=$('.navbar-brand');
    let actions=$('.actions');
    let navMenu=$('.nav-menu');
if ($(window).width() < 1200) {
    toggleSearchBar.on('click', function (e) {
        searchBar.css('width', '100%');
        searchBar.css('opacity', '1');
        searchBar.css('overflow', 'uset');
        toggleSearchBar.hide();
        actions.hide();
        navBarBrand.hide();
        navMenu.hide();
        e.stopPropagation(); 
    });

    $('body').on('click', function (e) {
        if (!searchBar.is(e.target) && searchBar.has(e.target).length === 0) {
            searchBar.css('width', '0');
            searchBar.css('opacity', '0');
            searchBar.css('overflow', 'hidden');
            toggleSearchBar.show();
            navBarBrand.show();
            actions.show();
            if ($(window).width() > 992){
                navMenu.show();
            }
        }
    });
}

});
