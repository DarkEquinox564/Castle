class triangle {
    constructor(x1, y1, x2,y2,x3,y3) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x1, y1, x2,y2,x3,y3);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill(255);
      triangle();
      pop();
    }
  };