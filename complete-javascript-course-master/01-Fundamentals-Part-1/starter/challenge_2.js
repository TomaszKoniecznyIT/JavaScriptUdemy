const kg_Mark = 95;
const kg_John = 85;
const height_Mark = 1.88;
const height_John = 1.76;
const John_BMI = kg_John / height_John ** 2;
const Mark_BMI = kg_Mark / height_Mark ** 2;

if (John_BMI === Mark_BMI){
    console.log(`John and Mark's BMI are the same (${John_BMI})`)
} else {
    if (markHigherBMI){
        console.log(`Mark's BMI (${Mark_BMI}) is higher than John's (${John_BMI})!`)
    } 
    else {
        console.log(`John's BMI (${John_BMI}) is higher than Mark's (${Mark_BMI})!`)
    }
};