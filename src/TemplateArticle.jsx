import phoneSVG from "./assets/phoneSVG.svg";
import locationSVG from "./assets/locationSVG.svg";
import webSVG from "./assets/webSVG.svg";
const TemplateArticle = () => {
  return (
    <div className="flex justify-center gap-8 h-full">
      <div className="w-[85%] md:w-[50%] text-sm md:text-base bg-gray-100 p-4 flex flex-col items-stretch">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia
          sequi quos dolor amet nam rem explicabo ducimus. Obcaecati natus
          doloremque unde blanditiis pariatur!
        </h1>
        <div className="p-4"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure
          totam ratione aliquid, impedit voluptatibus ad optio deserunt nostrum
          corporis nulla doloribus pariatur nemo, non necessitatibus aspernatur
          placeat nam accusantium expedita fuga commodi. Voluptates aspernatur
          consequuntur adipisci. Sit, quidem officia fuga corrupti esse
          explicabo nesciunt dignissimos et omnis molestias eum quis minima non
          libero similique. Optio tempore temporibus, perferendis asperiores
          iusto nobis minima libero architecto laboriosam, suscipit illo harum
          voluptatem laudantium vitae!
        </p>
      </div>
      <div className="w-[30%] hidden md:block">
        <div className="bg-gray-100 p-4">
          <h1 className="pb-1 font-semibold">
            Tehnička škola Nikole Tesle Vukovar
          </h1>
          <div className="flex items-center gap-2">
            <img src={phoneSVG} alt="telefon" className="w-4 opacity-60" />
            <h2>Tel | Fax: +385 (0)32 423 025</h2>
          </div>
          <div className="flex items-center gap-2">
            <img src={locationSVG} alt="lokacija" className="w-4 opacity-60" />
            <h2>Blage Zadre 4, 32010, Vukovar</h2>
          </div>
          <div className="flex items-center gap-2">
            <img src={webSVG} alt="telefon" className="w-4 opacity-60" />
            <a href="http://tsnt.hr">tsnt.hr</a>
          </div>
        </div>
        <h1 className="p-8 text-center text-xl font-bold">Školsko zvono</h1>
        <div className="border border-black p-4">
          <span className="pb-4 flex justify-center font-semibold">
            Regularno
          </span>
          <div className="flex justify-around">
            <div className="flex flex-col gap-1 text-center">
              <span className="py-2">I. smjena</span>
              <ol className="list-decimal">
                <li>7:00-7:45</li>
                <li>7:50-8:35</li>
                <li>8:40-9:25</li>
                <p className="py-2">Veliki odmor</p>
                <li>9:40-10:25</li>
                <li>10:30-11:15</li>
                <li>11:20-12:05</li>
                <li>12:10-12:55</li>
              </ol>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="py-2">II. smjena</span>
              <ol className="list-decimal">
                <li>7:00-7:45</li>
                <li>7:50-8:35</li>
                <li>8:40-9:25</li>
                <p className="py-2">Veliki odmor</p>
                <li>9:40-10:25</li>
                <li>10:30-11:15</li>
                <li>11:20-12:05</li>
                <li>12:10-12:55</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="border border-black p-4 border-t-0">
          <span className="pb-4 flex justify-center font-semibold">
            Slobodne Aktivnosti
          </span>
          <div className="flex justify-around">
            <div className="flex flex-col gap-1 text-center">
              <span className="py-2">I. smjena</span>
              <ol className="list-decimal">
                <li>7:00-7:45</li>
                <li>7:50-8:35</li>
                <li>8:40-9:25</li>
                <p className="py-2">Veliki odmor</p>
                <li>9:40-10:25</li>
                <li>10:30-11:15</li>
                <li>11:20-12:05</li>
                <li>12:10-12:55</li>
              </ol>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="py-2">II. smjena</span>
              <ol className="list-decimal">
                <li>7:00-7:45</li>
                <li>7:50-8:35</li>
                <li>8:40-9:25</li>
                <p className="py-2">Veliki odmor</p>
                <li>9:40-10:25</li>
                <li>10:30-11:15</li>
                <li>11:20-12:05</li>
                <li>12:10-12:55</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateArticle;
