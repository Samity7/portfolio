document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
  (function() {
    emailjs.init("ujqfW8Hhqra7O_XzP"); 
  })();

  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_0k2iie1', 'template_x8y8z9h', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  });