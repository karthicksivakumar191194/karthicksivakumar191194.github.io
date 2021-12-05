class Page {
  constructor(name, data, template) {
    this.name = name;
    this.data = data;
    this.template = template;
  }

  view() {
    return this.template(this.data);
  }
}

export default Page;
