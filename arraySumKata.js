function positiveSum(arr){
    let newNum = []
    let newSum = 0
    arr.forEach((element,index)=>{
        if(element > 0){
            newNum.push(element)
        }  
    })
    newNum.forEach((element,index)=>{
            newSum += element
        })
    return newSum
}
