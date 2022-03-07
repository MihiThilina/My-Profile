//-----------------------item details---------------------------------------

$("#saveItems").click(function () {
    saveItem();
    loadAllItems();
    clear();

})

function updateRow() {
    $(".updaterow").click(function () {
        console.log('function works');
        $("#ItemTable>tr").click(function () {
            let itemCode = $(this).children(":eq(0)").text();
            let itemName = $(this).children(":eq(1)").text();
            let price = $(this).children(":eq(2)").text();
            let qtyOnHand = $(this).children(":eq(3)").text();

            console.log(itemCode);
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

    for (var i = 0; i < ItemDB.length; i++) {
        if ($("#itemcode").val() == ItemDB[i].id) {
            ItemDB[i].id = itemCode;
            ItemDB[i].name = itemName;
            ItemDB[i].price = price;
            ItemDB[i].qty = qtyOnHand;
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
    console.log(ItemDB);
}



function loadAllItems() {
    $("#ItemTable").empty();
    for (var i of ItemDB) {
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

function clear() {
    $("#itemcode").val("");
    $("#itemNames").val("");
    $("#Itemprice").val("");
    $("#QtyonHand").val("");
}







$("#ItemTable").on('click', '.btnDeleteItem', function () {
    var index = 0;
    for (var i = 0; i < ItemDB.length; i++) {
        if ($("#itemcode").val() == ItemDB[i].id) {
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



//   ---------------------------------Validation  Item Details-----------------------


var regExItemID = /^(I00-)[0-9]{3,4}$/;
var regExItemName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
var regExPrice = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/
var regqty = /^[0-9]{3,4}$/;




$(".validation1").keyup(function (event) {
    let input = $("#itemcode").val();
    if (regExItemID.test(input)) {
        $("#itemcode").css('border', '2px solid green');
        $("#itemNames").css('border', '2px solid red');

        // if(event.key=="Enter"){
        //     $("#itemNames").focus();
        //   }          

    } else {
        $("#itemcode").css('border', '2px solid red');

    }

});


$(".validation2").keyup(function () {
    let input = $("#itemNames").val();
    if (regExItemName.test(input)) {
        $("#itemNames").css('border', '2px solid green');
        $("#Itemprice").css('border', '2px solid red');
        $("#saveItems").attr("disabled", false)
    } else {
        $("#itemNames").css('border', '2px solid red');
        $("#saveItems").attr("disabled", true)


    }
});

$(".validation3").keyup(function () {
    let input = $("#Itemprice").val();
    if (regExPrice.test(input)) {
        $("#Itemprice").css('border', '2px solid green');
        $("#saveItems").attr("disabled", false)


    } else {
        $("#Itemprice").css('border', '2px solid red');
        $("#saveItems").attr("disabled", true)
    }

});


$(".validation4").keyup(function () {
    let input = $("#QtyonHand").val();
    if (regqty.test(input)) {
        $("#QtyonHand").css('border', '2px solid green');
        $("#error").text("");
        $("#saveItems").attr("disabled", false)
    } else {
        $("#QtyonHand").css('border', '2px solid red');
        $("#saveItems").attr("disabled", true)

    }
});
