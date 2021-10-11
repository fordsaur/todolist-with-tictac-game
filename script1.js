var count=1;
function fill(control) {

	if(count<=9){
	if(count%2!=0){
	document.getElementById(control.id).innerHTML="X";
}
else{
	document.getElementById(control.id).innerHTML="O";
}
count++;
if(checkWin()){
alert("Congrats you win");
		reset();
	}
}

else {
	alert("match is draw Try Better NextTime");
	reset();
}
}
function reset(){
	for(var i=1;i<=9;i++){
		document.getElementById('div'+i).innerHTML="";	
		count=1;
	}
}
function checkWin(){
// 	//if is wrong correct it ................
if(checkCondition('div1','div2','div3') || checkCondition('div1','div5','div9') ||
 checkCondition('div1','div4','div7') || checkCondition('div3','div5','div7') || 
 checkCondition('div4','div5','div6') || checkCondition('div7','div8','div9') || 
checkCondition('div2','div5','div8') || checkCondition('div3','div6','div9')){

	return true;

}
 
}
function getdata(div){
return	document.getElementById(div).innerHTML;
}

function checkCondition(div1,div2,div3){
if(getdata("div1")!="" && getdata("div2")!="" 
 	&& getdata("div3")!="" && getdata("div1")
 	==getdata("div2")  &&  getdata("div2")
 	==getdata("div3") || 
 	getdata("div1")!="" && getdata("div5")!="" 
 	&& getdata("div9")!="" && getdata("div1")
 	==getdata("div5")  &&  getdata("div5")
 	==getdata("div9") || 
 	getdata("div1")!="" && getdata("div4")!="" 
 	&& getdata("div7")!="" && getdata("div1")
 	==getdata("div4")  &&  getdata("div4")
 	==getdata("div7") || 
 	getdata("div3")!="" && getdata("div5")!="" 
 	&& getdata("div7")!="" && getdata("div3")
 	==getdata("div5")  &&  getdata("div5")
 	==getdata("div7") || 
 	getdata("div4")!="" && getdata("div5")!="" 
 	&& getdata("div6")!="" && getdata("div4")
 	==getdata("div5")  &&  getdata("div5")
 	==getdata("div6") || 
 	getdata("div7")!="" && getdata("div8")!="" 
 	&& getdata("div9")!="" && getdata("div7")
 	==getdata("div8")  &&  getdata("div8")
 	==getdata("div9") || 
 	getdata("div2")!="" && getdata("div5")!="" 
 	&& getdata("div8")!="" && getdata("div2")
 	==getdata("div5")  &&  getdata("div5")
 	==getdata("div8") || 
 	getdata("div3")!="" && getdata("div6")!="" 
 	&& getdata("div9")!="" && getdata("div3")
 	==getdata("div6")  &&  getdata("div6")
 	==getdata("div9") )
 {
return true;
}
}
