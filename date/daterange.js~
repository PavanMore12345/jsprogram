function rangedate()
  {
    var date11=document.getElementById("date1").value;
    console.log(date11);
    var dt1=new Date(date11);
    var date22=document.getElementById("date2").value;
    var dt2=new Date(date22);
    console.log(date22);
    var d1m=dt1.getMonth();
    console.log(d1m);
    var temp=" ";
    var d2m=dt2.getMonth();
    var d1y=dt1.getFullYear();
    var d2y=dt2.getFullYear();
    var mnthname=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    var datenm=["0th","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","20nd","20rd","24th","25th","26th","27th","28th","29th","30th","31th"];
    if(d1m==d2m&&d1y==d2y)
    {
      temp=mnthname[d1m]+","+datenm[dt1.getDate()]+","+datenm[dt2.getDate()];
     // document.getElementById("demo").innerHTML=temp;
    }
else if(d1y==d2y)
{
 temp=datenm[dt1.getDate()]+mnthname[d1m]+","+datenm[dt2.getDate()]+mnthname[d2m];
}
    else {
       temp=d1y+","+d2y+","+mnthname[d1m]+","+datenm[dt1.getDate()]+","+datenm[dt2.getDate()];

    }
    document.getElementById("demo").innerHTML=temp;
  }
