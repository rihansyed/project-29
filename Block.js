class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:0.01,
          density:0.01
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("darkBlue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
