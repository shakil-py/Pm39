import { useEffect, useState } from "react";
import Card from "./singaleComponent/card";
// import Search from "./../search";

function Cards({ search }) {
  const [Phones, setphones] = useState([]);
  const loadePhone = async () => {
    console.log(search, "");
    const Response = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${search}`
    );
    const PhoneData = await Response.json();
    console.log(PhoneData.data, "comming from api");

    setphones(PhoneData.data);
  };

  useEffect(() => {
    loadePhone();
  }, [search]);

  return (
    <>
      <div className="grid grid-cols-4 mt-3">
        {Phones.map((phone) => (
          <Card data={phone}></Card>
        ))}
      </div>
    </>
  );
}

export default Cards;
