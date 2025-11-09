import Zombie from '../zombie';

describe('Zombie', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Jerry',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    const actual = new Zombie('Jerry');
    expect(actual).toEqual(expected);
  });

  test('Работа методов (damage, levelUp)', () => {
    const z = new Zombie('Jerry');
    z.health = 100;
    z.defence = 10;
    z.damage(50);
    expect(z.health).toBeCloseTo(55);
    z.levelUp();
    expect(z.level).toBe(2);
    expect(z.attack).toBeCloseTo(48);
    expect(z.defence).toBeCloseTo(12);
    expect(z.health).toBe(100);
  });

  test('Zombie наследует методы Character', () => {
    const z = new Zombie('Jerry');
    expect(typeof z.levelUp).toBe('function');
    expect(typeof z.damage).toBe('function');
  });
});
