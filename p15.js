function chgBtnColor()
{
	document.getElementById("p15BackColor").style.backgroundColor="blue";
	document.getElementById("p15BackColor2").style.backgroundColor="red";
	
}
var chgValue=0;
//因為是數值所以要先宣告為0
function chgBtnValue()
{
   var orgValue;
   for(orgValue=0;orgValue<10;orgValue++)
   {
	  chgValue++;
   }
   document.getElementById("p15BackColor2").innerHTML=chgValue+" ";
}

function chgBtnWidth()
{
	document.getElementsByClassName("p15width")[0].style.width = "100px";
}