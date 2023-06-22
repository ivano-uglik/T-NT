import Skola from "./assets/skola.jpg";

const Carousel = () => {
  return (
    <div>
      <img
        src={Skola}
        alt="Tehnička škola Nikole Tesle Vukovar"
        className="h-screen w-screen object-cover"
      />
    </div>
  );
};

export default Carousel;
