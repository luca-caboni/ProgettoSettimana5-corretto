let arrayAnimali  = ['🐱', '🦉', '🐾', '🦄', '🦋', '🐛', '🐝','🐬','🐱', '🦉', '🐾', '🦄', '🦋', '🐛', '🐝','🐬','🦐','🦅','🦆','🦎','🦎','🦆','🦅','🦐'];
    
let arrayComparison = [];
    
document.body.onload = startGame();
    
var interval;
let iconsFind = document.getElementsByClassName("find");
let modal = document.getElementById('modal');
let timer = document.querySelector(".timer");
   
    
  function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }
    
  function playAgain(){
    modal.classList.remove("active");
    startGame();
  }
    
  function startGame(){
    clearInterval(interval);
    arrayConfronto = [];
    
    let arrayShuffle = shuffle(arrayAnimali);
    
    let lista = document.getElementById('griglia');
      
    while (lista.hasChildNodes()) {  
      lista.removeChild(lista.firstChild);
    }
    
    for(let i = 0; i < 24; i++){    
    
      let box = document.createElement('div');
      let element = document.createElement('div');
      element.className = 'icon';
      document.getElementById('griglia').appendChild(box).appendChild(element);
      element.innerHTML = arrayShuffle[i];
    }
    
    
    startTimer();
    
    let icon = document.getElementsByClassName("icon");
    let icons = [...icon];
    
    for (let i = 0; i < icons.length; i++){
      icons[i].addEventListener("click", displayIcon);
      icons[i].addEventListener("click", openModal);
    }
  }
    
    
  function displayIcon(){
    
    let icon = document.getElementsByClassName("icon");
    let icons = [...icon];
    
    this.classList.toggle("show");
    arrayComparison.push(this);
    
    let len = arrayComparison.length;
    if(len === 2){
      if(arrayComparison[0].innerHTML === arrayComparison[1].innerHTML){
        arrayComparison[0].classList.add("find","disabled");
        arrayComparison[1].classList.add("find","disabled");
        arrayComparison = [];               
      } else {
         icons.forEach(function(item){
         item.classList.add('disabled');
        });
          setTimeout(function(){
            arrayComparison[0].classList.remove("show");
            arrayComparison[1].classList.remove("show");
            icons.forEach(function(item){
              item.classList.remove('disabled');
              for(var i = 0; i < iconsFind.length; i++){
                  iconsFind[i].classList.add("disabled");
                }
            });
            arrayComparison = [];
          },700); 
        }
    }
  }
    
    
  function openModal(){  
    if (iconsFind.length == 24){
      clearInterval(interval);
      modal.classList.add("active");
      document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
      modal.classList.add("backInDown");
      closeModal();
    }
  }
    
  function closeModal(){  
    closeicon.addEventListener("click", function(e){
      modal.classList.remove("active");
      startGame();
    });
  }
    
    
  function startTimer(){
  
    let s = 0;
    let  m = 0; 
    let h = 0;
    
    interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
      s++;
      if(s == 60){
        m++;
        s = 0;
      }
      if(m == 60){
        h++;
        m = 0;
      }
    },1000);
    }
    
   