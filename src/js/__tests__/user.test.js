import Character from '../app';

test('Character', () => {
  const Person = new Character('Charter', 'Bowman');
  expect(Person).toEqual({
    name: 'Charter', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('Character', () => {
  const Person = new Character('Charter', 'Undead');
  expect(Person).toEqual({
    name: 'Charter', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
test('Character', () => {
  const Person = new Character('Charter', 'Zombie');
  expect(Person).toEqual({
    name: 'Charter', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
test('Character', () => {
  const Person = new Character('Charter', 'Swordsman');
  expect(Person).toEqual({
    name: 'Charter', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
test('Character', () => {
  const Person = new Character('Charter', 'Magician');
  expect(Person).toEqual({
    name: 'Charter', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
test('Character', () => {
  const Person = new Character('Charter', 'Daemon');
  expect(Person).toEqual({
    name: 'Charter', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
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
    const Person = new Character('h', 'Daemon');
    return Person;
  }).toThrow('неправильное имя');
});
test('Character', () => {
  expect(() => {
    const Person = new Character('kos', 'Cat');
    return Person;
  }).toThrow('неправильный тип персонажа');
});
