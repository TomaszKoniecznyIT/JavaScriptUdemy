const jonas1 = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicen: true,

    calcAge1: function(){
        this.age = 2037 - this.birthYear; // creates age
        return this.age;
    }
};

console.log(jonas1.calcAge1());  // must be done to create an age
console.log(jonas1.age);
console.log(jonas1['age']);