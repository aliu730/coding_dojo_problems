
class HorseArmyFinder {
    constructor(larmy, farmy) {
        this.larmy = larmy;
        this.farmy = farmy;
    }   
    
    findBestHorseAmount() {
        // We need Leng Horses, Falcon Horses, and Falcon Elephants
        let optimalHorses = 0;
        let spareHorses = 0;
        // Formula is 2 Lhorses  = 1 fhorse
        let lengaburuHorses = this.larmy.getHorses();
        let falcorniaHorses = this.farmy.getHorses();
        let falcorniaElephants = this.farmy.getElephants();
    
        let baseHorseCondition = this.findBaseHorseCondition(lengaburuHorses, falcorniaHorses / 2); // amount of minimum matching horses
        // If we can spare some horses for elephant battle
        if (falcorniaElephants > 0 && this.larmy.getHorses() > 0) {
            spareHorses = Math.min(this.larmy.getHorses(), falcorniaElephants);
            this.larmy.removeHorses(spareHorses);
        }
        // Either we use all remaining horses or a subset
    
        optimalHorses = spareHorses + baseHorseCondition;
        if (spareHorses == baseHorseCondition) {
            return spareHorses;
        }
        return optimalHorses;
    }
    
    findBaseHorseCondition(lengaburuHorses, baseHorseCondition) {
        // *** NEEDS HANDLE FOR NEGATIVE HORSES *** 
        // Finds the minimum amount to match horses in battle.
        if (lengaburuHorses >= baseHorseCondition) {
            this.larmy.removeHorses(baseHorseCondition);
            return baseHorseCondition;
        } else {
            this.larmy.removeHorses(lengaburuHorses);
            return lengaburuHorses;
        }
    }
}

module.exports = {
    HorseArmyFinder
}