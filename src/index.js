//Найбільше та найменше число
function getMaxClosure() {
  let max = -Infinity;

  return function (number) {
      if(number > max) {
          max = number;
      }

      return max;
  }
}

function findMaxNumber(numbers) {
  const getMax = getMaxClosure();

  for(let i = 0; i < numbers.length; i++) {
      if (!Number(numbers[i])) {
          continue;
      }
      getMax(numbers[i]);
  }

  return getMax();
}

function getMinClosure() {
  let max = Infinity;

  return function (number) {
      if(number < max) {
          max = number;
      }

      return max;
  }
}

function findMinNumber(numbers) {
  const getMin = getMinClosure();

  let i = 0;
  while (i < numbers.length) {
      getMin(numbers[i])
      i++   
  }
  
  return getMin();
}



//урок 26
function Accumulator(startingValue) {
  this.value = startingValue;

  this.increment = function() {
      this.value++;
  };

  this.decrement = function() {
      this.value--;
  };
}

function CancelableAccumulator(startingValue) {
  Accumulator.call(this, startingValue);

  this.clear = function() {
      this.value = startingValue;
  };
}


CancelableAccumulator.prototype = Object.create(Accumulator.prototype);


//тест урок 28
document.addEventListener("keydown", function(event) {
  if (event.key === "a") {
    document.getElementById("a").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "s") {
    document.getElementById("s").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "w") {
    document.getElementById("w").scrollIntoView({behavior: "smooth"});
  } else if (event.key === "e") {
    document.getElementById("e").scrollIntoView({behavior: "smooth"});
  }
});