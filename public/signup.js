"use strict";

(() => {
  const form = document.querySelector("#signup-form");
  const email = document.querySelector("#signup-email");
  const error = document.querySelector("#email-error");
  const confirmation = document.querySelector("#signup-confirmation");
  const again = document.querySelector("#signup-again");
  if (!form || !email || !error || !confirmation || !again) return;

  // Only expose the form after its local submit handler is installed.
  // No request, browser storage, URL parameter or real subscription is created.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    email.value = email.value.trim();
    if (!email.validity.valid) {
      error.textContent = email.validity.valueMissing
        ? "Enter a sample email address to try the form."
        : "Enter an email address in the format hello@example.com.";
      error.hidden = false;
      email.setAttribute("aria-invalid", "true");
      email.focus();
      return;
    }
    error.hidden = true;
    email.removeAttribute("aria-invalid");
    form.reset();
    form.hidden = true;
    confirmation.textContent =
      "Demo complete! Your sample address passed validation. No address was saved, no email was sent, and you are not subscribed.";
    again.hidden = false;
    again.focus();
  });

  email.addEventListener("input", () => {
    error.hidden = true;
    email.removeAttribute("aria-invalid");
  });

  again.addEventListener("click", () => {
    confirmation.textContent = "";
    again.hidden = true;
    form.hidden = false;
    email.focus();
  });

  document.querySelector("#signup-unavailable").hidden = true;
  form.hidden = false;
})();
