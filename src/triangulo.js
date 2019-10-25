function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.vector = [a,b,c];
  }

  Triangulo.prototype.valido = function (){
    this.vector.forEach((lado) =>{
      if(lado <= 0){
        return false;
      }
    });

    if((this.a+this.b<this.c)||(this.b+this.c<this.a)||(this.c+this.a < this.b)){
      return false;
    }else{
      return true;
    }
  };

  Triangulo.prototype.tipo = function(){
    if((this.a != this.b) && (this.b != this.c) && (this.a != this.c)){
      return 'Escaleno'
    }else if((this.a === this.b) && (this.b === this.c)){
      return 'Equilatero'
    }else{
      return 'Isosceles'
    }
  }
  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };
  
  
  module.exports = Triangulo;

  