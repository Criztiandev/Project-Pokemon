const path = "./src/data/pokemon.json";
import fs from "fs";

const saveDb = (data, msg) => {
  try {
    const response = fs.writeFileSync(path, JSON.stringify(data, null, 2));
    console.log(`Pokemon has been ${msg}`);
    return response;
  } catch (err) {
    console.log(err);
    return;
  }
};

export { saveDb, path, fs };
