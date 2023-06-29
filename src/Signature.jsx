import TeslaSignature from "./assets/TeslaSignature.svg";
const Signature = (props) => {
  return (
    <div className="py-24 flex justify-center">
      <img
        src={TeslaSignature}
        alt="Potpis Nikole Tesle"
        style={{ width: `${props.size}rem` }}
        className="px-4"
      />
    </div>
  );
};

export default Signature;
