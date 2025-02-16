function showContent(section) {
  // Hide all content first
  document.querySelectorAll('[id$="Content"]').forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("slide-up"); // Remove animation class
  });

  // Show the selected content with animation
  const content = document.getElementById(`${section}Content`);
  content.classList.remove("hidden");
  content.classList.add("slide-up"); // Add animation class
}
