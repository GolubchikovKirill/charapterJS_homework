import Bowman from '../bowman';

describe('Bowman', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const actual = new Bowman('Robin');
    expect(actual).toEqual(expected);
  });

  test('damage корректно уменьшает здоровье с изменённой защитой', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 50;
    bowman.defence = 20;
    bowman.damage(30);
    expect(bowman.health).toBeCloseTo(26);
  });

  test('levelUp работает корректно с дефолтными полями', () => {
    const bowman = new Bowman('Robin');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBeCloseTo(30);
    expect(bowman.defence).toBeCloseTo(30);
    expect(bowman.health).toBe(100);
  });

  test('Bowman является наследником Character', () => {
    const bowman = new Bowman('Robin');
    expect(typeof bowman.levelUp).toBe('function');
    expect(typeof bowman.damage).toBe('function');
  });
});
