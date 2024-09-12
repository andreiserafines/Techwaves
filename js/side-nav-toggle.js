document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        menuBtn.classList.toggle('open');

        // Switch icon name to create rotation effect
        const toggleIcon = document.getElementById('toggleIcon');
        if (menuBtn.classList.contains('open')) {
            toggleIcon.setAttribute('name', 'close-outline');
        } else {
            toggleIcon.setAttribute('name', 'menu-outline');
        }
    });
});
