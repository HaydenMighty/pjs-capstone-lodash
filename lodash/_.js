//Object containing lodash methods
const _ = {
  //Returns number within given upper and lower bounds
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  //Returns number within specified range
  inRange (number, start, end) {
    if(end == null) {
      end = start;
      start = 0;
    }
    if(start > end) {
      const temp = start;
      start = end;
      end = temp;
    }
    const isInRange = (start <= number && number < end);
    return isInRange;
  },
  //Returns array of words seperated from input string
  words (inputString) {
    let wordArray = inputString.split(' ');
    return wordArray;
  },
  //Return string with padding at either end to meet specified length
  pad (string, length) {
    if(length <= string.length) {
      return string;
    }
    const startPadding = Math.floor((length - string.length)/2);
    const endPadding = length - string.length - startPadding;
    const paddedString = ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
    return paddedString;
  },
  //Returns true of false based on whether an object key contains a value
  has (object, key) {
    const valuePresent = key in object;
    return valuePresent;
  },
  //Inverts key and value pairs and returns new object
  invert (object) {
    const invertedObject = {};
    for(key in object) {
      let originalValue = object.key;
      invertedObject.originalValue = key;
    }
    return invertedObject;
  },
  //Returns first key value pair that satisfies boolean predicate function
  findKey (object, predicateFunction) {
    for(key in object) {
      const value = object.key;
      const predicateFuncReturn = predicateFunction(value);
      if(predicateFuncReturn){
        return key;
      }
    }
    return undefined;
  },
  //Retruns an array equal to the input array minus the first n array elements where n=dropNumber
  drop (array, dropNumber) {
    if(dropNumber == null) {
       dropNumber = 1;
    }
    const shortArray = array.slice(dropNumber);
    return shortArray;
  },
  //Returns a slice of an inputted array excluding elements dropped from the beginning
  dropWhile (array, predicateFunction) {
    const dropNumber = array.findIndex(function (element, index) {
      return !predicateFunction(element, index, array);
    });
    const shortArray = this.drop(array, dropNumber);
    return shortArray;
  },
  //Returns an array of array chunck - split from the input array by a desired length
  chunk (array, size) {
    if(size == null){
      size = 1;
    }
    const arrayChuncks = [];
    for(let i = 0; i<array.length; i+=size) {
      const arrayChunck = array.slice(i, i+size);
      arrayChuncks.push(arrayChunck);
    }
    return arrayChuncks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
