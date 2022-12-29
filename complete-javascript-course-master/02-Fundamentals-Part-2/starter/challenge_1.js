const calcAverage = (test1, test2, test3) => (test1 + test2 + test3)/3;

// test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Delphins win (${avgDolphins} vs ${avgKoalas}).`); 
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
    } else console.log(`nobody won`);
}

checkWinner(avgDolphins, avgKoalas);

// test2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
