let button_start = document.getElementById("startButton")
button_start.addEventListener("click", ()=>{
    console.log("hello")
    // Récupération input pseudo
    let pseudo_form = document.getElementById("pseudo")
    let pseudo_value = pseudo_form.value 
    if(pseudo_value.length <= 0) {
        console.log("world")
        alert("Veuillez choisir un pseudo pour commencer la partie")
    }
    else{
        console.log("back")
        window.location.href = "game.html"
        // ! Récupérer la valeur de pseudo pour qu'elle soit conservée durant la partie (utiliser localStorage ?)
    }
})

