
//  var a={name:"pavan",marks:80,age:22};
  //var b={name:"pavan",marks:80,age:22};
  function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
function myfun()
{
  var b="pavan";
  var a1={name:b,marks:80,age:22};
  var b1={name:"pavan",marks:80,age:22};
  var bool=isEqual(a1,b1);
  if(bool)
  {
    document.write("object are equal");
  }
  else {
    document.write("object are not equl");
  }
}
