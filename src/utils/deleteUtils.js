import { saveDb } from "./DbUtils.js";
import { fetchPokemonAll } from "./fetchUtils.js";

const deletePokemon = (id) => {
  const load = fetchPokemonAll();
  const isExist = load.find((item) => item.id === id);
  if (!isExist) {
    console.log("Pokemon not found!");
    return;
  }
  const index = load.filter((item) => item.id !== id);
  saveDb(index, "deleted!");
};

export { deletePokemon };
