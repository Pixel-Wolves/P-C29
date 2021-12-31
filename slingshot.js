class Slingshot{
    constructor(bullet,position){
        var options={
            bodyA : bullet,
            pointB : position,
            stiffness : 0.04,
            lenght : 10,
        }

        this.position = position;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.position;

            strokeWeight(4);
            stroke(0,0,0);

            line(pointA.x, pointA.y, pointB.x, pointB.y);

            if(mouseIsPressed && mouseButton === LEFT){
                Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});
            }
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
}