

Array.prototype.incluye=function(elemento,callbackEqual){
    for (let i=0, max=this.length; i<max; i++){
        if(callbackEqual(elemento,this[i])){
            return true;
        }
        return false; 
    }
}

function callbackEqual(x,y){
    return x.cogido=y.codigo; //En x le llegaría codigo 1 (de la lechuga), ya que es el elemento nuevo que quiero poner --y codigo1 del tomate, ya que le está enviando al y el valor del array en la posición [i]
}

const catalogo = [{codigo:1, nombre: "Tomate"}, {codigo:2, nombre: "Pera"}] //Array
const producto=({codigo:1, nombre:"lechuga"});
console.log(catalogo.includes(producto));
console.log(catalogo.incluye(producto,callbackEqual));