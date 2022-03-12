
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
  

  $("#OrderSerachId").keyup(function(){
    if($("#OrderInfoTable").val() !== ""){
        $("#ItemTable").empty();
        let id = $("#OrderSerachId").val();
        for(const i in OrderDB){
            if(OrderDB[i].getOid()===id){
                let row = `<tr>
                <td>${OrderDB[i].getOid()}</td>
                <td>${OrderDB[i].getCustID()}</td>
                <td>${OrderDB[i].getDate()}</td>
                <td>${OrderDB[i].getDiscount()}</td>
                <td>${OrderDB[i].getTot()}</td>
                </tr>`;
                $("#OrderInfoTable").append(row);
            }
        }
    }
});