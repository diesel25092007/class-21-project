class Ground
{
    constructor(x,y,w,h)
    //x=200,y=380,w=400,h=10
    {
       //bottomwall.x=200
       //bottomwall.y=380
       //bottomwall.w=400
       //bottomwall.h=10
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        var options={isStatic:true}
        //bottomwall.body=..
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(myworld,this.body);
    }
    show()
    {
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);

    }
}