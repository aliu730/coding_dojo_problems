let { Horse } = require('./horse.js');
let { Elephant } = require('./elephant.js');
let { ArmoredTank } = require('./armored_tank.js');
let { SlingGun } = require('./sling_gun.js');

class Army {
    constructor(horseQuantity, elephantQuantity, armoredTankQuantity, slingGunQuantity, type) {
        this.horse = new Horse(horseQuantity);
        this.elephant = new Elephant(elephantQuantity);
        this.armoredTank = new ArmoredTank(armoredTankQuantity);
        this.slingGun = new SlingGun(slingGunQuantity);
        this.type = type;
    }

    getHorses() {
        return this.horse.getQuantity();
    }
    
    removeHorses(horseCount) {
        this.horse.removeHorses(horseCount);
    }

    getElephants() {
        return this.elephant.getQuantity();
    }

    getArmoredTanks() {
        return this.armoredTank.getQuantity();
    }

    getSlingGuns() {
        return this.slingGun.getQuantity();
    }
}

module.exports = {
    Army
}