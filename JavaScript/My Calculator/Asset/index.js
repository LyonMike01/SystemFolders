

function getHistory() {
 return document.querySelector("#history").textContent;
}
function printHistory(numb) {
  document.querySelector("#history").textContent = numb;
}


function getOutput() {
 return document.querySelector("#output").textContent;
}
function printOutput(numb) {
  if (numb == "") {
   document.querySelector("#output").textContent = numb;
  } 
  else {
  document.querySelector("#output").textContent = formattedNumb(numb);
  }
}

function formattedNumb(numb) {
  if (numb == "-"){
    return "";
  }
  var numm = Number(numb);
  var valu = numm.toLocaleString("en-GB");
  return valu;
}


function rsvFtNumb(numb) {
  return Number(numb.replace(/,/g, ""));
}



var numbers = document.querySelectorAll(".number");
var equal = document.querySelector("#equal");
var clear = document.querySelector("#clear");
var backspace = document.querySelector("#backspace");
var operators = document.querySelectorAll(".operator");
 

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () { 
      var output = rsvFtNumb(getOutput());
      if (output != NaN) { // if output is a number
        output = output + this.textContent;
        printOutput(output);
      }
      });
} 



for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () { 
      if (this.id == "clear") {
        printOutput("");
        printHistory("");
      }
      else if (this.id == "backspace") {
        var output  = rsvFtNumb(getOutput()).toString();
        if (output){
      output =  output.slice(0, (output.length -1));
         printOutput(output);
        }
        
      } 
      else {
        var output = getOutput();
        var history = getHistory();
        if (output == "" && history !="") {
           if (isNaN(history[history.length-1])){
            history= history.slice(0, history.length-1);
          }
        }
        if(output != "" || history != ""){
        output = output==""? output:rsvFtNumb(output);
        history = history + output;
        if(this.id=="="){
          var result = eval(history);
          printOutput(result);
          printHistory("");
        }
        else{
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
           
        }

      
    
        });
      
      }