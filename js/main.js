(function () {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // close menu after clicking a link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Static demo form (no backend in Phase 1)
  const form = document.getElementById("signupForm");
  const msg = document.getElementById("formMessage");

  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]')?.value?.trim() || "";
      if (!email || !email.includes("@")) {
        msg.textContent = "Please enter a valid email address.";
        return;
      }

      // In Phase 1 we just simulate success
      msg.textContent = "Thanks! You’re on the list (demo).";
      form.reset();
    });
  }
})();