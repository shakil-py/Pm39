import { useEffect, useState } from "react";
import Card from "./singaleComponent/card";
// import Search from "./../search";

function Cards() {
  const [Phones, setphones] = useState([]);
  const loadePhone = async (Text="iphone") => {
    const Response = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${Text}}`
    );
    const PhoneData = await Response.json();

    // console.log(PhoneData.data);
    setphones(PhoneData.data);
  };

  useEffect(() => {
    loadePhone();
  }, []);

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


export default (Cards);
