export default class BasePokemon {
    constructor(name, type, weight, experience, speed) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.experience = experience;
        this.speed = speed;
    }

    introduce() {
        console.log(`${this.name} is of type ${this.type}. Its experience is ${this.experience}, weight is ${this.weight} and speed is ${this.speed} `);
    }

    feed(berries) {
        this.weight += berries * 5;
        if (this.weight > 100) {
            this.speed -= berries;
        } else {
            this.speed -= berries * 0.5;
        }
    }
}
