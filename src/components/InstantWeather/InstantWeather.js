import React, { useEffect } from "react";
import { getWeatherTest } from "../../redux/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import Day from "../../assets/icons/testicon.png";
import "./style.css";

const InstantWeather = () => {
  const dispatch = useDispatch();
  const Weather = useSelector((state) => state.WeatherReducer);

    useEffect(() => {
      console.log(Weather)
      var myDate = new Date(1654376400*1000);
      console.log(myDate.toLocaleString()); // 01/10/2020, 10:35:02
    }, [Weather]);

  useEffect(() => {
    dispatch(getWeatherTest());
  }, []);

  return (
    <>
      <div className="widget">
        <div className="left-panel panel">
          <div className="city">{Weather?.resolvedAddress? Weather.resolvedAddress : "Location not found..!"}</div>
          <div className="flex-container">
          <div className="temp">
          {Weather?.currentConditions?.temp? Weather.currentConditions.temp : 0}&deg;
          </div>
          
          <div className="flex-column">
          <div className="date">{Weather?.resolvedAddress? "Max: " + Weather.days[0].tempmax : ""}&deg;</div>
          <div className="date">{Weather?.resolvedAddress? "Min: " + Weather.days[0].tempmin : ""}&deg;</div>
          <div className="date">{Weather?.resolvedAddress? "Humidity: " + Weather.currentConditions.humidity : ""}%</div>
          </div>
          </div>
          <div className="date">{Weather?.currentConditions?.conditions? Weather.currentConditions.conditions : "Loading.."}</div>
        </div>
        <div className="right-panel panel">
          <div className="right-image">
          <img
            src={Day}
            alt=""
            width="160"
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantWeather;