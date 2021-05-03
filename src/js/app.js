// TODO: write your code here
export default class Character {
  constructor(name, type) {
    if (!(name.length > 1 && name.length < 11 && typeof name === 'string')) {
      throw new Error('неправильное имя');
    }
    if (!(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) {
      throw new Error('неправильный тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить level умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Персонаж уже умер');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
