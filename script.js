document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('enter-btn');
    const cover = document.getElementById('cover-page');
    const manga = document.getElementById('manga-container');
    const music = document.getElementById('bg-music');

    // Trigger music and reveal manga
    btn.addEventListener('click', () => {
        cover.style.display = 'none';
        manga.style.display = 'block';
        music.play();
    });

    // Scroll animation observer
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the panel is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply observer to all panels
    document.querySelectorAll('.panel').forEach(panel => {
        observer.observe(panel);
    });
});
