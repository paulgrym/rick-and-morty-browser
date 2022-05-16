import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../common/Header";
import { CharacterDetails } from "../features/characters/CharacterDetails";
import { CharactersList } from "../features/characters/CharactersList";
import { FavouriteCharactersList } from "../features/characters/FavouriteCharactersList";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
        <Route path="/characters">
          <CharactersList />
        </Route>
        <Route path="/favourite-characters">
          <FavouriteCharactersList />
        </Route>
        <Route path="/">
          <Redirect to="/characters" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
