import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { CharacterDetails } from "../features/characters/CharacterDetails";
import { CharactersList } from "../features/characters/CharactersList";

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
        <Route path="/characters">
          <CharactersList />
        </Route>
        <Route path="/">
          <Redirect to="/characters" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
