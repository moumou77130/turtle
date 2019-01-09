var chgValue=0;
function chgBtnValue()
{
	var orgValue;
	for(orgValue=0; orgValue<10; orgValue++)
	{
		chgValue++;
	}
	var orgValue=0;
	document.getElementById("p2WidthSize2").innerHTML=chgValue+"";
}
function chgBtnWidth()
{
	document.getElementsByClassName("p2Width")[0].style.width="100px";
}