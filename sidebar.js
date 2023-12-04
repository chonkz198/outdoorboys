document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const openBtn = document.querySelector('.open-btn');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        updateOverlayVisibility();
        updateMiniSidebar(); // Call the function to update mini-sidebar
    }

    function updateOverlayVisibility() {
        const isPortrait = window.innerWidth < window.innerHeight;
        overlay.style.display = isPortrait && sidebar.classList.contains('open') ? 'block' : 'none';
    }

    function updateMiniSidebar() {
        const isMiniSidebar = sidebar.offsetWidth < 150; // Adjust the threshold as needed
        document.body.classList.toggle('mini-sidebar', isMiniSidebar);
    }

    function handleOrientationChange() {
        const isLandscape = window.innerWidth > window.innerHeight;
        sidebar.classList.toggle('open', isLandscape);
        updateOverlayVisibility();
        updateMiniSidebar(); // Call the function to update mini-sidebar
    }

    openBtn.addEventListener('click', toggleSidebar);

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
            sidebar.classList.remove('open');
            updateOverlayVisibility();
            updateMiniSidebar(); // Call the function to update mini-sidebar
        }
    });

    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', updateMiniSidebar); // Handle changes in window size
});