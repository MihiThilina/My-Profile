


/*Load Customers to Combo Box*/
// $("#cmbcustormerId").click(function(){
//     $("#cmbcustormerId").empty();
//     console.log("Enter");
//     for(var i of customerDB){
//         let IdValue=`<option>${i.id}</option>`;
//         $("#cmbcustormerId").append(IdValue);
//     }
// });

// function generateOrderID() {
//    try {
//        let lastOrderId = Order[Order.length-1].id;
//        let newOrderId = parseInt(lastOrderId.substring(1,4))+1;
//        if (newOrderId < 10) {
//            $("#OrderId").text("O00"+newOrderId);
//        }else if (newOrderId<100) {
//            $("#OrderId").text("O0"+newOrderId);
//        } else {
//            $("#OrderId").text("O"+newOrderId);
//        }
//    }catch (e) {
//        $("#OrderId").text("O001");
//    }

// }

$("#btnAddtoCart").click(function(){
   addToCart();
})


$("#cmbItemId").click(function(){
    itemId = $("#cmbItemId").val();
    itemName =$("#itNames").val();
    price =$("#itemprice").val();
    itemqty =$("#itemqty").val();

    for(var i=0; i<ItemDB.length;i++){
       if(ItemDB[i].id==itemId){
        itemName=ItemDB[i].name;
        price =ItemDB[i].prices;
        itemqty =ItemDB[i].qty;

          $("#itNames").val(itemName);
          $("#itemprice").val(price);
          $("#itemqty").val(itemqty);
       }
    }
  });



function addValuesToCmbCustomers(value) {
    $("#cmbcustormerId").append(value);
}

function addValuesToItems(value){
    $("#cmbItemId").append(value);
}

           
        $("#cmbcustormerId").click(function(){
          cusId = $("#cmbcustormerId").val();
          cusName =$("#cusName").val();
          salary =$("#CusSalary").val();
          address =$("#CusAddress").val();

          for(var i=0; i<customerDB.length;i++){
             if(customerDB[i].id==cusId){
                cusName=customerDB[i].Name;
                salary =customerDB[i].salarys;
                address =customerDB[i].Number;

                $("#cusName").val(cusName);
                $("#CusSalary").val(salary);
                $("#CusAddress").val(address);
             }
          }
        });


        function addToCart(){
            itemCode =$("#cmbItemId").val();
            itemName =$("#itNames").val();
            itemPrice=$("#itemprice").val();
            itemQty=$("#itemqty").val();
            orderQty =$("#OrderQty").val();

            let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemQty}</td><td>${orderQty}</td></tr>`
        $("#cartTabale").append(row);
             
        }


        function  buttondisabled(){
            
        }


      
         
