document.addEventListener('DOMContentLoaded', () => {
    // Add floating hearts animation
    createFloatingHearts();

    // Add click effect to photo placeholders
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            placeholder.style.transform = 'scale(1.1)';
            setTimeout(() => {
                placeholder.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

function createFloatingHearts() {
    const container = document.querySelector('.container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = '0.6';
        heart.style.transition = 'all 4s linear';
        heart.style.zIndex = '-1';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-10vh';
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
} 