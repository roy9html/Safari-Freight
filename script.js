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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("section#Contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const contact = {
      name,
      email,
      message
    };

    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(() => {
        alert("Thank you, your message has been received.");
        form.reset();
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Sorry, there was a problem. Please try again.");
      });
  });
});
