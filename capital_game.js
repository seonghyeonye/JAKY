// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var myQuestion = document.getElementById("pr2__question"); 
var myAnswer = document.getElementById("pr2__answer");
var btnSubmit = document.getElementById("pr2__submit");
var myTable = document.getElementById("table");
var optionAll = document.getElementById("opt_all");
var optionCorrect = document.getElementById("opt_correct");
var optionWrong = document.getElementById("opt_wrong");

var rdmIndex;
var currentOption = 'no';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function refreshQuestion() {
  rdmIndex = getRandomInt(0, pairs.length);
  myQuestion.innerHTML = pairs[rdmIndex].country;
  myAnswer.focus();
}

function isCorrect(myTry) {
  var answer = pairs[rdmIndex].capital;
  return ((myTry.toLowerCase() == answer.toLowerCase()) ? true : false);
}

function addRow() {
  var addrow1 = myTable.insertRow(3);
  var addcell1 = addrow1.insertCell(-1);
  var addcell2 = addrow1.insertCell(-1);
  var addcell3 = addrow1.insertCell(-1);
  var addcell4 = addrow1.insertCell(-1);
  addcell4.innerHTML = "<input type='button' value='Delete' onclick='btnDeleteRow(this)'>";
  
  if (isCorrect(myAnswer.value)) {
    addcell1.innerHTML = pairs[rdmIndex].country;
    addcell2.innerHTML = pairs[rdmIndex].capital;
    addcell3.innerHTML = "<i class='fas fa-check'></i>"
    addrow1.className = "correct";
  } else {
    addcell1.innerHTML = pairs[rdmIndex].country;
    addcell2.innerHTML = myAnswer.value.strike();
    addcell3.innerHTML = pairs[rdmIndex].capital
    addrow1.className = "incorrect";
  }
  
  hideRow(currentOption);
}

function btnDeleteRow(obj) {
  var tmpTable=obj.parentNode.parentNode;
  tmpTable.parentNode.removeChild(tmpTable);
}

function hideRow(myOption) {
  currentOption = myOption;
  for (var i = 3; i < myTable.rows.length; i++) {
    if (myTable.rows[i].className == myOption) {
      myTable.rows[i].style.display = 'none';
    } else {
      myTable.rows[i].style.display = '';
    }
  }
}

function bindEvents() {
  btnSubmit.onclick = function() {  
    console.log('btn Clicked');
    console.log(rdmIndex);
    console.log(isCorrect(myAnswer.value));
    addRow();
    refreshQuestion();
    myAnswer.value = "";
    console.log("---------");
  }

  myAnswer.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
      btnSubmit.click();
    }
  });
 
    $("#pr2__answer").autocomplete({
    source:pairs.map(x => x.capital), 
    select:function(event,ui){ setTimeout(function(){
      if(event.keyCode == 13){}
      else{btnSubmit.click();}   
      }, 0.01);
    }
  });
}


$( document ).ready(function() {
  console.log('delete');
  var country_capital_pairs = pairs
  refreshQuestion();
  bindEvents();
});