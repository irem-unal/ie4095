"use strict"
class Product {
    constructor (id, wid, len, brittle = 0) {
        this.id = id
        this.wid = wid
        this.len = len
        this.brittle = brittle
    }
    toString() {
        return this.id+" ("+this.wid+"x"+this.len+")"
    }
}

class Customer {
    constructor (id, name) {
        this.id = id
        this.name = name
        this.order = []
    }
    addOrder (x) {
        this.order.push(x)
    }
    toString() {
        return this.id + " " + this.name
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
        return this.cust + " " + this.prod + " " 
    }
}
var products 
var customers = []
var orders = []
function samples (){
    let p1 = new Product(4,20,35,2)
    let p2 = new Product(5,40,35,1)
    let p3 = new Product(6,25,40)
    products = [p1,p2,p3]
    customers.push(new Customer("mü", "Marmara Üniversitesi"))
    customers.push(new Customer("iü", "İstanbul Üniversitesi"))
    customers.push(new Customer("hü", "Hacettepe Üniversitesi"))
}
