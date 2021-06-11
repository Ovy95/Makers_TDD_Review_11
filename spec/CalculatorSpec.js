describe("Blunt", function() {
  var blunt;

  beforeEach (function () {
    blunt = new Blunt();
  });

  describe('Adding tests ', function() {
      it ("1+1 returns ['1 + 1', 2]",function() {
        expect(blunt.Calculator("1 + 1")).toEqual(["1 + 1", 2]);
      })

      it ("2+2 returns ['2 + 2', 4]",function() {
        expect(blunt.Calculator("2 + 2")).toEqual(["2 + 2", 4]);
      })
      
  })
  

  

});

