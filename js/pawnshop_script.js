const inputBox = document.getElementById("lombard-calculator__input-box");
const valueItems = document.getElementsByClassName("lombard-calculator__fineness-value-item");
let currValue = document.getElementById("lombard-calculator__fineness-value").querySelector(".lombard-calculator__fineness-value-item_active");
let currValuePrice = 3;
const priceValues = [1996, 2661, 2985, 3114, 3992, 4524, 4790, 5099];
const integerSum = document.getElementById("lombard-calculator__integer-summ");

function open_home_window(){
    window.location.href = '../index.html';
}
function open_liked_window(){ 
    window.location.href = '../html/liked.html';
}
function open_cart_window(){ 
    window.location.href = '../html/cart.html';
}
function open_registration_window(){ 
    window.location.href = '../html/registrationForm.html';
}

Array.from(valueItems).forEach(function (item) {
    item.addEventListener('click', function () {
        currValue.classList.remove("lombard-calculator__fineness-value-item_active");
        this.classList.add("lombard-calculator__fineness-value-item_active");
        currValue = this;
        
        for (var i = 0; i < valueItems.length; i++){
            if(valueItems[i] === currValue){
                integerSum.textContent = inputBox.value * priceValues[i] + " ₽";
                currValuePrice = i;
            }
        }
    })
});

function change_value(elem){
    if(elem.value > 1000){
        elem.value = 1000;
    }
    else if(elem.value < 1){
        elem.value = "";
    }
    
    integerSum.textContent = inputBox.value * priceValues[currValuePrice] + " ₽";
   
}
