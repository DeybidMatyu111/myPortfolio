// Get elements
const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');

// Toggle Sidebar and Icons
menuButton.addEventListener('click', () => {
  // Toggle sidebar visibility
  sidebar.style.left = sidebar.style.left === '0%' ? '-100%' : '0%';

  // Toggle the open class on the button
  menuButton.classList.toggle('open');

  // Prevent scrolling on body when sidebar is active
  document.body.classList.toggle('no-scroll', sidebar.style.left === '0%');

  // Prevent header from hiding when sidebar is active
  if (sidebar.style.left === '0%') {
    header.classList.remove('header-hidden');
  }
});

// Handle sidebar navigation links
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide the sidebar after navigation
    sidebar.style.left = '-100%';

    // Remove the open class from the menu button
    menuButton.classList.remove('open');

    // Re-enable scrolling on the body
    document.body.classList.remove('no-scroll');
  });
});

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
  if (sidebar.style.left !== '0%') {
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
