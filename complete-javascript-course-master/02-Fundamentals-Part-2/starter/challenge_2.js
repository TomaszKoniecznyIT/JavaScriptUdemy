function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15
    } else {
        return bill * 0.2
    }
};

const billArray = [125,555,44];
const tipArray = [calcTip(billArray[0]),calcTip(billArray[1]),calcTip(billArray[2])];
console.log(tipArray);
const totalArray = [billArray[0]+tipArray[0],billArray[1]+tipArray[1],billArray[2]+tipArray[2]];
console.log(totalArray);