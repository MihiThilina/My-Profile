
function OrderDetails(orderID,orderDate,cusId,cusName,itemcode,orderqty,total){
    var __orderID = orderID;
    var __orderdate = orderDate;
    var __cusId = cusId;
    var __cusNames= cusName;
    var __item_code = itemcode;
    var __orderQty = orderqty;
    var _fulltotal = total;

    this.getOrderID = function(){
        return __orderID;
    }

    this.setOrderID = function(orderID){
        __orderID = orderID;
    }

    this.getOrderDate = function(){
        return __orderdate;
    }


}