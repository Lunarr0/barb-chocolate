const soundEffects = [
    'https://assets.mixkit.co/active_storage/sfx/2/2.wav',
    'https://assets.mixkit.co/active_storage/sfx/1/1.wav',
    'https://assets.mixkit.co/active_storage/sfx/3/3.wav'
];

const animations = {
    wobble: 'wobble 0.5s ease',
    bounce: 'bounce 0.5s ease',
    spin: 'spin 0.5s ease'
};

document.addEventListener('DOMContentLoaded', () => {
    const chocolates = document.querySelectorAll('.chocolate');
    const messageDisplay = document.getElementById('message-display');
    const messageText = document.getElementById('message-text');
    const refillBtn = document.getElementById('refill-btn');

    chocolates.forEach(chocolate => {
        chocolate.addEventListener('click', () => {
            if (!chocolate.classList.contains('eaten')) {
                // Get the message from the data attribute
                const message = chocolate.getAttribute('data-message');
                
                // Mark chocolate as eaten
                chocolate.classList.add('eaten');
                
                // Display the message
                messageText.textContent = message;
                messageDisplay.classList.remove('message-hidden');
                
                // Add animation to the chocolate
                const randomAnimation = Object.values(animations)[Math.floor(Math.random() * Object.values(animations).length)];
                chocolate.style.animation = randomAnimation;
                chocolate.textContent = '❤️';
                
                // Play a sound (optional)
                const randomSound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
                const audio = new Audio(randomSound);
                audio.play().catch(e => console.log('Audio play failed:', e));
            }
        });
    });

  

  

    // Refill functionality
    refillBtn.addEventListener('click', () => {
        
        messageDisplay.classList.add('message-hidden');
        
        chocolates.forEach(chocolate => {
            chocolate.classList.remove('eaten');
            chocolate.style.animation = '';
            chocolate.style.opacity = '1';
            chocolate.textContent = '🍫';
        });
        
        // Play refill sound
        const audio = new Audio(soundEffects[0]);
        audio.play().catch(e => console.log('Audio play failed:', e));
    });

   
});

