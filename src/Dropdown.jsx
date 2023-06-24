const Dropdown = () => {
  return (
    <div className="absolute top-8 cursor-pointer">
      <div className="bg-black rounded-lg w-[4.7rem] text-taxiYellow py-1 text-end">
        <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
          <span>HR</span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
