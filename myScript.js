
function myLoop(){



var end = document.getElementById("end").value;

  var start=
document.getElementById("start").value;

  var jump=
 document.getElementById("jump").value;
  
  console.log(start);
  console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
  start = Number(start);
  end = Number(end);
  jump = Number(jump);

for(var i=start ; i < end; i+=jump){
  document.write('<p>' + i)
}
}
