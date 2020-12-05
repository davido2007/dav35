class food{
    constructor(foodStock,lastFed){
        this.foodStock=null;
        this.lastFed=null;
    }

    
    milk = createSprite(720,220,70,70);
    milk.addImage("milk", milkimg);
    milk.scale=0.10;

   display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);

      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80;
                  y=y+30;
              }
              image(this.image,x,y,50,50);
              x=x+50
          }
      }
   } 
}