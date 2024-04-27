
document.addEventListener("DOMContentLoaded", function() {
  // Select the checkbox input element
  const checkbox = document.getElementById("check");
  
  // Select all the links in the navigation menu
  const links = document.querySelectorAll(".nav__content ul li a");
  
  // Add a click event listener to each link
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      // Uncheck the checkbox when a link is clicked
      checkbox.checked = false;
    });
  });
});

// 
