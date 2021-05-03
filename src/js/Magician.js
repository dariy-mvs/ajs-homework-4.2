import Character from './app';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    if (type !== 'Magician') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 10;
    this.defence = 40;
    // this.levelUp = this.levelUp.bind(this);
    // this.damage = this.damage.bind(this);
  }
}
