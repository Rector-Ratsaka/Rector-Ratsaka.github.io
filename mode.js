function toggleDarkLightMode(mode) {
    var body = document.body;
    if (mode === 'light') {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        document.getElementById("lightM").classList.add("blue-button");
        document.getElementById("darkM").classList.remove("blue-button");
        // Save the current mode to local storage
        localStorage.setItem("mode", "light");
    } else if (mode === 'dark') {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        document.getElementById("darkM").classList.add("blue-button");
        document.getElementById("lightM").classList.remove("blue-button");
        // Save the current mode to local storage
        localStorage.setItem("mode", "dark");
    }
}
// Function to set the initial mode based on local storage
function setInitialMode() {
    var savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        toggleDarkLightMode('dark');
    } else {
        toggleDarkLightMode('light');
    }
}
// Call setInitialMode when the page loads
    setInitialMode();