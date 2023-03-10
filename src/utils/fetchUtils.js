import { path, fs } from "./DbUtils.js";

const fetchPokemonByID = (id) => {
  const load = fetchPokemonAll();
  const isExist = load.find((item) => item.id === id);
  if (!isExist) {
    console.log("Pokemon not found!");
    return;
  }

  return isExist;
};

const fetchUserAll = () =>
  fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, "utf-8")) : [];

const fetchPokemonByFilter = (filter) => {
  const load = fetchPokemonAll();
  const isExist = load.filter((item) => item.type === filter);
  if (!isExist) {
    console.log("Pokemon not found!");
    return;
  }

  return isExist;
};

export { fetchPokemonByID, fetchPokemonAll };
