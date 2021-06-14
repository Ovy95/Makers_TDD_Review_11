describe("Blunt", function() {
  var blunt;

  beforeEach (function () {
    blunt = new Blunt();
  });

  describe('1st Phase of Tests',function(){

  describe('addition tests ', function() {
      it ("1 + 1 returns ['1 + 1', 2]",function() {
        expect(blunt.calculator("1 + 1")).toEqual(["1 + 1", 2]);
      })

      it ("2 + 2 returns ['2 + 2', 4]",function() {
        expect(blunt.calculator("2 + 2")).toEqual(["2 + 2", 4]);
      })
      
  })
  describe('subtraction tests ', function() {
    it ("5 - 4 returns ['5 - 4', 1]",function() {
      expect(blunt.calculator("5 - 4")).toEqual(["5 - 4", 1]);
    })
    
  }) 

  describe('multiple tests ', function() {
    it ("3 * 3 returns ['3 * 3', 9]",function() {
      expect(blunt.calculator("3 * 3")).toEqual(["3 * 3", 9]);
    })
    
  }) 
  describe('division tests ', function() {
    it ("16 / 4 returns ['16 / 4', 4]",function() {
      expect(blunt.calculator("16 / 4")).toEqual(["16 / 4", 4]);
    })
  }) 
  })


  describe('2nd Phase of Tests',function(){

    describe('addition tests ', function() {
        it ("1 + 2 + 3 returns ['1 + 2 + 3', 6]",function() {
          expect(blunt.calculator("1 + 2 + 3")).toEqual(["1 + 2 + 3", 6]);
        })
        it ("10 + 30 + 2 returns ['10 + 30 + 2', 42]",function() {
          expect(blunt.calculator("10 + 30 + 2")).toEqual(["10 + 30 + 2", 42]);
        })
  
        
    })
    describe('subtraction tests ', function() {
      it ("20 - 10 - 5    returns   ['20 - 10 - 5', 5]",function() {
        expect(blunt.calculator("20 - 10 - 5")).toEqual(["20 - 10 - 5", 5]);
      })


    }) 
  
    describe('multiple tests ', function() {
      it ("20 - 10 - 5    returns   ['20 - 10 - 5', 5]",function() {
        expect(blunt.calculator("20 - 10 - 5")).toEqual(["20 - 10 - 5", 5]);
      })
    }) 
    describe('division tests ', function() {
    
    }) 
  })
  

  

});

