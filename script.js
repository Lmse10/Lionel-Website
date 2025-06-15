// Example: Display alert on page load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');

      document.body.classList.remove('fade-in');
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = href;
      }, 600); // match transition duration
    });
  });
});


// Typewriter Effect on Home Page
const typewriter = document.getElementById('typewriter');
if (typewriter) {
  const text = "Welcome to My Website!";
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
}
