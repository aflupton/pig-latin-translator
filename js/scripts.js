var firstWord="";
var vowels=["a","e","i","o","u"];

// business logic
var pigLatin = function(sentence) {

}

// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#latin").val());
    var index=sentence.indexOf(" ");
    firstWord = sentence.slice(0);
    if (firstWord.length=="1"){
      vowels.forEach(function(vowel){
        if(firstWord.charAt(0)===vowel.toString()){
          firstWord=firstWord+"ay";
        } else{}
      });
    } else {
      vowels.forEach(function(vowel){
        if(firstWord.charAt(0)===vowel.toString()){
          firstWord=firstWord+"way";
        } else{};
      });
    }

    $(".output").text(firstWord);


    $("#result").show();
  });
});
