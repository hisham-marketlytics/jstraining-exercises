/*
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest word.
 *
 */

var radiohead = ['lotusflower', 'daydream', 'creep','manowar','videotape']

var findLongestWord = function(words) {
  var i = 0
  var longest_word_length = 0
  var longest_word = null  
  
  while(i<words.length){
    var word = words[i]
    
    if(word.length > longest_word_length){
      longest_word = word
      longest_word_length = word.length
    }
  
  i += 1;
  
  }
 
  console.log('Longest word is ' + longest_word + 
  ', having a length of ' + longest_word_length)

  return longest_word_length
};

findLongestWord(radiohead);