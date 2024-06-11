var images = [
    'Imagens/maverick.jpg',
    'Imagens/Componentes.jpeg',
    'Imagens/Carro.png',
    'Imagens/Carro2.png'
];

var currentImageIndex = 0;

function changeImageBefore() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
}

function changeImageAfter() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

function updateImage() {
    var img = document.getElementById('image');
    img.src = images[currentImageIndex];
}

