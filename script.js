const enlaces = document.querySelectorAll('a');

enlaces.forEach(enlace=> {
    const sonido = new Audio('click.mp3');

    enlace.addEventListener('mouseover', async () => {
        try {
            await sonido.play();
        } catch (err) {
            console.error('Error al reproducir el sonido:', err);
        }
    });

});