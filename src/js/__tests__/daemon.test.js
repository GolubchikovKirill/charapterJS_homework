import Daemon from '../daemon';

describe('Daemon', () => {
  test('Правильные характеристики', () => {
    const d = new Daemon('Azazel');
    expect(d.name).toBe('Azazel');
    expect(d.type).toBe('Daemon');
    expect(d.attack).toBe(10);
    expect(d.defence).toBe(40);
    expect(d.health).toBe(100);
    expect(d.level).toBe(1);
  });

  test('Наследование Character', () => {
    const d = new Daemon('Azazel');
    d.damage(10);
    expect(d.health).toBeLessThan(100);
    d.levelUp();
    expect(d.level).toBe(2);
    expect(d.attack).toBeCloseTo(12);
    expect(d.defence).toBeCloseTo(48);
    expect(d.health).toBe(100);
  });
});
