document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initContactForm();
});

function initMobileNavigation() {
  const toggleButton = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggleButton || !nav) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (!form || !feedback) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const fullname = fullnameInput ? fullnameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    feedback.classList.remove("is-success", "is-error");

    if (!fullname || !email || !message) {
      feedback.textContent = "Veuillez renseigner votre nom, votre adresse e-mail et votre message.";
      feedback.classList.add("is-error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Veuillez saisir une adresse e-mail valide.";
      feedback.classList.add("is-error");
      return;
    }

    feedback.textContent =
      "Votre message a bien été préparé. Les modalités d'envoi définitives seront reliées lors de la mise en ligne.";
    feedback.classList.add("is-success");
    form.reset();
  });
}
