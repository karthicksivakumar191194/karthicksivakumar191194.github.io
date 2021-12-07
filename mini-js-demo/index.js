import Mini from "./lib/mini.js";
import Router from "./lib/router.js";

//Import App Pages
import ExamplePage from "./src/pages/ExamplePage.js";
import Example1Page from "./src/pages/Example1Page.js";
import Example2Page from "./src/pages/Example2Page.js";
import Example3Page from "./src/pages/Example3Page.js";
import Example4Page from "./src/pages/Example4Page.js";

//Import Scripts
import * as mainJs from "./scripts/main.js";

const app = new Mini("#app");
const router = new Router({ basename: "/mini-js-demo" });

// Register App Routes Start
router.get("/", function (req) {
  app.registerPage(ExamplePage);
});

router.get("/example1", function (req) {
  app.registerPage(Example1Page);
});

router.get("/example2", function (req) {
  app.registerPage(Example2Page);
});

router.get("/example3", function (req) {
  app.registerPage(Example3Page);
});

router.get("/example4", function (req) {
  app.registerPage(Example4Page);
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
  const dataBasename = document
    .querySelector("body")
    .getAttribute("data-basename");
  let basename = "";
  if (dataBasename) {
    basename = dataBasename;
  }

  //Handle "linkto" click event
  if (e?.target?.dataset?.linkto) {
    e.preventDefault();
    redirectTo(basename + e.target.dataset.linkto);
  }
});
