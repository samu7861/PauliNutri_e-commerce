window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var headerPosition = header.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (headerPosition < (windowHeight * 0.7)) {
      header.classList.add('show-header');
    }
  });
  