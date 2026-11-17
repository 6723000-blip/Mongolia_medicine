
import { t } from "../translations.js";
import { getLanguage } from "../i18n.js";

export function renderNavbar() {
  const language = getLanguage();

  return `
    <nav class="navbar modern-navbar"
         role="navigation"
         aria-label="${t("mainMenu")}">

      <div class="container">

        <!-- Лого -->
        <div class="navbar-brand">
          <a class="navbar-item brand-logo" href="#/">
            <span class="brand-icon">🌿</span>

            <span class="brand-text">
              <strong>${t("siteName")}</strong>
              <small>${t("siteSubtitle")}</small>
            </span>
          </a>

          <!-- Гар утасны цэс --> 
          <button
            class="navbar-burger"
            type="button"
            aria-label="${t("mainMenu")}"
            aria-expanded="false"
            aria-controls="mainNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <!-- Үндсэн цэс -->
        <div id="mainNavbar" class="navbar-menu">
          <div class="navbar-end">

            <a class="navbar-item" href="#/">
              ${t("home")}
            </a>

            <a class="navbar-item" href="#/history">
              ${t("history")}
            </a>

            <a class="navbar-item" href="#/treatment">
              ${t("treatment")}
            </a>

            <a class="navbar-item" href="#/herbs">
              ${t("herbs")}
            </a>

            <a class="navbar-item" href="#/books">
              ${t("books")}
            </a>

            <a class="navbar-item" href="#/plant-map">
              🗺️ ${getLanguage() === "en" ? "Plant Map" : "Газрын зураг"}
            </a>

            <a class="navbar-item contact-nav-btn"
               href="#/contact">
              ${t("contact")}
            </a>

            <!-- Хэл солих -->
            <div class="navbar-item">
              <div class="buttons has-addons language-switch">

                <button
                  type="button"
                  class="button ${language === "mn" ? "is-success" : "is-light"}"
                  data-language="mn"
                  aria-pressed="${language === "mn"}"
                >
                  🇲🇳 MN
                </button>

                <button
                  type="button"
                  class="button ${language === "en" ? "is-success" : "is-light"}"
                  data-language="en"
                  aria-pressed="${language === "en"}"
                >
                  🇬🇧 EN
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </nav>
  `;
}
