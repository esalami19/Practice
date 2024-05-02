function sumTwoSmallestNumbers(numbers) {  
    //Code here
  
  //variable for minimum number one
      let minOne = Math.min(...numbers)
   //extract min number one once identified to allow for second min number to be found
      for (let i = 0; i < numbers.length; i++){
          if(minOne === numbers[i]){
           numbers.splice(i,1)
          }
      }
  //variable for minimum number two
     let minTwo = Math.min(...numbers)
     let newSum =  minOne + minTwo
      return newSum
  }