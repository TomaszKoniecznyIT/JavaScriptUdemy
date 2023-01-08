const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
};

const jonas2 = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
};

console.log(mark.calcBMI()>jonas2.calcBMI() ? 
`${mark.fullName} has a BMI (${mark.bmi}) which is higher than ${jonas2.fullName} whose BMI (${jonas2.bmi})` :
`${jonas2.fullName} has a BMI (${jonas2.bmi}) which is higher than ${mark.fullName} whose BMI (${mark.bmi})`)