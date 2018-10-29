function Asteroid(options) {
  MovingObject.apply(options);
  this.color = 'gray';
  this.radius = 50;
}

Util.inherits(Asteroid, MovingObject);
