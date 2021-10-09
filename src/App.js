import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EpisodeCharacters from "./pages/EpisodeCharacters";
import CharacterInfo from "./pages/CharacterInfo";
import Locations from "./pages/Locations";
import Residents from "./pages/Residents";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/location" exact component={Locations} />
        <Route
          path="/episodecharacters/:id"
          exact
          component={EpisodeCharacters}
        />
        <Route path="/characterinfo/:id" component={CharacterInfo} />
        <Route path="/residents/:id" component={Residents} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
