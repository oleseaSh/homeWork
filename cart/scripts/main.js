const cardsItem = document.querySelectorAll('.card_item');
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

cardsItem.forEach((item) => {
    const itemBtn = item.childNodes[5];
    const itemTitle = item.childNodes[1].innerHTML;
    const itemPrice = item.childNodes[3].innerHTML;

    itemBtn.addEventListener('click', () => {
        let itemFound = false;

        // Проверяем, есть ли уже такой товар в корзине
        cartItems.forEach((cartItem) => {
            if (cartItem.itemTitle === itemTitle) {
                cartItem.count++;
                itemFound = true;
            }
        });

        // Если товар не найден, добавляем его в корзину
        if (!itemFound) {
            cartItems.push({ itemTitle, itemPrice, count: 1 });
        }

        // Обновляем корзину в локальном хранилище
        localStorage.setItem('cart', JSON.stringify(cartItems));
    });
});


