

function Item(I_code,i_name,price,orderQty){

   var __item_code = I_code;
   var __item_Name = i_name;
   var __item_Price = price;
   var __item_qty = orderQty;

   this.getItemCode=function(){
       return __item_code ;
   }

   this.setItemCode = function(I_code){
       __item_code = I_code;
   }

   this.getItemName = function(){
       return __item_Name;
   }

   this.setItemName = function(i_name){
         __item_Name = i_name;
   }

   this.getItemPrice = function(){
        return __item_Price;
   }

   this.setItemPrice = function(price){
      __item_Price = price;
   }

   this.getItemQty = function(){
       return __item_qty;
   }

   this.setItemQty = function(orderQty){
       __item_qty =orderQty;
   }

}





