class Bird {
  constructor(x, y, r) {
    var options = {
      restitution: 0.5,
    };
    this.body = Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.body, this.body.mass * 4);
    World.add(world, this.body);
    this.r = r;
  }

  show() {
    var pos = this.body.position;
    noStroke();
    fill("yellow");
    ellipse(pos.x, pos.y, this.r);
  }
}
