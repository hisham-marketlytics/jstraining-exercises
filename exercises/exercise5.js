/*
 *  Write a JavaScript function that checks whether a passed string is palindrome or not.
 */

var isPalindrome = function(word) {
  var bool = false;
  var word_length = word.length;
  var itr = 0;
  reverse_array = [];
  word = word.toLowerCase();

  while(itr < word_length) {
    s_word = word.slice(word_length-1,word_length);
    reverse_array.push(s_word);
    word_length -= 1;
  }
  
  var reversed_string = "";

  while(itr < reverse_array.length){
    reversed_string = reversed_string.concat(reverse_array[itr]);
    itr += 1;
  }

  console.log(word + ' reversed is: ' + reversed_string);
  
  if(word === reversed_string){
    bool = true;
    console.log('Given word is a palindrome \n');
  }
  else {
    console.log('Given word is NOT a palindrome \n');
  }
  return bool;

};

isPalindrome('Anna');
isPalindrome('Jack')