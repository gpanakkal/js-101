/** SET 1
 * 1. No error
 * 2. How to determine if a given string ends in an exclamation mark?
 *  - string.endsWith() method
 *  - string[string.length - 1] === "!"
 * 3. Determine if the following object contains an entry for 'Spot':
 *  - Object.hasOwnProperty("Spot")
 * 4. Create a new string with all lowercase letters except the first
 *  - string[0].toUpperCase() + string.slice(1).toLowerCase();
 * 5. true, then false.
 * 6. Add an object to another:
 *  - immutably: newObject = {...object1, ...object2}
 *  - mutating the first: for (const key in object2) {object1[key] = object2[key]}
 *  - simpler mutating version: Object.assign(object1, object2)
 * 7. Check whether the name 'Dino' appears in given strings:
 *  - using regex: /Dino/.test(stringName)
 *  - string.indexOf("Dino") >= 0
 *  - string.includes('Dino')
 *  - string.match('Dino')
 * 8. add an element 'Dino' to an array
 *  - array.push('Dino')
 *  - array[array.length] = 'Dino'
 *  - array.concat('Dino')
 * 9. Add multiple items to an array
 *  - array.concat([item1, item2]);
 *  - array.push(item1, item2);
 * 10. Return a new version of the sentence that ends just before the word 'house'.
 *  - advice.split('house')[0]
 *  - advice.slice(0, advice.indexOf('house'));
 */

/** SET 2
 * 1. Return a new string that replaces every occurrence of 'important' with 'urgent':
 *  - advice.replaceAll('important', 'urgent')
 * 2. Reverse an array without mutating the original
 *  - const reversedArray = [...originalArray].reverse();
 *  - const reversedArray = originalArray.toReversed();
 *  - const reversedArray = originalArray.slice().reverse();
 *  - const reversedArray = [...originalArray].sort((a, b) => b - a);
 * 3. determine if a number is in an array
 *  - array.includes(number)
 *  - array.indexOf(number) !== -1
 *  - new Set([...array]).has(number)
 * 4. Show two ways to append "Four score and " in front of a string
 *  - famousWords = "Four score and " + famousWords
 *  - famousWords = "Four score and".concat(' ', famousWords)
 * 5. Given an array of numbers, mutate the array by removing the number at index 2
 *  - delete numbers[2] // leaves an empty space, don't use this
 *  - numbers.splice(2, 1)
 * 6. Create an un-nested version of a nested array:
 *  - Given the already nested array:
 *    - const flattenedArray = array.flat()
 *    - [].concat(...flintstones);
 *  - Given the original array, appending arrays without creating nesting:
 *    - flintstones.concat(['Barney', 'Betty']);
 *    - const flatArray = [...flintstones, ...['Barney', 'Betty']]
 * 7. Create an array from an object with only a specific key-value pair:
 *  - [key, obj[key]]
 *  - const filteredArray = Object.entries(flintstones).filter((pair, value) => pair[0] === 'Barney').shift()
 *    - needs to be shifted since the result is a nested array [[]]
 * 8. Check if objects are arrays
 *  - Array.isArray(objName)
 * 9. Center a string in a 40-character wide table using only spaces:
 *  - Equal number of spaces before and after, so take ((40 - string.length) / 2) = leadSpaces and pad the start with that many spaces: const leadSpaces = Math.floor((40 - title.length) / 2);
 * 10. Write a one-line expression to count the number of lower-case 't' characters in each string:
 *  - string.split("").filter(char => char === 't').length
 */

/** SET 3
 * 1. 3 ways to remove all elements from an array:
 *  - while (numbers.length) numbers.pop()
 *  - numbers.length = 0 // surprised this works both ways!
 *  - numbers.splice(0, numbers.length)
 * 2. What will this output? console.log([1, 2, 3] + [4, 5]);
 *  - Object object? undefined? No; the + operator coerces the arrays to strings and then concatenates, resulting in `1,2,34,5`
 * 3. - outputs 'hello there'
 * 4. Outputs [{ first: 42 }, { second: "value2" }, 3, 4, 5];
 * 5. Rewrite a function to have only one return statement and no explicit true or false values
 *  - return (color === 'blue' || color === 'green')
 *  - const VALID_COLORS = ['blue', 'green']
 *    return VALID_COLORS.includes(color)
 * 6. 
 *  - variables: arr, newArr, num, newNum, double, num param
 *  - primitives: 1, 2, 3, num, 0, newNum, num param (since newNum is passed to it), 2, num param * 2
 *  - objects: arr, newArr (same as arr), double
 */