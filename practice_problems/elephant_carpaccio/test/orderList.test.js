const { Order } = require('../orderList.js');
const { Product } = require('../product.js');

test('Should return total cost without tax or discount', () => {
    const testOrder = new Order([new Product('soap', 5, 10)], "CA");
    expect(testOrder.getTotalWithoutTaxes()).toBe(50);
});

test('Should return discount rate', () => {
    const testOrder = new Order([new Product('soap', 5, 10000)], "CA");
    expect(testOrder.getDiscountRate()).toBe(0.15);
});

test('Should state tax rate', () => {
    const testOrder = new Order([new Product('soap', 5, 10)], "CA");
    expect(testOrder.getTaxRate()).toBe(0.0825);
});

test('Should return total price', () => {
    const testOrder = new Order([new Product('soap', 5, 10)], "CA");
    expect(testOrder.getTotalPrice()).toBe(54.125);
});

test('Should accept multiple products', () => {
    const testOrder = new Order([new Product('soap', 5, 10), new Product('apple', 5, 10)], "CA");
    expect(testOrder.getTotalWithoutTaxes()).toBe(100);
})