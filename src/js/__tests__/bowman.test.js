import Bowman from '../bowman';

describe('Bowman', () => {
  test('Правильные характеристики', () => {
    const b = new Bowman('Robin');
    expect(b.name).toBe('Robin');
    expect(b.type).toBe('Bowman');
    expect(b.attack).toBe(25);
    expect(b.defence).toBe(25);
    expect(b.health).toBe(100);
    expect(b.level).toBe(1);
  });
  test('Корректная работа наследования', () => {
    const b = new Bowman('Robin');
    b.damage(10);
    expect(b.health).toBeLessThan(100);
    b.levelUp();
    expect(b.level).toBe(2);
    expect(b.attack).toBeCloseTo(30);
    expect(b.defence).toBeCloseTo(30);
    expect(b.health).toBe(100);
  });
});
