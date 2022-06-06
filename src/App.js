import SideBar from "./components/Menu/SideBar";
import { BrowserRouter } from "react-router-dom";
import FeatureWeather from "./components/FeatureWeather/FeatureWeather";
import InstantWeather from "./components/InstantWeather/InstantWeather";
import { MainContainer, MainApp } from "./style";

function App() {
  return (
    <BrowserRouter>
      <MainContainer fluid>
        <SideBar />
        <MainApp fluid>
          <InstantWeather />
          <FeatureWeather />
        </MainApp>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
