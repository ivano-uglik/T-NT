import gradCap from "./assets/gradCap.svg";
import djelatnik from "./assets/djelatnik.svg";
import teslaSVG from "./assets/teslaSVG.svg";
const ThreeBar = () => {
  return (
    <div className="flex gap-64 justify-center pt-12">
      <div>
        <img src={gradCap} alt="učenik" className="w-[10rem] mx-auto" />
        <h1 className="text-center pt-8 text-3xl font-bold">400+ učenika</h1>
      </div>
      <div>
        <img src={djelatnik} alt="djelatnik" className="w-[10rem] mx-auto" />
        <h1 className="text-center pt-8 text-3xl font-bold">70+ djelatnika</h1>
      </div>
      <div>
        <img src={teslaSVG} alt="Nikola Tesla" className="w-[10rem] mx-auto" />
        <h1 className="text-center pt-8 text-3xl font-bold">od 1927.</h1>
      </div>
    </div>
  );
};

export default ThreeBar;
