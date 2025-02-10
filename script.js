// Change the title text
function setTitle(newTitle) {
    document.getElementById("title").textContent = newTitle;
    console.log("Title updated to: " + newTitle);
}

// Change the description text
function setDescription(newDescription) {
    document.getElementById("description").textContent = newDescription;
    console.log("Description updated to: " + newDescription);
}

// Change background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    console.log("Background color changed to: " + color);
}

// Change font color
function setFontColor(color) {
    document.body.style.color = color;
    console.log("Font color changed to: " + color);
}

// Toggle between dark and light mode
function setTheme(theme) {
    document.body.classList.remove("dark-mode", "light-mode");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        console.log("Dark mode activated");
    } else if (theme === "light") {
        document.body.classList.add("light-mode");
        console.log("Light mode activated");
    } else {
        console.log("Invalid theme. Use 'dark' or 'light'");
    }
}
