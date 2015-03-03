function Calculator(){
    this.add = function(x,y){
      return x + y;
    }
    this.sub = function(x,y){
      return x - y;
    }
    this.mul = function(x,y){
      return x * y;
    }
    this.div = function(x,y){
      if (y != 0) {
      return x / y;
      } else {
        console.log("Y cannot be equal to 0");
      }
    }
}

