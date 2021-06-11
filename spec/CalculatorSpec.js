describe("ClassName", function() {
  var blunt;

  beforeEach (function () {
    blunt = new Blunt();
  });

  describe('functionName', function() {
      it ("testing Hardcoded",function() {
        expect(blunt.Calculator("1 + 1")).toEqual(["1 + 1", 2]);
      })
      
  })
  

  

});

