class ground {
  constructor() {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(400,300,300,20,options);
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, 300,20);
  }
};







