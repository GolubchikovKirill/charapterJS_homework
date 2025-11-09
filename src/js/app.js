import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const characters = [
  new Bowman('Robin'),
  new Swordsman('Leon'),
  new Magician('Merlin'),
  new Daemon('Azazel'),
  new Undead('Ghouly'),
  new Zombie('Jerry'),
];

console.log(characters);
