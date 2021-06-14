describe("Blunt", function() {
  var blunt;

  beforeEach (function () {
    blunt = new Blunt();
  });

  describe('Adding tests ', function() {
      it ("1 + 1 returns ['1 + 1', 2]",function() {
        expect(blunt.calculator("1 + 1")).toEqual(["1 + 1", 2]);
      })

      it ("2 + 2 returns ['2 + 2', 4]",function() {
        expect(blunt.calculator("2 + 2")).toEqual(["2 + 2", 4]);
      })
      
  })
  describe('Minus tests ', function() {
    it ("5 - 4 returns ['5 - 4', 1]",function() {
      expect(blunt.calculator("5 - 4")).toEqual(["5 - 4", 1]);
    })
    
  }) 

  describe('Times tests ', function() {
    it ("3 * 3 returns ['3 * 3', 9]",function() {
      expect(blunt.calculator("3 * 3")).toEqual(["3 * 3", 9]);
    })
    
  }) 
  describe('Devision tests ', function() {
    it ("16 / 4 returns ['16 / 4', 4]",function() {
      expect(blunt.calculator("16 / 4")).toEqual(["16 / 4", 4]);
    })
    
  }) 


  

  

});

