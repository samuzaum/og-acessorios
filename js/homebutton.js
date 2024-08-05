document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.menu-side');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
    sideMenu.classList.toggle('open');
  });
});
document.querySelectorAll('.product .buy-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('pulse');
    setTimeout(() => {
      button.classList.remove('pulse');
    }, 600); 
  });
});
document.querySelectorAll('.product .buy-button').forEach(button => {
  button.addEventListener('click', () => {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    notification.classList.remove('hidden');
    
    setTimeout(() => {
      notification.classList.add('hidden');
      notification.classList.remove('show');
    }, 3000); 
  });
});
