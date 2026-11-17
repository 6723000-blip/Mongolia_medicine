
import { t } from "../translations.js";

export function renderHomePage() {
  return `
    <section class="hero-medicine">
      <div class="container">

        <p class="has-text-weight-semibold">
          ${t("siteSubtitle")}
        </p>

        <h1>${t("siteName")}</h1>

        <p>
          ${t("homeDescription")}
        </p>

        <a href="#/history" class="medicine-button">
          ${t("learnMore")}
        </a>

      </div>
    </section>
  `;
}
