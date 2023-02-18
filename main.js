// задание 1
// const input = document.querySelector('input')
// const btn = document.querySelector('.btn')
// const span = document.querySelector('.span')
//
// const regExp = /^1\d{14}$/
//
// let INN = () => {
//     if (regExp.test(input.value)) {
//         span.innerText = "OK"
//         span.style.color = "blue"
//     }else {
//         span.innerText = "Not ok"
//         span.style.color = "red"
//
//
//     }
// }
// btn.onclick = () => INN()


// задание 2

const box = document.querySelector('.box')

let position = 0

const move = () => {
    if (position <= 440) {
        position++
        box.style.left = `${position}px`
        setTimeout(move,1)
    }
}
move()






