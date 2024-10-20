document.querySelector('.custom-toggler').addEventListener('click', function() {
    this.classList.toggle('collapsed');
});


document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.arrow-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.querySelector(targetId);

      // Close all other open service sections
      document.querySelectorAll('.service-details').forEach(section => {
        if (section !== targetSection) {
          section.style.display = 'none';
        }
      });

      // Toggle the selected section
      if (targetSection.style.display === 'none') {
        targetSection.style.display = 'block';
      } else {
        targetSection.style.display = 'none';
      }
    });
  });
});

