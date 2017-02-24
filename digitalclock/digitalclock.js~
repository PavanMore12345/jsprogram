 var x="";

  function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('myfun()',refresh)
  }
var i=0;
  var myobjarr={
  "myobj":[{"name":"New England Journal of Medicine","author":"Greg Curfman","dateofpublication":"01-23-2011","publication":"Deputy Editor"},
   {"name":"Journal of Virology","author":"Lynn Enquist","dateofpublication":"02-11-2012","publication":"Editor"},
   {"name":"Massachusetts Institute of Technology","author":"Gerald Fink","dateofpublication":"03-21-2012","publication":"Deputy Editor"},
   {"name":"American Phytopathological Society","author":"Jacqueline Fletcher","dateofpublication":"05-12-2005","publication":" Editor"},
   {"name":"Biochemistry","author":"Gordon Hammes","dateofpublication":"08-15-2009","publication":"Deputy Editor"},
   {"name":"Biosecurity and Bioterrorism","author":"Greg Curfman","dateofpublication":"09-16-2015","publication":"Deputy Editor"},
   {"name":"chemistry","author":"Samuel Kaplan,","dateofpublication":"01-23-2011","publication":"ASM Publications Board"},
   {"name":"Science","author":"Donald Kennedy","dateofpublication":"01-28-2007","publication":"DD publication"},
   {"name":"Geogrphy","author":"Greg Curfman","dateofpublication":"03-23-2009","publication":"TATA publication"},
   {"name":"socology","author":"Greg ","dateofpublication":"01-23-2007","publication":"Deputy Editor"}]
};
function myfun()
{
  if(i<myobjarr.myobj.length)
  {

    document.getElementById("demo").innerHTML=("<h1>"+"article name:"+myobjarr.myobj[i].name+"</h1>"+"<br>"+"author :"+myobjarr.myobj[i].author+"<br>"+"dateofpublication :"+myobjarr.myobj[i].dateofpublication+"<br>"+"publication :"+myobjarr.myobj[i].publication+"<br>"+
    "Date is"+ Date());
    setTimeout(myfun,3000);
  }
  i++;
}
