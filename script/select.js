document.getElementById('btn-mashrafi').addEventListener('click', function () {

   const mashrafiHeader = document.getElementById('mashrafi-header');
   const mashrafiHeaderValue = mashrafiHeader.innerText;
   
   const setMashrafiValue =document.getElementById('selected-one');
   setMashrafiValue.innerText = mashrafiHeaderValue;
});


document.getElementById('btn-sakib').addEventListener('click', function(){
   const sakibHeader = document.getElementById('sakib-header');
   const sakibHeaderValue = sakibHeader.innerText;

   const setSakibValue = document.getElementById('selected-two');
   setSakibValue.innerText = sakibHeaderValue ;
});

document.getElementById('btn-sabbir').addEventListener('click',function(){
   const sabbirHeader = document.getElementById('sabbir-header');
   const sabbirHeaderValue = sabbirHeader.innerText;

   const setSabbirValue = document.getElementById('selected-three');
   setSabbirValue.innerText = sabbirHeaderValue ;
});

document.getElementById('btn-mehedi').addEventListener('click', function(){
   const mehediHeader = document.getElementById('mehedi-header');
   const mehediHeaderValue = mehediHeader.innerText;

   const setMehediValue = document.getElementById('selected-four');
   setMehediValue.innerText = mehediHeaderValue ;
});

document.getElementById('btn-rubel').addEventListener('click', function(){
   const rubelHeader = document.getElementById('rubel-header');
   const rubelHeaderValue = rubelHeader.innerText;

   const setRubelValue = document.getElementById('selected-five');
   setRubelValue.innerText = rubelHeaderValue;
})



// const playerArray = [];

// function addToCart(element){
//    // console.log(element.parentNode.children[1].innerText);

//    const playerName = element.parentNode.children[1].innerText;
   
//    const playerObject = {
//       playerName : playerName ,
//    }

//    playerArray.push(playerObject);

//    console.log(playerArray);
   
//    console.log(playerArray.length);
// };