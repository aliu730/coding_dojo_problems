let { Horse } = require('../horse.js');

test('Should be able to remove horses', () => {
    let testHorse = new Horse(100);
    testHorse.removeHorses(50);
    expect(testHorse.getQuantity()).toBe(50);
})