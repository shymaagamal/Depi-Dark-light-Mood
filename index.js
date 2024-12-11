// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update the button icon and label
  if (theme === 'dark') {
    toggleButton.textContent = '🌙';
    toggleButton.setAttribute('aria-label', 'Switch to light mode');
  } else {
    toggleButton.textContent = '🌞';
    toggleButton.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// Get the stored theme from localStorage
const storedTheme = localStorage.getItem('theme');

// Set the initial theme
const initialTheme = storedTheme ? storedTheme : 'light';
setTheme(initialTheme);

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});
