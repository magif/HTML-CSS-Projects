/**
 Palindrome Checker
 Return true if the given string is a palindrome. Otherwise, return false.

 A palindrome is a word or sentence that's spelled the same way both forward and backward,
 ignoring punctuation, case, and spacing.

 Need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
 and turn everything into the same case (lower or upper case) in order to check for palindromes.
 */

function palindrome(string) {
  //get rid of unwanted characters(make a removal regex with \W)
  //keeps only the alpha numeric characters in a string
  const onlyAlphaNumRegex = new RegExp(/[^a-zA-Z0-9]/g); // [\W_] | [^a-zA-Z0-9] also works here

  // makes a string without any non alphanumeric characters
  let lowerRegularString = string.toLowerCase().replace(onlyAlphaNumRegex, "");

  // makes a reversed version of the given string from before
  let reversedString = lowerRegularString.split("").reverse().join("");

  // boolean comparator to see if the strings are exactly the same, hence a palindrome.
  return (lowerRegularString === reversedString);
}

palindrome("eye")

console.log(palindrome("")); //true
console.log(palindrome("eye")); // true
console.log(palindrome("race car")); //true
console.log(palindrome("a!a")); //true
console.log(palindrome("!")); //true techinally = ""
console.log(palindrome("abc")); //false
console.log(palindrome("abc                       a")); //false
console.log(palindrome("abc!@#$%^&* 1 lol  1   #$%^&*()CBA")); //true


/**
 const onlyAlphaNumRegex = new RegExp(/[^a-zA-Z0-9]/gi); // [\W_] | [^a-zA-Z0-9] also works here
 let onlyAlphaNumsString = string.toLowerCase().replace(onlyAlphaNumRegex, "");
 let stringArray = onlyAlphaNumsString.split("");
 let reversedStringArray = stringArray.reverse();
 let reversedString = reversedStringArray.join('');

 //old code pre cleanup
 */
