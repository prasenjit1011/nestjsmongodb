
###### Example String Manipulation

<!-- 

// aaaabbccccddccffaaccbbf => 
// a4b2c3d3
// { a: 6, b: 4, c: 8, d: 2, f: 3 }

// "I Love Riyan" => "I evoL nayiR"
// Anagrams : "listen", "silent" => true
// isPalindrome : madam : true
// developer => Output: Vowels: 4, Consonants: 5
// Longest words : I am learning JavaScript
// Replace Digits with #
// Rearrange Characters Alphabetically
// Remove all vowels



// Example 10 : Remove all vowels
console.log("Hello World".replace(/[aeiou]/gi, '')); 

// Example 09 : Rearrange Characters Alphabetically
console.log("zyxabc".split('').sort().join('')); 

// Example 08 : Replace Digits with #
console.log("a1b2c3".replace(/\d/g, '#'))

// Example 07 : Longest words // Output: "JavaScript"
const findLongestWord = sentence => 
          sentence.split(' ')
            .reduce((longest, word) => word.length > longest.length ? word : longest);

console.log(findLongestWord("I am learning JavaScript")); 


// Example 06
function countVowelsAndConsonants(str) {
  const vowels = 'aeiou';
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) { // only check alphabetic characters
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

console.log(countVowelsAndConsonants("developer")); 
// Output: Vowels: 4, Consonants: 5


// Example 05 : isPalindrome : madam : true
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


// Example 04 : Anagrams
function areAnagrams(str1, str2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false


// Example 03 // I evoL nayiR
let str = "I Love Riyan"; 
console.log(str)
console.log(str.split(' ').map(word => word.split('').reverse().join('')).join(' '));


// Example 01
function compressString(str) {
  str = str.toLowerCase();
  const countMap = {};
  const order = [];

  for (let ch of str) {
    if (!countMap[ch]) {
      countMap[ch] = 1;
      order.push(ch);
    } else {
      countMap[ch]++;
    }
  }
  
  console.log(countMap)

  let result = "";
  let str1   = "";
  for (let ch of order) {
    result += ch + countMap[ch];
    str1 += ch;
  }

  //console.log(str1)
  return result;
}

console.log(compressString("aaaabbccccddccffaaccbbf")); // a4b2c3d3


// Example 02
function removeConsecutiveDuplicates(str) {
  return str.replace(/(.)\1+/g, '$1');
}

console.log(removeConsecutiveDuplicates("aaabbcaacccdee")); // Output: "abcde"



-->
