var array = [ 'mat','zat','rat','zat','rat','zat'];

let count = {}

for(let value of array){
    count[value] = count[value] ? count[value] + 1 : 1;
}

keysSorted = Object.keys(count).sort(function(a,b){return count[b]-count[a]})// decending sort
console.log(keysSorted[0]);

