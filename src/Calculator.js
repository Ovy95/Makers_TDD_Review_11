class Blunt {

  Calculator(sum){
    // "1 + 1"

    let sumArray= sum.split(" ")
    let total
    if(sumArray[1]== "+"){
      return this.addition(sum,sumArray)
    }

    if(sumArray[1]== "-"){
      total = parseInt(sumArray[0]) - parseInt(sumArray[2])
      return [sum ,total]
     }

     if(sumArray[1]== "*"){
      total = parseInt(sumArray[0]) * parseInt(sumArray[2])
      return [sum ,total]
     }

     if(sumArray[1]== "/"){
      total = parseInt(sumArray[0]) / parseInt(sumArray[2])
      return [sum ,total]
     }
    

  }


  addition(sum,sumArray){
   let total = parseInt(sumArray[0]) + parseInt(sumArray[2])
     return [sum ,total]
  }



}