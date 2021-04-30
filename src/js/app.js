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
    switch (type) {
      case 'Bowman': {
        this.attack = 25;
        this.defence = 25;
        break;
      }
      case 'Swordsman': {
        this.attack = 40;
        this.defence = 10;
        break;
      }
      case 'Magician': {
        this.attack = 10;
        this.defence = 40;
        break;
      }
      case 'Undead': {
        this.attack = 25;
        this.defence = 25;
        break;
      }
      case 'Zombie': {
        this.attack = 40;
        this.defence = 10;
        break;
      }
      case 'Daemon': {
        this.attack = 10;
        this.defence = 40;
        break;
      }
      default: {
        return '';
      }
    }
  }

  levelUp() {
    if (this.health === 0) {
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

const A = new Character('aA', 'Magician');
console.log(A);
A.levelUp();
console.log(A);
A.damage(30);
console.log(A);
