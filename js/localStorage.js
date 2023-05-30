const addToLocalStorage = (key, id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    // add local storage 
    localStorage.setItem(key, inputValue);
};
document.getElementById('btn-add-name').addEventListener('click', function(){
    addToLocalStorage('name', 'name-field')
});
document.getElementById('btn-add-age').addEventListener('click', function(){
    addToLocalStorage('age', 'age-field');
});