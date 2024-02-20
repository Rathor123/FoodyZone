import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import Card from "./Card";
import axios from "axios";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:9000");
      setFoodData(response.data);
      setFilteredFoodData(response.data);
    };
    data();
  }, []);

  const foodFilter = (currentitem) => {
    const filtered = foodData.filter((item) => currentitem == item.type);
    setFilteredFoodData(filtered);
  };
  const searchFun = (e) => {
    setSearchInput(e.target.value);

    const searchTerm = e.target.value.toLowerCase();
    const regExp = new RegExp(`^${searchTerm}.*`, "i"); // Starts with search term, case-insensitive
    const filtered = foodData.filter((item) =>
      regExp.test(item.name.toLowerCase())
    ); // Case-insensitive matching
    setFilteredFoodData(filtered);
  };

  return (
    <div>
      <nav className="w-full bg-[#323334]">
        {/* // Top Headerbar */}
        <div className="flex items-center justify-around w-full pt-10">
          <img src={logo} alt="logo" />
          <input
            type="text"
            placeholder="Search Food..."
            className="border-[1px] border-[#FF0909] bg-[#323334] focus:outline-none p-2 text-white placeholder:text-white"
            value={searchInput}
            onChange={(e) => searchFun(e)}
          />
        </div>
        <div className="flex gap-10 pt-5 pb-5 justify-center max-sm:gap-2">
          <button
            className="bg-[#FF4343] py-1 px-4 rounded"
            onClick={() => setFilteredFoodData(foodData)}
          >
            All
          </button>
          <button
            className="bg-[#FF4343] py-1 px-4 rounded"
            onClick={() => foodFilter("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="bg-[#FF4343] py-1 px-4 rounded"
            onClick={() => foodFilter("lunch")}
          >
            Lunch
          </button>
          <button
            className="bg-[#FF4343] py-1 px-4 rounded"
            onClick={() => foodFilter("dinner")}
          >
            Dinner
          </button>
        </div>
      </nav>

      <main className="bg-[url('./assets//bg-main.png')] bg-cover bg-no-repeat flex items-center justify-center w-full min-h-[60vh] ">
        <div className="flex grid-cols-3 px-5 gap-5 flex-wrap items-center justify-center max-md:justify-around">
          {filteredFoodData.map((item, index) => (
            <Card key={index} fooditem={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
