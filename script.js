function updateMenu() {
    var scrollPos = window.scrollY || document.documentElement.scrollTop;
    var navLinks = document.querySelectorAll('.w3-sidebar a, #mobile-nav a');
    
    var aboutSection = document.getElementById('about');
    var contactSection = document.getElementById('contact');

    var aboutPos = aboutSection ? aboutSection.offsetTop : 0;
    var contactPos = contactSection ? contactSection.offsetTop : 0;

    var sections = [
        { id: 'home', top: 0 },
        { id: 'about', top: aboutPos },
        { id: 'contact', top: contactPos }
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

// Olay Dinleyicileri
window.addEventListener('scroll', updateMenu);
window.addEventListener('load', updateMenu);

document.querySelectorAll('.w3-sidebar a, #mobile-nav a').forEach(link => {
    link.addEventListener('click', function() {
        setTimeout(updateMenu, 150);
    });
});
