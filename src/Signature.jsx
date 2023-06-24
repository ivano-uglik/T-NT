import TeslaSignature from "./assets/TeslaSignature.svg";
const Signature = (props) => {
  return (
    <div className="py-24 flex justify-center">
      <img
        src={TeslaSignature}
        alt="Potpis Nikole Tesle"
        className={`w-[${props.size}]`}
      />
    </div>
  );
};

export default Signature;
