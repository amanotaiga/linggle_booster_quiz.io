var clozeAnswers = ["impressive"],
clozeTot = clozeAnswers.length;
var clozeValList = [];
var answers = ["2","3","3"],
tot = answers.length;
    var valList = [];
function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++){
      radios[y].disabled = true;
      if(radios[y].checked){
        checkedValue = radios[y].value; // return the checked value
       }
    }
    return checkedValue; // return the checked value
}
function getTypedValue( textName ){
    var text = document.getElementsByName( textName ); 
    for(var y=0; y<text.length; y++){
      enterText = text[y].value; 
    }
    return enterText; 
}
function Clear(){
  var radios;
    for (var i=0; i<tot; i++){
      radioName = "question"+i;  
       radios = document.getElementsByName(radioName); 
    for(var y=0; y<radios.length; y++){
      radios[y].disabled = false;
    }
   }
}
function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++){
      Checkedval = getCheckedValue("question"+i);
    if(Checkedval===answers[i]){   
       score += 1; // increment only 
       valList[i] = Checkedval;
    }
    else{
        valList[i] = Checkedval;     
    }
  }
  return score;
}
function getClozeScore(){
  var score = 0;
  for (var i=0; i<clozeTot; i++){
      enterText = getTypedValue("cloze"+i);
    if(enterText === clozeAnswers[i]){   
       score += 1; // increment only 
       clozeValList[i] = 1;
    }
    else{
        clozeValList[i] = 0;     
    }
  }
  return score;
}
function returnScore2(){
  score = getClozeScore();
   // document.getElementById("demo").innerHTML = score;
  // alert("Your score is "+ score +"/"+ tot);
    var i;
    for (i = 0; i < clozeTot; i++) {
         var nam = document.getElementById('clozeA'+i)
         // var nam = document.querySelectorAll("clozeA"+i);
        if(clozeValList[i] == 1){
        nam.style.backgroundColor= "#0C0";
        nam.style.color= "white";
        }
      else{
         var blockName = document.getElementById('clozeAns'+i)
        blockName.style.display = "block";
        blockName.style.fontWeight = "bold";
        nam.style.backgroundColor= "red";
        nam.style.color= "white";
      }      
    }
      // document.getElementById("demo").innerHTML = score;
      score1 = returnScore();
     alert("Your score is "+ (score + score1) +"/"+ (tot+clozeTot));
     // document.getElementById("demo").innerHTML = score;
}
function returnScore(){
  score1 = getScore();
  // alert("Your score is "+ score +"/"+ tot);
    var i;
    for (i = 0; i < tot; i++) {
          var y = document.querySelectorAll(".ans"+i);
         //document.getElementById("demo").innerHTML = valList[0];
         //document.getElementById("testing").innerHTML = answers[0];
        if(valList[i] !== answers[i]){
           y[valList[i]-1].style.backgroundColor = "red"; 
           y[answers[i]-1].style.backgroundColor = "#0C0";
           y[answers[i]-1].style.color = "white"; 
        }
      else{
          y[answers[i]-1].style.backgroundColor = "#0C0";         
      }      
    } 
  return score1
}
    