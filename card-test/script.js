function createQuestionCard() {
    const question = document.getElementById('question').value;
    const options = document.getElementById('options').value.split(',').map(option => option.trim());
    const correctAnswer = document.getElementById('correctAnswer').value;
    const explanation = document.getElementById('explanation').value;

    const cardCreated = false

    // Create card
    const questionCard = {
        question,
        options,
        correctAnswer,
        explanation
    };

    // Display card
    displayQuestionCard(questionCard)
    cardCreated = true

    // Reset form after display
    document.getElementById('quizForm').reset()
}

function displayQuestionCard(questionCard){
    const cardContainer = document.createElement('div')

    // Fill card content
    cardContainer.innerHTML = `
    <p><strong>Question :</strong> ${questionCard.question}</p>
    <p><strong>Options :</strong> ${questionCard.options}</p>
    <p><strong>Réponse correcte :</strong> ${questionCard.correctAnswer}</p>
    <p><strong>Explication :</strong> ${questionCard.explanation}</p>
    <hr>
    `

    // Display new card
    document.getElementById('createdCard').appendChild(cardContainer)
}