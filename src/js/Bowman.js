import Character from './app';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    if (type !== 'Bowman') {
      throw new Error('неправильный тип персонажа');
    }
    this.attack = 25;
    this.defence = 25;
  }
}
