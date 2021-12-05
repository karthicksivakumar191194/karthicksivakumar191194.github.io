const Example1Template = (data) => {
  return `
  <div class="d-flex align-items-center landing-page">
    <div class="container text-center">
      <h1>${data.name}</h1>
      <p>
        <a href="#" data-linkto="testpage1">Test Page 1</a>
        <span class="seperator">|</span>
        <a href="#" data-linkto="testpage2">Test Page 2</a>
      </p>
    </div>
  </div>
  `;
};

export default Example1Template;
