
import { routes } from "./routes.js";

import { getLanguage } from "./i18n.js";

import { setupHerbsPage } from "./pages/herbsPage.js";
import { setupBooksPage } from "./pages/booksPage.js";
import { setupContactPage } from "./pages/contactPage.js";
import { setupPlantMapPage } from "./pages/plantMapPage.js";

// =======================================
// МӨНХ ӨВ - ROUTER SYSTEM
// =======================================

// Хуудасны нэрс (Монгол / Англи)
const pageTitles = {
  "/": {
    mn: "Нүүр",
    en: "Home"
  },

  "/history": {
    mn: "Түүх",
    en: "History"
  },

  "/treatment": {
    mn: "Эмчилгээ",
    en: "Treatments"
  },

  "/herbs": {
    mn: "Эмийн ургамал",
    en: "Medicinal Herbs"
  },

  "/books": {
    mn: "Ном, судалгаа",
    en: "Books & Research"
  },

  "/contact": {
    mn: "Холбоо барих",
    en: "Contact"
  },

  "/plant-map": {
    mn: "Ургамлын газрын зураг",
    en: "Medicinal Plants Map"
  }
};

// =======================================
// Browser-ийн гарчиг шинэчлэх
// =======================================

function updatePageTitle(path) {
  const lang = getLanguage() === "en" ? "en" : "mn";

  const siteName =
    lang === "en" ? "Monkh Uv" : "Мөнх Өв";

  const page = pageTitles[path];

  if (!page) {
    document.title =
      lang === "en"
        ? "Page Not Found | Monkh Uv"
        : "Хуудас олдсонгүй | Мөнх Өв";

    return;
  }

  document.title = `${page[lang]} | ${siteName}`;
}

// =======================================
// Хуудас солих үндсэн функц
// =======================================

export function router() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("ERROR: #app элемент олдсонгүй.");
    return;
  }

  // URL-аас хуудасны зам авах
  const path = window.location.hash.slice(1) || "/";

  // Сонгосон хэл
  const lang = getLanguage() === "en" ? "en" : "mn";

  // Хуудасны гарчиг шинэчлэх
  updatePageTitle(path);

  // Routes-оос хуудас хайх
  const renderPage = routes[path];

  // =====================================
  // 404 - Хуудас олдсонгүй
  // =====================================

  if (typeof renderPage !== "function") {
    app.innerHTML = `
      <section class="section page-enter">
        <div class="container has-text-centered">

          <h1 class="title is-1">404</h1>

          <h2 class="title is-3">
            ${
              lang === "en"
                ? "Page Not Found"
                : "Хуудас олдсонгүй"
            }
          </h2>

          <p>
            ${
              lang === "en"
                ? "The requested page does not exist."
                : "Таны хайсан хуудас олдсонгүй."
            }
          </p>

          <a href="#/" class="button is-success mt-5">
            ${
              lang === "en"
                ? "Back to Home"
                : "Нүүр хуудас руу буцах"
            }
          </a>

        </div>
      </section>
    `;

    return;
  }

  // =====================================
  // Хуудасны HTML харуулах
  // =====================================

  try {
    app.innerHTML = renderPage();
  } catch (error) {
    console.error("Page rendering error:", error);

    app.innerHTML = `
      <section class="section">
        <div class="container has-text-centered">
          <h2 class="title is-3">
            ${
              lang === "en"
                ? "Unable to load page"
                : "Хуудас ачаалахад алдаа гарлаа"
            }
          </h2>

          <a href="#/" class="button is-success">
            ${
              lang === "en"
                ? "Go Home"
                : "Нүүр хуудас"
            }
          </a>
        </div>
      </section>
    `;

    return;
  }

  // =====================================
  // Хөдөлгөөнт эффект
  // =====================================

  app.classList.remove("page-enter");

  // Animation дахин эхлүүлэх
  void app.offsetWidth;

  app.classList.add("page-enter");

  // =====================================
  // Хуудас тус бүрийн ажиллагаа
  // =====================================

  try {
    switch (path) {
      case "/herbs":
        setupHerbsPage();
        break;

      case "/books":
        setupBooksPage();
        break;

      case "/contact":
        setupContactPage();
        break;

      case "/plant-map":
        setupPlantMapPage();
        break;

      default:
        break;
    }
  } catch (error) {
    console.error("Page setup error:", error);
  }
}
