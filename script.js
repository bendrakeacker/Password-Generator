// Assignment Code
var generateBtn = document.querySelector("#generate");


//Defining variables for characters in random generator
var symbol = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P;', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

//defining variables for if else statements
var yesNumber = true;
var yesSymbol = true;
var yesUpper = true;
var yesLower = true;

//defining function

function generatePassword() {
    var PWinitial = "";
    var PWcharlength = prompt("How many characters do you want in your password? (Must be between 8 and 128.)");

    if(PWcharlength < 8 || PWcharlength > 128) {
        alert("Please enter an number between 8 and 128. Otherwise I cannot produce a password.");
    
    
    }else {
       
        var yesNumber = confirm("Would you like your password to include numbers?")
            
        var yesSymbol = confirm("Would you like your password to include symbols?")     
            
        var yesUpper = confirm("Would you like your password to include uppercase letters?")
           
        var yesLower = confirm("Would you like your password to inclide lowercase letters?")
          
        if (!yesNumber && !yesSymbol && !yesUpper && !yesLower) {
            alert("I can't generate a password with characters dude")
            
        }else {
            
            var allchar = []
            
            //if user said yes, add array(s) to all characters array
            
            if(yesNumber) {               
                allchar = allchar.concat(number);  
                
            }
            if(yesSymbol) {
                allchar = allchar.concat(symbol);   

            }
            if(yesUpper) {
                allchar = allchar.concat(uppercase);
            }
            if(yesLower) {
                allchar = allchar.concat(lowercase);
            }

            //for loop to randomize characters selected
            var randomChar = ""
            for(var i=0; i < PWcharlength; i++) {
                randomChar = allchar[(Math.floor(Math.random() * allchar.length))];
                
                PWinitial = PWinitial + randomChar;
            }
            
        }

        return PWinitial

    }
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
