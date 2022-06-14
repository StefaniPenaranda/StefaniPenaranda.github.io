import validator from './validator.js';

// abriendo el formulario de pago
const contenedor1 = document.querySelector('.contenedor1');
const contenedor2 = document.querySelector('.contenedor2');

const prod1 = document.querySelector('#prod1');
const prod2 = document.querySelector('#prod2');
const prod3 = document.querySelector('#prod3');

const cerrar = () =>{
    contenedor1.style.display = 'none';
    contenedor2.style.display = 'block';
}

prod1.addEventListener('click', cerrar);
prod2.addEventListener('click', cerrar);
prod3.addEventListener('click', cerrar);

// USANDO EL VALIDATOR EN EL FORMULARIO

const comprar = document.querySelector('#comprar');

//OBTENIENDO LOS DATOS DE INPUT

const cardNumber = document.querySelector('#inputNumero');
let tarjeta = '';
cardNumber.addEventListener('input',()=>{
    tarjeta = cardNumber.value;
})

//MODAl
const modal= document.querySelector('.modal');
const modalInvalido = document.querySelector('.modal-tarjeta-invalid');
const modalClouse = document.querySelector('.modal_clouse');
const modalClouseInv = document.querySelector('.modal_clouseinvalid');
const modalIncompleto = document.querySelector('.modalIncompleto');
const modalCluseInc = document.querySelector('.modal_clouseIncompleto');

//APLICANDO EL ISVALID Y MASKIFY
comprar.addEventListener('click',(event) =>{
    event.preventDefault();
   
    const validacion = validator.isValid(tarjeta);
    if( !tarjeta){
        modalIncompleto.style.display= 'block';
        return
    }

    if(validacion){
        modal.style.display= 'block'; 
    } else{
         modalInvalido.style.display= 'block';    
    }
    let mascara= validator.maskify(tarjeta);
    cardNumber.value= mascara
})

modalClouse.addEventListener('click',()=>{
    modal.style.display= 'none'; 
})

modalClouseInv.addEventListener('click',()=>{
    modalInvalido.style.display= 'none'; 
})

modalCluseInc.addEventListener('click', ()=>{
    modalIncompleto.style.display = 'none';
})