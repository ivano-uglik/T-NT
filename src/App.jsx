import Data from "../data.json";
import Testing from "../THIS.json";

const App = () => {
  let title = Testing.map((x) => {
    return (
      <div key={x.id}>
        <h3>{x.getTitle}</h3>
      </div>
    );
  });
  let imgs = Testing.map((x) => {
    return (
      <div key={x.id}>
        <img
          className="width"
          src={"http://ss-tehnicka-ntesla-vu.skole.hr" + x.getImgs[0]}
        />
      </div>
    );
  });

  let boxes = Testing.map((x) => {
    return (
      <div
        className="border border-black min-w-[30rem] p-4 basis-1/3"
        key={x.id}
      >
        <h1 className="text-xl text-center py-8">{x.getTitle}</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic,
          ex enim at magni, aperiam cupiditate quasi porro nihil illum quia
          sequi maxime quod.
        </p>
        <button className="bg-blue-900 text-white p-4 rounded-3xl text-sm my-4">
          {"Prikaži vijest ->"}
        </button>
        <span className="flex justify-center py-8">
          26.3.2023. | Marko Horvat
        </span>
      </div>
    );
  });
  return (
    <div>
      <div className=" p-16">
        <div className="flex min-h-[40rem] w-[80rem] gap-16">{boxes}</div>
      </div>
    </div>
  );
};

export default App;
