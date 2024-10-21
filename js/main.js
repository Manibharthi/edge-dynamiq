document.querySelector('.custom-toggler').addEventListener('click', function() {
    this.classList.toggle('collapsed');
});


// document.addEventListener('DOMContentLoaded', function () {
//   const buttons = document.querySelectorAll('.arrow-btn');
//   buttons.forEach(button => {
//     button.addEventListener('click', function () {
//       const targetId = button.getAttribute('data-target');
//       const targetSection = document.querySelector(targetId);

     
//       document.querySelectorAll('.service-details').forEach(section => {
//         if (section !== targetSection) {
//           section.style.display = 'none';
//         }
//       });

//       if (targetSection.style.display === 'none') {
//         targetSection.style.display = 'block';
//       } else {
//         targetSection.style.display = 'none';
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const serviceItems = document.querySelectorAll('.service-item');
  
  serviceItems.forEach(item => {
    // Attach click event to the entire section
    item.addEventListener('click', function (event) {
      const targetId = item.getAttribute('data-target');
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

    // Attach click event to the button within the section
    const button = item.querySelector('.arrow-btn');
    if (button) {
      button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the section click event from triggering
        const targetId = item.getAttribute('data-target');
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
    }
  });
});

