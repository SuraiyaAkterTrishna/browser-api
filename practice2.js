const getElementValueById = (id) => {
    const inputField = document.getElementById(id);
    const fieldValue = inputField.value;
    inputField.value = '';
    return fieldValue;
}
document.getElementById('btn-add').addEventListener('click', function(){
    const product = getElementValueById('product');
    const quantity = getElementValueById('quantity');
    addProductToDisplay(product, quantity);
    // localStorage.setItem(product, quantity);
    saveCartToLocalStorage(product, quantity);
});
const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
};
const saveCartToLocalStorage = (product, quantity) => {
    const cart = getCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};
const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}
const displayStoredProduct = () => {
    const cart = getCartFromLocalStorage('cart');
    for(const product in cart){
        const quantity = cart[product];
        addProductToDisplay(product, quantity);
    }
}
displayStoredProduct();