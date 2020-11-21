let navbar = document.querySelector('nav')

let informacoes = document.querySelectorAll('.informacoes')
let informacoesLegais = document.querySelector('.informacoes-legais')
let infoHeader = document.querySelector('.info-header').offsetTop

let box = document.querySelectorAll('.box')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')

let fotoFiltro = document.querySelectorAll('.filtro-foto', )


console.log(informacoes)
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= navbar.offsetHeight){
        navbar.style.backgroundColor = "#1e1b26"
        navbar.style.borderBottom = "1px solid #fafafa0a"
    }else{
        navbar.style.backgroundColor = '#1e1b2611'
    }
})

window.addEventListener('scroll', function(event){
    informacoes.forEach((element, index) => {
        
        if(element.offsetTop <= window.pageYOffset + navbar.offsetHeight){
          box[index].classList.add('active')
          box[index].style.left = "0"
          fotoFiltro[index].classList.add('hover')
      }
    });
})


window.addEventListener('scroll', function(event){
    if(informacoes[1].offsetTop <=window.pageYOffset + navbar.offsetHeight ){
        box2.classList.add('active2')
        box2.style.right = "0"
    }
})

window.addEventListener('scroll', function(event){
    if(informacoesLegais.offsetTop <=window.pageYOffset + navbar.offsetHeight ){
        box3.classList.add('active3')
        box3.style.top = "40%"
    }
})