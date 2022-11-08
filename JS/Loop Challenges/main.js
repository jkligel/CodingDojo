// ---- Functions ----
function printArray(arr){
    for(let i = 0; i < arr.length; ++i)
        console.log(arr[i]);
}

function getOdds(start, end){
    let odds = [];
    for(let i = start; i <= end; ++i){
        if(i % 2 > 0)
            odds.push(i);
    }
    return odds;
}

function multiplesByThree(end, start){
    let arr = [];
    for(let i = end; i >= start; --i)
        if(i % 3 == 0)
            arr.push(i);
    
    return arr;            
}

function printSequence(num, len){
    for(let i = 0; i < len; ++i){
        console.log(num);
        num-=1.5;
    }
}

function printSigma(num){
    let sum = 0;
    while(num != 0){
        sum += num;
        --num; 
    }
    console.log(sum);
}

function printFactorial(start, end){
    let product = 1;
    for(let i = start; i <= 12; ++i){
        product *= i;
    }
    console.log(product);
}

// ---- Main code ----

let arr = getOdds(1,20);

// printArray(arr);

arr = multiplesByThree(100, 0);

// printArray(arr);

// printSequence(4, 6);

// printSigma(100);

printFactorial(1, 12);