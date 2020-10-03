class Mango {
    constructor(x, y, width, height) {
      var options = {
        'isStatic': false,  
        'restituion' : 0.3,
          'friction':1
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("white");
      
      pop();
    }
  };