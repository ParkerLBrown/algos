// Algo Practice - Template


// Basic 13

// 1. Print 1-255
//    Print1To255()
//    Print all the integers from 1 to 255.

function print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

// 2. Print Odds 1-255
//    PrintOdds1To255()
//    Print all odd integers from 1 to 255. 

function printOdd1To255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// 3. Print Ints and Sum 0-255
//    PrintIntsAndSum0To255()
//    Print integers from 0 to 255, and with each integer print the sum so far. 

function intsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum += i;
    console.log(i);
    console.log(sum);
  }
}

// 4. Iterate and Print Array
//    Iterate through a given array, printing each value. 
//    PrintArrayVals(arr)

function iterateAndPrintArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5. Find and Print Max
//    PrintMaxOfArray(arr)
//    Given an array, find and print its largest element.

function findPrintMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

// 6. Get and Print Average
//    PrintAverageOfArray(arr)
//    Analyze an array’s values and print the average.

function findPrintAverage(arr) {
  var sum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum/arr.length;
  console.log(avg);
}

// 7. Array with Odds
//    ReturnOddsArray1To255()
//    Create an array with all the odd integers between 1 and 255 (inclusive).  

function arrOdds() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// 8. Square the Values
//    SquareArrayVals(arr)
//    Square each value in a given array, returning that same array with changed values. 

function squareTheValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

// 9. Greater than Y
//    ReturnArrayCountGreaterThanY(arr, y)
//    Given an array and a value Y, count and print the number of array values greater than Y. 

function greaterThanY(arr, Y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  console.log(count);
}

// 10. Zero Out Negative Numbers
//     ZeroOutArrayNegativeVals(arr)
//     Return the given array, after setting any negative values to zero. 

function zeroOutNegitives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

// 11. Max, Min, Average
//     PrintMaxMinAverageArrayVals(arr)
//     Given an array, print the max, min and average values for that array.

function printMaxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum/arr.length;
  var newarr = [max, min, avg];
  console.log(newarr);
}

// 12. Shift Array Values
//     ShiftArrayValsLeft(arr)
//     Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = 0;
  console.log(arr);
}

// 13. Swap String For Array Negative Values
//     SwapStringForArrayNegativeVals(arr)
//     Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStrings(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 'dojo';
    }
  }
  console.log(arr);
}


// Basic Foundation I

// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function return1To255() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
//    You may use a modulus operator for this exercise.

function even1000() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
//    (e.g. 1+3+5+...+4997+4999).

function sumOdd5000() {
  var sum = 0;
  for (var i = 0; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. 
//    (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
//    (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
//    (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum/arr.length;
  return avg;
}

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
//    (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrOdd1To50() {
  arr = [];
  for (var i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
      arr.push(i)
    }
  }
  return arr;
}

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
//    For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterY(arr, Y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//    (e.g. [1,5,10,-2] will become [1,25,100,4])

function returnSquares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//     When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function glassHalfFull(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//     (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum/arr.length;
  var newarr = [max, min, avg];
  return newarr;
}

// 12. Swap Values - Write a function that will swap the first and last values of any given array. 
//     The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(arr) {
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
//     For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}


// Basic Foundation II

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//    Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  return arr;
}

// 2. Print Low, Return High - Create a function that takes in an array of numbers. 
//    The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
  var low = arr[0];
  var high = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    }
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  
//    The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//    Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
  var doubled = [];
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i] * 2;
    doubled.push(temp);
  }
  console.log(arr);
  return doubled;
}

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//    Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//    Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
      odd = 0;
      if (even === 3) {
        console.log('Even more so!');
        even = 0;
      }
    }
    if (arr[i] % 2 !== 0) {
      odd++;
      even = 0;
      if (odd === 3) {
        console.log('Thats odd!');
        odd = 0;
      }
    }
  }
}

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//    Afterward, console.log each array value and return arr.

function incrementSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i]++;
    }
    console.log(arr[i]);
  }
  return arr;
}

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
//    Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
//    For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  return arr;
}

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
//    Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr) {
  var newarr = [];
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i] + 7;
    newarr.push(temp);
  }
  console.log(arr);
  return newarr;
}

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  
//     Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//     Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr) {
  var backend = arr.length - 1;
  var temp = 0;
  for (var i = 0; i < arr.length/2; i++) {
      temp = arr[i];
      console.log('temp: ' + temp);
      arr[i] = arr[backend];
      console.log('position ' + i +':' + arr[i]);
      arr[backend] = temp;
      backend--;
  }
  return arr;
}

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). 
//     Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] *= -1;
    }
  }
  return arr;
}

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
//     If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
  var hungry = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'food') {
      console.log('yummy');
    }
    if (arr[i] !== 'food') {
      hungry++;
    }
  }
  if (hungry == arr.length) {
    console.log('Im hungry');
  }
}

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//     Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//     swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr) {
  var backend = arr.length - 1;
  var temp = 0;
  for (var i = 0; i < arr.length/2; i += 2) {
      temp = arr[i];
      console.log('temp: ' + temp);
      arr[i] = arr[backend];
      console.log('position ' + i +':' + arr[i]);
      arr[backend] = temp;
      backend -= 2;
  }
  console.log(arr);
}

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
//     For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}