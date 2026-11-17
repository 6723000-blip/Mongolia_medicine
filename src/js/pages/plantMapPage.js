
import { getLanguage } from "../i18n.js";
import { getPlantsByProvince } from "../plantData.js";

// ======================================
// МӨНХ ӨВ — ЭМИЙН УРГАМЛЫН ГАЗРЫН ЗУРАГ
// ======================================

// Локал GeoJSON файл
const GEOJSON_URL = "./data/mongolia-aimags.geojson";

// Аймгийн нэрс
const provinceNames = {
  Arkhangai: ["Архангай", "Arkhangai"],
  "Bayan-Olgii": ["Баян-Өлгий", "Bayan-Olgii"],
  Bayankhongor: ["Баянхонгор", "Bayankhongor"],
  Bulgan: ["Булган", "Bulgan"],
  "Darkhan-Uul": ["Дархан-Уул", "Darkhan-Uul"],
  Dornod: ["Дорнод", "Dornod"],
  Dornogovi: ["Дорноговь", "Dornogovi"],
  Dundgovi: ["Дундговь", "Dundgovi"],
  "Govi-Altai": ["Говь-Алтай", "Govi-Altai"],
  Govisumber: ["Говьсүмбэр", "Govisumber"],
  Khentii: ["Хэнтий", "Khentii"],
  Khovd: ["Ховд", "Khovd"],
  Khuvsgul: ["Хөвсгөл", "Khuvsgul"],
  Orkhon: ["Орхон", "Orkhon"],
  Ovorkhangai: ["Өвөрхангай", "Ovorkhangai"],
  Omnogovi: ["Өмнөговь", "Omnogovi"],
  Selenge: ["Сэлэнгэ", "Selenge"],
  Sukhbaatar: ["Сүхбаатар", "Sukhbaatar"],
  Tov: ["Төв", "Tov"],
  Uvs: ["Увс", "Uvs"],
  Zavkhan: ["Завхан", "Zavkhan"],
  Ulaanbaatar: ["Улаанбаатар", "Ulaanbaatar"]
};

// GeoJSON дахь нэрсийг таних
const aliases = {
  arkhangai: "Arkhangai",
  bayanolgii: "Bayan-Olgii",
  bayanulgii: "Bayan-Olgii",
  bayankhongor: "Bayankhongor",
  bulgan: "Bulgan",
  darkhanuul: "Darkhan-Uul",
  darhanuul: "Darkhan-Uul",
  dornod: "Dornod",
  dornogovi: "Dornogovi",
  dornogobi: "Dornogovi",
  dundgovi: "Dundgovi",
  dundgobi: "Dundgovi",
  govialtai: "Govi-Altai",
  gobialtai: "Govi-Altai",
  govisumber: "Govisumber",
  gobisumber: "Govisumber",
  khentii: "Khentii",
  hentii: "Khentii",
  khovd: "Khovd",
  hovd: "Khovd",
  khuvsgul: "Khuvsgul",
  huvsgul: "Khuvsgul",
  khovsgol: "Khuvsgul",
  orkhon: "Orkhon",
  ovorkhangai: "Ovorkhangai",
  uvurkhangai: "Ovorkhangai",
  omnogovi: "Omnogovi",
  umnugovi: "Omnogovi",
  selenge: "Selenge",
  sukhbaatar: "Sukhbaatar",
  suhbaatar: "Sukhbaatar",
  tov: "Tov",
  tuv: "Tov",
  uvs: "Uvs",
  zavkhan: "Zavkhan",
  ulaanbaatar: "Ulaanbaatar",
  ulanbator: "Ulaanbaatar",
  ulaanbaatarhot: "Ulaanbaatar"
};

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function getProvinceKey(name) {
  return aliases[normalizeName(name)] || null;
}

function getProvinceName(key, lang) {
  const names = provinceNames[key];
  return names
    ? names[lang === "en" ? 1 : 0]
    : key;
}

// ======================================
// МОНГОЛ / АНГЛИ ОРЧУУЛГА
// ======================================

const translations = {
  mn: {
    eyebrow: "🌿 МОНГОЛ ОРНЫ УРГАМАЛ",
    title: "Эмийн ургамлын газрын зураг",
    subtitle:
      "Монгол Улсын 21 аймаг, Улаанбаатар хотын газрын зурагтай танилцаж, аймаг бүрийн ургамлын мэдээллийг үзээрэй.",
    mapTitle: "🗺️ Монгол Улсын газрын зураг",
    reset: "Буцаах",
    selectLabel: "Аймаг сонгох",
    placeholder: "Аймаг сонгоно уу",
    choose: "Аймаг сонгоорой",
    chooseText:
      "Газрын зураг дээрх аймагт дарах эсвэл жагсаалтаас сонгоно уу.",
    loading: "Газрын зураг ачаалж байна...",
    error: "Газрын зураг ачаалахад алдаа гарлаа.",
    retry: "Дахин оролдох",
    plantsTitle: "Эмийн ургамлын мэдээлэл",
    noPlants:
      "Энэ аймгийн ургамлын мэдээлэл хараахан нэмэгдээгүй байна.",
    demo:
      "Анхааруулга: Ургамлын аймаг дахь тархалт нь одоогоор баталгаажаагүй жишээ мэдээлэл.",
    usage: "Уламжлалт хэрэглээ / судалгаа",
    disclaimer:
      "Энэ мэдээлэл нь танин мэдэхүйн зориулалттай бөгөөд эмчилгээний зөвлөгөө биш.",
    count: "Газрын зурагт бүртгэгдсэн нэгж",
    note:
      "Аймаг тус бүрийн ургамлын жагсаалт нь урьдчилсан жишээ бөгөөд бодит тархалтыг эх сурвалжаар нягтлах шаардлагатай."
  },

  en: {
    eyebrow: "🌿 PLANTS OF MONGOLIA",
    title: "Medicinal Plants Map",
    subtitle:
      "Explore Mongolia's 21 provinces and Ulaanbaatar and view information about medicinal plants.",
    mapTitle: "🗺️ Map of Mongolia",
    reset: "Reset",
    selectLabel: "Select a province",
    placeholder: "Choose a province",
    choose: "Choose a province",
    chooseText:
      "Click a province on the map or choose one from the list.",
    loading: "Loading map...",
    error: "Unable to load the map.",
    retry: "Try again",
    plantsTitle: "Medicinal plant information",
    noPlants:
      "Plant records have not been added for this province yet.",
    demo:
      "Notice: Province-level plant occurrence is not yet verified. These are demonstration records.",
    usage: "Traditional use / research",
    disclaimer:
      "This information is educational and is not medical advice.",
    count: "Administrative units loaded",
    note:
      "Province-specific plant lists are preliminary examples and require verification against reliable botanical sources."
  }
};

// ======================================
// HTML ХУУДАС
// ======================================

export function renderPlantMapPage() {
  const lang = getLanguage() === "en" ? "en" : "mn";
  const t = translations[lang];

  const options = Object.keys(provinceNames)
    .sort((a, b) =>
      getProvinceName(a, lang).localeCompare(
        getProvinceName(b, lang),
        lang
      )
    )
    .map(key => `
      <option value="${key}">
        ${getProvinceName(key, lang)}
      </option>
    `)
    .join("");

  return `
    <section class="section plant-map-page">
      <div class="container">

        <div class="has-text-centered mb-6">
          <p class="plant-map-eyebrow">
            ${t.eyebrow}
          </p>

          <h1 class="title is-1 plant-map-title">
            ${t.title}
          </h1>

          <p class="subtitle is-5 mt-4">
            ${t.subtitle}
          </p>
        </div>

        <div class="columns is-variable is-6">

          <!-- ГАЗРЫН ЗУРАГ -->
          <div class="column is-8">
            <div class="plant-map-card">

              <div class="plant-map-header">
                <h2 class="title is-4 mb-0">
                  ${t.mapTitle}
                </h2>

                <button
                  id="plant-map-reset"
                  type="button"
                  class="button is-light is-small"
                >
                  ${t.reset}
                </button>
              </div>

              <div
                id="mongolia-map"
                class="mongolia-map"
              ></div>

              <p
                id="plant-map-status"
                class="plant-map-status"
                aria-live="polite"
              >
                ${t.loading}
              </p>

            </div>
          </div>

          <!-- УРГАМЛЫН МЭДЭЭЛЭЛ -->
          <div class="column is-4">
            <div class="plant-map-info-card">

              <label
                for="province-select"
                class="label"
              >
                ${t.selectLabel}
              </label>

              <div class="select is-fullwidth">
                <select id="province-select">
                  <option value="">
                    ${t.placeholder}
                  </option>
                  ${options}
                </select>
              </div>

              <div
                id="province-information"
                class="province-information mt-5"
                aria-live="polite"
              >
                <div class="has-text-centered py-5">
                  <div class="is-size-2">🌱</div>

                  <h3 class="title is-4">
                    ${t.choose}
                  </h3>

                  <p>${t.chooseText}</p>
                </div>
              </div>

              <p
                id="province-count"
                class="has-text-grey is-size-7 mt-4"
              ></p>

            </div>
          </div>

        </div>

        <div class="notification is-light mt-5">
          ${t.note}
        </div>

        <p class="has-text-grey is-size-7">
          Boundary data: geoBoundaries
        </p>

      </div>
    </section>
  `;
}

// ======================================
// LEAFLET САН АЧААЛАХ
// ======================================

let leafletPromise = null;

function loadLeaflet() {
  if (window.L) {
    return Promise.resolve(window.L);
  }

  if (leafletPromise) {
    return leafletPromise;
  }

  leafletPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(
      'link[data-plant-leaflet]'
    )) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.dataset.plantLeaflet = "true";
      document.head.appendChild(link);
    }

    const existing = document.querySelector(
      'script[data-plant-leaflet]'
    );

    if (existing) {
      existing.addEventListener(
        "load",
        () => resolve(window.L),
        { once: true }
      );

      existing.addEventListener(
        "error",
        () => reject(
          new Error("Leaflet loading failed")
        ),
        { once: true }
      );

      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    script.dataset.plantLeaflet = "true";

    script.onload = () => resolve(window.L);

    script.onerror = () =>
      reject(
        new Error("Leaflet loading failed")
      );

    document.head.appendChild(script);
  }).catch(error => {
    leafletPromise = null;
    throw error;
  });

  return leafletPromise;
}

// ======================================
// УРГАМЛЫН КАРТ ҮҮСГЭХ
// ======================================

function renderPlantCards(key, lang, t) {
  const plants = getPlantsByProvince(key);

  if (!plants.length) {
    return `
      <div class="notification is-light">
        ${t.noPlants}
      </div>
    `;
  }

  const cards = plants.map(plant => {
    const name =
      lang === "en" ? plant.en : plant.mn;

    const description =
      lang === "en"
        ? plant.descriptionEn
        : plant.descriptionMn;

    const usage =
      lang === "en"
        ? plant.useEn
        : plant.useMn;

    return `
      <article class="plant-detail-card">

        <img
          src="${plant.image}"
          alt="${name}"
          loading="lazy"
          onerror="this.style.display='none'"
        />

        <div class="plant-detail-content">

          <h4>${name}</h4>

          <p class="plant-scientific">
            <i>${plant.scientific}</i>
          </p>

          <p>${description}</p>

          <p class="mt-3">
            <strong>${t.usage}:</strong>
            ${usage}
          </p>

        </div>
      </article>
    `;
  }).join("");

  return `
    <div class="notification is-warning is-light">
      ${t.demo}
    </div>

    <div class="plant-list">
      ${cards}
    </div>
  `;
}

// ======================================
// ГАЗРЫН ЗУРГИЙН ҮНДСЭН АЖИЛЛАГАА
// ======================================

let activeMap = null;

export async function setupPlantMapPage() {
  const mapElement =
    document.getElementById("mongolia-map");

  const statusElement =
    document.getElementById("plant-map-status");

  const selectElement =
    document.getElementById("province-select");

  const infoElement =
    document.getElementById("province-information");

  const resetButton =
    document.getElementById("plant-map-reset");

  const countElement =
    document.getElementById("province-count");

  if (
    !mapElement ||
    !statusElement ||
    !selectElement ||
    !infoElement
  ) {
    return;
  }

  const lang = getLanguage() === "en" ? "en" : "mn";
  const t = translations[lang];

  // Өмнөх газрын зургийг цэвэрлэх
  if (activeMap) {
    try {
      activeMap.remove();
    } catch (error) {
      console.warn(error);
    }

    activeMap = null;
  }

  mapElement.innerHTML = "";
  mapElement.style.width = "100%";
  mapElement.style.height = "520px";
  mapElement.style.minHeight = "420px";
  mapElement.style.background = "#eaf2eb";
  mapElement.style.borderRadius = "16px";

  statusElement.textContent = t.loading;

  try {
    // Локал GeoJSON унших
    const response = await fetch(GEOJSON_URL);

    if (!response.ok) {
      throw new Error(
        `GeoJSON HTTP ${response.status}`
      );
    }

    const geojson = await response.json();

    if (
      geojson.type !== "FeatureCollection" ||
      !Array.isArray(geojson.features) ||
      !geojson.features.length
    ) {
      throw new Error("Invalid GeoJSON");
    }

    if (!mapElement.isConnected) return;

    // Leaflet ачаалах
    const L = await loadLeaflet();

    if (!mapElement.isConnected) return;

    const map = L.map(mapElement, {
      zoomControl: true,
      scrollWheelZoom: false
    });

    activeMap = map;

    // Суурь газрын зураг
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
      }
    ).addTo(map);

    let selectedLayer = null;
    const provinceLayers = new Map();

    // Аймаг сонгох
    function selectProvince(key) {
      const layer = provinceLayers.get(key);

      if (!layer) return;

      if (selectedLayer) {
        geoLayer.resetStyle(selectedLayer);
      }

      selectedLayer = layer;

      layer.setStyle({
        color: "#14532d",
        weight: 3,
        fillColor: "#f4b942",
        fillOpacity: 0.95
      });

      layer.bringToFront();

      map.fitBounds(layer.getBounds(), {
        padding: [35, 35],
        maxZoom: 8
      });

      selectElement.value = key;

      const name = getProvinceName(key, lang);

      // Ургамлын мэдээлэл
      infoElement.innerHTML = `
        <div class="province-detail">

          <div class="is-size-2 mb-3">🌿</div>

          <h3 class="title is-3">
            ${name}
          </h3>

          <p class="has-text-grey mb-4">
            ${t.plantsTitle}
          </p>

          ${renderPlantCards(key, lang, t)}

          <p class="is-size-7 has-text-grey mt-4">
            ${t.disclaimer}
          </p>

        </div>
      `;

      statusElement.textContent = name;
    }

    // GeoJSON зураг үүсгэх
    const geoLayer = L.geoJSON(geojson, {
      style: {
        color: "#ffffff",
        weight: 1.5,
        fillColor: "#2e8058",
        fillOpacity: 0.8
      },

      onEachFeature(feature, layer) {
        const rawName =
          feature.properties?.shapeName ||
          feature.properties?.name ||
          feature.properties?.NAME_1 ||
          "";

        const key = getProvinceKey(rawName);

        if (!key) {
          console.warn(
            "Unknown province:",
            rawName
          );
          return;
        }

        provinceLayers.set(key, layer);

        layer.bindTooltip(
          getProvinceName(key, lang),
          { sticky: true }
        );

        layer.on("click", () => {
          selectProvince(key);
        });

        layer.on("mouseover", () => {
          if (layer !== selectedLayer) {
            layer.setStyle({
              weight: 2.5,
              fillOpacity: 0.95
            });
          }
        });

        layer.on("mouseout", () => {
          if (layer !== selectedLayer) {
            geoLayer.resetStyle(layer);
          }
        });
      }
    }).addTo(map);

    // Бүх Монголыг харуулах
    const fullBounds = geoLayer.getBounds();

    if (fullBounds.isValid()) {
      map.fitBounds(fullBounds, {
        padding: [20, 20]
      });
    } else {
      map.setView([46.8, 103.8], 5);
    }

    countElement.textContent =
      `${t.count}: ${geojson.features.length}`;

    statusElement.textContent = "";

    // Жагсаалтаас аймаг сонгох
    selectElement.addEventListener(
      "change",
      event => {
        selectProvince(event.target.value);
      }
    );

    // Буцаах товч
    resetButton?.addEventListener("click", () => {
      if (selectedLayer) {
        geoLayer.resetStyle(selectedLayer);
        selectedLayer = null;
      }

      selectElement.value = "";

      if (fullBounds.isValid()) {
        map.fitBounds(fullBounds, {
          padding: [20, 20]
        });
      }

      infoElement.innerHTML = `
        <div class="has-text-centered py-5">
          <div class="is-size-2">🌱</div>

          <h3 class="title is-4">
            ${t.choose}
          </h3>

          <p>${t.chooseText}</p>
        </div>
      `;

      statusElement.textContent = "";
    });

    // Дэлгэцийн хэмжээг шинэчлэх
    setTimeout(() => {
      if (
        mapElement.isConnected &&
        activeMap === map
      ) {
        map.invalidateSize();
      }
    }, 200);

  } catch (error) {
    console.error(
      "Plant map error:",
      error
    );

    if (!mapElement.isConnected) return;

    statusElement.textContent =
      `${t.error} ${error.message}`;

    mapElement.innerHTML = `
      <div style="
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        padding:24px;
      ">
        <div style="font-size:48px">🗺️</div>

        <h3 class="title is-4 mt-3">
          ${t.error}
        </h3>

        <p>${error.message}</p>

        <button
          id="map-retry"
          class="button is-success mt-4"
        >
          ${t.retry}
        </button>
      </div>
    `;

    document
      .getElementById("map-retry")
      ?.addEventListener(
        "click",
        setupPlantMapPage
      );
  }
}
