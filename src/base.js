import { fetchPokemonAll, fetchPokemonByID } from "./utils/fetchUtils.js";
import { createPokemon } from "./utils/createUtils.js";
import { updatePokemon } from "./utils/updateUtils.js";
import { deletePokemon } from "./utils/deleteUtils.js";
const data = {
  name: "Charmander",
  type: "Fire",
  hp: 35,
  atk: 55,
  def: 40,
  speed: 90,
};

deletePokemon("51r6N");
