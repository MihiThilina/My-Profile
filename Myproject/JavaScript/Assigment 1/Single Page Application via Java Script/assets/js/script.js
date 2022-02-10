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



  //-------------------------------------------------------------

  $("#saveCustormer").click(function (e){
      e.preventDefault();
      let customerid = $("#custormerID").val();
      let customerAddress =$("#customerAddress").val();
      let customerName =$("#customerName").val();
      let salary=$("#custormerSalary").val();
      let phoneNumber=$("#cusphoneNumber").val();

      let data = `<tr><td>`+customerid+`</td>`+
                `<td>`+customerAddress+`</td>`+
                `<td>`+customerName+`</td>`+
                `<td>`+salary+`</td>`+
                `<td>`+phoneNumber+`</td></tr>`;
                $("#custormerTable").append(data);
  })
  
  //--------------------------------------------------------------


  $("#saveItems").click(function(e){
      e.preventDefault();
      let itemCode = $("#itemcode").val();
      let itemName =$("#itemNames").val();
      let price =$("#Itemprice").val();
      let  qtyOnHand =$("#QtyonHand").val();

      let data = `<tr><td>`+itemCode+`</td>`+
      `<td>`+itemName+`</td>`+
      `<td>`+price+`</td>`+
      `<td>`+qtyOnHand+`</td></tr>`;
      $("#ItemTable").append(data);
  })