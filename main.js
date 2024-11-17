import baza from "./db.js"

let pass = document.getElementById('pass')
let modme = document.getElementById('modme')
let add = document.getElementById('add')
let eye = document.getElementById('eye')
let ota = document.getElementById('ota')
let oquv = document.getElementById('oquv')


add.setAttribute('disabled', 'disabled')

const InputFunction = () => {
    if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text')
    }
    else {
        pass.setAttribute('type', 'password')
    }
}

eye.addEventListener('click', () => {
    InputFunction()
})

const ButtonFunction = () => {
    if (modme.value.length > 4 && pass.value.length > 4) {
        add.removeAttribute('disabled')
    }
    else (
        add.setAttribute('disabled', 'disabled')
    )
}
modme.addEventListener('input', () => {
    ButtonFunction()
});
pass.addEventListener('input', () => {
    ButtonFunction()
});


add.addEventListener('click', ()  => {
    localStorage.setItem('Id', modme.value)
    localStorage.setItem('Password', pass.value)

    let getId = localStorage.getItem('Id')
    let getPass = localStorage.getItem('Password')
    
    let checked = baza.filter((v) => {
        return v.marsid === getId && v.password === getPass
    })

    if(checked.length > 0){
         window.location.href = './user.html'
    }
    else{
        alert(`Notog\'ri Id yoki Parol Kiritingiz!`)
    }
})


console.log(checked)