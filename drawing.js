
	
/*	
function plsWork() {
var canvas=document.getElementById("canvas");
	//if (canvas.getContext) {
var context=canvas.getContext("2d");


//alert("fuck me");
context.fillStyle="yellow";

context.fillRect(50,50,50,50);
}
//i just opened some shit

window.addEventListener("load",plsWork);
*/

	var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
	//alert("yolw");
 	
	canvas.width=1000;
	//alert("yo");
	m1=window.mass1;
	m2=window.mass2;

	//alert("yo");
	//if (Math.cos(0)==1) alert("hello");
	var g=9.8;
	var time =2;
	var l1=100;
	var Theta1=(Math.PI)/2; 
	var Theta2=(Math.PI)/2;
	var d2Theta1=0;
	var d2Theta2=0;
	var dTheta1=0;
	var dTheta2=0;
	var mu =  1+m1/m2;
function plsWork()
{
	alert("IT WORKS");
	

	var line1={x0: 0, y0: 0, x:0, y:0};
	//alert(m1);//m1 returns nothing. 

	//DONT' WORRY ABOUT THE FOR LOOP BELOW
	alert("the shit before the for loop works");
    var variable=0;
    var id = setInterval(animate,100);
    function animate() {
    	if (variable>=100) clearInterval(id);
    	else {
    		drawLine(context,0,0,variable,variable);
			variable++;
		//context.clearRect(0,0,100,100);
	}
	}
		// d2Theta1  =  (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
		// d2Theta2  =  (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
		// dTheta1   += d2Theta1*time;
		// dTheta2   += d2Theta2*time;
		// Theta1    += dTheta1*time;
		// Theta2    += dTheta2*time;
		
		// line1={x0: 0, y0: 0, x:l1*Math.sin(Theta1), y:l1*Math.cos(Theta1)};
		// context.beginPath();
		// context.lineWidth=10;
		// context.moveTo(line1.x0, line1.y0);
		// context.lineTo(line1.x, line1.y);
		// context.strokeStyle="black";
		// context.stroke();
		
	
	window.addEventListener("load",plsWork);
	}

	function drawLine(ctx, startx, starty, endx, endy) {
		ctx.clearRect(0,0,ctx.width, ctx.height);
		ctx.beginPath();
		ctx.moveTo(startx,starty);
		ctx.lineTo(endx, endy);
		ctx.stroke();
		ctx.closePath();
	}

	


   
   
	//having problems with getting mass1 referenced in js
	

	
	
	







 

