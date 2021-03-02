
const clearBtn= document.querySelector(".clear");
const producto = document.querySelector(".producto");
const cartSubotal = document.querySelector(".subtotal");
const cartIva = document.querySelector(".iva");
const cartTotal = document.querySelector(".total");

setInterval(get_total(),1000);
//setInterval(function(){ console.log(cartTotal);}, 1000)

function get_total() {
    let productos = [];
    productos = document.getElementsByClassName("producto");
    let total = 0;

    for (let i = 0; i < productos.length; i++){
        let amount = productos[i].getElementsByClassName("item_amount")[0].innerHTML;
        console.log(amount);
        let price = productos[i].getElementsByClassName("price")[0].innerHTML;
        amount = amount.replace(',', '');
        price = price.replace(',', '');
        console.log(price * amount);
        console.log("price"+price);
        console.log("amount"+amount);
        total += amount * price;
    }

    cartSubotal.innerHTML = total;
    cartIva.innerHTML = cartSubotal.innerHTML * 0.16;
    cartTotal.innerHTML = parseInt(cartSubotal.innerHTML) + parseInt(cartIva.innerHTML);
}

let arrows_up = document.getElementsByClassName("fas fa-chevron-up");
let arrows_down = document.getElementsByClassName("fas fa-chevron-down");

for (let i = 0; i < arrows_up.length; i++){
    arrows_up[i].onclick  = () => {
        click_arrow(arrows_up[i], 1);
        get_total();
    }
    arrows_down[i].onclick = () => {
        click_arrow(arrows_down[i], -1);
        get_total();
    }
}

function click_arrow(elem, num){
    let closestProduct = elem.closest(".producto");
    let amount_item = closestProduct.querySelector(".item_amount");
    console.log(amount_item.innerHTML);
    console.log(elem.className);
    if ((amount_item.innerHTML <= 0 && elem.className === "fas fa-chevron-down") || (amount_item.innerHTML >= 5 && elem.className === "fas fa-chevron-up")) {
        amount_item.innerHTML = amount_item.innerHTML;
    } else {
        amount_item.innerHTML = parseInt(amount_item.innerHTML) + num;
    }
}

clearBtn.onclick = () => {
    let productos = [];
    productos = document.getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++){
        let amount_item = productos[i].getElementsByClassName("item_amount")[0];
        amount_item.innerHTML = 0;
    }
    
    get_total();
}