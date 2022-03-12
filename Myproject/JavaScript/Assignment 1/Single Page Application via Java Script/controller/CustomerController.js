
 
  //-----------------Customer Details--------------------------------------------
  CustormerSerach

  $("#saveCustormer").click(function (e){
    saveCustormers();
    loadAllCustomers();
    removeColorCustomer();
    clearCustomer();
  })
  
  function saveCustormers(){
    let customerid = $("#custormerID").val();
    let customerAddress =$("#customerAddress").val();
    let customerName =$("#customerName").val();
    let salary=$("#custormerSalary").val();
    let phoneNumber=$("#cusphoneNumber").val();
    

     customerDB.push(new Customer(customerid,customerAddress,customerName,salary,phoneNumber));
     addValuesToCmbCustomers("<option>"+customerid+"</option>");
  }
   
  
  function loadAllCustomers(){
    
        for(var i of customerDB){
          let row = `<tr><td>${i.getCusID()}</td><td>${i.getCusAddress()}</td><td>${i.getCusName()}</td><td>${i.getCusSalary()}</td><td>${i.getPhoneNumber()}</td>
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

    function clearCustomer(){
      $("#custormerID").val("");
      $("#customerAddress").val("");
      $("#customerName").val("");
      $("#custormerSalary").val("");
      $("#cusphoneNumber").val("");
    }


    function updateCustomer(){
      //write the code
    }

    function searchCustomer(){

    }
  

//------------------------Customer Details Validation----------------------------

function CustomerRegex(pattern, value) {
  return pattern.test(value);
}

   
function CustomerValidation(){
   let textfild =[$("#custormerID"),$("#customerAddress"),$("#customerName"),$("#custormerSalary"),$("#cusphoneNumber")];
   let result = false;
for (let index = 0; index <textfild.length; index++) {
    if(textfild[index].css('border-color') === "rgb(255, 0, 0)"){
                result = true; 
    }
}
if(result){
  $("#saveCustormer").attr("disabled",true);
  console.log("disabled");
}else{
  $("#saveCustormer").attr("disabled",false);
  console.log("enabled");
}
}

$("#custormerID").on("keyup", function (event) {
  setTimeout(function () {
    CustomerValidation();
     }, 150);
  if (CustomerRegex(/^(C0-)[0-9]{1,3}$/, $("#custormerID").val())) {
      $("#custormerID").css('border', '2px solid green');
      $("#customerAddress").css('border', '2px solid red');
  }else{
      $("#custormerID").css({
          'border': '2px solid red'
      });
  }
});


$("#customerAddress").on("keyup", function (event) {
  setTimeout(function () {
    CustomerValidation();
     }, 150);
  if (CustomerRegex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, $("#customerAddress").val())) {
          $("#customerAddress").css('border', '2px solid green');
          $("#customerName").css('border', '2px solid red');
  } else {
      $("#customerAddress").css({
          'border': '2px solid red'
      });
  }
});

$("#customerName").on("keyup", function (event) {
  setTimeout(function () {
    CustomerValidation();
     },150);
  if (CustomerRegex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, $("#customerName").val())) {
      $("#customerName").css('border', '2px solid green');
      $("#custormerSalary").css('border', '2px solid red');
     
  } else {
      $("#customerName").css({
          'border': '2px solid red'
      });
  }
});



$("#custormerSalary").on("keyup", function (event) {
  setTimeout(function () {
    CustomerValidation();
     },150);
  if (CustomerRegex(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, $("#custormerSalary").val())) {
      $("#custormerSalary").css('border', '2px solid green');
      $("#cusphoneNumber").css('border', '2px solid red');
     
  } else {
      $("#custormerSalary").css({
          'border': '2px solid red'
      });
  }
});

$("#cusphoneNumber").on("keyup", function (event) {
  setTimeout(function () {
    CustomerValidation();
     }, 150);
    if (CustomerRegex(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, $("#cusphoneNumber").val())) {
      $("#cusphoneNumber").css('border', '2px solid green');
      
    } else {
      $("#cusphoneNumber").css({
          'border': '2px solid red'
      });
    }
});

 
function removeColorCustomer(){
  $("#custormerID","#customerAddress","#customerName","#custormerSalary","#cusphoneNumber").css({
      'border': '1px solid  #CED4DA'
  });

}



