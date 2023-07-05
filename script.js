document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  
      // Agrega clase de spinning
      document.body.classList.add('spinning');
  
      // Elimina clase de spinning después de 1 segundo
      setTimeout(function() {
        document.body.classList.remove('spinning');
      }, 1000);
    });
  });