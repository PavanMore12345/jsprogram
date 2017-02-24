
  function gettotal()
  {
var total=document.links.length;
document.getElementById("demo").innerHTML="<h3>total number of links in the document is</h3>"+total+"</br>";
}
function getlink()
{
  var i;
  for(i=0;i<document.links.length;i++)
  {
    document.getElementById("demo").innerHTML+="<h3>links =</h3> "+document.links[i].innerHTML+"</br>"+"<h3>links to =</h3> "+document.links[i].href+"</br>";
  }
}

