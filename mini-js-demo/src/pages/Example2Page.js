import Page from "../../lib/Page.js";

//Import Page Template
import Example2Template from "../templates/Example2Template.js";

const Example2Page = new Page(
  "example2_page",
  {
    posts: [
      {
        title: "Loop 1",
        text: "Mini.js is a custom JS library!",
      },
      {
        title: "Loop 2",
        text: "This page is a demo of how looping works...",
      },
    ],
  },
  Example2Template
);

export default Example2Page;
