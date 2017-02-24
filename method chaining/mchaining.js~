function myfun()
{
  var calculation=function()
  {
    this.firstnum1=20;
    this.secondnum1=30;
  };
  calculation.prototype.first=function(number1)
  {
    this.firstnum1=number1;
    return this;
  };
  calculation.prototype.second=function(number2)
  {
    this.secondnum1=number2;
    return this;
  };
  calculation.prototype.sum=function()
  {
    var sum1=this.firstnum1+this.secondnum1;
    return sum1;
  };
var num=new calculation().first(10).second(20).sum();
document.getElementById("demo").innerHTML=num;
}
