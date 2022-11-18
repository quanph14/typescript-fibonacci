let listFibo: number[] = [1, 2];
function createListFibo(listFibo: number[]){
    let leng: number = listFibo.length;
    let max: number = 10;
    if (leng < max){
        listFibo.push(listFibo[leng - 1]+ listFibo[leng - 2]);
        createListFibo(listFibo);
    }
}
createListFibo(listFibo);
let sum = 0;
for (let i = 0; i < listFibo.length; i++) {
    console.log(listFibo[i])
    sum += listFibo[i];
}
console.log(sum);