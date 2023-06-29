import gradCap from "./assets/gradCap.svg";
import djelatnik from "./assets/djelatnik.svg";
import teslaSVG from "./assets/teslaSVG.svg";
import CounterAnimation from "./CounterAnimation";
const ThreeBar = () => {
  return (
    <div className="kontenjer">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 md:justify-between pt-12">
        <div>
          <img
            src={gradCap}
            alt="učenik"
            className="w-[10rem] h-[10rem] mx-auto"
          />
          <h1 className="text-center pt-8 text-3xl font-bold block">
            <span className="inline-block">
              <CounterAnimation start={0} end={400} duration={1000} />
            </span>
            + učenika
          </h1>
        </div>
        <div>
          <img src={djelatnik} alt="djelatnik" className="w-[10rem] mx-auto" />
          <h1 className="text-center pt-8 text-3xl font-bold block">
            <span className="inline-block">
              <CounterAnimation start={0} end={70} duration={1000} />
            </span>
            + djelatnika
          </h1>
        </div>
        <div>
          <img
            src={teslaSVG}
            alt="Nikola Tesla"
            className="w-[10rem] mx-auto"
          />
          <h1 className="text-center pt-8 text-3xl font-bold block">
            od&nbsp;
            <span className="inline-block">
              <CounterAnimation start={2023} end={1923} duration={1000} />
            </span>
            .
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default ThreeBar;
