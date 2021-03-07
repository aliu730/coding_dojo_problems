const { TestScheduler } = require('jest');
let { OptimalArmyGenerator } = require('../optimal_army_generator.js');

test('Should find optimal horses to match army horses', () => {
    let optimalArmyGenerator = new OptimalArmyGenerator([100, 0, 0, 0, "L"], [200, 0, 0 ,0 , "R"]);
    expect(optimalArmyGenerator.findBestHorseAmount()).toBe(100);
});

test('Should find optimal horses to match army horses with elephants', () => {
    let optimalArmyGenerator = new OptimalArmyGenerator([1000, 50, 0, 0, "L"], [100, 200, 0 ,0 , "R"]);
    expect(optimalArmyGenerator.findBestHorseAmount()).toBe(250);
});

test('Should use optimal horses to match army horses with elephants FEWER HORSES', () => {
    let optimalArmyGenerator = new OptimalArmyGenerator([240, 50, 0, 0, "L"], [100, 200, 0 ,0 , "R"]);
    expect(optimalArmyGenerator.findBestHorseAmount()).toBe(240);
});

test('Should use optimal horses to match army horses with elephants negative HORSES', () => {
    let optimalArmyGenerator = new OptimalArmyGenerator([49, 50, 0, 0, "L"], [100, 200, 0 ,0 , "R"]);
    expect(optimalArmyGenerator.findBestHorseAmount()).toBe(49);
    //[100, 200, 0 ,0 , "R"]
});