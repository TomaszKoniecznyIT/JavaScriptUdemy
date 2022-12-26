// test 1
// const Dolphins_score_1 = 96;
// const Dolphins_score_2 = 108;
// const Dolphins_score_3 = 89;

// const Koalas_score_1 = 88;
// const Koalas_score_2 = 91;
// const Koalas_score_3 = 110;

// bonus 1
const Dolphins_score_1 = 101;
const Dolphins_score_2 = 100;
const Dolphins_score_3 = 100;

const Koalas_score_1 = 102;
const Koalas_score_2 = 100;
const Koalas_score_3 = 100;

// bonus 2
// const Dolphins_score_1 = 97;
// const Dolphins_score_2 = 112;
// const Dolphins_score_3 = 101;

// const Koalas_score_1 = 109;
// const Koalas_score_2 = 95;
// const Koalas_score_3 = 106;

const average_score_Dolphins = (Dolphins_score_1 + Dolphins_score_2 + Dolphins_score_3)/3;
const average_score_Koalas = (Koalas_score_1 + Koalas_score_2 + Koalas_score_3)/3;

if (average_score_Dolphins === average_score_Koalas && average_score_Dolphins >= 100){
    console.log(`There is a tie. Both teams scored ${average_score_Dolphins} points. Both teams won the trophy`)
} else if(average_score_Dolphins > average_score_Koalas && average_score_Dolphins >= 100){
    console.log(`Dolphins wins averaging ${average_score_Dolphins} points.`)
} else if(average_score_Koalas > average_score_Dolphins && average_score_Koalas >= 100){
    console.log(`Koalas wins averaging ${average_score_Koalas} points.`)   
} else {
    console.log("Nobody won the trophy") 
}


