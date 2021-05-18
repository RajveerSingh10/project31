class Partical{
matter.bodies(circular)

constructor{}

display()
this.body=Bodies.circle(x,y,this.releaseEvents,options);
this.colour=colour(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);

if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
}




