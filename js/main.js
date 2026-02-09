const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (better UX on mobile)
  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Demo form submit for Phase 1 (static)
const form = document.getElementById("form");
const status = document.getElementById("status");

if (form && status) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Minimal front-end “validation”
    const name = form.elements.namedItem("name")?.value?.trim() || "";
    const email = form.elements.namedItem("email")?.value?.trim() || "";
    const message = form.elements.namedItem("message")?.value?.trim() || "";

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.textContent = "Thanks! (Demo form — Phase 2 can make this real.)";
    form.reset();
  });
}
