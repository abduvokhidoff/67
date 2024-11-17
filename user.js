import baza from "./db.js"


let wrapper = document.querySelector('.wrapper')

let getId = localStorage.getItem('Id')
let getPass = localStorage.getItem('Password')

let checked1 = baza.filter((v) => {
    return v.marsid === getId && v.password === getPass
})

console.log(checked1)


const ReadFunction = () => {
    checked1.map((v) => {
        let div = document.createElement('div')
        div.innerHTML = `<div>
            <div>
                <img src="./assets/img/userlo.png" alt="" >
            </div>
            <div>
            
            </div>
        </div>`
        wrapper.appendChild(div)
    })
}

ReadFunction()