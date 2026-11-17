
import { getLanguage } from "../i18n.js";

const herbs = [
  {
    nameMn: "Чацаргана",
    nameEn: "Sea Buckthorn",
    latin: "Hippophae rhamnoides",
    category: "fruit",
    image: "./img/sea-buckthorn.jpg",
    descMn:
      "Улбар шар өнгийн жимстэй, Монголд ургадаг ургамал. Жимсийг хүнс болон уламжлалт хэрэглээнд ашиглаж ирсэн.",
    descEn:
      "A plant with bright orange berries that grows in Mongolia. Its berries have been used as food and in traditional practices."
  },
  {
    nameMn: "Ганга",
    nameEn: "Thyme",
    latin: "Thymus spp.",
    category: "herb",
    image: "./img/thyme.jpg",
    descMn:
      "Анхилуун үнэртэй ургамлын төрөл. Зарим зүйл нь уламжлалт хэрэглээтэй.",
    descEn:
      "A group of aromatic plants. Some species have a history of traditional use."
  },
  {
    nameMn: "Чихэр өвс",
    nameEn: "Licorice",
    latin: "Glycyrrhiza spp.",
    category: "root",
    image: "./img/licorice.jpg",
    descMn:
      "Үндсийг уламжлалт жоронд ашиглаж ирсэн. Хэт их хэрэглээ нь даралт болон калийн түвшинд нөлөөлж болзошгүй.",
    descEn:
      "The roots have been used in traditional formulations. Excessive consumption may affect blood pressure and potassium levels."
  },
  {
    nameMn: "Нохойн хошуу",
    nameEn: "Rosehip",
    latin: "Rosa spp.",
    category: "fruit",
    image: "./img/rosehip.jpg",
    descMn:
      "Сарнайн төрлийн ургамлын жимс. Хүнс, цай болон уламжлалт хэрэглээнд ашиглагддаг.",
    descEn:
      "The fruit of plants in the rose genus, used in food, tea and traditional preparations."
  },
  {
    nameMn: "Халгай",
    nameEn: "Nettle",
    latin: "Urtica spp.",
    category: "herb",
    image: "./img/nettle.jpg",
    descMn:
      "Навч, иш нь хүрэхэд арьс цочроох шинжтэй. Зарим зүйл нь хүнс болон уламжлалт хэрэглээтэй.",
    descEn:
      "A plant whose leaves and stems can irritate the skin. Some species are used as food and in traditional practices."
  }
];

export function renderHerbsPage() {
  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  return `
    <section class="detail-hero">
      <div class="container has-text-centered">

        <span class="detail-label">
          ${tr("МӨНХ ӨВ • ЭМИЙН УРГАМАЛ", "MONKH UV • MEDICINAL HERBS")}
        </span>

        <h1 class="title is-1">
          ${tr("Эмийн ургамлын цахим сан", "Medicinal Herbs Library")}
        </h1>

        <p class="detail-centered-text">
          ${tr(
            "Монгол орны ургамлын төрөл зүйл, онцлог болон уламжлалт хэрэглээний талаар танин мэдээрэй.",
            "Explore medicinal plants found in Mongolia, their characteristics and traditional uses."
          )}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="columns mb-5">

          <div class="column is-8">
            <input
              id="herb-search"
              class="input is-medium"
              type="search"
              placeholder="${tr("Ургамлын нэрээр хайх...", "Search medicinal herbs...")}"
            >
          </div>

          <div class="column is-4">
            <div class="select is-medium is-fullwidth">
              <select id="herb-category">
                <option value="all">
                  ${tr("Бүх ангилал", "All Categories")}
                </option>

                <option value="fruit">
                  ${tr("Жимс", "Fruits")}
                </option>

                <option value="herb">
                  ${tr("Өвслөг ургамал", "Herbaceous Plants")}
                </option>

                <option value="root">
                  ${tr("Үндэс", "Roots")}
                </option>
              </select>
            </div>
          </div>

        </div>

        <div id="herb-list" class="columns is-multiline"></div>

        <div class="notification is-info is-light mt-5">
          ${tr(
            "Эндэх мэдээлэл нь танин мэдэхүйн зориулалттай. Ургамлыг өөрөө таньж түүж хэрэглэх, эмчилгээ орлуулах зорилгоор ашиглахгүй.",
            "This information is for educational purposes only. Do not use it to identify, collect or consume plants independently, or as a substitute for medical treatment."
          )}
        </div>

      </div>
    </section>
  `;
}

export function setupHerbsPage() {
  const search = document.getElementById("herb-search");
  const category = document.getElementById("herb-category");
  const list = document.getElementById("herb-list");

  if (!search || !category || !list) return;

  const en = getLanguage() === "en";
  const tr = (mn, english) => en ? english : mn;

  const categoryNames = {
    fruit: tr("Жимс", "Fruits"),
    herb: tr("Өвслөг ургамал", "Herbaceous Plants"),
    root: tr("Үндэс", "Roots")
  };

  function displayHerbs() {
    const query = search.value.trim().toLowerCase();
    const selected = category.value;

    const filtered = herbs.filter(herb => {
      const searchable = [
        herb.nameMn,
        herb.nameEn,
        herb.latin,
        herb.descMn,
        herb.descEn
      ].join(" ").toLowerCase();

      const matchesSearch = searchable.includes(query);
      const matchesCategory =
        selected === "all" || herb.category === selected;

      return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="column is-12">
          <div class="notification is-light has-text-centered">
            ${tr("Тохирох ургамал олдсонгүй.", "No matching herbs found.")}
          </div>
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map(herb => `
      <div class="column is-4-desktop is-6-tablet">
        <article class="detail-card herb-card">

          <img
            src="${herb.image}"
            alt="${en ? herb.nameEn : herb.nameMn}"
            loading="lazy"
          >

          <div class="herb-card-body">

            <span class="tag is-success is-light mb-3">
              ${categoryNames[herb.category]}
            </span>

            <h2 class="title is-4">
              ${en ? herb.nameEn : herb.nameMn}
            </h2>

            <p class="herb-latin">
              <em>${herb.latin}</em>
            </p>

            <p>
              ${en ? herb.descEn : herb.descMn}
            </p>

          </div>
        </article>
      </div>
    `).join("");
  }

  search.addEventListener("input", displayHerbs);
  category.addEventListener("change", displayHerbs);

  displayHerbs();
}
