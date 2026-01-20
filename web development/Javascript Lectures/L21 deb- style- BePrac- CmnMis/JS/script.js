console.clear();

class Player {
  constructor(name, age) {
    this.name = name;
    // debugger;
    this.age = age;
  }
  play(status) {
    // debugger;
    console.log(`${this.name}, ${this.age} is playing ${status}`);
  }
}

const play1 = new Player('Hridoy', 22);
const play2 = new Player('Shoriful', 21);
// play1.play('well');
// play2.play('bad');

// console.log('H');

