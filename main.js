onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function() {
        const audio = new Audio('ruta-de-tu-musica.mp3');
        audio.autoplay = true;
        audio.loop = true;
        audio.play();
    });