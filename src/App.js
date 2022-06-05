import SideBar from "./components/Menu/SideBar";
import { BrowserRouter } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import { MainContainer } from "./style";

function App() {
  return (
    <BrowserRouter>
      <MainContainer fluid>
        <SideBar />
        <Weather />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
