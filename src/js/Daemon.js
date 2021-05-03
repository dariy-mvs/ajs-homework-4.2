import Character from './app';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    if (type !== 'Daemon') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 10;
    this.defence = 40;
    this.levelUp = this.levelUp.bind(this);
    this.damage = this.damage.bind(this);
  }
}
