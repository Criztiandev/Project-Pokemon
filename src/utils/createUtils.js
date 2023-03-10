import { saveDb } from "./DbUtils.js";
import { fetchPokemonAll } from "./fetchUtils.js";

const createPokemon = (data) => {
  const load = fetchPokemonAll();
  const isExist = load.find((item) => item.name === data.name);
  if (isExist) {
    console.log("Pokemon already exist!");
    return;
  }

  load.push({
    id:
      Math.random().toString(36).substr(2, 3) +
      Math.random().toString(36).substr(2, 2).toUpperCase(),
    ...data,
  });

  saveDb(load, "created!");
};

export { createPokemon };
