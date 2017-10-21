/*
 *  Write a JavaScript program to validate a date in dd/mm/yyyy format. If the user input matches with
 *  the format, the program will return a message "Valid Date" otherwise return a message "Invalid Date!"
 */

var checkDate = function(dateStr) {
  var split_date = dateStr.split('/');
  var itr = 0;
  var dt_array = [];

  while(itr<split_date.length){
    dt_num = parseInt(split_date[itr]);
    dt_array.push(dt_num);
    itr += 1;  
  }
  console.log(dt_array)
  var day = dt_array[0]
  var month = dt_array[1]
  var year = dt_array[2]

  if(day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 0000 && year <= 9999) {
    console.log('VALID DATE \n');
  }
  else {
    console.log('INVALID DATE \n');
  }

  return '';
};

checkDate('85/1/2004');
checkDate('31/33/2011');
checkDate('4/1/1996');