"use strict"
class Product {
    constructor (id, wid, len, brittle = 0) {
        this.id = id
        this.wid = wid
        this.len = len
        this.brittle = brittle
    }
    toString() {
        return this.id+" ("+this.wid+"x"+this.len+") "+this.brittle
    }
}

class Customer {
    constructor (id, name) {
        this.id = id
        this.name = name
        //this.order = []
    }
    addOrder (x) {
        if (this.order)
             this.order.push(x)
        else this.order = [x]
    }
    toString() {
        return this.id+" -- "+this.name
    }
}

class Order {
    constructor (cust, prod, amount = 5, date = new Date()) {
        this.cust = cust
        this.prod = prod
        this.amount = amount
        this.date = date
        cust.addOrder(this)
    }
    toString(){
        return this.cust.id+"  "+this.amount+"  "+this.prod.id
    }
}

