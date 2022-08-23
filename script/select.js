// arrary added items
function playerDisplay (playerList)
{

    const listBody =document.getElementById('list-container')
    listBody.innerText='';
    for( let i=0; i<5; i++){
    
        const newPlayerName = playerArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = newPlayerName;
        listBody.appendChild(li);
    }

    if(playerArray.length>5){
        
        alert('You cannot add more');
       
     }
  
}



// arrary
const playerArray =[];



//    Object push in arrary section
function addToCart (element){
    const playerName = element.parentNode.children[0].innerText;
    element.style.cursor = 'not-allowed'
    element.disabled = true;
   
    const playerObj ={
        playerName : playerName 
    }
   
    playerArray.push(playerObj);

    // limit seleted players
if(playerArray.length <= 5){
    document.getElementById('Select-players').innerText =playerArray.length;
    
}
playerDisplay(playerArray);
}