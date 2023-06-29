import { useState } from "react";
import Logo from "./assets/Logo.jpg";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full bg-teslaBlue text-white flex flex-col items-center gap-2 md:gap-0 md:flex-row md:px-8 py-2">
        <span className="md:basis-1/3 text-sm text-center">
          +385 (0)32 423 025 | Blage Zadre 4, 32010, Vukovar
        </span>
        <span className="md:basis-1/3 text-center md:text-lg">
          5. sat završava za 27:49
        </span>
        <span className="hidden md:block md:basis-1/3 text-end text-sm">
          Prijava
        </span>
      </div>
      <div className="flex justify-around items-center py-4">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo Tehničke škole Nikole Tesle"
            className="rounded-full w-24 h-24"
          />
          <div className="flex flex-col gap-1">
            <h2>TEHNIČKA ŠKOLA</h2>
            <h1 className="font-bold pl-3 text-2xl">NIKOLE TESLE</h1>
            <h2>VUKOVAR</h2>
          </div>
        </div>
        <div className="hidden md:flex gap-12 text-center">
          <button>NASLOVNICA</button>
          <div className="relative">
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
            >
              O ŠKOLI &#x25BC;{" "}
            </button>
            <motion.div
              className="absolute bg-teslaBlue text-white w-[250%] text-left p-4 mt-4"
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            >
              <ul className="flex flex-col gap-2">
                <li>Čije ime nosimo?</li>
                <li>Povijest</li>
                <li>Lokacija</li>
                <li>Knjižnica</li>
                <li>Kućni red</li>
              </ul>
            </motion.div>
          </div>
          <button>OBAVIJESTI &#x25BC;</button>
          <button>PROJEKTI &#x25BC;</button>
          <button>UPISI &#x25BC;</button>
          <button>NATJEČAJI &#x25BC;</button>
          <button>KONTAKT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
