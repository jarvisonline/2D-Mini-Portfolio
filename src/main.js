document.addEventListener("DOMContentLoaded", () => {
  const loadingImgContainer = document.getElementById("loading-img-container");

  setInterval(() => {
    loadingImgContainer.innerHTML = '<span class="bounce"></span>'.repeat(3);
  }, 500); // Adjust the interval as needed

  setTimeout(() => {
    // Redirect to index.html after loading
    window.location.href = "reload.html";
  }, 5000); // Adjust the timeout duration as needed
});
