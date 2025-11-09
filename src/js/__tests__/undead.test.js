import Undead from '../undead';

describe('Undead', () => {
  test('Правильные характеристики', () => {
    const u = new Undead('Ghouly');
    expect(u.name).toBe('Ghouly');
    expect(u.type).toBe('Undead');
    expect(u.attack).toBe(25);
    expect(u.defence).toBe(25);
    expect(u.health).toBe(100);
    expect(u.level).toBe(1);
  });

  test('Наследование Character', () => {
    const u = new Undead('Ghouly');
    u.damage(10);
    expect(u.health).toBeLessThan(100);
    u.levelUp();
    expect(u.level).toBe(2);
    expect(u.attack).toBeCloseTo(30);
    expect(u.defence).toBeCloseTo(30);
    expect(u.health).toBe(100);
  });
});
