import { NavBar } from "./components/NavBar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Spotlight } from "./components/Spotlight";
import { Homepage } from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <WebsiteLogo />
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
