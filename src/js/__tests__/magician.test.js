import Magician from '../magician';

describe('Magician', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    const actual = new Magician('Gandalf');
    expect(actual).toEqual(expected);
  });

  test('Работа методов (damage, levelUp)', () => {
    const m = new Magician('Gandalf');
    m.health = 50;
    m.defence = 40;
    m.damage(10);
    expect(m.health).toBeCloseTo(44);
    m.levelUp();
    expect(m.level).toBe(2);
    expect(m.attack).toBeCloseTo(12);
    expect(m.defence).toBeCloseTo(48);
    expect(m.health).toBe(100);
  });

  test('Magician наследует методы Character', () => {
    const m = new Magician('Gandalf');
    expect(typeof m.levelUp).toBe('function');
    expect(typeof m.damage).toBe('function');
  });
});
