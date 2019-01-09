s
var chgValue=0;
function chgBtnValue()
{
	var orgValue; //為何不一開始宣告為零
	for(orgValue=0;orgValue<10;orgValue++)
	{
		chgValue++;
	}
	var orgValue=0;

	document.getElementById("p4WidthSize2").innerHTML=chgValue+""; //<---為何加號後面要加空字串
}
function chgBtnWidth()
{
    document.getElementsByClassName("p4Width")[0].style.width="100px";
}
