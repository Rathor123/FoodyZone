import React from "react";

function Card({ fooditem }) {
  const { name, price, text, image, type } = fooditem;
  return (
    <div className="backdrop-blur-[25px] rounded-xl flex flex-row p-5 my-2 w-[25rem] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <img src={"http://localhost:9000" + image} alt="" />
      <div className="">
        <p className="py-3 font-semibold"> {name}</p>
        <p>{text}</p>
        <p className="float-right bg-red-500 px-3 py-[1px] rounded-md font-medium text-white my-2">
          ${price}.00
        </p>
      </div>
    </div>
  );
}

export default Card;
