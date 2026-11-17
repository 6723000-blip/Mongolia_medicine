
import { router } from "./router.js";
import { getLanguage, setLanguage } from "./i18n.js";
import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";

// Хуудасны элементүүд
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");

// Сонгосон хэлийг тохируулах
document.documentElement.lang = getLanguage();

// Navbar харуулах
function showNavbar() {
  if (header) {
    header.innerHTML = renderNavbar();
  }

  setupNavbar();
  updateActiveNavbar();
}

// Footer харуулах
function showFooter() {
  if (footer) {
    footer.innerHTML = renderFooter();
  }
}

// Гар утасны цэс ажиллуулах
function setupNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("mainNavbar");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isActive = burger.classList.toggle("is-active");

    menu.classList.toggle("is-active", isActive);

    burger.setAttribute(
      "aria-expanded",
      String(isActive)
    );
  });
}

// Идэвхтэй цэсийг тодруулах
function updateActiveNavbar() {
  const currentPath =
    window.location.hash.slice(1) || "/";

  // Зөвхөн href-тэй холбоосуудыг сонгоно
  const navLinks = document.querySelectorAll(
    ".modern-navbar .navbar-menu a.navbar-item[href]"
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPath = href.slice(1);
    const isActive = currentPath === linkPath;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// Хуудас солих
function handleRoute() {
  router();
  updateActiveNavbar();

  // Гар утасны цэсийг хаах
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("mainNavbar");

  if (burger && menu) {
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");
    burger.setAttribute("aria-expanded", "false");
  }

  window.scrollTo(0, 0);
}

// Монгол / Англи хэл солих
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");

  if (!button) return;

  const language = button.dataset.language;

  if (language !== "mn" && language !== "en") {
    return;
  }

  setLanguage(language);
});

// Хэл солигдоход хуудсыг шинэчлэх
window.addEventListener("languagechange", () => {
  document.documentElement.lang = getLanguage();

  showNavbar();
  router();
  showFooter();
  updateActiveNavbar();
});

// URL солигдоход хуудас харуулах
window.addEventListener("hashchange", handleRoute);

// Вебсайтыг эхлүүлэх
showNavbar();
showFooter();
handleRoute();
