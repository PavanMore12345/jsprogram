
  //var str=Number(document.getElementById("id1").value);
//  console.log(str);
//  var par=Number(document.getElementById("id2").value);
//  console.log(par);
  function myfun()
  {
      var str=Number(document.getElementById("id1").value);
      var par=Number(document.getElementById("id2").value);
    var a=golf(str,par);
    //console.log(a);
    document.getElementById("demo").innerHTML=a;
  }
  function golf(s,p)
  {
  //  console.log(s);
  //  console.log(p);
  if(s==1){
  return "Hole-in-one!";
}
  else if(s<=p-2)
  {
  return "eagle";
}
  else if(s==p-1)
  {
  return "Birdie";
}
  else if(s==p)
  {
  return "fdfvd";
}
  else if(s==p+1)
  {
  return "Bogey";
}
  else if(s==p+2)
  {
  return "double Bogey";
}
  else{
  return "go Home";
}
  }

 
