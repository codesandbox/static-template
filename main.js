class Cat {
  construcor(name, tiredness, hunger, loneliness, happiness) {
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
  feed(amount) {
    this.tiredness += amount;
    this.hunger -= amount;
    this.happiness += amount;
  }
  sleep(amount) {
    this.tiredness += amount;
    this.happiness += amount;
  }
  pet(amount) {
    this.tiredness += amount;
    this.happiness += amount;
    this.loneliness -= amount;
  }

  run(amount) {
    this.tiredness += amount;
    this.happiness += amount;
    this.hunger += amount;
  }

  mood() {
    if (this.tiredness >= 20) {
      console.log(`${this.name} is very tired`);
    }
    if (this.hunger >= 50) {
      console.log(`${this.name} is hungry`);
    }
    if (this.hapiness >= 20) {
      console.log(`${this.name} is very happy`);
    }
    if (this.loneliness >= 20) {
      console.log(`${this.name} is lonely, he wants to be cuddled`);
    } else if (this.loneliness > 20) {
      console.log(`${this.name} doesn't want to be petted`);
    }
  }
}

var catSally = new Cat("sally", 10, 25, 10, 10);
console.log(catSally);
