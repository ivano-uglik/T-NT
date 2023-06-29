import { motion } from "framer-motion";
import Data from "../THIS.json";
import "./App.css";
import { useState } from "react";
const Vijesti = () => {
  const [articlesShown, setArticlesShown] = useState(3);
  const [isOpen, setIsOpen] = useState(true);
  const [prikazi, setPrikazi] = useState("više");
  return (
    <div className="kontenjer">
      <h1 className="title">Najnovije vijesti</h1>
      <div>
        <div className="vijestiDisplay ">
          {Data.slice(0, articlesShown).map((x) => {
            return (
              <div key={x.id} className="article">
                <img
                  src={"http://ss-tehnicka-ntesla-vu.skole.hr" + x.getImgs[0]}
                  className="gridItemImage"
                  loading="lazy"
                />
                <div className="articleText">
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
      <button
        className="flex flex-col items-center mx-auto"
        onClick={() => {
          isOpen
            ? (setPrikazi("manje"),
              setIsOpen(false),
              setArticlesShown((prev) => prev + 999))
            : (setPrikazi("više"), setIsOpen(true), setArticlesShown(3));
        }}
      >
        <h1 className="text-4xl font-bold text-center pt-8">
          Prikaži {prikazi}
        </h1>
        <span className="text-4xl text-center block pt-4">&#x25BC;</span>
      </button>
      {/* <div className="flex justify-center">
        <div className="w-[50%] bg-black pb-[0.1rem] " />
      </div> */}
    </div>
  );
};

export default Vijesti;
