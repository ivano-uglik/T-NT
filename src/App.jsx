import Navbar from "./Navbar";
import Carousel from "./Carousel";
import ThreeBar from "./ThreeBar";
import Vijesti from "./Vijesti";
import VideoSadrzaji from "./VideoSadrzaji";
import Signature from "./Signature";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <ThreeBar></ThreeBar>
      <Vijesti></Vijesti>
      <VideoSadrzaji></VideoSadrzaji>
      <Signature></Signature>
      <Footer></Footer>
    </div>
  );
};

export default App;
