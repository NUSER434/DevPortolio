document.addEventListener('DOMContentLoaded', function() {
    animateBackgroundElements();


    // Elements
    const settingsBtn = document.querySelector('.settings-btn');
    const settingsModal = document.querySelector('.settings-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const changingText = document.querySelector('.changing-text');
    

    
    // Text rotation for changing text
    const texts = ["Frontend", "Backend", "Fullstack", "Designer"];
    let currentIndex = 0;
    
    function rotateText() {
        changingText.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            changingText.textContent = texts[currentIndex];
            changingText.style.opacity = 1;
        }, 500);
    }
    
    // Start rotation
    setTimeout(rotateText, 1000);
    setInterval(rotateText, 3000);
    
    // Modal functionality
    settingsBtn.addEventListener('click', function() {
        settingsModal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        settingsModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });
    
    // Burger menu functionality
    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('toggle');
    });
    
});