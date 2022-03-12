//-----------------------item details---------------------------------------

$("#saveItems").click(function () {
    saveItem();
    loadAllItems();
    clear();
    colorRemove();
})

function updateRow() {
    $(".updaterow").click(function () {
        console.log('function works');
        $("#ItemTable>tr").click(function () {
            let itemCode = $(this).children(":eq(0)").text();
            let itemName = $(this).children(":eq(1)").text();
            let price = $(this).children(":eq(2)").text();
            let qtyOnHand = $(this).children(":eq(3)").text();
           // console.log(itemCode);
            $("#itemcode").val(itemCode);
            $("#itemNames").val(itemName);
            $("#Itemprice").val(price);
            $("#QtyonHand").val(qtyOnHand);
        })
    });
}

$("#updateItem").click(function () {
    let itemCode = $("#itemcode").val();
    let itemName = $("#itemNames").val();
    let price = $("#Itemprice").val();
    let qtyOnHand = $("#QtyonHand").val();

    for (var i = 0; i <ItemDB.length; i++) {
        if ($("#itemcode").val() == ItemDB[i].getItemCode()) {
            ItemDB[i].setItemCode() = itemCode;
            ItemDB[i].setItemName()= itemName;
            ItemDB[i].setItemPrice() = price;
            ItemDB[i].setItemQty() = qtyOnHand;
        }
    }
    loadAllItems();
    updateRow();
})




function saveItem() {
    let itemCode = $("#itemcode").val();
    let itemName = $("#itemNames").val();
    let price = $("#Itemprice").val();
    let qtyOnHand = $("#QtyonHand").val();
    ItemDB.push(new Item(itemCode,itemName,price,qtyOnHand));
    addValuesToItems("<option>" + itemCode + "</option>");  
}




function loadAllItems() {
    $("#ItemTable").empty();
    for(var i of ItemDB) {
        let row = `<tr><td>${i.getItemCode()}</td><td>${i.getItemName()}</td><td>${i.getItemPrice()}</td><td>${i.getItemQty()}</td>
                <td><button type="button" class="btn-sm  btnDeleteItem btn-danger">Delete</button>
                <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-sm border btn-success updaterow" style="width: 11%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="20"
                viewBox="0 0 172 172"
                style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button></td>
                </tr>`;
        $("#ItemTable").append(row);
    }
    updateRow();
}

function clear(){
    $("#itemcode").val("");
    $("#itemNames").val("");
    $("#Itemprice").val("");
    $("#QtyonHand").val("");
}



$("#ItemSerch").keyup(function(){
    if($("#ItemSerch").val() !== ""){
        $("#ItemTable").empty();
        let itemid = $("#ItemSerch").val();
        for(const i in ItemDB){
            if(ItemDB[i].getItemCode()===itemid){
                let row = `<tr>
                <td>${ItemDB[i].getItemCode()}</td>
                <td>${ItemDB[i].getItemName()}</td>
                <td>${ItemDB[i].getItemPrice()}</td>
                <td>${ItemDB[i].getItemQty()}</td>
                <td><button type="button" class="btn-sm  btnDeleteItem btn-danger">Delete</button>
                <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-sm border btn-success updaterow" style="width: 11%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="20"
                viewBox="0 0 172 172"
                style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button></td>
                </tr>`;
                $("#ItemTable").append(row);
            }
        }
    }
});





$("#ItemTable").on('click', '.btnDeleteItem', function () {
    var index = 0;
    for (var i = 0; i < ItemDB.length; i++) {
        if ($("#itemcode").val() == ItemDB[i].getItemCode()) {
            index = i;
        }
    }
    ItemDB.splice(index, 1);
    $("#itemcode").val("");
    $("#itemNames").val("");
    $("#Itemprice").val("");
    $("#QtyonHand").val("");
    $(this).closest('tr').remove();
})

$("#itemcode,#itemNames,#Itemprice,#QtyonHand").on("keydown" , function(event){
    if(event.key === "Enter"){
        event.preventDefault();
    }
})


//   ---------------------------------Validation  Item Details-----------------------




function ItemRegex(pattern, value) {
    return pattern.test(value);
}

function ItemValidation(){
     let textfild =[$("#itemcode"),$("#itemNames"),$("#Itemprice"),$("#QtyonHand")];
     let result = false;
  for (let index = 0; index < textfild.length; index++) {
      if(textfild[index].css('border-color') === "rgb(255, 0, 0)"){
                  result = true; 
      }
  }
  if(result){
    $("#saveItems").attr("disabled",true);
    console.log("disabled");
  }else{
    $("#saveItems").attr("disabled",false);
    console.log("enabled");
  }
}

$("#itemcode").on("keyup", function (event) {
    setTimeout(function () {
        ItemValidation();
       }, 150);
    if (ItemRegex(/^(I0-)[0-9]{1,3}$/, $("#itemcode").val())) {
        $("#itemcode").css('border', '2px solid green');
        $("#itemNames").css('border', '2px solid red');
    }else{
        $("#itemcode").css({
            'border': '2px solid red'
        });
    }
});


$("#itemNames").on("keyup", function (event) {
    setTimeout(function () {
        ItemValidation();
       }, 150);
    if (ItemRegex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, $("#itemNames").val())) {
            $("#itemNames").css('border', '2px solid green');
            $("#Itemprice").css('border', '2px solid red');
    } else {
        $("#itemNames").css({
            'border': '2px solid red'
        });
    }
});


$("#Itemprice").on("keyup", function (event) {
    setTimeout(function () {
        ItemValidation();
       },150);
    if (ItemRegex(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, $("#Itemprice").val())) {
        $("#Itemprice").css('border', '2px solid green');
        $("#QtyonHand").css('border', '2px solid red');
       
    } else {
        $("#Itemprice").css({
            'border': '2px solid red'
        });
    }
});

$("#QtyonHand").on("keyup", function (event) {
    setTimeout(function () {
        ItemValidation();
       }, 150);
      if (ItemRegex(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, $("#QtyonHand").val())) {
        $("#QtyonHand").css('border', '2px solid green');
        
      } else {
        $("#QtyonHand").css({
            'border': '2px solid red'
        });
      }
  });

   
  function colorRemove(){
    $("#itemcode,#itemNames,#Itemprice,#QtyonHand").css({
        'border': '1px solid  #CED4DA'
    });

  }


