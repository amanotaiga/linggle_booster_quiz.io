

var answers = ["2","1"], 
    tot = answers.length;
var valList = [];
var test = 0;

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

function Clear(){
  var radios;
  var ans;
    for (var i=0; i<tot; i++){
        ans = document.querySelectorAll(".ans"+i);
       radios = document.getElementsByName("question"+i);
     for(var y=0; y<radios.length; y++){
      radios[y].disabled = false;
    }
     for(var j=0; j<ans.length; j++){
      ans[j].style.backgroundColor = "transparent";
      ans[j].style.color = "black"; 
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

function returnScore(){
  score = getScore();
  alert("Your score is "+ score +"/"+ tot);
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
          y[answers[i]-1].style.color = "white"; 
      }      
    } 
}
