// Create a constructor function called Hero That will accept the
// arguments name and occupation.
// 1. Use Hero.prototype to add a method whoAreYou that will return:
// My name is [the hero's name] and I am a [the hero's occupation].
// 2. Use the Hero constructor to create an object hero1 with the name
// Michaelangello and occupation Ninja.
// 3. Use the whoAreYou method to log to the console hero1's name and
// occupation.

function Hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;
}

Hero.prototype.whoAreYou = function() {
    return `My name is ${this.name} and I am a ${this.occupation}.`;
}

const hero1 = new Hero("Michaelangello", "Ninja");

console.log(hero1.whoAreYou());

