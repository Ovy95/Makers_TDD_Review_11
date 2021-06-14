class Blunt {

  calculator(sum){
    let sumArray= sum.split(" ")

    for (let index = 0; index < sumArray.length; index++) {
       let total = 0
       if(sumArray[1]== "-"){
        total += this.subtraction(sumArray)
        sumArray.splice(0, 3, total)
        index = 0
       }
  
       if(sumArray[1]== "*"){
         return this.multiple(sum,sumArray)
       }
  
       if(sumArray[1]== "/"){
        return this.division(sum,sumArray)
       }

      if(sumArray[index]== "+"){
       total += this.addition(sumArray)
       sumArray.splice(0, 3, total)
       index = 0
      }
      
      if (index == sumArray.length -1){
      return [sum , sumArray[0]]
      }
    }
  
  }


  addition(sumArray){
   let total = parseInt(sumArray[0]) + parseInt(sumArray[2])
    return total
  }
  subtraction(sumArray){
    let total = parseInt(sumArray[0]) - parseInt(sumArray[2])
    return total
   }

   multiple(sum,sumArray){
    let total = parseInt(sumArray[0]) * parseInt(sumArray[2])
    return [sum,total]
   }

   division(sum,sumArray){
    let total = parseInt(sumArray[0]) / parseInt(sumArray[2])
    return [sum,total]
   }




}