const bill1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

const calcTip1 = bill => (bill < 50 || bill > 300) ? bill * 0.2 : bill * 0.15;

for (let i = 0; i < bill1.length; i++){
    tips1.push(calcTip1(bill1[i]));
    totals1.push(tips1[i]+bill1[i]);
}

console.log(bill1)
console.log(tips1)
console.log(totals1)

function calcAverage1 (arr) {
    let sum = 0
    for (let j = 0; j < arr.length; j++){
        sum += arr[j]
    }
    return sum / arr.length
}

console.log(`average bill ${calcAverage1(bill1)}`)
console.log(`average tip ${calcAverage1(tips1)}`)
console.log(`average total ${calcAverage1(totals1)}`)
