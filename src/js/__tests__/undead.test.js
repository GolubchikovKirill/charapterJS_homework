import Undead from '../undead';

describe('Undead', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Ghouly',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const actual = new Undead('Ghouly');
    expect(actual).toEqual(expected);
  });

  test('Работа методов (damage, levelUp)', () => {
    const u = new Undead('Ghouly');
    u.health = 60;
    u.defence = 25;
    u.damage(20); // 60 - 20*(1-0.25) = 45
    expect(u.health).toBeCloseTo(45);
    u.levelUp();
    expect(u.level).toBe(2);
    expect(u.attack).toBeCloseTo(30);
    expect(u.defence).toBeCloseTo(30);
    expect(u.health).toBe(100);
  });

  test('Undead наследует методы Character', () => {
    const u = new Undead('Ghouly');
    expect(typeof u.levelUp).toBe('function');
    expect(typeof u.damage).toBe('function');
  });
});
