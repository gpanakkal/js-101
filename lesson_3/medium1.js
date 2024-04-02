{
  /**
   * 1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
   * 
    For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

    The Flintstones Rock!
    The Flintstones Rock!
      The Flintstones Rock!
      The Flintstones Rock!
        ...
   */
  // My solution:
  // let outputString = 'The Flintstones Rock!';
  // for (i = 0; i < 10; i++) {
  //   console.log(outputString);
  //   outputString = " " + outputString;
  // }
  // this solution works

  /** alternative solution:
   * for (let padding = 0; padding <= 9; padding++) {
   *   console.log(" ".repeat(padding) + "The Flintstones Rock!");
   * }
   */
}
{
  /**
   * 2. Starting with `let munstersDescription = "The Munsters are creepy and spooky.";`, return a new string that swaps the case of all of the letters:
   * 
   * Problem:
   * - Inputs: string of letters and other characters
   * - Outputs: same as input, but for each letter, case should be reversed
   * - Implicit requirements: string contains at least one letter
   * - Mental model: split the string into characters, then for each character. 
   *    If it's a letter, check case and swap it. 
   *    Push the character to a new array.
   *    Join the array into a string and return it.
   * 
   * Examples:
   * - '': might cause an issue if attempting to map over this. will the resulting array be empty? Yes, but mapping over this will not cause a problem.
   * - 'a'
   * - '1'
   * - `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
   * 
   * Data structure:
   * - Requirements: order matters, stores single characters only, need to map values
   * Array
   * 
   * Algorithm:
   * 1. Convert the string into an array of characters
   * 2. iterate over each char in the array, mapping to a new array:
   *  1. if char is a letter:
   *    a. if char is lowercase: make it uppercase
   *    b. else: make it lowercase
   *  2. return the char
   * 3. join the array into a string and return it
   * 
   * Code:
   */
  
  // My solution:
  // const examples = ['', 'a', '1', 'B', 'The Munsters are creepy and spooky.'];
  // function swapCase(sentence) {
  //   return sentence.split('').map(char => {
  //     let newChar = char;
  //     if(/[a-z]/.test(char)) {
  //       newChar = char.toUpperCase();
  //     } else if (/[A-Z]/.test(char)) {
  //       newChar = char.toLowerCase();
  //     }
  //     return newChar;
  //   }).join('');
  // }
  // console.log(examples.map(el => swapCase(el)));
  // this solution works

}
{
  /**
   * 3. Problem: The following function, intended to find all the factors of `number`, would fail when the input is 0 or negative. Prevent it from failing without using a do/while loop.
   * 
   */

  // const examples = [0, -1, 10, 17, 8.5]

  // function factorsOriginal(number) {
  //   let divisor = number;
  //   let factors = [];
  //   do {
  //     if (number % divisor === 0) {
  //       factors.push(number / divisor);
  //     }
  //     divisor -= 1;
  //   } while (divisor !== 0);
  //   return factors;
  // }

  // my solution
  // function factors(number) {
  //   let factors = [];
  //   if (number % 1 !== 0) return factors;
  //   let divisor = number - 1;
  //   while (divisor >= 2) {
  //     if (number % divisor === 0) {
  //       factors.push(number / divisor);
  //     }
  //     divisor -= 1;
  //   }
  //   return factors;
  // }
  // console.log(examples.map(el => factors(el)));
  // this solution works
}
{
/**
 * 4. Problem: Find if there is a difference between the following two implementations of a rolling buffer, one of which uses array.push() and the other uses array.concat(), given that newElement is always a primitive value?
 * - Array.push() modifies the array in place, while Array.concat() returns a new array. Since the function returns an array, it probably shouldn't also have side effects; for this reason, I favor concat() and slice() over push() and shift()
 * - Array.concat() shares a name with String.concat(), meaning that if a string is passed in as `buffer`, it will coerce `newElement` to a string and concatenate it to `buffer`. It will then throw an error if buffer.shift() is called since String.shift() is not a method. So the type of `buffer` should be specified via jsdoc or TS
 */
  // function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  //   buffer.push(newElement);
  //   if (buffer.length > maxBufferSize) {
  //     buffer.shift();
  //   }
  //   return buffer;
  // }

  // function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  //   buffer = buffer.concat(newElement);
  //   if (buffer.length > maxBufferSize) {
  //     buffer.shift();
  //   }
  //   return buffer;
  // }

  // // my non-mutating version
  // function addToRollingBuffer3(buffer, maxBufferSize, newElement) {
  //   buffer = buffer.concat(newElement);
  //   if (buffer.length > maxBufferSize) {
  //     buffer = buffer.slice(buffer.length - maxBufferSize);
  //   }
  //   return buffer;
  // }
}
{
  /**
   * 5. What will the following two lines of code output?
   * 
   * Answer: "0.9" and "true" assuming the float imprecision cancels out; else something close to 0.9, and false
   */
  // console.log(0.3 + 0.6);
  // console.log(0.3 + 0.6 === 0.9);
}
{
  /**
   * 6. What will the following code output?
   * 
   * Answer: It will output false because NaN is not equal to itself. You can check for NaNs using Number.isNaN(value)
   */
  // let nanArray = [NaN];
  // console.log(nanArray[0] === NaN);
}
{
  /**
   * 7. What is the output of this code?
   * 
   * Answer: someNumber is a new variable in this scope, and as such, modifying it doesn't change `answer` (passed by value). So answer remains 42, and it logs 34
   */
  // let answer = 42;

  // function messWithIt(someNumber) {
  //   return (someNumber += 8);
  // }

  // let newAnswer = messWithIt(answer);

  // console.log(answer - 8);
}
{
  /**
   * 8. Does the following code modify the values in `munsters`?
   * 
   * Answer: Since the values stored in `munsters` are objects, they're passed by reference, so the values stored within were changed.
   */
  let munsters = {
    Herman: { age: 32, gender: "male" },
    Lily: { age: 30, gender: "female" },
    Grandpa: { age: 402, gender: "male" },
    Eddie: { age: 10, gender: "male" },
    Marilyn: { age: 23, gender: "female" },
  };
  
  function messWithDemographics(demoObject) {
    Object.values(demoObject).forEach(familyMember => {
      familyMember["age"] += 42;
      familyMember["gender"] = "other";
    });
  }
  
  // non-mutating version
  function messWithDemographics2(demoObject) {
    return Object.values(demoObject).map(familyMember => {
      const alteredFamilyMember = Object.assign({}, familyMember);
      alteredFamilyMember["age"] += 42;
      alteredFamilyMember["gender"] = "other";
      return alteredFamilyMember;
    });
  }
  console.log(messWithDemographics2(munsters));
  messWithDemographics(munsters);
  console.log(munsters);
  console.log(messWithDemographics2(munsters));
}
{
  /**
   * 9. Given the following modified version of rock-paper-scissors, in which a tie returns the choice made by both players, what gets logged to the console?
   * 
   * Answer: It logs paper
   */
  function rps(fist1, fist2) {
    if (fist1 === "rock") {
      return fist2 === "paper" ? "paper" : "rock";
    } else if (fist1 === "paper") {
      return fist2 === "scissors" ? "scissors" : "paper";
    } else {
      return fist2 === "rock" ? "rock" : "scissors";
    }
  }

  console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
}
{
  /**
   * 10. What will the invocation of bar(foo()) return?
   * 
   * Answer: it returns 'no' since foo returns 'yes' and bar inverts yes/no inputs
   */
  function foo(param = "no") {
    return "yes";
  }
  
  function bar(param = "no") {
    return param === "no" ? "yes" : "no";
  }
  bar(foo());
}