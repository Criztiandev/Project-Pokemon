import PokemonStats from "./PokemonStats.js";

class Pokemon extends PokemonStats {
  constructor(name, type, hp, atk, def, speed) {
    super(name, type, hp, atk, def, speed);
  }

  attack(target) {
    const damage = this.atk - target.def;
    target.hp -= damage;
    console.log(`${this.name} attacked ${target.name} for ${damage} damage!`);
  }

  heal() {
    this.hp += 10;
    console.log(`${this.name} healed for 10 HP!`);
  }
}

export default Pokemon;
