let { Army } = require('./army.js');
let { HorseArmyFinder } = require('./horse_army_finder.js')

class OptimalArmyGenerator {
    constructor(larmy, farmy) {
        this.larmy = new Army(larmy[0], larmy[1], larmy[2], larmy[3], "L");
        this.farmy = new Army(farmy[0], farmy[1], farmy[2], farmy[3], "F");
    }

    findBestHorseAmount() {
        // let horses = new HorseArmyFinder(this.larmy, this.farmy);
        return horses.findBestHorseAmount();
    }
}

module.exports = {
    OptimalArmyGenerator
}
