//Reload current Page
window.onload = function () {
  // Force scroll to the top on reload
  window.scrollTo(0, 0);

  // Run text animation
  const text = document.getElementById("animated-text");
  if (text) {
      text.style.opacity = "0";
      text.style.transform = "translateX(20px)";
      setTimeout(() => {
          text.style.transition = "opacity 1s ease, transform 1s ease";
          text.style.opacity = "1";
          text.style.transform = "translateX(0)";
      }, 100);
  }
};

// Check if reloadPage exists and reload at the same page
if (sessionStorage.getItem("reloadPage")) {
  sessionStorage.removeItem("reloadPage"); // Clear storage to prevent loop
  window.scrollTo(0, 0); // Ensure it starts at the top
}


// Tab navigation functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all tab buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Hide all tab contents
    tabContents.forEach(content => content.style.display = 'none');

    // Add active class to the clicked tab button
    button.classList.add('active');

    // Show the corresponding tab content
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).style.display = 'block';
  });
});

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Only hide the header if the sidebar is not active
  if (navbar.style.right !== '0%') {
    if (scrollTop > lastScrollTop) {
      // Scrolling down - hide the header
      header.classList.add('header-hidden');
    } else {
      // Scrolling up - show the header
      header.classList.remove('header-hidden');
    }
  }

  lastScrollTop = scrollTop;
});

// Function to download the PDF
function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'David-Borromeo-Resume.pdf';
  link.download = 'David-Borromeo-Resume.pdf';
  link.click();
}


function hideOthers(selectedIcon) {
  document.querySelectorAll('.skills-icons').forEach(icon => {
      if (icon !== selectedIcon) {
          icon.style.opacity = "50%";
          icon.style.transform = "scale(0.8)";
          // Hide the label of the unselected icon
          icon.querySelector('.icon-label').style.display = "none";
      } else {
          // Show the label of the selected icon
          icon.querySelector('.icon-label').style.display = "block";
          icon.querySelector('.icon-label').style.transition = "opacity 1s ease, transform 1s ease";
      }
  });
}

function showAll() {
    document.querySelectorAll('.skills-icons').forEach(icon => {
        icon.style.opacity = "1";
        icon.style.transform = "scale(1.1)";
        // Show all labels
        icon.querySelector('.icon-label').style.display = "none";
    });
}

