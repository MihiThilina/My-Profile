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



  //-----------------Customer Details--------------------------------------------

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
                `<td>`+phoneNumber+`</td>
                <td><button type="button" class="btn-sm btn-danger">Delete</button></td>
                </tr>`;
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
      `<td>`+qtyOnHand+`</td>  
       <td><button type="button" class="btn-sm btn-danger">Delete</button></td>
      </tr>`;
      $("#ItemTable").append(data);
  })

 

















//   ---------------------------------Validation  Item Details-----------------------

var regExItemID = /^(I00-)[0-9]{3,4}$/;

    $(".validation1").keyup(function () {
        let input = $("#itemcode").val();
        if (regExItemID.test(input)) {
            $("#itemcode").css('border', '2px solid green');
            $("#itemNames").css('border', '2px solid red');
            $("#error").text("");
        } else{
            $("#itemcode").css('border', '2px solid red');
            $("#error").text("Wrong format : C00-001");
        }
  
    });

var regExItemName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
     
$(".validation2").keyup(function () {
    let input = $("#itemNames").val();
    if (regExItemName.test(input)) {
        $("#itemNames").css('border', '2px solid green');
        $("#Itemprice").css('border', '2px solid red');
        $("#error").text("");
    } else{
        $("#itemNames").css('border', '2px solid red');
        $("#error").text("Wrong format : C00-001");
    }
});


var regExPrice = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/
$(".validation3").keyup(function () {
    let input = $("#Itemprice").val();
    if (regExPrice.test(input)) {
        $("#Itemprice").css('border', '2px solid green');
        $("#QtyonHand").css('border', '2px solid red');
        $("#error").text("");
    } else{
        $("#Itemprice").css('border', '2px solid red');
        $("#error").text("Wrong format : C00-001");
    }

});


var regqty =  /^[0-9]{3,4}$/;

$(".validation4").keyup(function () {
    let input = $("#QtyonHand").val();
    if (regqty.test(input)) {
        $("#QtyonHand").css('border', '2px solid green');
        $("#error").text("");
    } else{
        $("#QtyonHand").css('border', '2px solid red');
        $("#error").text("Wrong format : C00-001");
    }
});


//------------------------Customer Details----------------------------


var regExItemID = /^(C-)[0-9]{3,4}$/;

    $(".validationid").keyup(function () {
        let input = $("#custormerID").val();
        if (regExItemID.test(input)) {
            $("#custormerID").css('border', '2px solid green');
            $("#customerAddress").css('border', '2px solid red');
            $("#error").text("");
        } else{
            $("#custormerID").css('border', '2px solid red');
            $("#error").text("Wrong format : C00-001");
        }
  
    });