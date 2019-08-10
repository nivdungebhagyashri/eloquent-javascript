class vec{
    constructor(x,y){
      this.x=x;
      this.y=y;
    }
   addVectors(other){
     return new vec(this.x+other.x, this.y+other.y);
   }
   
   subVectors(other){
     return new vec(this.x-other.x, this.y-other.y);
   }
   
   get length(){
     return Math.sqrt(this.x * this.x + this.y * this.y);
   }
  }
 
 console.log(new vec(3,4).length);
 console.log(new vec(3,4).subVectors(new vec(2,3)));
 