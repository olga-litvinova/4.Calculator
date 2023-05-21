
const number=document.querySelectorAll('.number');
const history=document.querySelector('.history');
const result=document.querySelector('.result');
const minus=document.querySelector('[data-="minus"]');
const add=document.querySelector('[data-="add"]');
const divide=document.querySelector('[data-="divide"]');
const multiply=document.querySelector('[data-="multipy"]');
const equal=document.querySelector('[data-="equal"]');
const clean=document.querySelector('[data-="clean"]');
const allClean=document.querySelector('[data-="allclean"]');
let historyEmptyDisplay=true;
let resultEmptyDisplay=true;
let mathClicked=false;
let a;
let b;
let operator;
let error="Enter a number";


minus.addEventListener('click', setOperator);
add.addEventListener('click', setOperator);
divide.addEventListener('click', setOperator);
multiply.addEventListener('click', setOperator);

equal.addEventListener('click', calculate);
clean.addEventListener('click', cleanValue);
allClean.addEventListener('click', cleanAll);

function setOperator() {
  if(mathClicked==false && historyEmptyDisplay==true){
    history.innerHTML=error;
  }
  else if(mathClicked==false && historyEmptyDisplay==false){ 
    mathClicked = true;
    operator = this.textContent;
    a=history.textContent;
    history.innerHTML=a+" "+operator+" ";
  }
  else{
    operate = this.textContent;
    history.innerHTML=a+" "+operator+" ";
  }
}

function calculate(){
  b=history.textContent.substring(history.textContent.indexOf(operator)+1);
  a = parseFloat(a);
  b = parseFloat(b);
  history.style.fontSize = "30px";
  history.style.marginTop="0px"
  history.style.marginBottom="0px"
  resultEmptyDisplay=false;
  if (operator=="+"){
    result.innerHTML=a+b;
  }
  else if (operator=="-"){
    result.innerHTML=a-b;
  }
  else if (operator=="*"){
    result.innerHTML=a*b;
  }
  else if (operator=="/"){
    result.innerHTML=a/b;
  }
}

function cleanAll(){
  a='';
  b='';
  operator==undefined;
  historyEmptyDisplay=true;
  mathClicked=false;
  result.innerHTML="";
  history.innerHTML=""
  history.style.fontSize = "45px";
  history.style.marginTop="15px";
  resultEmptyDisplay=true;
}

function cleanValue(){
  if(mathClicked==true && resultEmptyDisplay==true){
    history.innerHTML =a+" "+operator+" "+(history.innerHTML.slice(a.length+2,history.innerHTML.length-1));
  }
  else if(mathClicked==false && resultEmptyDisplay==true){
    history.innerHTML =(history.innerHTML.slice(0,history.innerHTML.length-1));
  }
  else if(resultEmptyDisplay==false){
  console.log(result);
  }
}

if(historyEmptyDisplay==true && operator==undefined){
  for(let index=0;index<number.length; index++){
    const element=number[index];
    element.addEventListener('click', displayNumber);
      function displayNumber() {
        if(historyEmptyDisplay==true){
          history.style.fontSize = "45px";
          history.style.marginTop="15px"
          history.innerHTML = (element.textContent); 
          historyEmptyDisplay=false;
        }
        else{
          history.innerHTML =history.textContent + element.textContent;
          };
      }  
    }
  };    



  



