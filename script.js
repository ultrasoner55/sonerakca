// Sayfa kaydırıldığında barların dolma animasyonu
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-bar').forEach(bar => {
    observer.observe(bar);
});

// Mobil menü tıklama sonrası otomatik kapanma (isteğe bağlı)
document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Gerekirse buraya menü gizleme kodu eklenebilir
    });
});
