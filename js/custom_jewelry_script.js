const typeItems = document.getElementsByClassName("type_selection_item");
let currType = document.getElementsByClassName("type_selection_item-active")[0];
let currTypeNum = 0;
const typesPics = ["../Images/new1.jpg", "../Images/new7.jpg", "../Images/pop4.jpg", "../Images/new4.png"];
const typesTxts = [
    "Кольца были известны еще в Древнем Египте, их носили не только женщины, но и мужчины. Они использовались как символ богатства и социального статуса.",
    "Браслеты считаются одним из самых старых украшений. Их использовали в религиозных церемониях или для защиты от злых духов.",
    "Подвески не всегда использовались только в качестве украшения. В Древнем Риме, например, они служили как амулеты, которые защищали от болезней и привлекали удачу.",
    "Серьги были популярны в разных культурах и эпохах. Например, у древних греков и римлян серьги были обязательным украшением для невесты в свадебном обряде, а в Восточной культуре они использовались как символ статуса и богатства."
];
//
const materialItems = document.getElementsByClassName("material_selection_item");
let currMaterial = document.getElementsByClassName("material_selection_item-active")[0];
let currMaterialNum = 0;
const materialPics = ["../Images/gold.jpg", "../Images/silver.jpg", "../Images/beloe-gold.jpg", "../Images/platinum.jpg"];
const materialTxts = [
    "Золото было первым металлом, который был использован в качестве денежной единицы, еще в 560 году до нашей эры.",
    "Серебро не только является одним из самых благородных металлов, но также обладает антимикробными свойствами, что делает его идеальным материалом для ношения украшений на каждый день.",
    "Белое золото - это сплав золота и других металлов, таких как никель или палладий, который придает ему белесый оттенок и делает его идеальным материалом для изготовления ювелирных украшений.",
    "Платина является одним из самых редких металлов на Земле и часто используется в промышленности и для производства ювелирных изделий из-за своей прочности и стойкости к коррозии."
];
//
const insertItems = document.getElementsByClassName("insert_selection_item");
let currInsert = document.getElementsByClassName("insert_selection_item-active")[0];
let currInsertNum = 0;
const insertPics = ["../Images/pop6.png", "../Images/fianit.jpg", "../Images/granat.jpg", "../Images/izumrud.jpg", "../Images/brilliant.jpg", "../Images/amethyst.jpg",
    "../Images/sapfir.png", "../Images/zemchug.jpg", "../Images/kamushki.jpg"];
const insertTxts = [
    "Некоторые из самых изысканных украшений без камней были созданы в Древнем Египте, где золото и серебро использовались для изготовления украшений с уникальными узорами и орнаментами. Эти украшения были невероятно тонкими и изящными, и мастера того времени отличались невероятным мастерством в создании украшений без использования драгоценных камней.",
    "Фианиты - идеальная альтернатива драгоценным алмазам. Блеск, твердость и огранка фианитов делают их неотличимыми от настоящих алмазов, но при этом они значительно доступнее по цене.",
    "Гранат - это минерал, который получил свое название благодаря своей сходству с семенами граната. Он известен своей яркой красной окраской.",
    "Изумруды - изысканные и изумительно красивые камни, которые обладают неповторимым зеленым оттенком и привлекательным блеском.",
    "Бриллианты - воплощение роскоши и безупречности. Они являются самыми желанными и драгоценными камнями, которые подчеркивают статус и изысканность своего обладателя.",
    "Аметисты - камни благородства и элегантности. Их фиолетовый оттенок и изумрудный блеск делают украшения с аметистами неповторимыми.",
    "Сапфиры - элегантные и роскошные. Сапфиры с голубым или розовато-фиолетовым цветом придают украшениям изысканный и неповторимый стиль.",
    "Жемчуг - символ изысканности и бесконечной элегантности. Украшения с жемчугом придают образу женственность и блеск, делая его более утонченным.",
    "Драгоценные камни образуются внутри земли при очень высоких температурах и давлении. Некоторые из них могут быть старше самой Земли и обладать удивительной историей, проложившейся через миллионы лет."
];
//
const informationBoxs = document.getElementsByClassName("information_box");

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

function send_wishes(){
    alert("Заявка отправлена");
}

Array.from(typeItems).forEach(function (item) {
    item.addEventListener('click', function () {
        currType.classList.remove("type_selection_item-active");
        this.classList.add("type_selection_item-active");
        currType = this;

        for (var i = 0; i < typeItems.length; i++){
            if(typeItems[i] === currType){
                currTypeNum = i;
                informationBoxs[0].querySelector("p").textContent = typesTxts[i];
                informationBoxs[0].querySelector("img").src = typesPics[i];
            }
        }
    })
});

Array.from(materialItems).forEach(function (item) {
    item.addEventListener('click', function () {
        currMaterial.classList.remove("material_selection_item-active");
        this.classList.add("material_selection_item-active");
        currMaterial = this;

        for (var i = 0; i < materialItems.length; i++){
            if(materialItems[i] === currMaterial){
                currMaterialNum = i;
                informationBoxs[1].querySelector("p").textContent = materialTxts[i];
                informationBoxs[1].querySelector("img").src = materialPics[i];
            }
        }
    })
});


Array.from(insertItems).forEach(function (item) {
    item.addEventListener('click', function () {
        currInsert.classList.remove("insert_selection_item-active");
        this.classList.add("insert_selection_item-active");
        currInsert = this;

        for (var i = 0; i < insertItems.length; i++){
            if(insertItems[i] === currInsert){
                currInsertNum = i;
                informationBoxs[2].querySelector("p").textContent = insertTxts[i];
                informationBoxs[2].querySelector("img").src = insertPics[i];
            }
        }
    })
});
