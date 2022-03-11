function Orders(oid, cid, date, discount, tot) {
    var __oid = oid;
    var __cid = cid;
    var __date = date;
    var __discount = discount;
    var __tot = tot;

    this.getOid = function () {
        return __oid;
    }
    this.setOid = function (oid) {
        this.__oid = oid;
    }

    this.getCustID = function () {
        return __cid;
    }
    this.setCustId = function (cid) {
        this.__cid = cid;
    }

    this.getDate = function () {
        return __date;
    }
    this.setDate = function (date) {
        this.__date = date;
    }

    this.getDiscount = function () {
        return __discount;
    }
    this.setDiscount = function (discount) {
        this.__discount = discount;
    }

    this.getTot = function () {
        return __tot;
    }
    this.setTot = function (tot) {
        this.__tot = tot;
    }
}