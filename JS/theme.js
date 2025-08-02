document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    
    // Применяем сохраненную тему
    if (savedTheme === 'dark') {
        html.classList.add('theme-dark');
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    // Переключение темы
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            html.classList.add('theme-dark');
            document.body.classList.add('dark-theme');
            localStorage.setItem('selectedTheme', 'dark');
        } else {
            html.classList.remove('theme-dark');
            document.body.classList.remove('dark-theme');
            localStorage.setItem('selectedTheme', 'light');
        }
    });
    
    // Обновляем цвет кнопок при смене темы
    function updateButtonColors() {
        const buttons = document.querySelectorAll('button:not(.language-switcher)');
        buttons.forEach(button => {
            if (document.body.classList.contains('dark-theme')) {
                button.style.backgroundColor = 'rgba(241, 196, 15, 0.1)';
                button.style.borderColor = 'rgba(241, 196, 15, 0.3)';
                button.style.color = '#f1c40f';
            } else {
                button.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
                button.style.borderColor = 'rgba(52, 152, 219, 0.3)';
                button.style.color = '#3498db';
            }
        });
    }
    
    // Наблюдатель за изменениями темы
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                updateButtonColors();
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true
    });
    
    // Инициализация цветов кнопок
    updateButtonColors();
});