var set1 = [5, 7, 8, 18, 19];
var set2 = [9, 13, 15, 17, 18];

// ------------------------------------ Array.filter() DEMO ----------------------------------------------
//filter() is used when needing to use logic to remove items from an array. In the example it will create an new array of values that are less then 8. It easier to read and faster to write compared to a for loop.

var arr1 = [];

//Using a for loop to push array values that are less then 8 into a new array.
for (var x = 0; x < set1.length; x++) {
  if (set1[x] < 8) {
    arr1.push(set1[x]);
  }
}
//Using filter() to do the same evaulation as the for loop.
var arr2 = set1.filter(function (element) {
  return element < 8;
});

console.log('arr1 values are: ' + arr1);
console.log('arr2 values are: ' + arr2);

//both methods return [5, 7]

// ------------------------------------ Array.map() DEMO ----------------------------------------------

// .map() is used to loop through each item in the array and apply a function to each item.

var arr3 = [];

//Using a for loop to multiply their values by 2 and push into an array.
for (var x = 0; x < set2.length; x++) {
  arr3.push(set2[x] * 2);
}

var arr4 = set2.map(function (element) {
  var doubled = element * 2;
  return doubled;
});

console.log('arr3 values are: ' + arr3);
console.log('arr4 values are: ' + arr4);
//both return [18, 26, 30, 34,36]
