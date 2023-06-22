import Data from "../THIS.json";
import "./App.css";
const Vijesti = () => {
  return (
    <div className="py-16 h-screen w-screen grid place-items-center">
      <div className="grid3">
        {Data.map((x) => {
          return (
            <div key={x.id} className="widthOfItems">
              <img
                src={"http://ss-tehnicka-ntesla-vu.skole.hr" + x.getImgs[0]}
                className="gridItemImage"
              />
              <div className="gridText">
                <h1 className="gridH1">{x.getTitle}</h1>
                <p className="gridP">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur hic, ex enim at magni, aperiam cupiditate quasi porro
                  nihil illum quia sequi maxime quod.
                </p>
                <button className="gridButton">{"Prikaži vijest >"}</button>
                <div className="gridSpanParent">
                  <span className="gridSpan">26.3.2023. | Marko Horvat</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vijesti;
