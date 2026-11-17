
import { getLanguage } from "../i18n.js";

export function renderHistoryPage() {
  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  const events = [
    {
      period: tr("Эрт үе", "Ancient Period"),
      title: tr(
        "Ардын эмчилгээний уламжлал",
        "Traditional Folk Healing"
      ),
      description: tr(
        "Байгаль орчин, амьдралын хэв маяг, ургамал болон амьтны гаралтай түүхий эдийн талаарх мэдлэг ардын эмчилгээний уламжлалд чухал байр суурь эзэлж ирсэн.",
        "Knowledge of nature, lifestyle, plants and animal-derived materials played an important role in traditional folk healing."
      )
    },
    {
      period: tr("Дундад үе", "Medieval Period"),
      title: tr(
        "Анагаах ухааны мэдлэгийн солилцоо",
        "Exchange of Medical Knowledge"
      ),
      description: tr(
        "Монголын анагаах уламжлал нь Төвөд, Энэтхэг, Хятад зэрэг бүс нутгийн анагаах ухааны мэдлэгтэй харилцан нөлөөлж хөгжсөн.",
        "Mongolian medical traditions developed through exchanges with Tibetan, Indian and Chinese medical knowledge."
      )
    },
    {
      period: tr("XVII–XIX зуун", "17th–19th Centuries"),
      title: tr(
        "Сургалт ба сонгодог сурвалж",
        "Education and Classical Texts"
      ),
      description: tr(
        "Эмч, маарамба бэлтгэх сургалт, анагаах ухааны судар бичиг, уламжлалт оношилгоо болон эмчилгээний мэдлэгийг уламжлуулах үйл ажиллагаа хөгжсөн.",
        "Medical education, classical texts and the transmission of traditional diagnostic and treatment knowledge developed during this period."
      )
    },
    {
      period: tr("Орчин үе", "Modern Period"),
      title: tr(
        "Судалгаа ба боловсрол",
        "Research and Education"
      ),
      description: tr(
        "Уламжлалт анагаах ухааныг шинжлэх ухааны аргаар судлах, эмнэлзүйн аюулгүй байдал, сургалт, өв соёлын хадгалалт зэрэг чиглэлээр ажиллаж байна.",
        "Current efforts include scientific research, clinical safety, education and the preservation of traditional medical heritage."
      )
    }
  ];

  return `
    <section class="detail-hero">
      <div class="container">
        <div class="columns is-vcentered">

          <div class="column is-6">
            <span class="detail-label">
              ${tr("МӨНХ ӨВ • ТҮҮХ", "MONKH UV • HISTORY")}
            </span>

            <h1 class="title is-1">
              ${tr(
                "Уламжлалт анагаах ухааны түүх",
                "History of Traditional Mongolian Medicine"
              )}
            </h1>

            <p>
              ${tr(
                "Монголын уламжлалт анагаах ухаан нь олон үеийн турш хуримтлагдсан эмчилгээний мэдлэг, ажиглалт, соёлын уламжлалтай холбоотой.",
                "Traditional Mongolian medicine reflects generations of accumulated healing knowledge, observation and cultural practices."
              )}
            </p>

            <a href="#/history"
               class="button is-success mt-5"
               onclick="document.getElementById('history-timeline')?.scrollIntoView({behavior:'smooth'}); return false;">
              ${tr("Түүхэн үе шатууд", "Historical Timeline")}
            </a>
          </div>

          <div class="column is-6">
            <img
              class="detail-hero-image"
              src="./img/history.jpg"
              alt="${tr("Уламжлалт анагаах ухааны түүх", "History of traditional medicine")}"
              loading="lazy"
            >
          </div>

        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="has-text-centered mb-6">
          <span class="detail-label">
            ${tr("ӨВ СОЁЛ", "CULTURAL HERITAGE")}
          </span>

          <h2 class="title is-2">
            ${tr("Түүхэн хөгжил", "Historical Development")}
          </h2>
        </div>

        <div id="history-timeline" class="history-timeline">
          ${events.map(event => `
            <article class="history-event">
              <span class="history-period">
                ${event.period}
              </span>

              <h3 class="title is-4">
                ${event.title}
              </h3>

              <p>${event.description}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section detail-soft-section">
      <div class="container has-text-centered">

        <h2 class="title is-2">
          ${tr("Сонгодог сурвалж", "Classical Medical Texts")}
        </h2>

        <p class="detail-centered-text">
          ${tr(
            "“Анагаах ухааны дөрвөн үндэс” зэрэг сонгодог сурвалж нь уламжлалт анагаах ухааны онол, сургалтын түүхийг ойлгоход чухал эх хэрэглэгдэхүүн юм.",
            "Classical works such as the Four Medical Tantras are important sources for understanding the theory and educational history of traditional medicine."
          )}
        </p>

        <a href="#/books" class="button is-success mt-4">
          ${tr("Ном, судалгаа үзэх", "Explore Books & Research")}
        </a>
      </div>
    </section>
  `;
}
