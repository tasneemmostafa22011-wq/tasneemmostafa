var p=document.getElementById("Operations");
var c="";

function paragraph(){
	var firstnum=Math.floor(Math.random()*20);
    var lastnum=Math.floor(Math.random()*20);
    var y=document.getElementById("number1");
    var t=document.getElementById("number2");
    y.innerHTML=firstnum;
    t.innerHTML=lastnum;
}

function showbutton(n) {
	var x=document.getElementById("button1");
	x.hidden=false;

    c=n;
	if(n=="+"){
		p.src="https://cdn-icons-png.freepik.com/512/10777/10777953.png";
	}
	else if(n=="-"){
		p.src="https://cdn3d.iconscout.com/3d/premium/thumb/minus-sign-3d-icon-png-download-11537486.png";
	}
	else if(n=="/"){
		p.src="https://cdn-icons-png.flaticon.com/512/17879/17879825.png";
	}
	else if(n=="*"){
		p.src="https://cdn-icons-png.freepik.com/512/10778/10778025.png";
	}
}

function Calculations(){
	var firstnum=document.getElementById("number1").innerHTML;
	var lastnum=document.getElementById("number2").innerHTML;
	var answer="";
	if(c=="+"){
		answer=firstnum*1 + lastnum*1;
	}
	else if(c=="-"){
		answer=firstnum-lastnum;
	}
	else if(c=="/"){
		answer=firstnum/lastnum;
	}
	else if(c=="*"){
		answer=firstnum*lastnum;
	}
	var t=document.getElementById("Score").innerHTML;
	var x=document.getElementById("input").value;
	if(x==answer){
		t=t*1 +1;
	}
	else {
		t=t-1
	}
	document.getElementById("Score").innerHTML=t;
}

function div() {
	var y=document.getElementById("div1");
	y.hidden=true;
	k=document.getElementById("div2");
	k.hidden=false;
	paragraph();
}
function showdivs(){
	var y=document.getElementById("div1");
	y.hidden=false;
	k=document.getElementById("div2");
	k.hidden=true;
}