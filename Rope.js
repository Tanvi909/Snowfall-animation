class Rope{
    constructor(bodyA, pointB){
        var options= {
            bodyA: bodyA, 
            pointB: pointB, 
            stiffness: 0.2, 
            length: 70
        }

        this.pointB= pointB; 
        this.rope= Constraint.create(options); 
        World.add(world, this.rope); 
    }

    fly(){
        this.rope.boyA= null; 
    }

    attach(body){
        this.rope.bodyA= body; 
    }

    display(){
        if(this.rope.bodyA){
            push(); 
            var pointA= this.rope.bodyA.position;
            var pointB= this.pointB; 
            
            strokeWeight(12); 
            //stroke(7,5,6);
            fill("lightblue"); 
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
            pop(); 
        }
    }
}