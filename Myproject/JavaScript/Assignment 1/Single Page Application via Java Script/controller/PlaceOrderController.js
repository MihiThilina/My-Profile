


$("#txtOrderId").text(generateOrderNumber());

$("#cmbItemId").append("<option> None </option>");







function generateOrderNumber() {
    if(Order.length !=0){
        let lastID = Order[Order.length -1];
        if(lastID < 9){
          return "O00" + (lastID + 1);
        }else if(lastID < 9){
            return "O0" + (lastID +1 );
        }else{
            return "O" + (lastID + 1);
        }
    }else{
        return "O001";
    }
};





$("#btnAddtoCart").click(function () {
    let itemQty =parseInt($("#itemqty").val());
    let orderQty =parseInt($("#OrderQty").val());
    if($("#OrderQty").val() !=''){
        if(itemQty < orderQty ){
            alert("echara nane");
        }else{
            addToCart();
            ReduceItemQty($("#OrderQty").val());
            loadCartTable();
        }
    }else{
        alert("type karala nane");
    }
   
});

$(".comfirmOrders").click(function(){
   $("#cartTabale").empty();
   $("#txtOrderId").text(generateOrderNumber());

});


 




$("#cmbItemId").change(function () {
    itemId = $("#cmbItemId").val();
    // itemName = $("#itNames").val();
    // price = $("#itemprice").val();
    // itemqty = $("#itemqty").val();

    console.log(itemId);
    
    for (var i = 0; i <ItemDB.length; i++) {
        if (ItemDB[i].getItemCode() == itemId) {
           var itemName = ItemDB[i].getItemName();
           var  price = ItemDB[i].getItemPrice();
           var itemqty = ItemDB[i].getItemQty();
 
           console.log(itemName);
           console.log(price);
            $("#itNames").val(itemName);
            $("#itemprice").val(price);
            $("#itemqty").val(itemqty);
        }
    }
});



function addValuesToCmbCustomers(value) {
     $("#cmbcustormerId").append(value);
}

function addValuesToItems(value) {
    $("#cmbItemId").append(value);
}


$("#cmbcustormerId").click(function () {
    cusId = $("#cmbcustormerId").val();
    cusName = $("#cusName").val();
    salary = $("#CusSalary").val();
    address = $("#CusAddress").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == cusId) {
            cusName = customerDB[i].Name;
            salary = customerDB[i].salarys;
            address = customerDB[i].Number;

            $("#cusName").val(cusName);
            $("#CusSalary").val(salary);
            $("#CusAddress").val(address);
        }
    }
});


 function loadAllOrders(){
 }

 function loadOrderDetails(){ }




 function ReduceItemQty(orderQty){
     var qtyOn = parseInt(orderQty);
     var avilableQty = parseInt($("#itemqty").val());
     avilableQty = avilableQty - qtyOn;
     let  itemCode = $("#cmbItemId").val();
    for(var i in ItemDB){
        if(itemCode==ItemDB[i].getItemCode()){
            ItemDB[i].setItemQty(avilableQty);
            $("#itemqty").val(ItemDB[i].getItemQty());
        }
    }
   
 };

 let sub_total = 0;
 let discount = 0;
 let total = 0;

 function Calculatetotal(orderQty,itemPrice,disc){
    sub_total+= orderQty * itemPrice;
    discount+= (orderQty * itemPrice *disc)  / 100;
    total = sub_total - discount;


//   $("#txtDiscount").val(discount);
    $("#txtTotal").text(total);
    $("#txtsubTotal").text(sub_total);
    
 }





function addToCart() {
  let  itemCode = $("#cmbItemId").val();
  let  itemName = $("#itNames").val();
  let  itemPrice = $("#itemprice").val();
  let  itemQty = $("#itemqty").val();
  let  orderQty = $("#OrderQty").val();
    disc = $("#txtDiscount").val();
  let  total= $("#txtsubTotal").text();
   
    Calculatetotal($("#OrderQty").val(),$("#itemprice").val(),$("#txtDiscount").val());

    for(var i in Carts){
        if(Carts[i].getcartICode()==itemCode){
          var newqty  =+Carts[i].getcartOQty() +  +orderQty;
          console.log(newqty);
          var newTotal =itemPrice * newqty; 
          Carts[i].setcartOQty(newqty);
          Carts[i].setTotal(newTotal);
          return;
        }
    }

    Carts.push(new cart(itemCode,itemName,itemPrice,orderQty,total));
    console.log(itemCode,itemName,orderQty,itemPrice,total);
    
}

 function loadCartTable(){
    $("#cartTabale").empty();
    for(var i of Carts){
        console.log(i.getcartICode,i.getcartIName);
        let row = `<tr><td>${i.getcartICode()}</td><td>${i.getcartIName()}</td><td>${i.getcartOQty()}</td><td>${i.getcartIPrice()}</td><td>${i.getTotal()}</td><td><button type="button" class="btn-sm  btnDeleteItem btn-danger">Delete</button>
        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-sm border btn-success updaterow" style="width: 17%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="35" height="20"
        viewBox="0 0 172 172"
        style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button></td>
        </tr>`
        $("#cartTabale").append(row);
    }
 
 }

   function clearAll(){
    $("#cartTabale").refresh();
   }


