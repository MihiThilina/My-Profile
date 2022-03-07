
 
  //-----------------Customer Details--------------------------------------------


  $("#saveCustormer").click(function (e){
    saveCustormers();
    loadAllCustomers();
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
     addValuesToCmbCustomers("<option>"+customerid+"</option>");
     console.log(customerObject);
  }
   
  
  function loadAllCustomers(){
    
        for(var i of customerDB){
          let row = `<tr><td>${i.id}</td><td>${i.address}</td><td>${i.Name}</td><td>${i.salarys}</td><td>${i.Number}</td>
          <td><button type="button" class="btn-sm  btnDeleteItem btn-danger">Delete</button>
          <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-sm border btn-success updaterow" style="width: 11%;  "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="24" height="20"
          viewBox="0 0 172 172"
          style=" right:5px; position: relative; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M101.05,42.28333l-79.55,79.55v28.66667h28.66667l79.55,-79.55zM111.8,31.53333l17.2,-17.2l28.66667,28.66667l-17.2,17.2z"></path></g></g></svg></button></td>
          </tr>`;
           $("#custormerTable").append(row);
          
           console.log(row)
        }   
  }

  
function setCustomerDetailsOnPlaceOrder(name, salary, address) {
  $("#customerName").val(name);
  $("#custormerSalary").val(salary);
  $("#customerAddress").val(address);
}



  

    function updateCustomer(){
      //write the code
    }

    function searchCustomer(){}
  

//------------------------Customer Details----------------------------


// var regExItemID = /^(C-)[0-9]{3,4}$/;

//     $(".validationid").keyup(function () {
//         let input = $("#custormerID").val();
//         if (regExItemID.test(input)) {
//             $("#custormerID").css('border', '2px solid green');
//             $("#customerAddress").css('border', '2px solid red');
//             $("#error").text("");
//         } else{
//             $("#custormerID").css('border', '2px solid red');
//             $("#error").text("Wrong format : C00-001");
//         }
  
//     });