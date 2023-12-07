local_storage = window.localStorage;
let likedItemsArr = {}
likedItemsArr = JSON.parse(localStorage.getItem ("likedItemsArr"));
const favoritesField = document.getElementById("favorites_field");

function open_home_window(){
    window.location.href = '../index.html';
}
function open_cart_window(){ 
    window.location.href = '../html/cart.html';
}
function open_registration_window(){ 
    window.location.href = '../html/registrationForm.html';
}

function show_absence(){
    var absence = document.createElement('div');
    absence.id = "absence";
    absence.textContent = "Нет избранных товаров";

    favoritesField.parentElement.appendChild(absence);
}

function delete_from_fav(elem){
    var deleted = 0;
    var new_likedItemsArr = "{";
    var i;
    for(i = 0; i <= localStorage.getItem("likedItemsLen"); i++){
        if(JSON.stringify(elem) === JSON.stringify(likedItemsArr[i])){
            deleted = 1;
            var likedElements = document.getElementsByClassName("liked_element");
            favoritesField.removeChild(likedElements[i]);
        }
        else{
            new_likedItemsArr += `"${i - deleted}": ${JSON.stringify(likedItemsArr[i])},`;

        }
    }

    localStorage.setItem("likedItemsLen", i-2);
    if(new_likedItemsArr.length > 1){
        new_likedItemsArr = new_likedItemsArr.slice(0, new_likedItemsArr.length-1);
    }
    else{
        show_absence();
    }
    new_likedItemsArr += "}";
    localStorage.setItem("likedItemsArr", new_likedItemsArr);
    likedItemsArr = JSON.parse(localStorage.getItem ("likedItemsArr"));
}

function create_fav_elem(elem){
    var likedElement = document.createElement('div');
    var img = document.createElement('img');
    var text = document.createElement('div');
    var name = document.createElement('p');
    var price = document.createElement('p');
    var del = document.createElement('img');

    likedElement.className = "liked_element";
    img.className = "main_img";
    del.className = "trash_bin";

    del.onclick = () => delete_from_fav(elem);
    
    img.src = "../" + elem.img;
    name.textContent = elem.name;
    price.textContent = elem.price;
    del.src = "../Icons/trash_bin.png"

    text.appendChild(name);
    text.appendChild(price);

    likedElement.appendChild(img);
    likedElement.appendChild(text);
    likedElement.appendChild(del);

    favoritesField.appendChild(likedElement);
}

if(localStorage.getItem ("likedItemsLen") == -1){
    show_absence();
}

for(var i = 0; i <= localStorage.getItem ("likedItemsLen"); i++){
    create_fav_elem(likedItemsArr[i]);
}