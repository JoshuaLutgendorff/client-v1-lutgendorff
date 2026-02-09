document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const msg = document.getElementById("formMessage");
  const emailInput = document.getElementById("email");

  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = (emailInput?.value || "").trim();
    if (!email) {
      msg.textContent = "Please enter an email address.";
      return;
    }

    msg.textContent = "Thanks! This is a Phase 1 demo signup (no backend yet).";
    form.reset();
  });
});
