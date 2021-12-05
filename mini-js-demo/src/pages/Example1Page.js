import Page from "../../lib/Page.js";

//Import Page Template
import Example1Template from "../templates/Example1Template.js";

const Example1Page = new Page(
  "example1_page",
  {
    name: "Mini.js",
  },
  Example1Template
);

export default Example1Page;
