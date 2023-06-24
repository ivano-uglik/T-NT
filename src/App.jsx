import Navbar from "./Navbar";
import Carousel from "./Carousel";
import ThreeBar from "./ThreeBar";
import Vijesti from "./Vijesti";
import VideoSadrzaji from "./VideoSadrzaji";
import Signature from "./Signature";
import Footer from "./Footer";

import TemplateArticle from "./TemplateArticle";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TemplateArticle></TemplateArticle>
      <Signature size="50rem" />
      <Footer></Footer>
    </div>
  );
};

export default App;
