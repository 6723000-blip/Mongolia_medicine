
import { getLanguage } from "./i18n.js";

const translations = {
  mn: {
    siteName: "Мөнх Өв",
    siteSubtitle: "Уламжлалт анагаах ухаан",
    home: "Нүүр",
    history: "Түүх",
    treatment: "Эмчилгээ",
    herbs: "Эмийн ургамал",
    books: "Ном, судалгаа",
    contact: "Холбоо барих",

    homeTitle: "Өв соёлоо танин мэдье",
    homeDescription:
      "Монголын уламжлалт анагаах ухааны түүх, өв соёл, эмчилгээний аргууд болон эмийн ургамлын талаар танин мэдээрэй.",
    learnMore: "Дэлгэрэнгүй танилцах",
    viewHerbs: "Эмийн ургамал үзэх",
    ourMission: "Бидний зорилго",
    heritage: "Монголын уламжлалт анагаах ухааны өв",

    historyTitle: "Уламжлалт анагаах ухааны түүх",
    historicalDevelopment: "Түүхэн хөгжил",
    ancient: "Эрт үе",
    medieval: "Дундад үе",
    centuries: "XVII–XIX зуун",
    modern: "Орчин үе",

    treatmentTitle: "Уламжлалт эмчилгээний аргууд",
    acupuncture: "Зүү эмчилгээ",
    moxibustion: "Төөнүүр",
    massage: "Бариа засал",
    herbalTreatment: "Ургамлын гаралтай эмчилгээ",
    safety: "Аюулгүй байдал",
    warning: "Анхаарах зүйл",

    herbsTitle: "Эмийн ургамлын цахим сан",
    searchHerbs: "Ургамлын нэрээр хайх...",
    allCategories: "Бүх ангилал",
    fruits: "Жимс",
    plants: "Өвслөг ургамал",
    roots: "Үндэс",
    noHerbs: "Тохирох ургамал олдсонгүй",

    booksTitle: "Ном, судалгааны цахим сан",
    searchBooks: "Ном, судалгааны нэрээр хайх...",
    classic: "Сонгодог сурвалж",
    studyTopic: "Судлах сэдэв",
    noBooks: "Тохирох мэдээлэл олдсонгүй",

    contactTitle: "Санал хүсэлт илгээх",
    name: "Таны нэр",
    email: "Имэйл хаяг",
    subject: "Гарчиг",
    message: "Санал хүсэлт",
    send: "Илгээх",
    required: "Бүх талбарыг бөглөнө үү.",
    demoSuccess:
      "Формыг шалгалаа. Туршилтын хувилбар тул мэдээлэл сервер рүү илгээгдэхгүй.",

    footerDescription:
      "Монголын уламжлалт анагаах ухааны өв соёл, түүх, эмчилгээний аргууд, эмийн ургамлын талаарх танин мэдэхүйн цахим сан.",
    mainMenu: "Үндсэн цэс",
    aboutUs: "Бидний тухай",
    copyright: "Бүх эрх хуулиар хамгаалагдсан."
  },

  en: {
    siteName: "Monkh Uv",
    siteSubtitle: "Traditional Mongolian Medicine",
    home: "Home",
    history: "History",
    treatment: "Treatments",
    herbs: "Medicinal Herbs",
    books: "Books & Research",
    contact: "Contact",

    homeTitle: "Discover Our Cultural Heritage",
    homeDescription:
      "Explore the history, cultural heritage, traditional treatments and medicinal plants of Mongolian medicine.",
    learnMore: "Learn More",
    viewHerbs: "Explore Herbs",
    ourMission: "Our Mission",
    heritage: "The Heritage of Traditional Mongolian Medicine",

    historyTitle: "History of Traditional Mongolian Medicine",
    historicalDevelopment: "Historical Development",
    ancient: "Ancient Period",
    medieval: "Medieval Period",
    centuries: "17th–19th Centuries",
    modern: "Modern Period",

    treatmentTitle: "Traditional Treatment Methods",
    acupuncture: "Acupuncture",
    moxibustion: "Moxibustion",
    massage: "Traditional Massage",
    herbalTreatment: "Herbal Medicine",
    safety: "Safety",
    warning: "Important Notice",

    herbsTitle: "Medicinal Herbs Library",
    searchHerbs: "Search medicinal herbs...",
    allCategories: "All Categories",
    fruits: "Fruits",
    plants: "Herbaceous Plants",
    roots: "Roots",
    noHerbs: "No matching herbs found",

    booksTitle: "Books & Research Library",
    searchBooks: "Search books and research...",
    classic: "Classical Text",
    studyTopic: "Study Topic",
    noBooks: "No matching results found",

    contactTitle: "Send Us a Message",
    name: "Your Name",
    email: "Email Address",
    subject: "Subject",
    message: "Your Message",
    send: "Send Message",
    required: "Please complete all fields.",
    demoSuccess:
      "Form validated. This is a demo, so no data has been sent to a server.",

    footerDescription:
      "An educational resource about the history, cultural heritage, traditional treatments and medicinal plants of Mongolian medicine.",
    mainMenu: "Main Menu",
    aboutUs: "About Us",
    copyright: "All rights reserved."
  }
};

export function t(key) {
  const language = getLanguage();
  return translations[language][key] ?? key;
}
