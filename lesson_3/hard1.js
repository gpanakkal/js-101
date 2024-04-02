{
  /**
   * 1. Will the following functions return the same results?
   * 
   * Answer: the second() function returns undefined due to automatic semicolon insertion.
   */

  // function first() {
  //   return {
  //     prop1: "hi there",
  //   };
  // }
  
  // function second() {
  //   return
  //   {
  //     prop1: "hi there";
  //   }
  // }
  
  // console.log(first());
  // console.log(second());
}
{
  /**
   * 2. What does the last line in the following code output?
   * 
   * Answer: { first: [1, 2] }
   */

  // let object = { first: [1] };
  // let numArray = object["first"];
  // numArray.push(2);

  // console.log(numArray); //  => "[1, 2]"
  // console.log(object);
}
{
  /**
   * 3. Given the following sets of code, what will each snippet print?
   * 
   * Answer: 
   * Snippet A prints 'one is: one', 'two is: two', and 'three is: three' since the global variables one, two, and three are shadowed by the local ones and the reassignment is thus function-scoped.
   * 
   * Snippet B prints the same as A, for the same reason.
   * 
   * Snippet C mutates the arrays passed in, so it prints 'one is: two', 'two is: three', and 'three is: one'
   */

  // Snippet A
  // function messWithVars(one, two, three) {
  //   one = two;
  //   two = three;
  //   three = one;
  // }
  
  // let one = ["one"];
  // let two = ["two"];
  // let three = ["three"];
  
  // messWithVars(one, two, three);
  
  // console.log(`one is: ${one}`);
  // console.log(`two is: ${two}`);
  // console.log(`three is: ${three}`);

  // Snippet B
  // function messWithVars(one, two, three) {
  //   one = ["two"];
  //   two = ["three"];
  //   three = ["one"];
  // }
  
  // let one = ["one"];
  // let two = ["two"];
  // let three = ["three"];
  
  // messWithVars(one, two, three);
  
  // console.log(`one is: ${one}`);
  // console.log(`two is: ${two}`);
  // console.log(`three is: ${three}`);

  // Snippet C
  // function messWithVars(one, two, three) {
  //   one.splice(0, 1, "two");
  //   two.splice(0, 1, "three");
  //   three.splice(0, 1, "one");
  // }
  
  // let one = ["one"];
  // let two = ["two"];
  // let three = ["three"];
  
  // messWithVars(one, two, three);
  
  // console.log(`one is: ${one}`);
  // console.log(`two is: ${two}`);
  // console.log(`three is: ${three}`);
}
{
  /**
   * 4. Identify all variables, primitives, and objects:
   * 
   * variables: boo, scare, myBoo, halloweenCollection, myBoo (second use)
   * primitives: scare, "!!!", myBoo, 'greet', 'Happy Halloween', 'scare', 'Boo', 'wish', 'May all your pumpkins be glowing', 'greet', halloweenCollection["greet"]
   * objects: boo, halloweenCollection
   * 
   * Corrections: 
   * - console is technically a variable as a property of the global object (wouldn't this make the properties of halloweenCollection also variables?)
   * - log() and toUpperCase() are also objects, since they're functions
   * - scare.toUpperCase() is also a primitive, as is the passing of myBoo to console.log(). scare (the parameter) was not counted as a primitive by LS, though it should contain one. Finally, each call to boo() returns undefined, another primitive.
   */

  // function boo(scare) {
  //   let myBoo = scare.toUpperCase() + "!!!";
  //   console.log(myBoo);
  // }
  
  // const halloweenCollection = {
  //   greet: "Happy Halloween",
  //   scare: "Boo",
  //   wish: "May all your pumpkins be glowing",
  // };
  
  // let myBoo = boo(halloweenCollection["greet"]);
}
{
  /**
   * 5. Problem: The function below is meant to determine if an input string is an IP address with 4 dot-separated.numbers. isAnIpNumber(string) returns true if string is a numeric string between 0 and 255. The function has a few errors: it doesn't have a false return, and doesn't handle cases where the input has more or fewer than 4 components.
   * Input: string
   * Output: true or false
   * Implicit requirements: Don't use regex.
   */

  function isDotSeparatedIpAddressOriginal(inputString) {
    let dotSeparatedWords = inputString.split(".");
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        break;
      }
    }
  
    return true;
  }

  function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    if (dotSeparatedWords.length !== 4) {
      return false;
    }
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  
    return true;
  }
}