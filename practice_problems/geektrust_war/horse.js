class Horse {
    constructor(quantity) {
        this.symbol = "H";
        this.quantity = quantity;
    }

    getQuantity() {
        return this.quantity;
    }

    removeHorses(horses) {
        this.quantity = this.quantity - horses;
    }
}

module.exports = {
    Horse
}
