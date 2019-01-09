var chgValue=0;
function chgBtnValue()
{
	var orgValue;
	for(orgValue=0;orgValue<10;orgValue++)
	{
		chgValue++;
	}
	orgValue=0;
	document.getElementById("p1WidthSize2").innerHTML=chgValue+"";
	
}

function chgBtnWidth()
{
	document.getElementsByClassName("p1Width")[0].style.width = "100px";
}
