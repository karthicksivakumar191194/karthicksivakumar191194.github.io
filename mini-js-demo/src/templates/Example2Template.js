const Example2Template = (data) => {
  return `
  <div class="d-flex align-items-center landing-page">
    <div class="container text-center">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <ul>
        ${data.posts
          .map(
            (post) => `
          <li>
            <div class="m-example-data">
              <h3>${post.title}</h3>
              <p>${post.text}</p>
            </div>
          </li>`
          )
          .join("")}
      </ul>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <a href="#" data-linkto="/" class="btn btn-light">Back To Home</a>
    </div>
  </div>
`;
};

export default Example2Template;
