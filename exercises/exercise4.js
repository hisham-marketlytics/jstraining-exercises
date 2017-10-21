/*
 *  Write a function to sort a list of words (an array) in alphabetical order
 */

var sort = function(words) {
  sorted_words  = words.sort();
  console.log(sorted_words)
  return sorted_words;
};

var radiohead = ['lotusflower', 'daydream', 'creep','manowar','videotape'];
sort(radiohead);