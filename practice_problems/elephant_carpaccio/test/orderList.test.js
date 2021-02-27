const { Order } = require('../orderList.js');

test('Should return total cost without tax or discount', () => {
    const testOrder = new Order("soap", 5, 10, "CA");
    expect(testOrder.getTotalWithoutTaxes()).toBe(50);
});

test('Should return discount rate', () => {
    const testOrder = new Order("soap", 5, 7777, "CA");
    expect(testOrder.getDiscountRate()).toBe(0.07);
});

test('Should state tax rate', () => {
    const testOrder = new Order("soap", 5, 7777, "CA");
    expect(testOrder.getTaxRate()).toBe(0.0825);
});

test('Should return total price', () => {
    const testOrder = new Order("soap", 5, 10, "CA");
    expect(testOrder.getTotalPrice()).toBe(54.125);
});

