import React, {useState} from "react";
import {Form} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { HeaderContainer, SearchForm} from "./style";
import { getWeatherTest } from "../../redux/actions/weatherActions";

const Header = () => {
  const dispatch = useDispatch();
  const [newCity, setNewCity] = useState("")
  const Weather = useSelector((state) => state.WeatherReducer);

  const handleChange = (e) => {
    let value = e.target.value;
    setNewCity(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeatherTest(newCity));
  }

  return (
    <>
      <HeaderContainer>
            <h3>{Weather?.address && "Detailed Weather For, " + Weather.address}</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="search">
                <Form.Control type="text-submit" onChange={handleChange} placeholder="Find a location.." />
              </Form.Group>
            </Form>
      </HeaderContainer>
    </>
  );
};

export default Header;
