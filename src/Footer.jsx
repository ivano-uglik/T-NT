import Logo from "./assets/Logo.jpg";
const Footer = () => {
  return (
    <div>
      <div className="py-8 bg-teslaBlue text-white font-light">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center kontenjer">
          <div className="flex flex-col text-center md:text-left">
            <span>Tehnička škola Nikole Tesle Vukovar</span>
            <span>Blage Zadre 4</span>
            <span>32010 Vukovar</span>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <img
              src={Logo}
              alt="Logo škole"
              className="w-24 md:w-32 rounded-full"
            />
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-center">
              <div className="flex gap-2 md:gap-16">
                <a href="#">O školi</a>
                <a href="#">Obavijesti</a>
                <a href="#">Projekti</a>
              </div>
              <div className="flex gap-2 md:gap-16">
                <a href="#">Upisi</a>
                <a href="#">Natječaji</a>
                <a href="#">Kontakt</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-right">
            <span>ss-tehnicka-ntesla-vu.skole.hr</span>
            <span>ured@ss-tehnicka-ntesla-vu.skole.hr</span>
            <span>Tel. i Fax. +385 (0)32 423 025</span>
          </div>
        </div>
      </div>

      <div className="p-2 w-full bg-gray-300 text-xs flex flex-col justify-center items-center text-center md:text-left">
        <span>
          &copy; 2023 - Tehnička škola Nikole Tesle Vukovar. Sva prava
          pridržana.
        </span>
        <span>
          Izrada web stranice - <span>Ivano Uglik</span>, bTR 24/25 |{" "}
          <a
            href="http://github.com/ivano-uglik/T-NT"
            className="underline underline-offset-2"
          >
            {" "}
            GitHub{" "}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
