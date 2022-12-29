const calcAverage = (test1, test2, test3) => (test1 + test2 + test3)/3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Delphins win (${avgDolphins} vs ${avgKoalas}).`) 
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`)
    } else console.log(`nobody won`)
}

checkWinner(avgDolphins, avgKoalas)
