
function loadAllConfirmOrder(){
    $("#OrderInfoTable").empty();
    for(var i of OrderDB){
      let row = `<tr>
      <td>${i.getOid()}</td>
      <td>${i.getCustID()}</td>
      <td>${i.getDate()}</td>
      <td>${i.getDiscount()}</td>
      <td>${i.getTot()}</td>
      <td></td></tr>`;
   
      $("#OrderInfoTable").append(row);
   
    }
  }