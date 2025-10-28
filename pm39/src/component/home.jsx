import Cards from "./cards";

export default function Home({ search }) {
  return (
    <>
      
      <h1 className=" text-center text-4xl text-black font-bold ">Catagory </h1>
      <div className="">
        <Cards search={search} />
      </div>
    </>
  );
}
