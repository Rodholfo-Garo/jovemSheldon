document.addEventListener('DOMContentLoaded', function(){

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-tab-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

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

    window.addEventListener("scroll", function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual > alturaHero){
            acultarElementosDoHeader();
        }else{
            exibirElementosDoHeader()
        }

    })

})

function acultarElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibirElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const alementoPai = elemento.target.parentNode;

    alementoPai.classList.toggle(classe);
}

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