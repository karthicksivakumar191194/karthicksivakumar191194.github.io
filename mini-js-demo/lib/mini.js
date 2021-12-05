class Mini {
  constructor(selector) {
    this.rootElement = document.querySelector(`${selector}`);
    //this.components = {};
    console.info("App Started... Mini initialized!");
  }

  registerPage(component) {
    //this.components[component.name] = component;
    //this.updateView();
    const pageData = component.view();
    this.rootElement.innerHTML = pageData;
  }

  // updateView() {
  //   if (this.components) {
  //     let mergedViews = "";
  //     Object.keys(this.components).forEach((key) => {
  //       mergedViews += this.components[key].view();
  //     });
  //     this.rootElement.innerHTML = mergedViews;
  //   }
  // }
}
export default Mini;
