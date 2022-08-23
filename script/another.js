document.getElementById('btn-mashrafi').addEventListener('click', function(){
   const playerName = document.getElementById('mashrafi-header');
   const playerHeader = playerName.innerText ;

   const disabled = document.getElementById('btn-mashrafi')
   disabled.setAttribute('disabled', ' ');
   
   const setText = document.getElementById('selected-item');
   const li = document.createElement('li');
   li.innerText = playerHeader ;
   setText.appendChild(li);
   console.log(setText);
});

document.getElementById('btn-sakib').addEventListener('click', function(){
   const playerName = document.getElementById('sakib-header');
   const playerHeader = playerName.innerText ;

   const disabled = document.getElementById('btn-sakib')
   disabled.setAttribute('disabled', ' ');

   const setText = document.getElementById('selected-item');
   const li = document.createElement('li');
   li.innerText = playerHeader ;
   setText.appendChild(li);
   console.log(setText);
});

document.getElementById('btn-sabbir').addEventListener('click', function(){
   const playerName = document.getElementById('sabbir-header');
   const playerHeader = playerName.innerText ;

   const disabled = document.getElementById('btn-sabbir')
   disabled.setAttribute('disabled', ' ');

   const setText = document.getElementById('selected-item');
   const li = document.createElement('li');
   li.innerText = playerHeader ;
   setText.appendChild(li);
   console.log(setText);
});
document.getElementById('btn-mehedi').addEventListener('click', function(){
   const playerName = document.getElementById('mehedi-header');
   const playerHeader = playerName.innerText ;

   const disabled = document.getElementById('btn-mehedi')
   disabled.setAttribute('disabled', ' ');

   const setText = document.getElementById('selected-item');
   const li = document.createElement('li');
   li.innerText = playerHeader ;
   setText.appendChild(li);
   console.log(setText);
});
document.getElementById('btn-rubel').addEventListener('click', function(){
   const playerName = document.getElementById('rubel-header');
   const playerHeader = playerName.innerText ;

   const disabled = document.getElementById('btn-rubel')
   disabled.setAttribute('disabled', ' ');

   const setText = document.getElementById('selected-item');
   const li = document.createElement('li');
   li.innerText = playerHeader ;
   setText.appendChild(li);
   console.log(setText);
});


document.getElementById('calculate-btn').addEventListener('click', function(){
   const perPlayer = document.getElementById('per-player-field');
   const perPlayerValueString = perPlayer.value;
   const perPlayerValueStringConvert = parseFloat(perPlayerValueString);
   
   const setTotal = document.getElementById('pleyer-expenses');
   const setTotalString = setTotal.innerText ;
   const setTotalValue = parseFloat(setTotalString);
   const total = setTotalValue + perPlayerValueStringConvert ;
   setTotal.innerText = total ;
   
});


document.getElementById('calculate-total-btn').addEventListener('click', function(){
   const managerField = document.getElementById('manager-field');
   const managerValueString = managerField.value;
   const managerValue = parseFloat(managerValueString);

   const coachField = document.getElementById('coach-field');
   const coachValueString = coachField.value;
   const coachValue = parseFloat(coachValueString);
   
   const managerAndCoachTotalCost = managerValue + coachValue ;
   
   const setValueById = document.getElementById('pleyer-expenses');
   const setValueByIdString = setValueById.innerText ;
   const setValue = parseFloat(setValueByIdString);

   const totalValueSet = managerAndCoachTotalCost + setValue;
   
   const totalCost = document.getElementById('total-cost-all-player');
   const totalMoneyString = totalCost.innerText ;
   const totalMoney = parseFloat(totalMoneyString);
   
   totalCost.innerText = totalValueSet ;
})

