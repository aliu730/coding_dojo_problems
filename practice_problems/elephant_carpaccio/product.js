class Product {
    constructor(label, price, quantity) {
        this.label = label,
        this.price = price,
        this.quantity = quantity
    }

    getTotalWithoutTaxes() {
        return this.price * this.quantity;
    } 
}

module.exports = {
    Product
}