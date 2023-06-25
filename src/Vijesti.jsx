import { motion } from "framer-motion";
import Data from "../THIS.json";
import "./App.css";
const Vijesti = () => {
  return (
    <div>
      <h1 className="title">Najnovije vijesti</h1>
      <div className="grid place-items-center">
        <div className="vijestiDisplay">
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
                    Pariatur hic, ex enim at magni, aperiam cupiditate quasi
                    porro nihil illum quia sequi maxime quod.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="gridButton"
                  >
                    {"Prikaži vijest >"}
                  </motion.button>
                  <div className="gridSpanParent">
                    <span className="gridSpan">26.3.2023. | Marko Horvat</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center py-8">Prikaži više</h1>
      <span className="text-4xl text-center pb-16 block">&#x25BC;</span>
      <div className="flex justify-center">
        <div className="w-[50%] bg-black pb-[0.1rem] " />
      </div>
    </div>
  );
};

export default Vijesti;
