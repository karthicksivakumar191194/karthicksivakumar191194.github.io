import Header from "../common/Header.js";
import Footer from "../common/Footer.js";

const Example4Template = () => {
  return `
    ${Header()}
    <div class="d-flex align-items-center landing-page">
        <div class="container text-center">
            <h1>Header Footer Example</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a href="#" data-linkto="/" class="btn btn-light">Back To Home</a>
        </div>
    </div>
  ${Footer()}`;
};

export default Example4Template;
