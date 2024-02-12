const button = document.getElementById('button')
const main = document.getElementById('main')

const mainCard = document.getElementById('front_card1')
const mainCard2 = document.getElementById('front_card2')
const mainCard3 = document.getElementById('front_card3')

const backCard = document.getElementById('card')

function clickCard() {
    console.log('hello')
    // Create Card
    const titre = "Thème 1"
    const questButton1 = "Question Difficile"
    const questButton2 = "Question Moyenne"
    const questButton3 = "Question Facile"
    const newCard = document.createElement('div')
    newCard.innerHTML = `
            <h1>${titre}</h1>
            <button class='questButton' id='difficult'>${questButton1}</button>
            <button class='questButton' id='medium'>${questButton2}</button>
            <button class='questButton' id='easy'>${questButton3}</button>
        `;
    newCard.id = ('card')
    main.appendChild(newCard)
    mainCard.remove()
    mainCard2.remove()
    mainCard3.remove()

    // Manipuler new card
    const questButton = newCard.querySelectorAll('.questButton')
    // Créer une loop pour effectuer même action peu importe l'input
    questButton.forEach(button => {
        button.addEventListener('click', () => {
            console.log("click")
            // Récupérer input pour les manipuler plus tard
            const difficult = document.getElementById('difficult')
            const medium = document.getElementById('medium')
            const easy = document.getElementById('easy')
            // Conditions
            if (button === difficult) {
                console.log('click2')
                // Retirer les inputs
                difficult.remove()
                medium.remove()
                easy.remove()
                // Faire apparaître la question
                const question = document.createElement('div')
                const questiontxt = "Voulez-vous acheter des NFTs ?"
                question.textContent = questiontxt
                newCard.appendChild(question)
                createAnswers()
            }
            if(button === medium){
                console.log('click3')
                // Retirer les inputs
                difficult.remove()
                medium.remove()
                easy.remove()
                // Faire apparaître la question
                const question = document.createElement('div')
                const questiontxt = "Voulez-vous acheter des NFTs ?"
                question.textContent = questiontxt
                newCard.appendChild(question)
                createAnswers()
            }
            if(button === easy){
                console.log('click4')
                // Retirer les inputs
                difficult.remove()
                medium.remove()
                easy.remove()
                // Faire apparaître la question
                const question = document.createElement('div')
                const questiontxt = "Voulez-vous acheter des NFTs ?"
                question.textContent = questiontxt
                newCard.appendChild(question)
                createAnswers()
            }
        })
    })
}

function createAnswers() {
    const position = document.getElementById('anBloc')
    const answer1 = "Yes"
    const answer2 = "No"
    const answerBloc = document.createElement('div')
    answerBloc.innerHTML = `
        <div class="an1">
            <button class='yes' id='yes'></button>
            <p>${answer1}</p>
        </div>

        <div class="an2">
            <button class='no' id='no'></button>
            <p>${answer2}</p>
        </div>
    `;
    answerBloc.id = ('random')
    position.appendChild(answerBloc)
}

