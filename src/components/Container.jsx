import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Container = () => {
  // api key :  https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f56f24967aaf51182d1d4df628297c6d
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";

  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    // if(!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("res:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const handleInput = (e) => {
    // console.log("value :", e.target.value);
    setInputCity(e.target.value);
  };

  const handleClick = () => {
    // alert("clicked")
    getWeatherDetails(inputCity);
    setInputCity("");
  };

  useEffect(() => {
    getWeatherDetails("bengaluru");
  }, []);
  return (
    <div className="bg-[#e9e9e9] w-full h-[800px] flex justify-center items-center ">
      <div className="drop-shadow-2xl w-[360px] md:w-[500px] h-[550px] md:h-[600px] items-center flex flex-col justify-center rounded ">
        <div className="bg-[#18dcff] text-white w-[320px] md:w-[430px] h-[390px] md:h-[480px]  flex justify-center p-2 items-center flex-col rounded-xl">
          <h1 className="font-bold text-3xl mb-3 ">Weather App</h1>
          <div className="w-[280px] md:w-[380px] h-[200px] md:h-[230px] flex justify-start items-center flex-col rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className="flex items-center mt-3 ">
              <input
                className=" h-[30px] text-black text-[14px] md:text-[15px] md:h-[40px] p-2 w-[155px] md:w-[255px] rounded-l-lg"
                type="text"
                placeholder="search city..."
                name=""
                id=""
                onChange={handleInput}
                value={inputCity}
              />
              <button
                onClick={handleClick}
                className="bg-black text-white text-[14px] md:text-[15px] h-[30px] md:h-[40px] w-[90px] md:w-[105px] rounded-r-lg"
              >
                Search
              </button>
            </div>

            <div className=" w-[250px] h-[75px] md:h-[100px] md:w-[360px]  mt-2 ">
              <h3 className="font-bold">{data?.name}</h3>
              <div className="font-bold text-1xl md:text-3xl">
                {(data?.main?.temp - 273.15).toFixed(2)} °C
              </div>
            </div>
            <div className="grid grid-cols-2 p-2 ">
              <div className=" col-1 h-[60px] md:h-[60px] w-[125px] md:w-[180px] p-0 md:p-2 flex flex-col justify-center">
                <div className="text-[12px] md:text-[16px]">
                  Temp min : {(data?.main?.temp_min - 273.15).toFixed(2)} °C
                </div>
              </div>
              <div className=" col-1 h-[60px] md:h-[60px] w-[125px] md:w-[180px] p-0 md:p-2 flex flex-col justify-center">
                <div className="text-[12px] md:text-[16px]">
                  Temp max : {(data?.main?.temp_max - 273.15).toFixed(2)} °C
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[280px] md:w-[380px] m-2 h-[50px] md:h-[60px]  flex justify-start items-center p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
            {/* <h1 className="text-start text-[14px] md:text-[16px]">description : {data?.weather?.description}</h1> */}
            <div className="text-[12px] md:text-[16px]">
              Feels like : {(data?.main?.feels_like - 273.15).toFixed(2)} °C
            </div>
          </div>
          <div className="grid grid-cols-2 h-[30px] md:h-[50px] w-[295px] md:w-[390px]  ">
            <div className="col-1 flex items-center m-1 ps-5 md:p-2 text-[11px] md:text-[16px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
              Speed : {data?.wind?.speed}
            </div>
            {/* <div className="col-1 flex items-center  m-2 p-4 text-[14px] md:text-[16px] rounded-xl">main: {data?.weather[0]?.main}</div> */}
            <div className="col-1 flex items-center m-1 p-2 md:p-2 text-[11px] md:text-[16px] rounded-xl bg-blue-500">
              Humidity : {data?.main?.humidity} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
