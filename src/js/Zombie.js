import Character from './app';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    if (type !== 'Zombie') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 40;
    this.defence = 10;
  }
}
