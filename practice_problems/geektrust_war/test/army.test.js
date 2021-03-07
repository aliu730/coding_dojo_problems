let { Army } = require('../army.js');

test('Should return horse from army', () => {
    let testArmy = new Army(100, 50, 20, 10, "Lengaburu");
    expect(testArmy.getHorses()).toBe(100);
});