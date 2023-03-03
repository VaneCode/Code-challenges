/*Validate IP Address
Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", 
and "123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false
Constraints:

[time limit] 5000ms
[input] string ip
[output] boolean */ 

function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/

	// your code goes here
  arr = ip.split(".");
  if(arr.length != 4){
    return false;
  }
  for(let i=0; i< arr.length; i++){
    let temp = arr[i];
    if((temp.length) == 0){
      return false;
    } else if (temp.length == 1){
     let num=parseInt(temp,10);
      if(num < 0 || num >9){
        return false;
      }
    }else if(temp.charAt(0) == '0'){
      return false;
    } else{
      let num=parseInt(temp,10);
      if(num < 0 || num >255){
        return false;
      }
    }
  }
  return true;
}


console.log(validateIP('192.168.0.1'));
