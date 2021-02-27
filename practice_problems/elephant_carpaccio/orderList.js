
let discountRate = {
    "1000": 0.03,
    "5000": 0.05,
    "7000": 0.07,
    "10000": 0.10,
    "50000": 0.15,
}

let stateTaxRate = {
    "UT": 0.0685,
    "NV": 0.08,
    "TX": 0.0625,
    "AL": 0.04,
    "CA": 0.0825
}

class Order {
    constructor(itemLabel, price, quantity, state) {
        this.itemLabel = itemLabel,
        this.price = price,
        this.quantity = quantity,
        this.state = state
    }

    getTotalWithoutTaxes() {
        return this.price * this.quantity;
    }

    getDiscountRate() {
        let currentQuantity = this.quantity;
        let rate = 0;
        let quantityIndicators = Object.keys(discountRate);
        for (let i = 0; i < quantityIndicators.length; i++) {
            if (currentQuantity > Number(quantityIndicators[i])) {
                rate = discountRate[quantityIndicators[i]];
            }
        }
        return rate;
    }

    getTaxRate() {
        return stateTaxRate[this.state];
    }

    getTotalPrice() {
        let taxRate = this.getTaxRate();
        let orderDiscountRate = this.getDiscountRate();
        let pretaxed = this.getTotalWithoutTaxes();

        return pretaxed - (pretaxed * orderDiscountRate) + (pretaxed * taxRate);
    }
}

module.exports = {
    Order
}
