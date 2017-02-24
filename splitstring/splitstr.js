
function myfun()
{
var str='Tim:20,Henry:30,Linda:35';
 var str1=str.replace(/:/g,",");
document.getElementById("demo").innerHTML=str1;
var arr=str1.split(",");
var i,text="";
for(i=0;i<arr.length;i++)
{
  text=text+arr[i];
}
document.getElementById("demo1").innerHTML=text;
}
