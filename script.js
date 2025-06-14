// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.setAttribute('data-theme', 
        themeToggle.checked ? 'dark' : 'light');
    localStorage.setItem('theme', 
        themeToggle.checked ? 'dark' : 'light');
});

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Newsletter form validation
const newsletterForm = document.querySelector('.newsletter-form');
const errorMessage = document.getElementById('newsletter-error');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    if (!email.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }
    
    // Here you would typically send the data to your server
    console.log('Newsletter subscription:', email);
    errorMessage.textContent = 'Thanks for subscribing!';
    errorMessage.style.color = 'green';
    newsletterForm.reset();
});

// Social share buttons
document.querySelectorAll('.social-share button').forEach(button => {
    button.addEventListener('click', (e) => {
        const platform = e.currentTarget.getAttribute('aria-label');
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        
        let shareUrl;
        if (platform.includes('Twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        } else if (platform.includes('LinkedIn')) {
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        }
        
        window.open(shareUrl, '_blank');
    });
});