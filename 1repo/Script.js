const toggleButton = document.getElementById("toggleButton");
const hiddenContent = document.getElementById("hiddenContent");

toggleButton.addEventListener("click", () => {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }
});
