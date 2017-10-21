/*
 *  Write a JavaScript function that accepts a string as a parameter and converts the first letter
 *  of each word of the string in upper case.
 */

var Capitalize = function(word) {
 
 var first_alphabet = word.slice(0,1);
 var remaining_word = word.slice(1,word.length);
 first_alphabet = first_alphabet.toUpperCase();
 var capitalized_word = first_alphabet.concat(remaining_word);
 
 return capitalized_word;

}

var upperCase = function(string) {
  
  str_array = string.split(" ");
  capitalized_array = [];
  var itr = 0;
  final_string = "";
  
  while(itr < str_array.length){

    var capital = Capitalize(str_array[itr]);
    final_string = final_string.concat(capital, " ");
    itr += 1;
  }
  
  console.log(final_string)
  
  return final_string;
};

upperCase('radio head');
upperCase('pink floyd')