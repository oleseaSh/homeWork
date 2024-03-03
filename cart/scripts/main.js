const cardsItem = document.querySelectorAll('.card_item');
console.log(cardsItem);

cardsItem.forEach((item) => {
    const itemBtn = item.childNodes[5];
    const itemTitle = item.childNodes[1].innerHTML;
    const itemPrice = item.childNodes[3].innerHTML;
    
    itemBtn.addEventListener('click', () => {
        const cartStorage = localStorage.getItem('cart') || '[]';
        const cardItem = { itemTitle, itemPrice }; 
        const cartHolder = cartStorage.length !==0 &&  JSON.parse(cartStorage);
        localStorage.setItem('cart', JSON.stringify([... cartHolder, cardItem]));

    })

})

