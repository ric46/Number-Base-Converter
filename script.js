"use strict"
// Start writing code from here
// Declare all the global variables
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const input_option = document.querySelector("#input-options")
const output_option = document.querySelector("#output-options")
const reset_btn	 = document.querySelector("#reset")
const calc_btn = document.querySelector("#calc")
const swap_btn = document.querySelector("#swap")
// You should define the callback function for the RESET button here.
reset_btn.addEventListener("click", function () {
    input.value=""
    output.value=""
    input_option.selectedIndex=0
    output_option.selectedIndex=0
});
// You should define the callback function for the SWAP button here.
swap_btn.addEventListener("click", function () {
    let temp = input_option.selectedIndex;
    input_option.selectedIndex = output_option.selectedIndex;
    output_option.selectedIndex = temp;
    temp = input.value
    input.value = output.value
    output.value = temp
});

// You should define the callback function for the CALCULATE button here.
calc_btn.addEventListener("click", function () {
    let input_no_system = input_option[input_option.selectedIndex].value;
    let output_no_system = output_option[output_option.selectedIndex].value;
    let ans, input_val;
    if (input_no_system == output_no_system) {
        ans = input.value;
    }
    else if (input_no_system == "Decimal") {
        input_val = parseInt(input.value); // Converting String to integer because our expects an integer
        if (output_no_system == "Binary") {
            ans = dec_to_bin(input_val); // Calling proper function and storing correct output in ans variable.
        }
        else if (output_no_system == "Octal") {
            ans = dec_to_oct(input_val);
        }
        else if (output_no_system == "Hexadecimal") {
            ans = dec_to_hex(input_val);
        }
    }
    else if (input_no_system == "Binary") {
        input_val = parseInt(input.value); // Converting String to integer because our expects an integer
        if (output_no_system == "Decimal") {
            ans = bin_to_dec(input_val); // Calling proper function and storing correct output in ans variable.
        }
        else if (output_no_system == "Octal") {
            ans = bin_to_oct(input_val);
        }
        else if (output_no_system == "Hexadecimal") {
            ans = bin_to_hex(input_val);
        }
    }
    else if (input_no_system == "Octal") {
        input_val = parseInt(input.value); // Converting String to integer because our expects an integer
        if (output_no_system == "Decimal") {
            ans = oct_to_dec(input_val); // Calling proper function and storing correct output in ans variable.
        }
        else if (output_no_system == "Binary") {
            ans = octbin_to_bin(input_val);
        }
        else if (output_no_system == "Hexadecimal") {
            ans = oct_to_hex(input_val);
        }
    }
    else if(input_no_system == "Hexadecimal"){
        input_val = input.value; // No need of String-Integer typecasting
        if (output_no_system == "Decimal") {
            ans = hex_to_dec(input_val);
        }
        else if (output_no_system == "Binary") {
            ans = hex_to_bin(input_val);
        }
        else if (output_no_system == "Octal") {
            ans = hex_to_oct(input_val);
        }
    }
    output.value = ans;
});
