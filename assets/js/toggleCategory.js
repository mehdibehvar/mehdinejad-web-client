$(function () {
    let toggleCategoryBtn=$(".toggle-padcasts-category");
    let padcastsCategory=$('.padcast-category');
    toggleCategoryBtn.on('click',function () {
        padcastsCategory.toggleClass('show');
    })
})