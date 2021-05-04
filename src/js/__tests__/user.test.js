import Character from '../app';
import Zombie from '../Zombie';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Bowman from '../Bowman';
import Undead from '../Undead';

// jest.mock('../app');


// beforeEach(() => {
//   jest.resetAllMocks();
// });


test('Character', () => {
  const Char = new Character('Cat', 'Bowman');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Bowman',
    level: 1,
    health: 100,
  });
});

test('Character', () => {
  expect(() => {
    const Person = new Character('jhgjhgjhgjhgjhgjhg', 'Daemon');
    return Person;
  }).toThrow('неправильное имя');
});
test('Character', () => {
  expect(() => {
    const Person = new Character(7, 'Daemon');
    return Person;
  }).toThrow('неправильное имя');
});

test('Character', () => {
  expect(() => {
    const Person = new Character('j', 'Daemon');
    return Person;
  }).toThrow('неправильное имя');
});
test('Character', () => {
  expect(() => {
    const Person = new Character('jss', 'Cat');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

test('Bowman', () => {
  const Char = new Bowman('Cat', 'Bowman');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});

test('Bowman', () => {
  expect(() => {
    const Person = new Bowman('jss', 'Zombie');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

// test('levelUp', () => {
//   const Char = new Bowman('Cat', 'Bowman');
//   Char.levelUp();
//   expect(Char).toEqual(expect.objectContaining({
//     name: 'Cat',
//     type: 'Bowman',
//     level: 2,
//     health: 100,
//     attack: 30,
//     defence: 30,
//   }));
// });

// test('levelUp', () => {
//   expect(() => {
//     const Person = new Bowman('jss');
//     Person.health = -1;
//     Person.levelUp();
//     return Person;
//   }).toThrow('нельзя повысить level умершего');
// });

// test('damage', () => {
//   const Char = new Bowman('Cat', 'Bowman');
//   Char.damage(30);
//   expect(Char).toEqual(expect.objectContaining({
//     name: 'Cat',
//     type: 'Bowman',
//     level: 1,
//     health: 77.5,
//     attack: 25,
//     defence: 25,
//   }));
// });

// test('damage', () => {
//   expect(() => {
//     const Person = new Bowman('jss');
//     Person.health = -1;
//     Person.damage(30);
//     return Person;
//   }).toThrow('Персонаж уже умер');
// });

test('Swordsman', () => {
  const Char = new Swordsman('Cat');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
test('Swordsman', () => {
  expect(() => {
    const Person = new Swordsman('jss', 'Zombie');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

test('Zombie', () => {
  const Char = new Zombie('Cat');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
test('Zombie', () => {
  expect(() => {
    const Person = new Zombie('jss', 'Daemon');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

test('Undead', () => {
  const Char = new Undead('Cat');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});
test('Undead', () => {
  expect(() => {
    const Person = new Undead('jss', 'Daemon');
    return Person;
  }).toThrow('неправильный тип персонажа');
});


test('Daemon', () => {
  expect(() => {
    const Person = new Daemon('jss', 'Zombie');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

test('Daemon', () => {
  const Char = new Daemon('Cat');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  expect(() => {
    const Person = new Magician('jss', 'Zombie');
    return Person;
  }).toThrow('неправильный тип персонажа');
});

test('Magician', () => {
  const Char = new Magician('Cat');
  expect(Char).toEqual({
    name: 'Cat',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
