document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});

function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.opacity = '0.7';
        heart.style.transition = 'all 4s linear';
        heart.style.zIndex = '9999';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.style.top = '-10vh';
            heart.style.opacity = '0';
        }, 100);
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 400);
} 