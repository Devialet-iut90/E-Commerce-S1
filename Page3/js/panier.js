
let btnPlus = document.querySelector('.qté-plus');
let btnMoins = document.querySelector('.qté-moins');

btnPlus.addEventListener('click', inclureQuantité);
btnMoins.addEventListener('click', enleveQuantité);



function inclureQuantité(){
  document.querySelector('.quantité').value = parseInt(document.querySelector('.quantité').value) +1;

}

function enleveQuantité(){
  if(document.querySelector('.quantité').value > 0){
    document.querySelector('.quantité').value = parseInt(document.querySelector('.quantité').value) -1;
  }
}
