const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-blue-950 text-white flex px-8 py-4">
        <span className="basis-1/3">
          +385 (0)32 423 025 | Blage Zadre 4, 32010, Vukovar
        </span>
        <span className="basis-1/3 text-center"> 5. sat završava za 27:49</span>
        <span className="basis-1/3 text-end">Prijava</span>
      </div>
      <div className="flex justify-around items-center py-4">
        <div className="flex items-center">
          <img
            src="https://yt3.googleusercontent.com/ytc/AGIKgqPayIqZbukrzuqd-q08JOTSyKaWaen0ojdpOUJ3=s900-c-k-c0x00ffffff-no-rj"
            alt="Logo Tehničke škole Nikole Tesle"
            className="rounded-full w-24 h-24"
          />
          <div className="flex flex-col gap-1">
            <h2>TEHNIČKA ŠKOLA</h2>
            <h1 className="font-bold pl-3 text-2xl">NIKOLE TESLE</h1>
            <h2>VUKOVAR</h2>
          </div>
        </div>
        <div className="flex gap-8">
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
