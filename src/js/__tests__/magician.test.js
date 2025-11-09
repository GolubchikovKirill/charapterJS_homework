import Magician from '../magician';

describe('Magician', () => {
  test('Правильные характеристики', () => {
    const m = new Magician('Gandalf');
    expect(m.name).toBe('Gandalf');
    expect(m.type).toBe('Magician');
    expect(m.attack).toBe(10);
    expect(m.defence).toBe(40);
    expect(m.health).toBe(100);
    expect(m.level).toBe(1);
  });

  test('Наследование Character', () => {
    const m = new Magician('Gandalf');
    m.damage(10);
    expect(m.health).toBeLessThan(100);
    m.levelUp();
    expect(m.level).toBe(2);
    expect(m.attack).toBeCloseTo(12);
    expect(m.defence).toBeCloseTo(48);
    expect(m.health).toBe(100);
  });
});
