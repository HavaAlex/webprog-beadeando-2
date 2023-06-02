
  var minNumber = -20;
  var maxNumber = 20;
  var bosshpmax = 0;
  var operators = ['+', '-', '*', '/'];
  var zarojel1 = ['('];
  var zarojel2 = [')'];
  var numEquations = 2;
  var result = new Array;
  var result2 = new Array;
  var score = 0;
  var db = 0;
  if(document.body.id == "BossFight1.png"){
    document.getElementById("boss").style.filter = "brightness(50%)";
  }
  document.getElementById("menu").style.visibility = "hidden";
var sec = 0;
var timer;
function timerstart(sek){
  sec = sek;
  timer = setInterval(timerlogic,1000);
  if(document.getElementById("stopper") == undefined){
    var stopper = document.createElement("h1");
    stopper.id = "stopper";
  
    document.body.appendChild(stopper);
  }
  
}
function timerlogic(){
  document.getElementById("stopper").innerText= sec;
  document.getElementById("stopper").style.marginRight ="90%";
  document.getElementById("stopper").style.fontSize = "150px";
  document.getElementById("stopper").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
  document.getElementById("stopper").style.textShadow = "9px 9px 9px black";
  if(sec == 0){
    clearInterval(timer);
    open("index.html","_self");
  }
  sec --;
}


function egyenlet(){

  document.getElementById("boss").style.opacity="0";
  document.getElementById("boss").style.transition="2s";
  document.getElementById("karakterke").style.opacity="1";
  document.getElementById("karakterke").style.transition="2s";
  result = new Array;result2 = new Array;
  for (let i = 0; i < numEquations; i++) {
    var temp = null;
    while(temp == null || temp%1!=0 || temp<0){
     var num1 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
     var num2 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
     var num3 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
     const operator = operators[Math.floor(Math.random() * operators.length)];
     const operator2 = operators[Math.floor(Math.random() * operators.length)]; 
     var equation = '';
      if(num1 < 0){
        equation = `${zarojel1} ${num1} ${zarojel2}  ${operator} ${num2} ${operator2} ${num3}`;
   
       }
       if(num2 < 0){
        equation = `${num1} ${operator} ${zarojel1}  ${num2} ${zarojel2}  ${operator2} ${num3}`;
     
       } 
       if(num3 < 0){
        equation = `${num1} ${operator} ${num2} ${operator2} ${zarojel1}  ${num3} ${zarojel2} `;
        
       }
       if(num3 < 0 && num1 < 0){
        equation = ` ${zarojel1} ${num1} ${zarojel2} ${operator} ${num2} ${operator2} ${zarojel1}  ${num3} ${zarojel2} `;
   
       }  
       if(num3 < 0 && num2 < 0){
        equation = ` ${num1} ${operator} ${zarojel1}  ${num2} ${zarojel2}  ${operator2} ${zarojel1}  ${num3} ${zarojel2} `;
     
       }
       if(num1 < 0 && num2 < 0){
        equation = `${zarojel1} ${num1} ${zarojel2}  ${operator} ${zarojel1}  ${num2} ${zarojel2}  ${operator2} ${num3}`;
       
       }
       if(num1 < 0 && num2 < 0 && num3 < 0){
        equation = `${zarojel1} ${num1} ${zarojel2}  ${operator} ${zarojel1}  ${num2} ${zarojel2}  ${operator2} ${zarojel1} ${num3} ${zarojel2}`;
       
       }        
       else{
        equation = `${num1} ${operator} ${num2} ${operator2} ${num3}`;

       }

     
    

     
     temp = eval(equation);
    }
    result.push(temp);
    result2.push(equation);
    console.log(`${equation} = ${temp}`); 
  }
  bosshpmax += Math.max(...result);
  
  megjelenit();
}


function valasztas(p){
  if(timer != undefined){
    clearInterval(timer);
  }
  console.log(sec);
  var div = document.getElementById("score");
  div.innerHTML = "";
  var f = document.createElement("h1");
  var b = document.createElement("p");
  console.log(p.dataset.score);
  document.getElementById("szamok").innerHTML = "";
  document.getElementById("karakterke").style.opacity="0";
  document.getElementById("karakterke").style.transition="2s";

  if(sec != -1){
    score += Number(p.dataset.score);
  }
  f.innerText = "score: "+score;
  div.appendChild(f);
  document.getElementById("raj").style.visibility = "visible"
  db++;
  
  if(db == 5){
    var div = document.getElementById("score");
    div.innerHTML = "";
    var f = document.createElement("p");
    var b = document.createElement("p");
    console.log(p.dataset.score);
    document.getElementById("szamok").innerHTML = "";
    f.innerText = "score: "+score;
    div.appendChild(f);
    stopper.innerText = "";
    document.body.style.backgroundImage = "url('"+document.body.id+"')";
    document.getElementById("raj").style.visibility = "hidden";
    document.getElementById("karakterke").style.opacity="1";
    if(document.body.id == "BossFight1.png"){
      document.getElementById("boss").style.filter = "brightness(50%)";
      document.getElementById("boss").style.transition="2s";
    }
    if(document.body.id == "BossFight3.png"){
      document.getElementById("karakterke").style.top = "70%"
    }
    if(document.body.id == "BossFight4.png"){
      document.getElementById("boss").style.top = "60%"
    }
    
    if(document.body.id == "BossFight5.png"){
      document.getElementById("karakterke").style.filter = "brightness(50%)";
      document.getElementById("karakterke").style.transition="2s";
    }
      b.innerText = "BossHP: "+(bosshpmax-30);
    
    

    div.appendChild(b);

    boss();
  }else{
    setTimeout(egyenlet(),100);
    
  }
}

function megjelenit(){
  timerstart(10);
  var div = document.getElementById("szamok");
  div.innerHTML = "";
    for (let index = 0; index < numEquations; index++) {
      var p = document.createElement("p");
      p.dataset.score = result[index];
      p.setAttribute("onclick","valasztas(this)");
      p.innerText = result2[index];
      div.appendChild(p);
      document.getElementById("raj").style.visibility = "hidden";

    }
}

function boss(){
  bosshpmax-=30;
  var en = 0;
  var fonok = 0;
  en =0;
  fonok = 0;
  var div = document.getElementById("szamok");
  var l = document.createElement("p");
  if(score>bosshpmax){
    document.getElementById("boss").style.opacity = "1";
    console.log("nyertél");
    en++;
  }else{
    fonok++;
    document.getElementById("karakterke").style.opacity = "0";
    document.getElementById("karakterke").style.transition="2s";
    document.getElementById("boss").style.opacity = "1";
    console.log("vesztettél");
  }
  
  if(en>fonok){
    l.innerText = "Nyertél";
  }else{
    l.innerText = "Vesztettél";
    

  }
  div.appendChild(l);
  document.getElementById("menu").style.visibility = "visible";
}

function menu(){
  open("index.html", "_self");
}




