let removebtn = document.getElementsByClassName('btn-remove');
let tr = document.getElementsByTagName('tr');
let tbody = document.getElementsByTagName('tbody')[0]
// console.log(tbody)
// console.log(tr)
// console.log(removebtn)
for(let i=0;i<removebtn.length;i++){
    let button = removebtn[i];
    // console.log(button)
    button.addEventListener("click",()=>{
        // console.log("Clicked");
        tr[1].remove()
        updatePrice();
    })
}
let quantityInputs = document.getElementsByClassName('quantity')
for(let i=0;i<quantityInputs;i++){
    let input = quantityInputs[i];
    input.addEventListener('change',quantityChanged)
}

function quantityChanged(){
    
}


const updatePrice = ()=>{
    let price = tbody.getElementsByTagName('tr');
    let total = 0
    for(let i=0;i<price.length;i++){
        let cartRow = price[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];        
        let quantityElement = cartRow.getElementsByClassName('quantity')[0];        
        // console.log(priceElement,quantityElement);
        let pricevalue = parseFloat(priceElement.innerText.replace('$',''))
        // console.log(pricevalue)
        let quantity = quantityElement.value;
        total += (pricevalue * quantity);
        // console.log(pricevalue * quantity)
    }
document.getElementsByClassName('subtotal')[0].innerText = '$' + total
    // console.log(price)
}