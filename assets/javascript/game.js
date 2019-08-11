$(document).ready(function(){
   function getItem() {
        var words = ["headaches", "frustration", "confusion", "discovery"];
        var word = words[Math.floor(Math.random()*words.length)];

    }
        var answerArray = [];
        for (var i =0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = word.length;


        while (remainingLetters > 0) {
            alert(answerArray.join(" "));
            var guess = prompt("Guess a letter");
            if (guess === null) {
                break;
            }   
            } 
            else if (guess.length !==1) {
                    alert("Please enter a single letter.");
                }
                else {  
                    for (var k = 0; k < word,length; k++){
                        if (word[k] === guess){
                            answerArray[k] = guess;
                            remainingLetters--;
                        }
                    }            
                    
                }    
                 
}        
                alert(answerArray.join(" "));
                alert("Cool! The asnswer was"+word);
                    
                    
    
       
       
       
       
       
       
