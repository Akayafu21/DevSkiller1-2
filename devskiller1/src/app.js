// --- Step 1 ---------------------------------------------------------
// Apply the map() function so that it returns every element of the array `myArray` multiplied by 2.
// Example invocation:
// var numbers = [1, 2, 3, 4];
// var result = step1(numbers);
export function step1(numbers) {
  return numbers.map((num) => {
    return num * 2;
  });
}

// --- Step 2---------------------------------------------------------
// Apply the map() function to the variable `str` so that every other word in the string is uppercase.
// Example invocation:
// var str = "hello world how ya doing?";
// var result = step2(str);
export function step2(str) {
  let splitText = str.trim().split(" ");
  return splitText
    .map((text, index) => {
      if (index % 2 != 0) {
        return text.toUpperCase();
      }
      return text;
    })
    .toString()
    .replaceAll(",", " ");
}

// ---Step 3----------------------------------------------------------------
// Remove all negative numbers from the array using filter function

// Example invocation:
// var numbers = [-2, -1, 0, 1, 2];
// var result = step3(numbers);
export function step3(numbers) {
  return numbers.filter((num) => {
    return num >= 0;
  });
}

// --- Step 4 ----------------------------------------------------------------
// Find the largest number in the array using reduce function
// Example invocation:
// var numbers = [1, 2, 3, 4];
// var result = step4(numbers);
export function step4(numbers) {
  return numbers.reduce((big, num) => {
    if (big > num) return big;
    return num;
  });
}

// Akkharaset Khamson 6452100122