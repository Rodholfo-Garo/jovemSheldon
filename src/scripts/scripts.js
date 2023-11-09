const { escondeAbas, removeBotaoAtivo } = require('./aba.js');


document.addEventListener('DOMContentLoaded', function(){

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-tab-question]');

    for (let i = 0; i < buttons.length ; i++){
    
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
    
            escondeAbas();
            aba.classList.add('seasons__list--is-active');
    
            removeBotaoAtivo();
            botao.target.classList.add('seasons__tabs__button--is-active') 
        })        
    }

    for (let i = 0 ; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const alementoPai = elemento.target.parentNode;

    alementoPai.classList.toggle(classe);
}