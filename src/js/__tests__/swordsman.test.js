import Swordsman from '../swordsman';

describe('Swordsman', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Conan',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    const actual = new Swordsman('Conan');
    expect(actual).toEqual(expected);
  });

  test('Работа методов (damage, levelUp)', () => {
    const s = new Swordsman('Conan');
    s.health = 50;
    s.defence = 10;
    s.damage(20); // 50 - 20*(1-0.1) = 32
    expect(s.health).toBeCloseTo(32);
    s.levelUp();
    expect(s.level).toBe(2);
    expect(s.attack).toBeCloseTo(48);
    expect(s.defence).toBeCloseTo(12);
    expect(s.health).toBe(100);
  });

  test('Swordsman наследует методы Character', () => {
    const s = new Swordsman('Conan');
    expect(typeof s.levelUp).toBe('function');
    expect(typeof s.damage).toBe('function');
  });
});
