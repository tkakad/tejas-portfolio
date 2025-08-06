function updateFooterLinks() {
  const links = document.querySelectorAll('.footer-links');
  
  if (window.innerWidth <= 768) {
      links.forEach(link => {
          if (!link.hasAttribute('data-text')) {
              link.setAttribute('data-text', link.textContent);
          }
          if (link.getAttribute('data-text') === 'LinkedIn') {
              link.innerHTML = '<i class="fa-brands fa-linkedin fa-xl"></i>';
          } else if (link.getAttribute('data-text') === 'GitHub') {
              link.innerHTML = '<i class="fa-brands fa-github fa-xl"></i>';
          } else if (link.getAttribute('data-text') === 'Upwork') {
              link.innerHTML = '<i class="fa-brands fa-square-upwork fa-xl"></i>';
          } else if (link.getAttribute('data-text') === 'Resume') {
              link.innerHTML = '<i class="fa-solid fa-file fa-xl"></i>';
          } else if (link.getAttribute('data-text') === 'Coursera') {
              link.innerHTML = '<i class="fa-solid fa-award fa-xl"></i>';
          }
      });
  } else {
      links.forEach(link => {
          if (link.hasAttribute('data-text')) {
              link.innerHTML = link.getAttribute('data-text');
          }
      });
  }
}

// Run the function on page load
updateFooterLinks();

// Monitor window resize event
window.addEventListener('resize', updateFooterLinks);