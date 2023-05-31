const getElementValueById = (id) => {
    const inputField = document.getElementById(id);
    const fieldValue = inputField.value;
    inputField.value = '';
    return fieldValue;
}
document.getElementById('btn-add').addEventListener('click', function(){
    const product = getElementValueById('product');
    const quantity = getElementValueById('quantity');
    displayProduct(product, quantity);
    localStorage.setItem(product, quantity);
});
const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}