function getmultiples(num){
    let multiplesArray=[]
    for(i=num;i<=100;i++){
        if(i%num == 0){
            multiplesArray.push(i);
        }
    }
    return multiplesArray;
}
console.log(getmultiples(20));