

function Customer(cusId,address,cusName,cusSalary,phoneNumber){
    var __cusId = cusId;
    var __cusAddress = address;
    var __cusName = cusName;
    var __cusSalary= cusSalary;
    var __cusPhoneNumber = phoneNumber;


    this.getCusID = function(){
        return __cusId;
    }

    this.setCusId = function(cusId){
        __cusId = cusId;
    }

    this.getCusAddress = function(){
        return __cusAddress;
    }

    this.setCusAddress = function(address){
        __cusAddress=address;
    }

     this.getCusName = function(){
       return __cusName;
     }

     this.setCusName = function(cusName){
          __cusName = cusName;
     }

     this.getCusSalary = function(){
         return __cusSalary;
     }

     this.setCusSalary = function(cusSalary){
         __cusSalary = cusSalary;
     }

     this.getPhoneNumber = function(){
         return __cusPhoneNumber;
     }

     this.setphoneNumber = function(phoneNumber){
        __cusPhoneNumber = phoneNumber;
     }

}