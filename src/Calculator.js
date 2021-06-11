class Blunt {

  Calculator(sum){
    // "1 + 1"

    let sumArray= sum.split(" ")
    let total
    if(sumArray[1]== "+"){
      return this.addition(sum,sumArray)
    }

    if(sumArray[1]== "-"){
      return this.minus(sum,sumArray)
     }

     if(sumArray[1]== "*"){
       return this.multiple(sum,sumArray)
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
  minus(sum,sumArray){
    let total = parseInt(sumArray[0]) - parseInt(sumArray[2])
      return [sum ,total]
   }

   multiple(sum,sumArray){
    let total = parseInt(sumArray[0]) * parseInt(sumArray[2])
      return [sum ,total]
   }




}