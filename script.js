function ToggleReadmore() {
  const moreText = document.getElementById("more-text");
  const btn = document.getElementById("ReadMoreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("section#Contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    
    alert("Thank you! Your message has been sent.");
    form.reset(); 
  });
});
