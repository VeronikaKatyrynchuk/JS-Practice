const ratingItemsList = document.querySelectorAll(".rating__item");
const itemsArr = Array.prototype.slice.call(ratingItemsList);

itemsArr.forEach(item => 
    item.addEventListener('click', () => {
        const {itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    });
)