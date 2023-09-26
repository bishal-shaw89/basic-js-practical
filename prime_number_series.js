function primeNumber(n){
    let primeNumbs = [];
    let i = 0;
    while(primeNumbs.length < n){
        let flag = 0;
        for(let j=2; j<i; j++){
            if(i % j == 0){
                flag = 1;
                break;
            }
        }
        
        if(i>1 && flag == 0){
            primeNumbs.push(i);
        }
        i++;
    }
    
    return primeNumbs;
}

console.log(primeNumber(5));
