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


// ---------------------------------Place Order-------------------
$("#btnAddtoCart").click(function (e) {
  
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
    loadAllCustomers();
    saveCustormers();
  })
  
  function saveCustormers(){
    let customerid = $("#custormerID").val();
    let customerAddress =$("#customerAddress").val();
    let customerName =$("#customerName").val();
    let salary=$("#custormerSalary").val();
    let phoneNumber=$("#cusphoneNumber").val();
     var customerObject = {
         id : customerid,
         address : customerAddress,
         Name : customerName,
         salarys : salary,
         Number: phoneNumber
     }
     customerDB.push(customerObject);
     console.log(customerObject);
  }

  function loadAllCustomers(){
        $("#custormerTable").empty();
        for(var i of customerDB){
           let row = `<tr><td>${i.id}</td>
           <td>${i.address}</td><td>${i.Name}</td><td>${i.salarys}</td><td>${i.Number}</td>
           <td><button type="button" class="btn-sm btn-danger">Delete</button>
           <button type="button"  class="btn-sm border btn-success" style="width: 11%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="20"
             viewBox="0 0 172 172"
            style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button>
            </td>
           </tr>`;
           $("#custormerTable").append(row);
           console.log(row)
        }   
  }



  

    function updateCustomer(){
      //write the code
    }

    function searchCustomer(){}
  


  //-----------------------item details---------------------------------------

  $("#saveItems").click(function(){
    saveItem();
    loadAllItems();
    clear();
  
  })

     $("#updateItem").click(function(){

        $("#ItemTable>tr").click(function(){
            let itemCode = $(this).children(":eq(0)").text();
            let itemName = $(this).children(":eq(1)").text();
            let price = $(this).children(":eq(2)").text();
            let  qtyOnHand = $(this).children(":eq(3)").text();

            console.log(itemCode);
            $("#itemcode").val(itemCode);
            $("#itemNames").val(itemName);
            $("#Itemprice").val(price);
            $("#QtyonHand").val(qtyOnHand);
        })

    });
  
 

            function saveItem(){
                let itemCode = $("#itemcode").val();
                let itemName =$("#itemNames").val();
                let price =$("#Itemprice").val();
                let  qtyOnHand =$("#QtyonHand").val();
                
                var itemObject = {
                    id : itemCode,
                    name : itemName,
                    prices : price,
                    qty : qtyOnHand 
                };
                ItemDB.push(itemObject);
                console.log(ItemDB);

            }

        function loadAllItems(){
            $("#ItemTable").empty();
            for(var i of ItemDB ){
                let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.prices}</td><td>${i.qty}</td>
                <td><button type="button" class="btn-sm  btnDeleteItem btn-danger">Delete</button>
                <button type="button" id="updateItem" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-sm border btn-success" style="width: 11%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="20"
                viewBox="0 0 172 172"
                style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button></td>
                </tr>`;
                $("#ItemTable").append(row);
            }
        }

                function clear(){
                $("#itemcode").val("");
                $("#itemNames").val("");
                $("#Itemprice").val("");
                $("#QtyonHand").val("");
                }

                

       
          
          
  
         $("#ItemTable").on('click','.btnDeleteItem' , function(){
                var index = 0;
                for(var i=0; i<ItemDB.length; i++){
                    if( $("#itemcode").val() ==ItemDB[i].id){
                        index = i;
                    }
                }
                   ItemDB.splice(index,1);
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
var regqty =  /^[0-9]{3,4}$/;




    $(".validation1").keyup(function (event) {
        let input = $("#itemcode").val();
        if (regExItemID.test(input)) {
            $("#itemcode").css('border', '2px solid green');
            $("#itemNames").css('border', '2px solid red');

            // if(event.key=="Enter"){
            //     $("#itemNames").focus();
            //   }          
           
        } else{
            $("#itemcode").css('border', '2px solid red');
            
        }
  
    });


$(".validation2").keyup(function () {
    let input = $("#itemNames").val();
    if (regExItemName.test(input)) {
        $("#itemNames").css('border', '2px solid green');
        $("#Itemprice").css('border', '2px solid red');
        $("#saveItems").attr("disabled",false)
    } else{
        $("#itemNames").css('border', '2px solid red');
        $("#saveItems").attr("disabled",true)
     
      
    }
});

$(".validation3").keyup(function () {
    let input = $("#Itemprice").val();
    if (regExPrice.test(input)) {
        $("#Itemprice").css('border', '2px solid green');
        $("#saveItems").attr("disabled",false)
        
        
    } else{        
        $("#Itemprice").css('border', '2px solid red');
        $("#saveItems").attr("disabled",true)
    }

});


$(".validation4").keyup(function () {
    let input = $("#QtyonHand").val();
    if (regqty.test(input)) {
        $("#QtyonHand").css('border', '2px solid green');
        $("#error").text("");
        $("#saveItems").attr("disabled",false)
    } else{
        $("#QtyonHand").css('border', '2px solid red');
        $("#saveItems").attr("disabled",true)
        
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