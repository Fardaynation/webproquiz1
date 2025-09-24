// script.js
document.addEventListener("DOMContentLoaded", function () {
  try {
    console.log("script.js loaded — DOM ready");
    const footer = document.querySelector("footer");
    if (footer) {
      const date = new Date();
      const p = document.createElement("p");
      p.textContent = `Last updated: ${date.toLocaleString()}`;
      footer.appendChild(p);
      console.log("Added date to footer");
    } else {
      console.warn("No <footer> element found.");
    }

    const btn = document.getElementById("darkModeBtn");
    if (btn) {
        document.body.classList.toggle("dark-mode");
        console.log("Dark mode toggled:", document.body.classList.contains("dark-mode"));
      });
      console.log("Dark mode button listener attached");
    } else {
      console.warn("No element with id 'darkModeBtn' found.");
    }

  } catch (err) {
    console.error("Error in script.js:", err);
  }
});
