import { useEffect, useState } from "react";

export default function Cards() {
  const { phones, setphone } = useState([]);
  const loadePhone = async () => {
    const Response = await fetch(
      "https://openapi.programming-hero.com/api/phones?search=iphone"
    );
      const PhoneData = await Response.json();
      
    console.log(PhoneData);
    setphone(PhoneData);
  };
  useEffect(() => {
    loadePhone();
  }, []);

  return (
    <>
      <div className="">
        <h1 className=""> Cards</h1>
      </div>
    </>
  );
}
