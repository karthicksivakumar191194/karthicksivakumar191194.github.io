import Mini from "./lib/mini.js";
import Router from "./lib/router.js";

//Import App Pages
import Example1Page from "./src/pages/Example1Page.js";
import Example2Page from "./src/pages/Example2Page.js";
import Example3Page from "./src/pages/Example3Page.js";

import * as mainJs from "./scripts/main.js";

const app = new Mini("#app");
const router = new Router({ basename: "/mini-js-demo" });

// Register App Routes Start
router.get("/", function (req) {
  app.registerPage(Example1Page);
});

router.get("/testpage1", function (req) {
  app.registerPage(Example2Page);
});

router.get("/testpage2", function (req) {
  app.registerPage(Example3Page);
});
// Register App Routes End

router.init();

window.addEventListener("popstate", (event) => {
  //Handle URL Changed
  router.init();
});

const redirectTo = (pageSlug) => {
  window.history.pushState({}, "", pageSlug);
  router.init();
};

document.addEventListener("click", function (e) {
  //Handle "linkto" click event
  if (e?.target?.dataset?.linkto) {
    e.preventDefault();
    redirectTo(e.target.dataset.linkto);
  }
});
