
function cart(cartICode,cartIName,cartIPrice,orderQty,cartTotal,discount,fulltoal) {
    var __cartICode=cartICode;
    var __cartIName=cartIName;
    var __cartIPrice=cartIPrice;
    var __orderQty=orderQty;
    var __total=cartTotal;
    var __discount=discount;
    var __fulltotal=fulltoal;
    
    
    this.getcartICode=function () {
        return __cartICode;
    }
    this.setcartICode=function (iCode) {
        __cartICode=iCode;
    }
    this.getcartIName=function () {
        return __cartIName;
    }
    this.setcartIName=function (iName) {
        __cartIName=iName;
    }
    this.getcartIPrice=function () {
        return __cartIPrice;
    }
    this.setcartIPrice=function (iPrice) {
        __cartIPrice=iPrice;
    }
    this.getcartOQty=function () {
        return __orderQty;
    }
    this.setcartOQty=function (qty) {
        __orderQty=qty;
    }
    this.getTotal=function () {
        return __total;
    }
    this.setTotal=function (total) {
        __total=total;
    }

    this.getdiscount = function(){
        return __discount;
    }
 
    this.setdiscount=function (discount) {
        __discount=discount;
    }

    this.getfullTotal = function(){
        return  __fulltotal;
    }
 
    this.setfullTotal =function (fulltoal) {
        __fulltotal=fulltoal;
    }
}