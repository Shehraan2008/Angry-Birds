class Pig {
  constructor(x, y, r) {
    var options = {
      restitution: 1,
      isStatic: true,
      density: 0,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    noStroke();
    fill("green");
    ellipse(pos.x, pos.y, this.r);
  }
}
