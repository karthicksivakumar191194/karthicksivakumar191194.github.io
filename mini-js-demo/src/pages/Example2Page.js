import Page from "../../lib/Page.js";

//Import Page Template
import Example2Template from "../templates/Example2Template.js";

const Example2Page = new Page(
  "example2_page",
  {
    posts: [
      {
        title: "Mini",
        text: "Mini is a custom JS library!",
      },
      {
        title: "Looping Example",
        text: "This page is a demo of how looping works...",
      },
    ],
  },
  Example2Template
);

export default Example2Page;
