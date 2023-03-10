import { saveDb } from "./DbUtils.js";
import { fetchPokemonAll, fetchPokemonByID } from "./fetchUtils.js";

const updatePokemon = (id, data) => {
  const load = fetchPokemonAll();
  const isExist = fetchPokemonByID(id);
  if (!isExist) return;

  const index = load.findIndex((item) => item.id === id);
  load[index] = { ...load[index], ...data };

  saveDb(load, "updated!");
};

export { updatePokemon };
