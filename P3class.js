var chgValue=0;
function chgBtnValue()
{
	var orgValue;
	for(orgValue=0; orgValue<10; orgValue++)
	{
		chgValue++;
	}
	var orgValue=0;
	document.getElementById("p3WidthSize2").innerHTML=chgValue+"";
}
function chgBtnWidth()
{
	document.getElementsByClassName("p3Width")[0].style.width="100px";
}