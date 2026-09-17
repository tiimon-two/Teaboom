const packaging = [
    {
        weight: '100 г',
        article: '01306',
        oldPrice: '349,20 ₽',
        newPrice: '326,40 ₽'
    },
    {
        weight: '500 г',
        article: '01307',
        oldPrice: '1 646 ₽',
        newPrice: '1 432 ₽'
    },
    {
        weight: '1000 г',
        article: '01308',
        oldPrice: '2 592 ₽',
        newPrice: '2 064 ₽'
    },
    {
        weight: '5000 г',
        article: '01309',
        oldPrice: '8 710 ₽',
        newPrice: '6 320 ₽'
    }
];

const packagingList = document.querySelector('.product__packaging-list');
const article = document.querySelector('.product__article');
const oldPrice = document.querySelector('.product__old-price');
const newPrice = document.querySelector('.product__new-price');

packaging.forEach ((package, i) => {
    const newPackage = document.createElement('label');
    newPackage.classList.add('product__packaging-item');
    const text = document.createElement('span');
    text.textContent = package.weight;
    newPackage.appendChild(text);

    const input = document.createElement('input');
    input.className = 'product__input';
    input.type = 'radio';
    input.name = 'weight';
    input.value = package.weight;
    input.checked = i === 0;

    input.addEventListener('change', () => applyVariant(package));

    newPackage.appendChild(input);
    packagingList.appendChild(newPackage);
});

if (packaging[0]) {
    applyVariant(packaging[0]);
}

function applyVariant(package) {
  article.textContent  = package.article;
  oldPrice.textContent = package.oldPrice;
  newPrice.textContent = package.newPrice;
}