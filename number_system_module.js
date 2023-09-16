"use strict"
// start implementing all the functions

const dec_to_bin = (N) => {
    // N is given as a decimal number, convert it to the corresponding binary number.
    let ans = N.toString(2);
    // You should return the correct binary number.
    return ans
}
const bin_to_dec = (N) => {
    // N is given as a binary number, convert it to the corresponding decimal number.
    let ans=parseInt(N,2)
    // You should return the correct binary decimal.
    return ans
}

const dec_to_oct = (N) => {
    // N is given as a decimal number, convert it to the corresponding octal number.
    let oct = 0;
    let i = 0;
    while (N != 0) {
        oct += (N % 8) * Math.pow(10, i); // storing and reversing the remainder sequence
        N = parseInt(N / 8);
        i++;
    }  
    // You should return the correct octal number.
    return oct;
}
const oct_to_dec = (N) => {
    // N is given as a octal number, convert it to the corresponding decimal number.
     let ans=parseInt(N,8)
    // You should return the correct decimal number.
    return ans;
}
const dec_to_hex = (N) => {
    // N is given as a decimal number, convert it to the corresponding hexadecimal number.
    let hex = "";
    while (N != 0) {
        let rem = N % 16
        switch (rem) {
            case 10:
                hex += "A";
                break;
            case 11:
                hex += "B";
                break;
            case 12:
                hex += "C";
                break;
            case 13:
                hex += "D";
                break;
            case 14:
                hex += "E";
                break;
            case 15:
                hex += "F";
                break;
            default:
                hex += rem.toString();
                break;
        }
        N = parseInt(N / 16);
    }
    // You should return the correct hexadecimal number.
    return hex.split("").reverse().join(""); 
}

const hex_to_dec = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding decimal number.
    let ans=parseInt(N,16)
    // You should return the correct binary number.
    return ans
}
const bin_to_oct = (N) => {
    // N is given as a binary number, convert it to the corresponding octal number.
    // Implement this function using two step method
    N = bin_to_dec(N);
    // You should return the correct octal number.
    return dec_to_oct(N);
}
const bin_to_hex = (N) => {
    // N is given as a binary number, convert it to the corresponding hexadecimal number.
    // Implement this function using two step method
    N = bin_to_dec(N)
    // You should return the correct hexadecimal number.
    return dec_to_hex(N)
}
const oct_to_bin = (N) => {
    // N is given as a octal number, convert it to the corresponding binary number.
    // Implement this function using two step method
    N = oct_to_dec(N)
    // You should return the correct binary number.
    return dec_to_bin(N)
}
const oct_to_hex = (N) => {
    // N is given as a octal number, convert it to the corresponding hexadecimal number.
    // Implement this function using two step method
    N = oct_to_dec(N)
    // You should return the correct hexadecimal number.
    return dec_to_hex(N)
}
const hex_to_bin = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding binary number.
    // Implement this function using two step method
   N = hex_to_dec(N)
    // You should return the correct binary number.
    return dec_to_bin(N)
}
const hex_to_oct = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding octal number.
    // Implement this function using two step method
    N = hex_to_dec(N)
    // You should return the correct octal number.
    return dec_to_oct(N)
}






































//----------------- Test cases, Don't change anything!!! ---------------

(dec_to_bin(23) == 10111 && dec_to_bin(230) == 11100110) ? console.log("Decimal to Binary conversion is done properly"):console.error("Something wrong in dec_to_bin function");
(bin_to_dec(10111) == 23 && bin_to_dec(11100110) == 230) ? console.log("Binary to Decimal conversion is done properly"):console.error("Something wrong in bin_to_dec function");
(dec_to_oct(23) == 27 && dec_to_oct(230) == 346) ? console.log("Decimal to Octal conversion is done properly"):console.error("Something wrong in dec_to_oct function");
(oct_to_dec(27) == 23 && oct_to_dec(346) == 230) ? console.log("Octal to Decimal conversion is done properly"):console.error("Something wrong in oct_to_dec function");
(dec_to_hex(23) == "17" && dec_to_hex(230) == "E6") ? console.log("Decimal to hexadecimal conversion is done properly"):console.error("Something wrong in dec_to_hex function");
(hex_to_dec("17") == 23 && hex_to_dec("E6") == 230) ? console.log("Hexadecimal to Decimal conversion is done properly"):console.error("Something wrong in hex_to_dec function");
(bin_to_oct(10111) == 27 && bin_to_oct(11100110) == 346) ? console.log("Binary to Octal conversion is done properly"):console.error("Something wrong in bin_to_oct function");
(bin_to_hex(10111) == "17" && bin_to_hex(11100110) == "E6") ? console.log("Binary to Hexadecimal conversion is done properly"):console.error("Something wrong in bin_to_hex function");
(oct_to_bin(27) == 10111 && oct_to_bin(346) == 11100110) ? console.log("Octal to Binary conversion is done properly"):console.error("Something wrong in oct_to_bin function");
(oct_to_hex(27) == "17" && oct_to_hex(346) == "E6") ? console.log("Octal to Hexadecimal conversion is done properly"):console.error("Something wrong in oct_to_hex function");
(hex_to_bin("17") == 10111 && hex_to_bin("E6") == 11100110) ? console.log("Hexadecimal to Binary conversion is done properly"):console.error("Something wrong in hex_to_bin function");
(hex_to_oct("17") == 27 && hex_to_oct("E6") == 346) ? console.log("Hexadecimal to Octal conversion is done properly"):console.error("Something wrong in hex_to_oct function");








