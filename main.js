const sky = document.querySelector('.sky')
const button = document.querySelector('.button')
const body = document.body

let counter = 0
let subcounter = 1;
let current = false

const changeclass = () => {

    if(!current){

        current = true


        if(counter == 0){
            body.style.backgroundColor = "#333"
            body.style.color = "#eee"
            counter = 1
        }
        else{
            body.style.backgroundColor = "white"
            body.style.color = "black"
            counter = 0
        }

        subcounter += 1
        setTimeout(() => {
            current = false
            console.log('finished ' + current)
        }, 1000)
        console.log(current)

    }

}

button.addEventListener('click', changeclass)

