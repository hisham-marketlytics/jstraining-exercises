/**
 * Given two input strings, write a function to find largest identical substring
 * For example:
 * String
 * Spring
 * Here the largest substring is 'ring'
 *
 * In case there are multiple largest substrings of similar length, the function must return the first largest substring found w.r.t first string, For example:
 * hirespring
 * ringfhire
 * Here, the largest substring returned will be 'hire' and NOT 'ring'
*/

function largestSubstring(str1, str2) {
    str1 = str1.toLowerCase();
    str2 =  str2.toLowerCase();
    var str1_array = str1.split("");
    var str2_array = str2.split("");
    output = [];
    console.log(str1_array);
    console.log(str2_array);

    var i = 0;
    while(i<str1_array.length){
        i+=1;
        var char1 = str1_array[i];

        

        var k = 0;
        while(k<str2_array.length){
            var char2 = str2_array[k];
            if(char1 === char2){
                output.push(char1);
                
                k+=1;
            }
            k+=1;
        }

    }
    var f_output = output.join("")

    console.log(f_output)

    return '';   
}

largestSubstring("String","Spring");
//largestSubstring("hirespring","ringfhire");