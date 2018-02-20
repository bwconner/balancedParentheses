//Receives a string and deteminds if its contained parantheses are valid balanced sets or not
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char){
    //If a closing comes before its opening partner this will go negative
    //Which signals it will never be properly balanced
    if (previous < 0) {
      return previous; 
    }

    //Openings add one and closing subtract one to the tracker
    //A balanced set should have a tracker of zero at the end
    if (char === "(") {
      return ++previous;
    } else if (char === ")") {
      return --previous;
    }
    
    return previous;
  }, 0);
}

var isBalanced = balancedParens("()");
