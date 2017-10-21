/*
 *  Define a function reverse() that computes the reversal of a (full) string. For example,
 *  reverse("jag testar") should return the string "ratset gaj".
 */

var reverse = function(words) {

  var word_length = words.length;
  var itr = 0;
  reverse_array = [];

  while(itr < word_length) {
    s_word = words.slice(word_length-1,word_length);
    reverse_array.push(s_word);
    word_length -= 1;
  }
  
  var reversed_string = "";

  while(itr < reverse_array.length){
    reversed_string = reversed_string.concat(reverse_array[itr]);
    itr += 1;
  }

  console.log(words + ' reversed is: ' + reversed_string);
  return reversed_string;
};

reverse('oceanbloom');

