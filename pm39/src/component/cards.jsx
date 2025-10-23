import { useEffect, useState } from "react";
import Card from "./singaleComponent/card";
import Search from "./navfn/search";



export default function Cards() {
    console.log(Search().searchValue)
  const [Phones, setphones] = useState([]);

  const loadePhone = async () => {
    const Response = await fetch(
      "https://openapi.programming-hero.com/api/phones?search=iphone"
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
