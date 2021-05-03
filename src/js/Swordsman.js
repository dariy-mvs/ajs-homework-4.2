import Character from './app';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    if (type !== 'Swordsman') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 40;
    this.defence = 10;
    // this.levelUp = this.levelUp.bind(this);
    // this.damage = this.damage.bind(this);
  }
}
