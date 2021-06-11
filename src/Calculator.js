class Blunt {

  Calculator(sum){
    // "1 + 1"
    let total  
    let sumArray= sum.split(" ")
    if(sumArray[1]== "+"){
     total = parseInt(sumArray[0]) + parseInt(sumArray[2])
     return [sum ,total]
    }

    if(sumArray[1]== "-"){
      total = parseInt(sumArray[0]) - parseInt(sumArray[2])
      return [sum ,total]
     }
    

  }

  

}