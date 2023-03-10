class PokemonStats {
  constructor(id, name, type, hp, atk, def, speed) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._hp = hp;
    this._atk = atk;
    this._def = def;
    this._speed = speed;
  }

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
  }

  get hp() {
    return this._hp;
  }
  set hp(hp) {
    this._hp = hp;
  }

  get atk() {
    return this._atk;
  }
  set atk(atk) {
    this._atk = atk;
  }

  get def() {
    return this._def;
  }
  set def(def) {
    this._def = def;
  }

  get speed() {
    return this._speed;
  }
  set speed(speed) {
    this._speed = speed;
  }
}

export default PokemonStats;
