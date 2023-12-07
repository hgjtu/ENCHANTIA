const catalogButton = document.getElementById("catalog_button");
const catalogDropdownContent = document.getElementById("catalog_dropdown_content");
const swiperContainers = document.getElementsByClassName("swiper_container");
const someContainers = document.getElementsByClassName("some_container");

let likedItemsArr = {};
let cartItemsArr = {};
let likedForLocal = [];
let cartForLocal = [];

function open_liked_window(){ 
    window.location.href = 'html/liked.html';
}
function open_cart_window(){ 
    window.location.href = 'html/cart.html';
}
function open_registration_window(){ 
    window.location.href = 'html/registrationForm.html';
}

catalogButton.addEventListener("click", function() {
    catalogButton.classList.toggle("pressed");
    catalogDropdownContent.classList.toggle("catalog_show");
});

function pop_left_swipe(){
    let swiperContainer = document.getElementById("pop_swiper");
    swiperContainer.scrollLeft -= 230;
}

function pop_right_swipe(){
    let swiperContainer = document.getElementById("pop_swiper");
    swiperContainer.scrollLeft += 230;
}

function new_left_swipe(){
    let swiperContainer = document.getElementById("new_swiper");
    swiperContainer.scrollLeft -= 230;
}

function new_right_swipe(){
    let swiperContainer = document.getElementById("new_swiper");
    swiperContainer.scrollLeft += 230;
}

function delete_from_fav(elem){
    var deleted = 0;
    var new_likedItemsArr = "{";
    var i;
    for(i = 0; i <= localStorage.getItem("likedItemsLen"); i++){
        if(JSON.stringify(elem) === JSON.stringify(likedItemsArr[i])){
            deleted = 1;
        }
        else{
            new_likedItemsArr += `"${i - deleted}": ${JSON.stringify(likedItemsArr[i])},`;

        }
    }

    localStorage.setItem("likedItemsLen", i-2);
    if(new_likedItemsArr.length > 1){
        new_likedItemsArr = new_likedItemsArr.slice(0, new_likedItemsArr.length-1);
    }
    new_likedItemsArr += "}";
    localStorage.setItem("likedItemsArr", new_likedItemsArr);
    likedItemsArr = JSON.parse(localStorage.getItem ("likedItemsArr"));
}

function delete_from_cart(elem){
    var deleted = 0;
    var new_cartItemsArr = "{";
    var i;
    for(i = 0; i <= localStorage.getItem("cartItemsLen"); i++){
        if(JSON.stringify(elem) === JSON.stringify(cartItemsArr[i])){
            deleted = 1;
        }
        else{
            new_cartItemsArr += `"${i - deleted}": ${JSON.stringify(cartItemsArr[i])},`;
        }
    }

    localStorage.setItem("cartItemsLen", i-2);
    if(new_cartItemsArr.length > 1){
        new_cartItemsArr = new_cartItemsArr.slice(0, new_cartItemsArr.length-1);
    }
    new_cartItemsArr += "}";
    localStorage.setItem("cartItemsArr", new_cartItemsArr);
    cartItemsArr = JSON.parse(localStorage.getItem ("cartItemsArr"));
}

function create_liked_for_local(){
    for(var i = 0; i <= localStorage.getItem("likedItemsLen"); i++){

        var img = likedItemsArr[i].img;
        var name = likedItemsArr[i].name;
        var price = likedItemsArr[i].price;
        likedForLocal.push(`"${i}": {"img": "${img}", "name": "${name}", "price": "${price}"}`);
    }
}

function create_cart_for_local(){
    for(var i = 0; i <= localStorage.getItem("cartItemsLen"); i++){

        var img = cartItemsArr[i].img;
        var name = cartItemsArr[i].name;
        var price = cartItemsArr[i].price;
        cartForLocal.push(`"${i}": {"img": "${img}", "name": "${name}", "price": "${price}"}`);
    }
}

function like_item(like_button){
    var like_button_parent = like_button.parentElement.parentElement;

    var elem_find = -1;
    var i;
    for(i = 0; i <= localStorage.getItem("likedItemsLen"); i++){
        var txt_arr = like_button_parent.querySelectorAll('p');
        var img = like_button_parent.querySelectorAll('img')[0].src;
        img = img.slice(img.indexOf("Images") - 1);
        var elem = `{"img":"${img}","name":"${txt_arr[0].textContent}","price":"${txt_arr[1].textContent}"}`;

        if(elem === JSON.stringify(likedItemsArr[i])){
            elem_find = i;
        }
    }

    if(elem_find == -1) {
        like_button.src = "Icons/red_heart.png";

        var txt_arr = like_button_parent.querySelectorAll('p');
        var img = like_button_parent.querySelectorAll('img')[0].src;
        img = img.slice(img.indexOf("Images") - 1);
        var elem = `"${i}": {"img": "${img}", "name": "${txt_arr[0].textContent}", "price": "${txt_arr[1].textContent}"}`;
        localStorage.setItem("likedItemsLen", i)
        
        likedForLocal.push(elem);
        local_storage.setItem("likedItemsArr", "{" + likedForLocal + "}");
        likedItemsArr = JSON.parse(localStorage.getItem ("likedItemsArr"));
    } 
    else {
        like_button.src = "Icons/heart.png";
        delete_from_fav(likedItemsArr[elem_find]);
    }    
}

function cart_item(cart_button){
    cart_button_parent = cart_button.parentElement.parentElement;

    var elem_find = -1;
    var i;
    for(i = 0; i <= localStorage.getItem("cartItemsLen"); i++){
        var txt_arr = cart_button_parent.querySelectorAll('p');
        var img = cart_button_parent.querySelectorAll('img')[0].src;
        img = img.slice(img.indexOf("Images") - 1);
        var elem = `{"img":"${img}","name":"${txt_arr[0].textContent}","price":"${txt_arr[1].textContent}"}`;

        if(elem === JSON.stringify(cartItemsArr[i])){
            elem_find = i;
        }
    }

    if(elem_find == -1) {
        cart_button.src = "Icons/green_shopping_cart.png";

        var txt_arr = cart_button_parent.querySelectorAll('p');
        var img = cart_button_parent.querySelectorAll('img')[0].src;
        img = img.slice(img.indexOf("Images") - 1);
        var elem = `"${i}": {"img": "${img}", "name": "${txt_arr[0].textContent}", "price": "${txt_arr[1].textContent}"}`;
        localStorage.setItem("cartItemsLen", i)
        
        cartForLocal.push(elem);
        local_storage.setItem("cartItemsArr", "{" + cartForLocal + "}");
        cartItemsArr = JSON.parse(localStorage.getItem ("cartItemsArr"));
    } 
    else {
        cart_button.src = "Icons/shopping_cart.png";
        delete_from_cart(cartItemsArr[elem_find]);
    }   
}

function update_likes_and_carts(){
    var local_like_arr = [];
    var local_cart_arr = [];

    likedForLocal.forEach(function (item) {
        local_like_arr.push(item.slice(item.indexOf(':') + 2));
    });

    cartForLocal.forEach(function (item) {
        local_cart_arr.push(item.slice(item.indexOf(':') + 2));
    });

    var swiperSlides; 
    for (var i = 0; i < 4; i++) {
        swiperSlides = someContainers[i].querySelectorAll(".swiper_slide");
        swiperSlides.forEach(function (elem) {
            var txt_arr = elem.querySelectorAll('p');
            var img = elem.querySelectorAll('img')[0].src;
            img = img.slice(img.indexOf("Images") - 1);
            var slide = `{"img": "${img}", "name": "${txt_arr[0].textContent}", "price": "${txt_arr[1].textContent}"}`;


            var like_index = local_like_arr.indexOf(slide);
            var cart_index = local_cart_arr.indexOf(slide);
            if(like_index != -1){
                elem.querySelector(".item_like_and_cart .like_button").src = "Icons/red_heart.png";
            }
            if(cart_index != -1){
                elem.querySelector(".item_like_and_cart .cart_button").src = "Icons/green_shopping_cart.png";
            }
        });     
    }
}

local_storage = window.localStorage;
if (localStorage.getItem("likedItemsArr") !== null) {
    likedItemsArr = JSON.parse(localStorage.getItem ("likedItemsArr"));
    create_liked_for_local();
}
else{
    local_storage.setItem("likedItemsArr", "{}");
}

if(localStorage.getItem("likedItemsLen") !== null){
    likedItemsLen = JSON.parse(localStorage.getItem ("likedItemsLen"));
}
else{
    local_storage.setItem("likedItemsLen", -1);
}

//----------------------------------------------------

if (localStorage.getItem("cartItemsArr") !== null) {
    cartItemsArr = JSON.parse(localStorage.getItem ("cartItemsArr"));

    create_cart_for_local();
}
else{
    local_storage.setItem("cartItemsArr", "{}");
}

if(localStorage.getItem("cartItemsLen") !== null){
    cartItemsLen = JSON.parse(localStorage.getItem ("cartItemsLen"));
}
else{
    local_storage.setItem("cartItemsLen", -1);
}

update_likes_and_carts();