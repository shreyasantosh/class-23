class Box{
    constructor(x,y,width,height){
        var options={
            'restitution': 1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }
display(){
    var position=this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(position.x,position.y,this.width,this.height);
}


}