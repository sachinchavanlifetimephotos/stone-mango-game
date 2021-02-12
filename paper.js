class paper{ 

    constructor(x,y){ 
        this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
	
		this.image=loadImage("paper.png"); 

		var options={ 
			 isStatic:false, 
			 restitution:0.3, 
			 friction:0.5, 
			 density:1.2, 
		}
    } 
    display()
	{ 
			var options={ 
				isStatic:false, 
				restitution:0.3, 
				friction:0.3, 
				density:1.2, 
		   } 

		   var pos=this.image.position; 
		   var angles=this.image.angle; 
		   push ();
		   
		   rotate (angles); 
		   imageMode(CENTER); 
		   image (this.image,100,600,this.width,this.height); 
		   this.image.scale=0.3; 
		   pop ();  

}

} 