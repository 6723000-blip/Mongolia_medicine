
import { t } from "../translations.js";

export function renderFooter() {
  return `
    <footer class="footer" style="background:#173f31; color:white;">
      <div class="container">
        <div class="columns">

          <div class="column is-6">
            <h3 class="title is-4 has-text-white">
              🌿 ${t("siteName")}
            </h3>

            <p style="color:#d7e8db; line-height:1.8;">
              ${t("footerDescription")}
            </p>
          </div>

          <div class="column is-3">
            <h4 class="has-text-weight-bold mb-3">
              ${t("mainMenu")}
            </h4>

            <a href="#/" class="has-text-white">
              ${t("home")}
            </a><br>

            <a href="#/history" class="has-text-white">
              ${t("history")}
            </a><br>

            <a href="#/treatment" class="has-text-white">
              ${t("treatment")}
            </a><br>

            <a href="#/herbs" class="has-text-white">
              ${t("herbs")}
            </a>
          </div>

          <div class="column is-3">
            <h4 class="has-text-weight-bold mb-3">
              ${t("contact")}
            </h4>

            <a href="#/contact" class="has-text-white">
              ${t("contact")}
            </a>
          </div>

        </div>

        <hr style="background:#456b55;">

        <p class="has-text-centered"
           style="color:#d7e8db;">
          © ${new Date().getFullYear()}
          ${t("siteName")}.
          ${t("copyright")}
        </p>

      </div>
    </footer>
  `;
}
