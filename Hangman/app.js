const words = ['cat', 'dog', 'door', 'pencil', 'plane']
let table = document.querySelector('#word')
let pic = document.querySelector('#hang')
let step = 0

let random = Math.floor(Math.random() * 5)
let chosenWord = words[random]
console.log(chosenWord)
const wordLength = chosenWord.length
console.log(wordLength)

function createBoard(){
    for(let i = 0; i < wordLength; i++){
        const letter = document.createElement('span')
        letter.classList.add('letters')
        letter.setAttribute('id', i);
        table.append(letter)
    }
}

createBoard()

function winner(){
    let ok=1;
    for(let i = 0; i < wordLength; i++){
        let place = document.getElementById(i)
        if(place.childNodes.length == 0)
        ok=0
    }
    if(ok == 1)
    alert('You Won!!')
}

function check(){
    let userLetter = document.getElementById('user').value;
    if(chosenWord.indexOf(userLetter) > -1){
        console.log(userLetter)
        for(let i = 0; i < wordLength; i++){
            if(chosenWord[i] == userLetter){
                let place = document.getElementById(i)
                place.innerHTML = userLetter
            }
        }
    }
    else
    {
        step++
        if(step >= 6)
        alert('You lost!!')
        else
        pic.setAttribute('src', 'images/'+step+'.jpg')
    }
    winner()
}