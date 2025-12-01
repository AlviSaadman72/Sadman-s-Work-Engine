document.addEventListener('DOMContentLoaded', () => {
    // 1) Handle 4-second Intro Animation [cite: 3]
    const introAnimation = document.getElementById('intro-animation');
    const homePage = document.getElementById('home-page');

    setTimeout(() => {
        // Hide the animation and show the home page after 4 seconds
        introAnimation.classList.add('hidden');
        homePage.classList.remove('hidden');
    }, 4000); // 4 seconds = 4000 milliseconds

    // 2) Digital Clock and Calendar Functionality [cite: 13]
    const clockDisplay = document.getElementById('digital-clock');
    const dateDisplay = document.getElementById('calendar-date');

    function updateDateTime() {
        const now = new Date();

        // Time (Clock)
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const timeString = now.toLocaleTimeString('en-US', timeOptions);
        clockDisplay.textContent = timeString;

        // Date (Calendar)
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', dateOptions);
        dateDisplay.textContent = dateString;
    }

    // Update time every 1 second
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Call immediately to avoid a delay on load

    // 3) Theme Toggle Functionality 
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function toggleTheme() {
        if (body.classList.contains('light-theme')) {
            // Switch to Dark Theme
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark theme
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to Light Theme
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light theme
            localStorage.setItem('theme', 'light');
        }
    }

    themeToggleBtn.addEventListener('click', toggleTheme);

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});