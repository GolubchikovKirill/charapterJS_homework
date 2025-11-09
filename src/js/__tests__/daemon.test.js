import Daemon from '../daemon';

describe('Daemon', () => {
  test('Правильно создаётся объект', () => {
    const expected = {
      name: 'Azazel',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    const actual = new Daemon('Azazel');
    expect(actual).toEqual(expected);
  });

  test('Работа методов (damage, levelUp)', () => {
    const d = new Daemon('Azazel');
    d.health = 80;
    d.defence = 40;
    d.damage(10); // 80 - 10*(1-0.4) = 74
    expect(d.health).toBeCloseTo(74);
    d.levelUp();
    expect(d.level).toBe(2);
    expect(d.attack).toBeCloseTo(12);
    expect(d.defence).toBeCloseTo(48);
    expect(d.health).toBe(100);
  });

  test('Daemon наследует методы Character', () => {
    const d = new Daemon('Azazel');
    expect(typeof d.levelUp).toBe('function');
    expect(typeof d.damage).toBe('function');
  });
});
