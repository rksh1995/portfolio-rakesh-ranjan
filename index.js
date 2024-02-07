// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listener to the dark mode toggle button
//     document.getElementById('dark-mode-toggle').addEventListener('click', function() {
//         // Toggle dark mode class on body
//         document.body.classList.toggle('dark-mode');
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the dark mode toggle button
    const toggleBtn = document.getElementById('navbar-toggle-btn');
    toggleBtn.addEventListener('click', function() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
    });
});
