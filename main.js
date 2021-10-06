//SCROLL MENU HEADER LINK INTERNO

const itemMenu = document.querySelectorAll(".nav a[href^='#']") //selecionando todos os links que começam com a hashtag após o href

itemMenu.forEach(function(item) {
    item.addEventListener('click', scrollId)

})

function scrollId(e) {
    e.preventDefault() // tirar um comportamento padrão definido no html

    const element = e.target
    const id = element.getAttribute('href')
    const link = document.querySelector(id).offsetTop
    //console.log(e.target)
    //console.log(id)
    //console.log(to.offsetTop)
    window.scroll({
        top: link,
        
        behavior: "smooth"
    })
}


//Button CLIQUE AQUI scroll para Agendamento

const cliqueAquiBtt = document.querySelector("#btt-home")
cliqueAquiBtt.addEventListener('click', scrollToAppoint)


function scrollToAppoint() {

    window.scroll({
        top: 2469,

        behavior: "smooth"
    })
}



//Preenchimento do forms e envio

const agendamento = document.querySelector("#formAgendamento")
let temErro = false // variável de controle para verificar se tem erro no formulario

agendamento.addEventListener('submit', validation)

function validation(e) {
    e.preventDefault() // impedir que o formulario seja enviado antes de verificar todos os campos do forms
    
    inputName()
    inputFullName()
    inputMail()
    inputTel()
    selectOffice()
    inputAppoint()

    if(!temErro) {
        agendamento.submit() 
    }

}

function inputName() {
    

    const inputNome = document.forms['formAgendamento']['nome'] // document.forms vai identificar todos os formularios contidos em uma página e depois com a ID e o Name identificamos qual usarmos

    const spanNome = inputNome.nextSibling.nextSibling //Nextsibling retorna o próximo filho de uma tag pai, no caso o input esta dentro da div e a tag irmã do input é o span .error vazio

    if(!inputNome.value) {
        temErro = true

        inputNome.classList.add('inputError')

        spanNome.innerText = 'Digite o nome corretamente'
    } else {
        
        inputNome.classList.remove('inputError')

        spanNome.innerText = ''
    }
}

function inputFullName() {
    

    const inputSobreNome = document.forms['formAgendamento']['sobrenome']

    const spanSobreNome = inputSobreNome.nextSibling.nextSibling

    if(!inputSobreNome.value) {
        temErro = true

        inputSobreNome.classList.add('inputError')

        spanSobreNome.innerText = 'Digite seu sobrenome corretamente'
    } else {
        inputSobreNome.classList.remove('inputError')

        spanSobreNome.innerText = ''
    }
}

function inputMail() {

    const inputEmail = document.forms['formAgendamento']['email']

    const spanEmail = inputEmail.nextSibling.nextSibling

    if(!inputEmail.value) {
        temErro = true

        inputEmail.classList.add('inputError')

        spanEmail.innerText = 'Digite seu email corretamente'
    } else {
        inputEmail.classList.remove('inputError')

        spanEmail.innerText = ''
    }
}

function inputTel() {

    const inputTelefone = document.forms['formAgendamento']['telefone']

    const spanTel = inputTelefone.nextSibling.nextSibling

    if(!inputTelefone.value) {
        temErro = true

        inputTelefone.classList.add('inputError')

        spanTel.innerText = 'Digite seu celular corretamente'
    } else {
        inputTelefone.classList.remove('inputError')

        spanTel.innerText = ''
    }
}

function selectOffice() {
    const selectOff = document.forms['formAgendamento']['escritorio']

    const spanSelect = selectOff.nextSibling.nextSibling

    if(!selectOff.value) {
        temErro = true

        selectOff.classList.add('selectError')

        spanSelect.innerText = 'Selecione um escritório'
    } else {
        selectOff.classList.remove('selectError')

        spanSelect.innerText = ''
    }
}

function inputAppoint() {
    const inputAgenda = document.forms ['formAgendamento']['agendamento']

    const spanAgendamento = inputAgenda.nextSibling.nextSibling

    if(!inputAgenda.value) {
        temErro = true

        inputAgenda.classList.add('inputError')

        spanAgendamento.innerText = 'Escolha uma data e um horário'
    } else {
        
        inputAgenda.classList.remove('inputError')

        spanAgendamento.innerText = '' 
    }
}


//ANIMAÇÃO das DIVS//

const debounce = function (func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout (later, wait)
        if(callNow) func.apply(context, args)
    }
} // função criada por uma biblioteca JS chamada Lodash para melhorar a interação das funções e só executam quando necessário

const target = document.querySelectorAll("[data-anime]") //selecionando todas os elementos do css com o nome data-anime
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); // a distância da barra para o topo da página. 
    
    target.forEach(function(e) { //lista de elementos que se comunica com cada elemento espcífico e verifica a distância de cada elemento para o topo

        if(windowTop > e.offsetTop) { 
            e.classList.add(animationClass)
        } else {
            e.classList.remove(animationClass)
        }

    })
}

animeScroll()

if(target.length) { // verificar se existe um item dentro do target para não executar a função sem necessidade
    window.addEventListener('scroll', debounce(function() {
        animeScroll()
    }, 100))
}