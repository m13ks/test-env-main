//тест урок 23(24)
describe("findMinNumber and findMaxNumber", function() {
    let positiveIntegers = [1, 2, 3, 4];
    let negativeIntegers = [-4, -3, -2, -1];
    let mixedIntegers = [-10, 0, 10, 20, -30];
    
  
    it("returns the minimum and maximum numbers in an array of positive integers", function() {
      expect(findMinNumber(positiveIntegers)).toEqual(1);
      expect(findMaxNumber(positiveIntegers)).toEqual(4);
    });
  
    it("returns the minimum and maximum numbers in an array of negative integers", function() {
      expect(findMinNumber(negativeIntegers)).toEqual(-4);
      expect(findMaxNumber(negativeIntegers)).toEqual(-1);
    });
  
    it("returns the minimum and maximum numbers in an array of mixed positive and negative integers", function() {
      expect(findMinNumber(mixedIntegers)).toEqual(-30);
      expect(findMaxNumber(mixedIntegers)).toEqual(20);
    });
  
});



//тест урок 26
describe('CancelableAccumulator', function() {
    let accumulator = new CancelableAccumulator(5);

  
    it('should have a starting value', function() {
        expect(accumulator.value).toEqual(5);
    });
  
    it('should increment the value', function() {
        accumulator.increment();
        expect(accumulator.value).toEqual(6);
    });

    it('should increment the value', function() {
        accumulator.increment();
        expect(accumulator.value).toEqual(7);
    });
  
    it('should decrement the value', function() {
        accumulator.decrement();
        expect(accumulator.value).toEqual(6);
    });
  
    it('should clear the value', function() {
        accumulator.clear();
        expect(accumulator.value).toEqual(5);
    });
  
});



//тест урок 28
describe("scrollIntoViewByKey", function() {
    beforeEach(function() {
        var divA = document.createElement("div");
        divA.setAttribute("id", "a");
        document.body.appendChild(divA);
        
        var divS = document.createElement("div");
        divS.setAttribute("id", "s");
        document.body.appendChild(divS);
        
        var divW = document.createElement("div");
        divW.setAttribute("id", "w");
        document.body.appendChild(divW);
        
        var divE = document.createElement("div");
        divE.setAttribute("id", "e");
        document.body.appendChild(divE);
    });
  
    it("scrolls to element with id 'a' when the 'a' key is pressed", function() {
        spyOn(document.getElementById("a"), 'scrollIntoView');
        var event = new KeyboardEvent('keydown', { 'key': 'a' });
        document.dispatchEvent(event);
        expect(document.getElementById("a").scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
    
    it("scrolls to element with id 's' when the 's' key is pressed", function() {
        spyOn(document.getElementById("s"), 'scrollIntoView');
        var event = new KeyboardEvent('keydown', { 'key': 's' });
        document.dispatchEvent(event);
        expect(document.getElementById("s").scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it("scrolls to element with id 'w' when the 'w' key is pressed", function() {
        spyOn(document.getElementById("w"), 'scrollIntoView');
        var event = new KeyboardEvent('keydown', { 'key': 'w' });
        document.dispatchEvent(event);
        expect(document.getElementById("w").scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it("scrolls to element with id 'e' when the 'e' key is pressed", function() {
        spyOn(document.getElementById("e"), 'scrollIntoView');
        var event = new KeyboardEvent('keydown', { 'key': 'e' });
        document.dispatchEvent(event);
        expect(document.getElementById("e").scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

});
  