const darkMode = document.getElementById("dark");

// Apply dark mode on the <html> element
darkMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
