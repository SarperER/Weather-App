import React, { useEffect} from "react";
import { getWeatherStatus } from "../../redux/actions/weatherActions";
import { WeatherContainer } from "./style";
import {getWeatherTest} from "../../redux/actions/weatherActions"
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
  const dispatch = useDispatch()
  const sarper = useSelector((state) => state.WeatherReducer);


  useEffect(() => {
    console.log(sarper)
  }, [sarper]);

  useEffect(() => {
    dispatch(getWeatherTest());
  }, []);

  return (
    <>
      <WeatherContainer>Weather</WeatherContainer>
    </>
  );
};

export default Weather;
