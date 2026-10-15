function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const numRandom = Math.floor(Math.random() * 16);
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const buttton = document.getElementById('color-btn');
const body = document.body;

buttton.addEventListener('click', function() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});