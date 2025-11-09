import Swordsman from '../swordsman';

describe('Swordsman', () => {
  test('Правильные характеристики', () => {
    const s = new Swordsman('Conan');
    expect(s.name).toBe('Conan');
    expect(s.type).toBe('Swordsman');
    expect(s.attack).toBe(40);
    expect(s.defence).toBe(10);
    expect(s.health).toBe(100);
    expect(s.level).toBe(1);
  });

  test('Наследование Character', () => {
    const s = new Swordsman('Conan');
    s.damage(10);
    expect(s.health).toBeLessThan(100);
    s.levelUp();
    expect(s.level).toBe(2);
    expect(s.attack).toBeCloseTo(48);
    expect(s.defence).toBeCloseTo(12);
    expect(s.health).toBe(100);
  });
});
