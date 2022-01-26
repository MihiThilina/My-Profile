document.getElementById("btn-placeorder").addEventListener("click",function(){
    document.getElementsByClassName("placeOrder-area")[0].style.display="block"
    document.getElementsByClassName("placeorder")[0].style.display="none"
    document.getElementsByClassName("itemDetails")[0].style.display="none"
})

document.getElementById("btn-customer").addEventListener("click",function(){
    document.getElementsByClassName("customerDetails")[0].style.display="block"
    document.getElementsByClassName("placeordera")[0].style.display="none"
    document.getElementsByClassName("itemDetails")[0].style.display="none"
})

document.getElementById("btn-item").addEventListener("click",function(){
    document.getElementsByClassName("itemDetails")[0].style.display="block"
    document.getElementsByClassName("placeorder")[0].style.display="none"
    document.getElementsByClassName("customerDetails")[0].style.display="none"
})