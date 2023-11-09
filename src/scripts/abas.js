
function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for(let i=0; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('seasons__list--is-active')
    }
}

function removeBotaoAtivo(){
    
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i=0; i < buttons.length; i++){
        buttons[i].classList.remove('seasons__tabs__button--is-active')
    }
}


module.exports = {
    escondeAbas: escondeAbas,
    removeBotaoAtivo: removeBotaoAtivo
};