const cartItems = document.querySelector('.cart_items');
const deleteItems = document.querySelector('.delete_items');

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]'); // парсит наш storage


if (cartStorage.length !== 0) {
   
    const deleteButton = document.createElement('button');
    deleteButton.innerText = `Очистить корзину`;
    deleteItems.appendChild(deleteButton);

   // Второй проход для создания элементов корзины
cartStorage.forEach((el) => {
    const { itemTitle, itemPrice, count} = el;

    // Создаем элемент корзины
    const newCard = document.createElement('div');
    newCard.setAttribute('data-title', itemTitle);
    const newTitle = document.createElement('h3');
    const newPrice = document.createElement('p');
    const newCount = document.createElement('p');
    const newButton = document.createElement('button');
    const newBr = document.createElement('hr');

    newTitle.innerText = `${itemTitle}`;
    newPrice.innerText = `${itemPrice}`;
    newCount.innerText = `Количество: ${count}`;
    newButton.innerText = `Удалить товар`;
    newButton.id = `${itemTitle}`;

    newCard.appendChild(newTitle);
    newCard.appendChild(newPrice);
    newCard.appendChild(newCount);
    newCard.appendChild(newButton);
    newCard.appendChild(newBr);

    cartItems.appendChild(newCard);

    // Обработчик кнопки удаления товара
    newButton.addEventListener('click', (e) => {
        
        const itemIndex = cartStorage.findIndex((item) => item.itemTitle === e.target.id);

        if (itemIndex !== -1) {
            if (cartStorage[itemIndex].count > 0) {
                cartStorage[itemIndex].count--;
            }

        if (cartStorage[itemIndex].count === 0) {
          cartStorage.splice(itemIndex, 1);
          localStorage.setItem('cart', JSON.stringify(cartStorage));
           newCard.remove();
        }

            // Обновляем хранилище
            localStorage.setItem('cart', JSON.stringify(cartStorage));
            // Обновляем счетчик в интерфейсе
            newCount.innerText = `Количество: ${cartStorage[itemIndex].count}`;

        }
    });
});

// Обработчик кнопки очистки корзины
deleteButton.addEventListener('click', () => {
    localStorage.clear();
    cartItems.innerHTML = ''; // Очищаем содержимое корзины
});

}
