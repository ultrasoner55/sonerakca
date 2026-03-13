function updateMenu() {
    var scrollPos = window.scrollY || document.documentElement.scrollTop;
    var navLinks = document.querySelectorAll('.w3-sidebar a, #mobile-nav a');
    
    var aboutSection = document.getElementById('about');
    var contactSection = document.getElementById('contact');

    var sections = [
        { id: 'home', top: 0 },
        { id: 'about', top: aboutSection ? aboutSection.offsetTop : 0 },
        { id: 'contact', top: contactSection ? contactSection.offsetTop : 0 }
    ];

    navLinks.forEach(link => link.classList.remove('w3-black'));

    let currentId = 'home';
    sections.forEach(section => {
        if (scrollPos >= section.top - 280) {
            currentId = section.id;
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if ((href === '#' || href === '#home') && currentId === 'home') {
            link.classList.add('w3-black');
        } else if (href === '#' + currentId) {
            link.classList.add('w3-black');
        }
    });
}

function observeBars() {
    const bars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                observer.unobserve(bar); 
            }
        });
    }, { threshold: 0.5 }); 

    bars.forEach(bar => observer.observe(bar));
}

window.addEventListener('scroll', updateMenu);
window.addEventListener('load', () => {
    updateMenu();
    observeBars(); 
});
