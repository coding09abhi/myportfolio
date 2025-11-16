// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');

function toggleMobile(open) {
  if (mobileMenu) {
    mobileMenu.classList.toggle('open', open === undefined ? !mobileMenu.classList.contains('open') : open);
  }
}

if (menuBtn) menuBtn.addEventListener('click', ()=> toggleMobile(true));
if (closeMobile) closeMobile.addEventListener('click', ()=> toggleMobile(false));

// mobile menu close helper on navigation
window.toggleMobile = toggleMobile;

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href && href.length > 1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains('open')) toggleMobile(false);
    }
  });
});

// Contact form: open mail client with prefilled content
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Portfolio message';
    const message = document.getElementById('message').value.trim();

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto = `mailto:abhisheksgayakwad237@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;

    const status = document.getElementById('formStatus');
    if (status) { status.textContent = 'Opening your email client...'; setTimeout(()=> status.textContent = '', 4000); }
  });
}