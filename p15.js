function chgBtnColor()
{
	document.getElementById("p15BackColor").style.backgroundColor="blue";
	document.getElementById("p15BackColor2").style.backgroundColor="red";
	
}

var j=0;
function chgBtnValue()
{
   var i;
  
   for(i=0;i<10;i++)
   {
	  j++;
   }
   i=0;
   document.getElementById("p15BackColor2").innerHTML=j+" ";
}

function chgBtnWidth()
{
	document.getElementsByClassName("p15width")[0].style.width = "100px";
}