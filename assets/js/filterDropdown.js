$(function () {
let filterToggler=$('.filter-toggler-item');
let filterMenu=$('.filter-menu');
const showResultBtn=$('.filter-show-result');
filterToggler.on('click',function (e) {
    filterMenu.toggleClass('show');
    e.stopPropagation(); 
})
showResultBtn.on('click',function () {
    filterMenu.toggleClass('show');
})
filterMenu.on('click',function (e) {
    e.stopPropagation(); 
})

})