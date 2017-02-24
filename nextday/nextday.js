function myfun()
{
  var d=new Date();
  var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  var cur=days[d.getDay()];
  document.getElementById("current").innerHTML=cur;
  Date.prototype.nextday=function()
  {
d.setDate(d.getDate()+1);
return days[d.getDay()];
  }
  document.getElementById("next").innerHTML=d.nextday();
 }
