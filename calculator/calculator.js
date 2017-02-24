 function  myfun()
        {
          var num1=Number(document.getElementById('fid1').value);
            var num2=Number(document.getElementById('id2').value);
          var nu1=Number(num1);
          var nu2=Number(num2);
        var nm1;
        var e=document.getElementById("sid");
        var strUser = e.options[e.selectedIndex].value;
        if(strUser=="addition")
        {
           nm1=nu1+nu2;

        }else if(strUser=="substraction")
        {
          nm1=nu1-nu2;
        }else if (strUser=="multiplication") {
          nm1=nu1*nu2;

        }else if (strUser=="division") {
          nm1=nu1/nu2;
        }

        document.getElementById("id3").value=nm1;
      }
