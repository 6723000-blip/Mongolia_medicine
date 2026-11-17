
import { getLanguage } from "../i18n.js";

export function renderContactPage() {
  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  return `
    <section class="section contact-section">
      <div class="container">

        <div class="has-text-centered mb-6">

          <h1 class="title is-2">
            ${tr("Холбоо барих", "Contact Us")}
          </h1>

          <p class="subtitle">
            ${tr(
              "Санал хүсэлт болон асуултаа бидэнд илгээгээрэй",
              "Share your questions, feedback and suggestions with us."
            )}
          </p>

        </div>

        <div class="columns is-variable is-6">

          <!-- Холбоо барих мэдээлэл -->
          <div class="column is-5">
            <div class="box contact-info">

              <h2 class="title is-4">
                🌿 ${tr("Мөнх Өв", "Monkh Uv")}
              </h2>

              <p class="mb-5">
                ${tr(
                  "Монголын уламжлалт анагаах ухааны түүх, өв соёл, эмчилгээний аргууд болон эмийн ургамлын талаарх танин мэдэхүйн цахим сан.",
                  "An educational website about the history, cultural heritage, traditional treatments and medicinal plants of Mongolian medicine."
                )}
              </p>

              <div class="mb-4">
                <h3 class="has-text-weight-bold">
                  📧 ${tr("Имэйл", "Email")}
                </h3>

                <p>
                  ${tr(
                    "Холбоо барих имэйл хаягийг удахгүй нэмнэ.",
                    "A contact email address will be added soon."
                  )}
                </p>
              </div>

              <div class="mb-4">
                <h3 class="has-text-weight-bold">
                  📍 ${tr("Байршил", "Location")}
                </h3>

                <p>${tr("Монгол Улс", "Mongolia")}</p>
              </div>

              <div class="notification is-info is-light">
                ${tr(
                  "Энэхүү вебсайт нь уламжлалт анагаах ухааны танин мэдэхүйн мэдээлэл түгээх зориулалттай.",
                  "This website provides educational information about traditional medicine."
                )}
              </div>

            </div>
          </div>

          <!-- Санал хүсэлтийн форм -->
          <div class="column is-7">
            <div class="box contact-form-box">

              <h2 class="title is-4">
                ${tr("Санал хүсэлт илгээх", "Send a Message")}
              </h2>

              <form id="contact-form">

                <div class="field">
                  <label class="label" for="contact-name">
                    ${tr("Таны нэр", "Your Name")}
                  </label>

                  <div class="control">
                    <input
                      id="contact-name"
                      class="input"
                      type="text"
                      name="name"
                      placeholder="${tr(
                        "Нэрээ оруулна уу",
                        "Enter your name"
                      )}"
                      maxlength="100"
                      required
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label" for="contact-email">
                    ${tr("Имэйл хаяг", "Email Address")}
                  </label>

                  <div class="control">
                    <input
                      id="contact-email"
                      class="input"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label" for="contact-subject">
                    ${tr("Гарчиг", "Subject")}
                  </label>

                  <div class="control">
                    <input
                      id="contact-subject"
                      class="input"
                      type="text"
                      name="subject"
                      placeholder="${tr(
                        "Санал хүсэлтийн гарчиг",
                        "Enter the subject"
                      )}"
                      maxlength="150"
                      required
                    >
                  </div>
                </div>

                <div class="field">
                  <label class="label" for="contact-message">
                    ${tr("Санал хүсэлт", "Your Message")}
                  </label>

                  <div class="control">
                    <textarea
                      id="contact-message"
                      class="textarea"
                      name="message"
                      placeholder="${tr(
                        "Санал хүсэлтээ бичнэ үү...",
                        "Write your message here..."
                      )}"
                      rows="6"
                      maxlength="3000"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="field mt-5">
                  <button
                    type="submit"
                    class="button is-success is-medium is-fullwidth"
                  >
                    ✉️ ${tr("Илгээх", "Send Message")}
                  </button>
                </div>

                <div
                  id="contact-result"
                  class="notification is-hidden mt-4"
                  role="status"
                  aria-live="polite"
                ></div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function setupContactPage() {
  const form = document.getElementById("contact-form");
  const result = document.getElementById("contact-result");

  if (!form || !result) return;

  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      result.className =
        "notification is-warning is-light mt-4";

      result.textContent = tr(
        "Бүх талбарыг бөглөнө үү.",
        "Please complete all fields."
      );
      return;
    }

    result.className =
      "notification is-info is-light mt-4";

    result.textContent = tr(
      "Формыг амжилттай шалгалаа. Энэ нь туршилтын хувилбар тул мэдээлэл одоогоор сервер рүү илгээгдэхгүй.",
      "Form validated successfully. This is a demo, so your information has not been sent to a server."
    );
  });
}
