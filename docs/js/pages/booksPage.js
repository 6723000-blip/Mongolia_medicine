
import { getLanguage } from "../i18n.js";

const books = [
  {
    id: 1,
    titleMn: "Анагаах ухааны дөрвөн үндэс",
    titleEn: "The Four Medical Tantras",
    category: "classic",
    icon: "📖",
    descMn:
      "Уламжлалт анагаах ухааны онол, оношилгоо, эмчилгээний талаарх сонгодог сурвалж.",
    descEn:
      "A classical medical text covering traditional medical theory, diagnosis and treatment."
  },
  {
    id: 2,
    titleMn: "Монголын уламжлалт анагаах ухааны түүх",
    titleEn: "History of Traditional Mongolian Medicine",
    category: "topic",
    icon: "📜",
    descMn:
      "Монголын уламжлалт анагаах ухааны үүсэл, хөгжил болон түүхэн уламжлалыг судлах сэдэв.",
    descEn:
      "A study topic exploring the origins, development and historical traditions of Mongolian medicine."
  },
  {
    id: 3,
    titleMn: "Эмийн ургамлын судалгаа",
    titleEn: "Medicinal Plant Research",
    category: "topic",
    icon: "🌿",
    descMn:
      "Монгол орны эмийн ургамлын төрөл зүйл, уламжлалт хэрэглээ, судалгааны чиглэл.",
    descEn:
      "Research topics concerning medicinal plant species, traditional uses and botanical studies in Mongolia."
  },
  {
    id: 4,
    titleMn: "Уламжлалт эмчилгээний аргууд",
    titleEn: "Traditional Treatment Methods",
    category: "topic",
    icon: "📚",
    descMn:
      "Бариа засал, зүү эмчилгээ, төөнүүр зэрэг аргуудын талаарх судалгааны чиглэл.",
    descEn:
      "Study topics related to traditional massage, acupuncture, moxibustion and other methods."
  }
];

export function renderBooksPage() {
  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  return `
    <section class="section">
      <div class="container">

        <div class="has-text-centered mb-6">

          <h1 class="title is-2">
            📚 ${tr(
              "Ном, судалгааны цахим сан",
              "Books & Research Library"
            )}
          </h1>

          <p class="subtitle">
            ${tr(
              "Монголын уламжлалт анагаах ухааны ном, сурвалж болон судалгааны сэдвүүд",
              "Explore classical medical texts and research topics related to traditional Mongolian medicine."
            )}
          </p>

        </div>

        <div class="columns mb-5">

          <div class="column is-8">
            <input
              id="book-search"
              class="input is-medium"
              type="search"
              placeholder="${tr(
                "Ном, судалгааны нэрээр хайх...",
                "Search books and research..."
              )}"
              aria-label="${tr("Ном хайх", "Search books")}"
            >
          </div>

          <div class="column is-4">
            <div class="select is-medium is-fullwidth">

              <select id="book-category">
                <option value="all">
                  ${tr("Бүх ангилал", "All Categories")}
                </option>

                <option value="classic">
                  ${tr("Сонгодог сурвалж", "Classical Texts")}
                </option>

                <option value="topic">
                  ${tr("Судлах сэдэв", "Study Topics")}
                </option>
              </select>

            </div>
          </div>

        </div>

        <div id="book-list" class="columns is-multiline">
        </div>

        <div class="notification is-info is-light mt-5">
          ${tr(
            "Энд сонгодог сурвалж болон судлах сэдвүүдийн жишээг оруулсан. Ном зүйн мэдээлэл, зохиогч, хэвлэгдсэн он, эх сурвалжийн холбоосыг дараагийн хөгжүүлэлтээр баталгаажуулж нэмнэ.",
            "This library currently contains examples of classical texts and research topics. Verified bibliographic details, authors, publication dates and source links will be added in a future update."
          )}
        </div>

      </div>
    </section>
  `;
}

export function setupBooksPage() {
  const search = document.getElementById("book-search");
  const category = document.getElementById("book-category");
  const list = document.getElementById("book-list");

  if (!search || !category || !list) return;

  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  const categoryNames = {
    classic: tr("Сонгодог сурвалж", "Classical Texts"),
    topic: tr("Судлах сэдэв", "Study Topics")
  };

  function displayBooks() {
    const query = search.value.trim().toLowerCase();
    const selectedCategory = category.value;

    const filtered = books.filter((book) => {
      const searchable = [
        book.titleMn,
        book.titleEn,
        book.descMn,
        book.descEn
      ].join(" ").toLowerCase();

      const matchesSearch = searchable.includes(query);

      const matchesCategory =
        selectedCategory === "all" ||
        book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="column is-12">
          <div class="notification is-light has-text-centered">
            ${tr(
              "Тохирох мэдээлэл олдсонгүй.",
              "No matching results found."
            )}
          </div>
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map((book) => `
      <div class="column is-4-desktop is-6-tablet">

        <article class="box book-card">

          <div class="is-size-1 mb-3">
            ${book.icon}
          </div>

          <span class="tag is-success is-light mb-3">
            ${categoryNames[book.category]}
          </span>

          <h2 class="title is-4">
            ${en ? book.titleEn : book.titleMn}
          </h2>

          <p>
            ${en ? book.descEn : book.descMn}
          </p>

        </article>
      </div>
    `).join("");
  }

  search.addEventListener("input", displayBooks);
  category.addEventListener("change", displayBooks);

  displayBooks();
}
