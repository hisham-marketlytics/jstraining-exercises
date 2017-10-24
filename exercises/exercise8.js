/*
 *  Design a cash register drawer function that accepts purchase price as the first argument, payment as
 *  the second argument, and cash-in-drawer (cid) as the third argument.
 *
 *  cid is a 2d array listing available currency.
 *
 *  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the
 *  string "Closed" if cash-in-drawer is equal to the change due.
 *
 *  Otherwise, return change in coin and bills, sorted in highest to lowest order.
 *  In case of multiple solutions, return the one containing the highest value of coin/bill
 */

function drawer(price, cash, cid) {
	var value_cid = 0;
	var itr = 0;

	if(cash < price) {
		console.log("Customer needs to pay more")
	}

	if(cash === price){
		console.log("Closed")
	}
	else {

	var value_change = cash - price;
		//calculating value of cash in drawer
		while(itr<cid.length) {
			var incr = cid[itr][0] * cid[itr][1];
			value_cid = value_cid + incr;
			itr = itr + 1;
		}
		console.log(value_cid);
		console.log(value_change);
		if(value_cid < value_change) {
			console.log("Insufficient Funds");
		}
		else {
			//splitting value of change into digits while converting it to a string.
			console.log("Sufficient funds available")
			var vic_array = value_change.toString().split("");
			
			//converting value of change to number.
			var itr = 0;
			while(itr<vic_array.length){
				vic_array[itr] = Number(vic_array[itr]);
				itr += 1;
			}
			//calculating the number of tens to multiply with each number to get right value
			var raised_to = vic_array.length-1;
			var tens = Math.pow(10,raised_to);
			
			//multiplying digits with tens
			itr = 0
			while(itr<vic_array.length){
				vic_array[itr] = vic_array[itr]*tens
				tens = tens/10;
				itr += 1;
			}
			console.log(vic_array)

			//GIVING OUT THE SPARE CHANGE
			var k = 0;
			var output_array = []
			
			while(k<vic_array.length){
				var i = cid.length-1;
				var currency = vic_array[k];
				while(i > 0){
					
					//if value of currency in digit >= value of note/coin
					if(currency >= cid[i][0]){
			
						output_array.push(cid[i][0]);
						currency = currency - cid[i][0];
						i = cid.length-1;
						//note_quantity = cid[i][1] -1;
						//cid[i][1] = note_quantity;
					}
				i -=1;
				}
		k +=1;
			}
		console.log( "Change is: " + output_array);
		var t_change = cash-price;
		console.log("Total Change: " + t_change);
		}
	}
}
console.log("________")
cid = [
	//value, amount
	[1,3],
	[2,7],
	[5,20],
	[10,17],
	[20,20],
	[50,13],
	[100,10],
	[500,10],
	[1000,5],
	[5000,3]
];

drawer(217,500,cid)
drawer(199,1000,cid)


 // Example cash-in-drawer array:
 // ['ONE RUPEE', 10],
 // ['TWO RUPEES', 15],
 // ['FIVE RUPEES', 35],
 // ['TEN RUPEES', 9],
 // ['TWENTY RUPEES', 8],
 // ['ONE HUNDRED RUPEES', 5],
 // ['ONE THOUSAND RUPEES', 2]]
 
 // The currency of the cash in drawer can always assumed to be PKR with denominations in the example above
 
 // Example call
 // drawer(17, 20, [['ONE RUPEE', 11], ['TWO RUPEES', 15], ['FIVE RUPEES', 36], ['TEN RUPEES', 9], ['TWENTY RUPEES', 8], ['ONE HUNDRED RUPEES', 5], ['ONE THOUSAND RUPEES', 2]]);
 // output [['TWO RUPEES', 1], [ONE RUPEE', 1]]
