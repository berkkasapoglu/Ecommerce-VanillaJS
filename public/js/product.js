const createCartElement = (prod, cartBodyDOM) => {
    const container = document.createElement('div');
    container.classList.add('cart-item');
    container.setAttribute('data-id', prod._id);

    const row = document.createElement('div');
    row.classList.add('row');

    const img = document.createElement('img');
    img.src = '/' + prod.image;
    img.classList.add('cart-image')

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item-specs')

    const hTag = document.createElement('h4')
    hTag.classList.add('cart-header')
    hTag.textContent = prod.title

    const priceCurrency = document.createElement('p')
    priceCurrency.className = "cart-price";
    priceCurrency.textContent = `$`
    const priceValue = document.createElement('span')
    priceValue.textContent = `${prod.price}`
    priceValue.setAttribute('id', 'priceValue')
    priceCurrency.appendChild(priceValue)

    const btnRow = document.createElement('div');
    btnRow.classList.add('row');
    const btn = document.createElement('button')
    btn.textContent = 'Delete'
    btn.classList.add('delete-btn')
    btn.id = 'deleteItem';

    

    
    row.appendChild(img)
    cartItemDiv.appendChild(hTag)
    const input = createInputElement();
    !cartBodyDOM.classList.contains('wish-section') &&
    cartItemDiv.appendChild(input)
    btnRow.appendChild(btn);
    btnRow.appendChild(priceCurrency)
    cartItemDiv.appendChild(btnRow)
    row.appendChild(cartItemDiv);
    container.appendChild(row)



    return container
}

const createInputElement = () => {
    const div = document.createElement('div')
    div.classList.add('product-quantity');

    const increaseBtn = document.createElement('button');
    const increaseIcon = document.createElement('i');
    increaseIcon.classList.add('fas', 'fa-plus', 'fa-sm');
    increaseBtn.setAttribute('id', 'increase');
    increaseBtn.classList.add('product-quantity-inc', 'product-quantity-btn');
    increaseBtn.appendChild(increaseIcon);

    const decreaseIcon = document.createElement('i');
    const decreaseBtn = document.createElement('button');
    decreaseBtn.setAttribute('id', 'decrease');
    decreaseIcon.classList.add('fas', 'fa-minus', 'fa-sm');
    decreaseBtn.classList.add('product-quantity-dec', 'product-quantity-btn');
    decreaseBtn.appendChild(decreaseIcon);

    const input = document.createElement('input');
    input.setAttribute('type','Number');
    input.setAttribute('min',0)
    input.setAttribute('value',1)
    input.classList.add('product-quantity-inp');

    div.appendChild(decreaseBtn);
    div.appendChild(input);
    div.appendChild(increaseBtn);

    return div;
}

const createButtonElement = () => {
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('id', 'addToCart');
    button.textContent = 'Add to Cart';
    return button;
}


export { createCartElement, createInputElement, createButtonElement };