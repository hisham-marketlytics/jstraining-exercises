/*
 *  Write a function filterLongWords() that takes an array of words and an integer i and returns the array
 *  of words that are longer than i.
 */

var radiohead = ['lotusflower', 'daydream', 'creep','manowar','videotape']


var filterLongWords = function(words, i) {
  var selected_words = [];
  var itr = 0;
  while(itr<words.length){
    var word = words[itr]
    if(word.length > i){
      selected_words.push(words[itr]);
    }
    itr += 1
  }
  console.log(selected_words)
  return selected_words;
};

filterLongWords(radiohead,9);