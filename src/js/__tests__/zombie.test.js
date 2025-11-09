import Zombie from '../zombie';

describe('Zombie', () => {
  test('Правильные характеристики', () => {
    const z = new Zombie('Jerry');
    expect(z.name).toBe('Jerry');
    expect(z.type).toBe('Zombie');
    expect(z.attack).toBe(40);
    expect(z.defence).toBe(10);
    expect(z.health).toBe(100);
    expect(z.level).toBe(1);
  });

  test('Наследование Character', () => {
    const z = new Zombie('Jerry');
    z.damage(10);
    expect(z.health).toBeLessThan(100);
    z.levelUp();
    expect(z.level).toBe(2);
    expect(z.attack).toBeCloseTo(48);
    expect(z.defence).toBeCloseTo(12);
    expect(z.health).toBe(100);
  });
});
