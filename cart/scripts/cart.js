const cartItems = document.querySelector('.cart_items');
const deleteItems = document.querySelector('.delete_items');

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]'); // парсит наш storage

const itemCounts = {}; // Объект для отслеживания количества каждого товара

if (cartStorage.length !== 0) {
    // Первый проход для подсчета товаров в корзине
    cartStorage.forEach((el) => {
        const { itemTitle } = el;
        if (itemCounts[itemTitle]) {
            itemCounts[itemTitle]++;
        } else {
            itemCounts[itemTitle] = 1;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = `Очистить корзину`;
    deleteItems.appendChild(deleteButton);

    // Второй проход для создания элементов корзины
    cartStorage.forEach((el) => {
        const { itemTitle, itemPrice } = el;

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
        newCount.innerText = `Количество: ${itemCounts[itemTitle]}`;
        newButton.innerText = `Удалить товар`;
        newButton.id = `${itemTitle}`;

        newCard.appendChild(newTitle);
        newCard.appendChild(newPrice);
        newCard.appendChild(newCount);
        newCard.appendChild(newButton);
        newCard.appendChild(newBr);

        cartItems.appendChild(newCard);

        // Обработчик кнопки удаления товара
        deleteButton.addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        });

        newButton.addEventListener('click', (e) => {
            const filterStorage = cartStorage.filter((item) => item.itemTitle !== e.target.id);
            localStorage.setItem('cart', JSON.stringify([...filterStorage]));
            location.reload();
        });
    });
}



