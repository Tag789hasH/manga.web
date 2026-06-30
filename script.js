document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('enter-btn');
    const cover = document.getElementById('cover-page');
    const manga = document.getElementById('manga-container');
    const music = document.getElementById('bg-music');

    // Generate Panels
    for (let i = 18; i <= 37; i++) {
        const panel = document.createElement('div');
        panel.className = 'panel';
        panel.innerHTML = `<img src="IMG-20260630-WA00${i}.jpg" alt="Panel ${i-17}">`;
        manga.appendChild(panel);
    }

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    // Play button logic
    btn.addEventListener('click', () => {
        cover.style.display = 'none';
        manga.style.display = 'block';
        music.play();
        // Start observing panels once they appear
        document.querySelectorAll('.panel').forEach(p => observer.observe(p));
    });
});
