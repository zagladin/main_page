document.getElementById('current-year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleIcon.className = theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
}

const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const scrollToTopButton = document.querySelector('.scroll-to-top');

function toggleScrollToTopButton() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('article').forEach(article => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    observer.observe(article);
});
