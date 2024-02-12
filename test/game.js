const button = document.getElementById('button')
const main = document.getElementById('main')

const mainCard = document.getElementById('front_card')


button.addEventListener('click', () => {
    console.log('hello')
    // Create Card
    const titre = "Thème 1"
    const questButton1 = "Question Difficile"
    const questButton2 = "Question Moyenne"
    const questButton3 = "Question Facile"
    const newCard = document.createElement('div')
    newCard.innerHTML = `
            <h1>${titre}</h1>
            <button>${questButton1}</button>
            <button>${questButton2}</button>
            <button>${questButton3}</button>
        `;
    newCard.id = ('card')
    main.appendChild(newCard)
    mainCard.remove()
})

