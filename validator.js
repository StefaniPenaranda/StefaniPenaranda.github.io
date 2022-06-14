const validator = {
  isValid:(cardNumber)=> {

  //convirtiendo en array y revirtiendo el número
  let numeroTarjeta = [...cardNumber].reverse();

  //convirtiendo los elementos del arreglo en #
  numeroTarjeta = numeroTarjeta.map( i => Number(i));
  //
  let aux = 1;//estoy asignando el valor 1 al indice del array 

  // empezando con Lunch
  numeroTarjeta = numeroTarjeta.map ( i => {
    if ( aux % 2 === 0){
      i = i*2;
      if (i >= 10){
        i = i - 9
      }
      aux++;
      return i;
    }
    aux++;
    return i;
  } )

// Sumamos todos los elementos del arreglo   
let total = 0;
numeroTarjeta.forEach( e => total += e)
//console.log(total);

 /* if (total % 10 === 0){  
  return true;
  }
  else{
  return false;
  }*/
return (total % 10 ===0)? true : false;
},

maskify: (numeroTarjeta)=> {
  let tapandonumero=  numeroTarjeta.slice(0,-4).replace(/[a-zA-Z0-9]/g,'#')
  let sacando= numeroTarjeta.slice(-4,numeroTarjeta.legnth)
  return tapandonumero + sacando
},

};

export default validator;