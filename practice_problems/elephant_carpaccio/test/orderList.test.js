const { Order } = require('../orderList.js');
const { Product } = require('../product.js');
const { OrderEntry } = require('../orderEntry.js');

test('Should return total cost without tax or discount', () => {
    const testOrder = new Order("CA");
    const soap = new Product("soap", 5);
    const orderEntry = new OrderEntry(soap, 10);
    testOrder.addEntry(orderEntry);
    expect(testOrder.getTotalWithoutTaxes()).toBe(50);
});

test('Should return discount rate', () => {
    const testOrder = new Order("CA");
    const soap = new Product("soap", 5);
    const orderEntry = new OrderEntry(soap, 10000);
    testOrder.addEntry(orderEntry);
    expect(testOrder.getDiscountRate()).toBe(0.15);
});

test('Should state tax rate', () => {
    const testOrder = new Order("CA");
    const soap = new Product("soap", 5);
    const orderEntry = new OrderEntry(soap, 10000);
    testOrder.addEntry(orderEntry);
    expect(testOrder.getTaxRate()).toBe(0.0825);
});

test('Should return total price', () => {
    const testOrder = new Order("CA");
    const soap = new Product("soap", 5);
    const orderEntry = new OrderEntry(soap, 10);
    testOrder.addEntry(orderEntry);
    expect(testOrder.getTotalPrice()).toBe(54.125);
});

test('Should accept multiple products', () => {
    const testOrder = new Order("CA");
    const soap = new Product("soap", 5);
    const apple = new Product("apple", 5);
    const orderEntry = new OrderEntry(soap, 10);
    const orderEntry2 = new OrderEntry(apple, 10);
    testOrder.addEntry(orderEntry);   
    testOrder.addEntry(orderEntry2); 
    expect(testOrder.getTotalWithoutTaxes()).toBe(100);
})