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
      it ("2 * 2 * 2    returns   ['2 * 2 * 2', 8]",function() {
        expect(blunt.calculator("2 * 2 * 2")).toEqual(['2 * 2 * 2', 8]);
      })
    }) 
    describe('division tests ', function() {
      it ("27 / 3 / 3   returns   27 / 3 / 3 ,3",function() {
        expect(blunt.calculator("27 / 3 / 3")).toEqual(['27 / 3 / 3', 3]);
      })
    }) 
  })

  describe('3rd Phase of Tests',function(){

    describe('Mixed addition first Operators tests', function() {
        it ("1 + 2 * 3 returns ['1 + 2 * 3', 9]",function() {
          expect(blunt.calculator("1 + 2 * 3")).toEqual(["1 + 2 * 3", 9]);
        })

        it ("100 + 50 - 25 returns ['100 + 50 - 25', 25]",function() {
          expect(blunt.calculator("100 + 50 - 25")).toEqual(["100 + 50 - 25", 125]);
        })
        it ("150 + 50 / 4 returns ['150 + 50 / 4', 50]",function() {
          expect(blunt.calculator("150 + 50 / 4")).toEqual(["150 + 50 / 4", 50]);
        })
        
  
        
    })
    describe('Mixed subtraction tests', function() {
      it ("20 - 10 + 70    returns   ['20 - 10 + 70 ', 80]",function() {
        expect(blunt.calculator("20 - 10 + 70")).toEqual(["20 - 10 + 70", 80]);
      })

      it ("100 - 50 + 25 returns ['100 - 50 + 25', 75]",function() {
        expect(blunt.calculator("100 - 50 + 25")).toEqual(["100 - 50 + 25", 75]);
      })

      it ("150 - 50 / 4 returns ['150 - 50 / 4', 25]",function() {
        expect(blunt.calculator("150 - 50 / 20")).toEqual(["150 - 50 / 20", 5]);
      })

    }) 
  
    describe('multiple tests ', function() {
      it ("2 * 2 + 20    returns   ['2 * 2 + 20', 22]",function() {
        expect(blunt.calculator("2 * 2 + 20")).toEqual(['2 * 2 + 20', 24]);
      })

      it ("2 * 300 - 100    returns   ['2 * 300 - 100', 500]",function() {
        expect(blunt.calculator("2 * 300 - 100")).toEqual(['2 * 300 - 100', 500]);
      })

      it ("2 * 100 / 50    returns   ['2 * 100 / 50', 4]",function() {
        expect(blunt.calculator("2 * 100 / 50")).toEqual(['2 * 100 / 50', 4]);
      })
    }) 


    describe('division tests ', function() {
      it ("27 / 3 + 3   returns   27 / 3 + 3 ,12",function() {
        expect(blunt.calculator("27 / 3 + 3")).toEqual(['27 / 3 + 3', 12]);
      })
      it ("70 / 10 * 3   returns   27 / 10 * 3 3 ,3",function() {
        expect(blunt.calculator("70 / 10 * 3")).toEqual(['70 / 10 * 3', 21]);
      })
      it ("27 / 3 - 3   returns   27 / 3 / 3 ,6",function() {
        expect(blunt.calculator("27 / 3 - 3")).toEqual(['27 / 3 - 3', 6]);
      })
    }) 
  })
  

  

});

