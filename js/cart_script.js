local_storage = window.localStorage;
let cartItemsArr = {}
cartItemsArr = JSON.parse(localStorage.getItem("cartItemsArr"));
const cartField = document.getElementById("cart_field");
const totalSum = document.getElementById("total_sum");

function open_home_window(){
    window.location.href = '../index.html';
}
function open_liked_window(){ 
    window.location.href = '../html/liked.html';
}
function open_registration_window(){ 
    window.location.href = '../html/registrationForm.html';
}

function show_absence(){
    var absence = document.createElement('div');
    absence.id = "absence";
    absence.textContent = "Корзина пуста";

    cartField.parentElement.appendChild(absence);
}

function delete_from_cart(elem){
    var deleted = 0;
    var new_cartItemsArr = "{";
    var i;

    var txt_arr = elem.querySelectorAll('p');
    var img = elem.querySelectorAll('img')[0].src;
    img = img.slice(img.indexOf("Images") - 1);

    var json_elem = `{"img":"${img}","name":"${txt_arr[0].textContent}","price":"${txt_arr[1].textContent}"}`;
    for(i = 0; i <= localStorage.getItem("cartItemsLen"); i++){
        if(json_elem === JSON.stringify(cartItemsArr[i])){
            deleted = 1;
            var cartElements = document.getElementsByClassName("cart_element");
            console.log(cartElements[i]);
            cartField.removeChild(cartElements[i]);
        }
        else{
            new_cartItemsArr += `"${i - deleted}": ${JSON.stringify(cartItemsArr[i])},`;
        }
    }

    localStorage.setItem("cartItemsLen", i-2);
    if(new_cartItemsArr.length > 1){
        new_cartItemsArr = new_cartItemsArr.slice(0, new_cartItemsArr.length-1);
    }
    else{
        show_absence();
    }
    new_cartItemsArr += "}";
    localStorage.setItem("cartItemsArr", new_cartItemsArr);
    cartItemsArr = JSON.parse(localStorage.getItem ("cartItemsArr"));
}

function plusElem(){
    var text = this.parentNode.querySelector('div');
    text.textContent = parseFloat(text.textContent) + 1;

    totalSum.textContent = parseFloat(totalSum.textContent) + parseFloat(this.parentNode.parentNode.querySelectorAll(".cart_text p")[1].textContent.replaceAll(' ', ''));
}

function minusElem(){
    var text = this.parentNode.querySelector('div');
    text.textContent = parseFloat(text.textContent) - 1;

    totalSum.textContent = parseFloat(totalSum.textContent) - parseFloat(this.parentNode.parentNode.querySelectorAll(".cart_text p")[1].textContent.replaceAll(' ', ''));

    if(parseFloat(text.textContent) <= 0){
        delete_from_cart(this.parentNode.parentNode);
    }
}

function addPM(element){
    var block = document.createElement('div');
    var P = document.createElement('button');
    var display = document.createElement('div');
    var M = document.createElement('button');

    block.className = "PM";
    P.className = 'plus';
    display.className = 'display';
    M.className = 'minus';
  
    P.textContent = "+";
    display.textContent = '1';
    M.textContent = '-';
  
    P.onclick = plusElem;
    M.onclick = minusElem;
  
    block.appendChild(M);
    block.appendChild(display);
    block.appendChild(P);
    element.appendChild(block);
} 

function create_cart_elem(elem){
    var cartElement = document.createElement('div');
    var img = document.createElement('img');
    var text = document.createElement('div');
    var name = document.createElement('p');
    var price = document.createElement('p');

    cartElement.className = "cart_element";
    img.className = "main_img";
    text.className = "cart_text";
    
    img.src = "../" + elem.img;
    name.textContent = elem.name;
    price.textContent = elem.price;

    totalSum.textContent = parseFloat(totalSum.textContent) + parseFloat(price.textContent.replaceAll(' ', ''));

    text.appendChild(name);
    text.appendChild(price);

    cartElement.appendChild(img);
    cartElement.appendChild(text);
    addPM(cartElement);

    cartField.appendChild(cartElement);
}

if(localStorage.getItem ("cartItemsLen") == -1){
    show_absence();
}

for(var i = 0; i <= localStorage.getItem("cartItemsLen"); i++){
    create_cart_elem(cartItemsArr[i]);
}