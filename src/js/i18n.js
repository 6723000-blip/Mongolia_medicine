
const STORAGE_KEY = "monkh-uv-language";

export function getLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en"
      ? "en"
      : "mn";
  } catch {
    return "mn";
  }
}

export function setLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "mn";

  try {
    localStorage.setItem(STORAGE_KEY, nextLanguage);
  } catch {
    // Storage ашиглах боломжгүй байсан ч
    // тухайн удаагийн хэл солилт ажиллана.
  }

  document.documentElement.lang = nextLanguage;

  window.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { language: nextLanguage }
    })
  );
}

export function translate(mn, en) {
  return getLanguage() === "en" ? en : mn;
}
