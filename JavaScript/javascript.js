var grid = 4;
var itemWrap = document.querySelectorAll('.item__wrap');
var main = document.querySelector('.main');

for (var i = 0; i < grid; i++) {
    var itemGrid = document.createElement('div');
    itemGrid.classList.add('item');
    main.appendChild(itemGrid)
}
var items = document.querySelectorAll('.item');

for (var i = 0; i < itemWrap.length; i++) {
    for (var j = 0; j < grid; j++) {
        if (itemWrap[grid*i+j]) {
            items[j].appendChild(itemWrap[grid*i+j]);
        }
}}
