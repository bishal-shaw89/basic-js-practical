function array_sum(array){
    let sum = 0;

    for (const element of array) {
        sum += element;
    }

    return sum;
}
let arr = [1,2,3,4,5,6,7,8];
console.log(array_sum(arr));
