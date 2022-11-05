class Predator {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  this.energy = 2;
  this.directions = [
  [this.x - 1, this.y - 1],
  [this.x, this.y - 1],
  [this.x + 1, this.y - 1],
  [this.x - 1, this.y],
  [this.x + 1, this.y],
  [this.x - 1, this.y + 1],
  [this.x, this.y + 1],
  [this.x + 1, this.y + 1]
  ];
  }
  getNewCordinates() {
  this.directions = [
  [this.x - 1, this.y - 1],
  [this.x, this.y - 1],
  [this.x + 1, this.y - 1],
  [this.x - 1, this.y],
  [this.x + 1, this.y],
  [this.x - 1, this.y + 1],
  [this.x, this.y + 1],
  [this.x + 1, this.y + 1]
  ];
  }
  chooseCell(char) {
  this.getNewCordinates();
  let result = [];

  for (let i = 0; i < this.directions.length; i++) {
  let x = this.directions[i][0];
  let y = this.directions[i][1];

  if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
  if (matrix[y][x] == char) {
  result.push(this.directions[i]);
  }
  }

  }

  return result;
  }
  mul() {
  let found = this.chooseCell(0);
  let exact = random(found)

  if (exact && this.energy > 30) {
  let x = exact[0];
  let y = exact[1];

  let pre = new Predator(x, y);
  matrix[y][x] = 5;
  PredatorArr.push(pre);

  this.energy = 8;
  }
  }
  eat() {
  let found1 = this.chooseCell(1);
  let found2 = this.chooseCell(2);
  let found = [found1, found2]
  let randomfound = random(found);
  let exact = random(randomfound)
  if (exact) {
  this.energy += 2;
  let x = exact[0];
  let y = exact[1];

  for (let i in grasses) {
  if (grasses[i].x == x && grasses[i].y == y) {
  grasses.splice(i, 1)
  }
  else {
  for (let i = 0; i < grassEaterArr.length; i++) {
  if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
  grassEaterArr.splice(i, 1)
  }
  }
  }
  }


  matrix[y][x] = 5
  matrix[this.y][this.x] = 0

  this.x = x;
  this.y = y

  if (this.energy > 12) {
  this.mul()
  }
  } else {
  this.move()
  }
  }
  move() {
  let found = this.chooseCell(0);
  let exact = random(found)

  if (exact) {
  let x = exact[0];
  let y = exact[1];

  matrix[y][x] = 5
  matrix[this.y][this.x] = 0

  this.x = x;
  this.y = y;

  this.energy--

  if (this.energy < 0) {
  this.die()
  }
  } else {
  this.energy--
  if (this.energy < 0) {
  this.die()
  }
  }
  }
  die() {
  for (let i = 0; i < PredatorArr.length; i++) {
  if (PredatorArr[i].x == this.x && PredatorArr[i].y == this.y) {
  PredatorArr.splice(i, 1)
  }
  }
  matrix[this.y][this.x] = 0
  }
  }
