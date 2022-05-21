import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../common/Header";
import { CharacterDetails } from "../features/characters/CharacterDetails";
import { CharactersList } from "../features/characters/CharactersList";
import { FavouriteCharactersList } from "../features/characters/FavouriteCharactersList";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="characters/:id" element={<CharacterDetails />} />
          <Route path="characters" element={<CharactersList />} />
          <Route
            path="favourite-characters"
            element={<FavouriteCharactersList />}
          />
          <Route path="/" element={<Navigate to="characters" />} />
        </Routes>
      </main>
    </HashRouter>
  );
};
