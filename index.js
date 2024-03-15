let toplama = document.querySelector(".toplama")
const chixma = document.querySelector(".chixma")
const vurma = document.querySelector(".vurma")
const bolme = document.querySelector(".bolme")
const netice = document.querySelector(".netice")


function toplamaDatas() {
    let first = document.querySelector(".first")
    let second = document.querySelector(".second")

    let firstNum = parseFloat(first.value)
    let secNum = parseFloat(second.value)

    let toplama = firstNum + secNum;
    netice.value=toplama
}

function chixmaDatas() {
    let first = document.querySelector(".first")
    let second = document.querySelector(".second")

    let firstNum = parseFloat(first.value)
    let secNum = parseFloat(second.value)

    let chixma = firstNum - secNum;
    netice.value=chixma
}

function vurmaDatas() {
    let first = document.querySelector(".first")
    let second = document.querySelector(".second")

    let firstNum = parseFloat(first.value)
    let secNum = parseFloat(second.value)

    let vurma = firstNum * secNum;
    netice.value=vurma
}

function bolmeDatas() {
    let first = document.querySelector(".first")
    let second = document.querySelector(".second")

    let firstNum = parseFloat(first.value)
    let secNum = parseFloat(second.value)

    if(secNum==0){
        alert("cannot divide to 0")
    }

    let bolme = firstNum / secNum;
    netice.value=bolme
}

chixma.addEventListener("click", chixmaDatas)
toplama.addEventListener("click", toplamaDatas)
vurma.addEventListener("click", vurmaDatas)
bolme.addEventListener("click", bolmeDatas)







