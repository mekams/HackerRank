let a=[27,28,30]
let b=[99,16,8]

function compareTriplets(a,b){
    let i=0, alice=0, bob=0;
    while(i <a.length && i< b.length ){
        if(a[i]>b[i]){
             alice+=1;
             i++;
        }else if(a[i]<b[i]){
            bob+=1;
            i++;
        }else{
            i++;
        }
    }
    return [alice,bob]
}
console.log(triplets(a,b))

