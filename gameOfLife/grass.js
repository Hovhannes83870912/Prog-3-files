class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var chooseObject = random(emptyCells);
        console.log(emptyCells, chooseObject);
        if (chooseObject && this.multiply >= 1) {
            var newX = chooseObject[0];
            var newY = chooseObject[1];
            matrix[newY][newX] = 1;
            var newGrass = new Grass(newX, newY);
            grasses.push(newGrass);
            this.multiply = 0;
        }
    }
}