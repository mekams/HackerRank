let ar=[1,2,3,4,10,11]

function simpleArraySum(ar) {
    let sum =0;
    for(let i in ar){
        sum+=ar[i]
    }
    return sum;
}
 console.log(simpleArraySum(ar))