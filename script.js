let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let listen1 = document.getElementById('btn_listen1')
let listen2 = document.getElementById('btn_listen2')
let listen3 = document.getElementById('btn_listen3')

let translate1 = document.getElementById('translate1')
let translate2 = document.getElementById('translate2')
let translate3 = document.getElementById('translate3')

let translateA = document.getElementById('translateA')
let translateB = document.getElementById('translateB')

let click = document.getElementById('click')

//Question 01
btn1.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('wrongSound')
    audio.play()
    btn1.style.backgroundColor = 'red'
    btn1.style.color = 'yellow'
  
})

translate1.addEventListener('click', function() {
    click.play()
    translateA.textContent = 'O que o homem está fazendo?'
    translateB.textContent = 'O homem está dormindo.'
    setTimeout(() => {
        translateA.textContent = ''
        translateB.textContent = ''
    }, 2000);
})

listen1.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line1')
    audio.play()
    setTimeout(() => {
    let audio = document.getElementById('line2')
    audio.play()
    }, 1500);
})

//Question 02
btn2.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('correctSound')
    audio.play()
    btn2.style.backgroundColor = 'limegreen'
    btn2.style.color = 'yellow'
  
})

translate2.addEventListener('click', function() {
    click.play()
    translateA.textContent = 'O que o homem está fazendo?'
    translateB.textContent = 'O homem está andando.'
    setTimeout(() => {
        translateA.textContent = ''
        translateB.textContent = ''
    }, 2000);
})

listen2.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line1')
    audio.play()
    setTimeout(() => {
    let audio = document.getElementById('line4')
    audio.play()
    }, 1500);
})

//Question 03
btn3.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('wrongSound')
    audio.play()
    btn3.style.backgroundColor = 'red'
    btn3.style.color = 'yellow'
  
})

translate3.addEventListener('click', function() {
    click.play()
    translateA.textContent = 'O que o homem está fazendo?'
    translateB.textContent = 'O homem está dançando.'
    setTimeout(() => {
        translateA.textContent = ''
        translateB.textContent = ''
    }, 2000);
})

listen3.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line1')
    audio.play()
    setTimeout(() => {
    let audio = document.getElementById('line6')
    audio.play()
    }, 1500);
})




