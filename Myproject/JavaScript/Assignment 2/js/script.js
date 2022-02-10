document.getElementById("btn-placeorder").addEventListener("click",function(){
    document.getElementsByClassName("placeorder")[0].style.display="block"
    document.getElementsByClassName("customerDetails")[0].style.display="none"
    document.getElementsByClassName("itemDetails")[0].style.display="none"
})

document.getElementById("btn-customer").addEventListener("click",function(){
    document.getElementsByClassName("customerDetails")[0].style.display="block"
    document.getElementsByClassName("placeorder")[0].style.display="none"
    document.getElementsByClassName("itemDetails")[0].style.display="none"
})

document.getElementById("btn-item").addEventListener("click",function(){
    document.getElementsByClassName("itemDetails")[0].style.display="block"
    document.getElementsByClassName("placeorder")[0].style.display="none"
    document.getElementsByClassName("customerDetails")[0].style.display="none"
})


// ----------------------------------------------------
$("#btnAddtoCart").click(function (e) {
    e.preventDefault();
    let orderid =  $("#orderID").val();
    let itemName=   $("#itemName").val();
    let quantity =  $("#orderQty").val();
    let price =  $("#price").val();
  
    var data = `<tr><td>`+orderid>+`</td>`+
               `<td>`+itemName+`</td>`+
                  `<td>`+quantity+`</td>`+
                  `<td>`+price+`</td></tr>`;
                  $('#cartTable').append(data);
    
  });