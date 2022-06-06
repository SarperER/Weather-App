import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CustomAccordion,
  CustomAccordionHeader,
  CustomAccordionBody,
  CollapseItem,
} from "./style";
import {
  faCloudSunRain,
  faWind,
  faTemperatureLow,
  faTemperatureHigh,
  faSun,
  faUmbrellaBeach,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const FeatureWeather = () => {
  const Weather = useSelector((state) => state.WeatherReducer);
  const Days = Weather.days;

  useEffect(() => {
    console.log("Günler", Days);
  }, [Weather]);

  return (
    <CustomAccordion>
      {Days?.length &&
        Days.map((day, index) => (
          <Accordion.Item eventKey={index}>
            <CustomAccordionHeader>
              <div>{day.datetime}</div>
              <div>
                <big>{day.tempmax}&deg;</big>/<small>{day.tempmin}</small>&deg;
              </div>
              <div>{day.description}</div>
              <div>
                <FontAwesomeIcon icon={faCloudSunRain} /> {day.precipprob}%
              </div>
              <div>
                <FontAwesomeIcon icon={faWind} /> {day.windspeed}KM/s
              </div>
            </CustomAccordionHeader>
            <CustomAccordionBody>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faTemperatureLow} /> Feels Like:{" "}
                  {day.feelslike}&deg;
                </div>
              </CollapseItem>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faTemperatureHigh} /> Feels Max:{" "}
                  {day.feelslike}&deg;
                </div>
              </CollapseItem>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faSun} /> Humidity: {day.humidity}%
                </div>
              </CollapseItem>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faUmbrellaBeach} /> UV Index:{" "}
                  {day.uvindex}
                </div>
              </CollapseItem>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faMountain} /> Sun Rise: {day.sunrise}
                </div>
              </CollapseItem>
              <CollapseItem>
                <div>
                  <FontAwesomeIcon icon={faMountain} /> Sun Set: {day.sunset}
                </div>
              </CollapseItem>
            </CustomAccordionBody>
          </Accordion.Item>
        ))}
    </CustomAccordion>
  );
};

export default FeatureWeather;
