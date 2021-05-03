import Character from './app';


export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    if (type !== 'Undead') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 25;
    this.defence = 25;
    this.levelUp = this.levelUp.bind(this);
    this.damage = this.damage.bind(this);
  }
}
