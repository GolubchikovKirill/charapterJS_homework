import Character from '../character';

describe('Character class', () => {
  test('Создание персонажа с валидными параметрами', () => {
    const hero = new Character('Robin', 'Bowman');
    expect(hero.name).toBe('Robin');
    expect(hero.type).toBe('Bowman');
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBeUndefined();
    expect(hero.defence).toBeUndefined();
  });
  test('Ошибка имени (коротко)', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });
  test('Ошибка имени (длинно)', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });
  test('Ошибка типа', () => {
    expect(() => new Character('Robin', 'Knight')).toThrow('Недопустимый тип');
  });
  test('Уровень и силы после levelUp', () => {
    const hero = new Character('Test', 'Bowman');
    hero.attack = 50;
    hero.defence = 50;
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.attack).toBe(60);
    expect(hero.defence).toBe(60);
    expect(hero.health).toBe(100);
  });
  test('levelUp не работает для умершего', () => {
    const hero = new Character('Test', 'Bowman');
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень умершего');
  });
  test('damage уменьшает здоровье корректно', () => {
    const hero = new Character('Test', 'Bowman');
    hero.health = 50;
    hero.defence = 20;
    hero.damage(30);
    expect(hero.health).toBeCloseTo(26);
  });
  test('damage не дает опуститься ниже 0', () => {
    const hero = new Character('Test', 'Bowman');
    hero.health = 10;
    hero.defence = 0;
    hero.damage(20);
    expect(hero.health).toBe(0);
  });
});
