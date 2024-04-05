document.addEventListener('click', function() 
{
    let checkbox = document.querySelector('.checkbox')
    let whiteSpans = document.querySelectorAll('.header__burger-btn span')
    let changeBlackLogo = document.querySelector('.navbar img')
    let body = document.querySelector('body')
    let inputs = document.querySelectorAll('#order__input')
    let feeds = document.querySelectorAll('.feed__row-item img')
    if(checkbox.checked){
        body.style.background = "#2a2a2a"
        body.style.transition = '.5s'
        body.style.color = "#fff"
        whiteSpans.forEach(function(span){
            span.style.background = "#fff"
        })
        inputs.forEach(function(input){
            input.style.color = "#fff"
        })
        changeBlackLogo.src = './img/header/logo1.png'
        feeds.forEach(function(feed){
            feed.src = "./img/feed/icon.png"
        })
        
    }
    else{
        body.style.background = ""
        body.style.color = ""
        inputs.forEach(function(input){
            input.style.color = ""
        })
        whiteSpans.forEach(function(span){
            span.style.background = ""
        })
        changeBlackLogo.src = "./img/header/logo.png"
        feeds.forEach(function(feed){
            feed.src = "./img/feed/icon.svg"
        })

    }
})

let menuOpen = false

document.querySelector('.header__burger-btn').addEventListener('click', function(){
    let open = document.querySelector('.nav__list')
    let spanOne = document.querySelector('.header__burger-btn span:nth-child(1)')
    let spanTwo = document.querySelector('.header__burger-btn span:nth-child(2)')
    let spanThree = document.querySelector('.header__burger-btn span:nth-child(3)')
    if (open) {
        if(!menuOpen) {
            open.style.top = "0"
            open.style.left = "0"
            spanOne.style.transform = "rotateZ(45deg)"
            spanOne.style.transition = ".3s"
            spanTwo.style.opacity = "0"
            spanTwo.style.transition = ".09s"
            spanThree.style.transform = "rotateZ(-45deg)"
            spanThree.style.transition = ".3s"
            menuOpen = true
            
        }
        else{
            open.style.left = "-100%"
            spanOne.style.transform = ""
            spanTwo.style.display = ""
            spanThree.style.transform = ""
            spanTwo.style.opacity = ""
            menuOpen = false
        }
    }
})