


/*Load Customers to Combo Box*/
// $("#cmbcustormerId").click(function(){
//     $("#cmbcustormerId").empty();
//     console.log("Enter");
//     for(var i of customerDB){
//         let IdValue=`<option>${i.id}</option>`;
//         $("#cmbcustormerId").append(IdValue);
//     }
// });

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


      

