function startAnimation(){
    const animatedElement = document.getElementById('animatedElement')

    // Position finale de l'élément
    const finalPositionX = 100;
    const finalPositionY = 100;

    // Durée de l'animation
    const animationDuration = 1000; 

    // Horodatage du début de l'animation
    let startTime = null; 

    // Fonction de l'animation 
    function animate(currentTime){
        // Initialiser le temps de début si ce n'est pas déjà fait
        if(!startTime) {
            startTime = currentTime
        }

        // Calculer le temps écoulé depuis le début de l'animation
        const elapsedTime = currentTime - startTime

        // Calculer la progression de l'animation (entre 0 et 1)
        const progress = Math.min(elapsedTime / animationDuration, 1);

        // Calculer la nouvelle position de l'élément en fonction de la progression
        let newPositionX = interpolate(animatedElement.offsetLeft, finalPositionX, progress);
        let newPositionY = interpolate(animatedElement.offsetTop, finalPositionY, progress);

        // Appliquer la nouvelle position à l'élément 
        animatedElement.style.left = newPositionX + 'px'; 
        animatedElement.style.top = newPositionY + 'px'
        
        // Vérifier si l'animation est terminée 
        if (progress < 1) {
            // Continuer l'animation
            requestAnimationFrame(animate)
        } else {
            // Animation done
            startTime = null;
        }
    }
    
    // Lancer l'animation
    requestAnimationFrame(animate)
    animatedElement.style.zIndex = 3;
}

function interpolate(start, end, progress) {
    return start + (end - start) * progress
}