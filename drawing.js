
alert("it's working");
	var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
	//alert("yolw");
 	
	canvas.width=600;
	canvas.height=600;
	//alert("yo");
	m1=window.mass1;
	m2=window.mass2;
	m1=100;
	m2=50;
	//alert("yo");
	//if (Math.cos(0)==1) alert("hello");
	var g=9.8;
	var time =0.1;
	var l1=100;
	var l2=100;
	var Theta1=(Math.PI)/2; 
	var Theta2=(Math.PI)/2-1;
	var d2Theta1=0;
	var d2Theta2=0;
	var dTheta1=0;
	var dTheta2=0;
	var mu =1+(m1/m2);
	var line1={x0: 0, y0: 0, x:0, y:0};
	var line2={x0: 0, y0: 0, x:0, y:0};
//alert(line1);
function plsWork()
{
	alert("IT WORKS");
	alert("the shit before the for loop works");
    var variable=0;
    var id = setInterval(animate,10);
    function animate() {
			context.clearRect(0,0,context.canvas.width, context.canvas.height);
			d2Theta1  =  (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
			d2Theta2  =  (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
			/*alert(mu);
			alert(g);
			alert(Math.sin(Theta2));
			alert(l1);
			alert(l2);
			alert(d2Theta1);
			alert(Theta1);//theta1 returns correct value before looping through
			*/
			dTheta1   += d2Theta1*time;
			dTheta2   += d2Theta2*time;
			Theta1    += dTheta1*time;
			Theta2    += dTheta2*time;
			line1={x0: 175, y0: 50, x: line1.x0+(l1*Math.sin(Theta1)), y: line1.y0+(l1*Math.cos(Theta1))};
			line2={x0: line1.x, y0: line1.y, x: line1.x+l2*Math.sin(Theta2), y: line1.y+l2*Math.cos(Theta2)};
			drawLine(context,line1.x0, line1.y0, line1.x, line1.y);
			drawLine(context,line2.x0, line2.y0, line2.x, line2.y);
			context.fillStyle="green";
			drawCircle(context,line1.x, line1.y, m1/5);
			context.fillStyle="red";
			drawCircle(context, line2.x, line2.y,m2/5);
			variable++;
			
		
	
	}
		
	window.addEventListener("load",plsWork);
	}

	function drawLine(ctx, startx, starty, endx, endy) {
		//ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
		ctx.beginPath();
		ctx.moveTo(startx,starty);
		ctx.lineTo(endx, endy);
		ctx.stroke();
		ctx.closePath();
		//ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	}

	function drawCircle(ctx, centerx, centery, radius) {
		ctx.beginPath();
		ctx.arc(centerx, centery, radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
