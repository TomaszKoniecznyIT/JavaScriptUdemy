const jonas1 = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicen: false,

    calcAge1: function(){
        this.age = 2037 - this.birthYear; // creates age
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge1()}-year old ${this.job}, has ${this.hasDriverLicen ? "a" : "no"} driver's license.`
    }
};

console.log(jonas1.calcAge1());  // must be done to create an age
console.log(jonas1.age);
console.log(jonas1['age']);

console.log(jonas1.getSummary())