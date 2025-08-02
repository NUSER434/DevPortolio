document.addEventListener('DOMContentLoaded', function() {
  const avatarSwitcher = document.querySelector('.avatar-switcher');
  if (!avatarSwitcher) return;

  const avatars = document.querySelectorAll('.avatar');
  let currentIndex = 0;
  
  function switchAvatar() {
    // Убираем активный класс у текущего аватара
    avatars[currentIndex].classList.remove('active');
    
    // Увеличиваем индекс или сбрасываем на 0
    currentIndex = (currentIndex + 1) % avatars.length;
    
    // Добавляем активный класс новому аватару
    avatars[currentIndex].classList.add('active');
  }

  // Запускаем смену каждые 10 секунд
  setInterval(switchAvatar, 10000);
  
  // Инициализация - показываем первый аватар
  avatars[0].classList.add('active');
});