let pseudoForm = document.getElementById("pseudo")

function on() {
    let pseudoValue = pseudoForm.value
    if(pseudoValue.length < 5) {
        console.log("success 1")
    }
    else {
        console.log("succes 2")
    }
}