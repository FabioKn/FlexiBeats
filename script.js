const headphones = document.getElementById('headphones');
const dropzones = document.querySelectorAll('.dropzone');
let audio = new Audio();

headphones.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', null);
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    zone.addEventListener('drop', function (event) {
        event.preventDefault();
        const sound = zone.getAttribute('data-sound');
        audio.src = sound;
        audio.play();
    });
});
