let ar= [1000000001,1000000002,1000000003,1000000004,1000000005]


function aVeryBigSum(ar){
    let sum=0, i=0;
    while(i<ar.length){
        sum+=ar[i]
        i++
    }
    return sum;
}

console.log(aVeryBigSum(ar))