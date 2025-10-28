import Search from "./singaleComponent/search";
export default function NavBar({ search, setSearch }) {
  return (
    <>
      <div className="flex justify-between bg-blue-200 h-15  ">
        {/* logo */}
        <div className=" flex items-center pl-4 font-bold text-5xl ">
          <h1 className="text-black">TRY</h1>
        </div>
        {/* button of nav */}
        <div className="flex items-center ">
          <ul className="flex items-center space-x-3 ">
            <li className="outline-2 px-2 mx-2 rounded-lg py-1 font-black  my-1">
              <button>Home</button>
            </li>
            <li className="outline-2 px-2 mx-2 rounded-lg py-1 font-black  my-1">
              <button>Products</button>
            </li>
          </ul>
          {/* search container */}
          <Search sesarch={search} setSearch={setSearch} />
        </div>
      </div>
    </>
  );
}
