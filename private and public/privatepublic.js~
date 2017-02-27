 var vechile=function()
  {
    Max_Speed=0.0;
    Displacement=0.0;
    type=0.0;
    this.SetSpeed=function(speed)
    {
    Max_Speed=speed;
    }
    this.SetDisplacement=function(disp)
    {
      Displacement=disp;
    }
    this.SetType=function(type1)
    {
      type=type1;
    }
  }
  function inherits(parent,child)
  {
    child.prototype=Object.create(parent.prototype);
  }
  function bike()
  {
var speeds1=Max_Speed;
var typ1=type;
var diplacement11=Displacement;
this.getSpeed=function()
{
  return speeds1;
}
this.getType=function()
{
  return typ1;
}
this.getDispalcement=function()
{
  return diplacement11;
}
}
function myfun()
{
inherits(vechile,bike);
bike.prototype.constructor=bike;
var av=new vechile();
var sp1=document.getElementsByName("maxspeed")[0].value;
av.SetSpeed(sp1);
var disp1=document.getElementsByName("displacement")[0].value;
av.SetDisplacement(disp1);
var type1=document.getElementsByName("type12")[0].value;
av.SetType(type1);
var bike1=new bike();
document.getElementsByName("bikesp1")[0].value=bike1.getSpeed();
document.getElementsByName("biketp")[0].value=bike1.getType();
document.getElementsByName("bikedisp")[0].value=bike1.getDispalcement();
}

