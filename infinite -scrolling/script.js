let content = document.getElementById("content");
let listEnd = document.getElementById("listEnd");
let itemCount = 0;
let appending = false;

window.addEventListener('DOMContentLoaded', load);

function load() {
    addItems;
}

function addItem() {
    appending = true;
    for( let i = 0; i < 20; i++) {
        let item = generateDataBlock(['this is item', itemCount].join(''));
        content.appendChild(item);
        itemCount++;
    }
    appending = false;
}

function generateDataBlock() {
    let item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.textContent = message;
    return item;
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}
let observer = new IntersectionObserver(callback, options);