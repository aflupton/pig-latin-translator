var firstWord = "";
var vowels = ["a","e","i","o","u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

var tempConsonant="";
var finalWord="";
var firstVowel=0;

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#latin").val());
    //var index=sentence.indexOf(" ");
    firstWord = sentence.slice(0);
    if (firstWord.length=="1"){
      vowels.forEach(function(vowel){
        if(firstWord.charAt(0)===vowel.toString()){
          firstWord=firstWord+"ay";
        }
        else{}
      });
    }
    else {
      vowels.forEach(function(vowel) {
        if(firstWord.charAt(0)===vowel.toString()){
          firstWord=firstWord+"way";
          firstVowel++;
        }
        else{}
      });
      if(firstVowel==0){
        consonants.forEach(function(consonant){
          for(x=0; x<firstWord.length; x++){
            if(consonant===firstWord.charAt(x)&&consonant==="q"){
              if(firstWord.charAt(x+1)==="u"){
                tempConsonant=tempConsonant+"qu";
                x++;
              }
              else{
                console.log("before TempConsonant ="+tempConsonant+ "Consonant=" +consonant);
                tempConsonant=tempConsonant+consonant;
                console.log("after TempConsonant ="+tempConsonant+ "Consonant=" +consonant);
              }
            }
            else{
              if(firstWord.charAt(x)===consonant.toString()){
                tempConsonant=tempConsonant+consonant;
              }
              else{
                firstWord=firstWord.slice(x);
                x=firstWord.length +1;
              }
            }
          }
        });
        firstWord=firstWord+tempConsonant+"ay";
        tempConsonant="";
      } else{};
    }
    $(".output").text(firstWord);
    $("#result").show();
  });
});
