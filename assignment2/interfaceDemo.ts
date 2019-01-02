interface Ishape{
    color:string,
    area:()=>number,
    toString();
}

class Cirlce implements Ishape{
   private radius:number;
   color:string; 
   constructor(rad:number,col:string){
       this.radius=rad;
       this.color=col;
   }
   
   area():number{
   return (this.radius)*(this.radius)*(3.14);
   }
  toString(){
      console.log("Circle  --"+this.area()+"  "+this.color);
  } 
}

class Rectangle implements Ishape{
    color:string;
    private width:number;
    private height:number;
    constructor(width:number,height:number,color:string){
        this.height=height;
        this.width=width;
        this.color=color;
    }
    
    area():number{
        return this.width*this.height;
    }
    toString(){
        console.log("Rectangle  --"+this.area()+"  "+this.color);
    } 

}
var CirlceObj=new Cirlce(20,"red");
var RectObj=new Rectangle(20,30,"blue");
CirlceObj.toString();
RectObj.toString();