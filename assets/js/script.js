
const witchCraft = document.querySelectorAll('#witchCraft-container > img'); 
const receptacles = document.querySelectorAll('#drop-container > span');
const startGame = document.getElementById('start');

//start
startGame.addEventListener('click', () => {
  startGame.style.opacity = '0';
  startGame.style.display = 'none';
});

//drag elements
witchCraft.forEach(el => {
    el.addEventListener('dragstart', dragStartHandler);
    el.addEventListener('dragend', dragEndHandler);
  })
  function dragStartHandler(e) {   
    e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
    e.target.style = 'opacity: 0.3';    
  }

  function dragEndHandler(e) {
    e.target.style = 'opacity: 1';
  }

////drop
receptacles.forEach(el => {
    el.addEventListener('dragenter', dragEnterHandler);
    el.addEventListener('dragover', dragOverHandler);
    el.addEventListener('dragleave', dragLeaveHandler);
    el.addEventListener('drop', dropHandler);
  })
  
  function dragEnterHandler(e) {
    e.target.style = 'border: 2px dashed gray; border-radius: 20px; background: whitesmoke';
  }
  
  function dragOverHandler(e) {   
    e.preventDefault();
  }

  function dragLeaveHandler(e) {
    e.target.style = 'border: dashed 3px white; border-radius: 20px; background: #9DF1DF';   
  }
  
  function dropHandler(e) {
    e.preventDefault(); 
    dragLeaveHandler(e);   
    
    const dataSourceId = e.dataTransfer.getData('text'); 
    const dataTargetId = e.target.getAttribute('data-target-id');    
  
    if(dataSourceId === dataTargetId) {          
      e.target.appendChild(document.getElementById(dataSourceId));
      e.target.style = 'border: none; background: transparent; color: transparent;';      
      e.target.setAttribute('draggable', false);     
      
      switch (dataSourceId) {
        case 'plante':
          alert('Oui, très utile pour concocter de l\'énergie !');
          break;
        case 'potion':
          alert('BRAVO ! tu es arrivé.e au bout, voici une potion anti miso. La prochaine fois on fera un onguent "temps de tchatche"');
          break;   
        case 'pentacle':
          alert('Le pentacle du triomphe apporte de l\'aide'); 
          break;
        case 'familier':
          alert('C\'est ton meilleur ami woke...et puis, il aime jouer avec le pentacle');  
          break;
        case 'cristal':
          alert('LE cristal de visibilité, pfiou ! encore une étape...');
          break;
        case 'livre':
          alert('Un livre d\'autrice. Il te donne des formules pour continuer ta mixture');
      }
    }     
  }