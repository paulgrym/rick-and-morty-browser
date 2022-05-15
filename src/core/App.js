import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { CharacterPage } from "../features/CharacterPage";
import { CharactersPage } from "../features/CharactersPage";

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/characters/:id">
          <CharacterPage />
        </Route>
        <Route path="/characters">
          <CharactersPage />
        </Route>
        <Route path="/">
          <Redirect to="/characters" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
