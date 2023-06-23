import Logo from "./assets/Logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-blue-950 text-white flex px-8 py-2">
        <span className="basis-1/3 text-sm">
          +385 (0)32 423 025 | Blage Zadre 4, 32010, Vukovar
        </span>
        <span className="basis-1/3 text-center text-lg">
          5. sat završava za 27:49
        </span>
        <span className="basis-1/3 text-end text-sm">Prijava</span>
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
        <div className="hidden md:flex gap-8 ">
          <a>NASLOVNICA</a>
          <a>O ŠKOLI &#x25BC;</a>
          <a>OBAVIJESTI &#x25BC;</a>
          <a>PROJEKTI &#x25BC;</a>
          <a>UPISI &#x25BC;</a>
          <a>NATJEČAJI &#x25BC;</a>
          <a>KONTAKT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
