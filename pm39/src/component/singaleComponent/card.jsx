export default function Card(data) {
  const { brand, phone_name, id, image } = data.data;
  return (
    <>
      <div className="mx-auto card bg-gray-100 mb-4  w-10/12 shadow-lg">
        <figure className="pt-1.5">
          <img src={image} alt="Phone" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold ">{phone_name}</h2>
          
          <div className="card-actions   ">
            <div className=" flex space-x-2">
              <button className="btn btn-primary ">Buy Now</button>
              <button className="btn bg-amber-200 text-black outline-0 border-0  ">
                Dtails
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
