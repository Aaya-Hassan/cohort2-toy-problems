/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/


var powerOfTwo = function(num){
	var temp=Math.pow(2,num);
	var str=temp.toString()
	var arr=[];
	for(var i = 0; i < str.length; i++){
		arr.push(parseInt(str[i]));
	}	 
	var sum = arr.reduce(function(x, y) {
		return x + y;
	}, 0);
	return sum;
}



