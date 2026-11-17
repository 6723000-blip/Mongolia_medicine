
import { renderHomePage } from "./pages/homePage.js";
import { renderHistoryPage } from "./pages/historyPage.js";
import { renderTreatmentPage } from "./pages/treatmentPage.js";
import { renderHerbsPage } from "./pages/herbsPage.js";
import { renderBooksPage } from "./pages/booksPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderPlantMapPage } from "./pages/plantMapPage.js";

// Мөнх Өв вебсайтын бүх хуудас
export const routes = {
  "/": renderHomePage,
  "/history": renderHistoryPage,
  "/treatment": renderTreatmentPage,
  "/herbs": renderHerbsPage,
  "/books": renderBooksPage,
  "/contact": renderContactPage,
  "/plant-map": renderPlantMapPage
};
