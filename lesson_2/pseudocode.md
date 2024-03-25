

## A function that returns the sum of two numbers

RETURN x + y

## A function that takes an array of strings, returning their concatenation

SET concatenated = ""
Iterate through the input array
  - Concatenate the current element to concatenated
return concatenated

## A method that takes an array of integers and returns a new array with every alternating element from the original array, starting with the first

START

SET alternating = []
Iterate through the input array
  - IF the element's index is even:
    - push the element to alternating
  - ELSE:
    - do nothing
return alternating

END

## A function that determines the index of the 3rd occurrence of a given character in a string. 

For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null. 

START
// Given a string and a character to search for
SET count = 0
Iterate through the string's characters
  IF count = 3:
    return the current index
  ELSE IF current character = search character:
    add 1 to count
  ELSE:
    do nothing

END

## A function that takes two arrays of numbers and returns the result of merging the arrays. 

The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. You may assume that both array arguments have the same number of elements.

START

SET merged = []

Iterating over the first passed array:
  Given the current index i:
    - Push the element at i in the first array to merged
    - Push the element at i in the second array to merged

return merged

END