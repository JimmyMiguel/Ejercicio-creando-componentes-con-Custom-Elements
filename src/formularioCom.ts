const formularioCom = document.createElement('template');
formularioCom.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.label-formulario {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
}

.name-input {
  width: 350px;
  height: 50px;
  border: 2px solid black;
  border-radius: 4px;
}

.name-input::placeholder {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
}

.label-formulario label {
  display: flex;
  flex-direction: column;
}

.label-formulario label p {
  margin: 0;
  padding: 0; /* Pegar el p al input */
  line-height: 1.2;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
}

/* Botones */
.label-formulario label:nth-child(2) button {
  background-color: rgba(156, 187, 233, 1);
  color: black;
  width: 350px;
  height: 55px;
  border: none;
  cursor: pointer;
  font-family: "Poppins";
  border-radius: 4px;
  font-size: 22px;
  font-weight: 500;
}

.label-formulario label:nth-child(3) button {
  background-color: transparent;
  color: black;
  width: 350px;
  height: 55px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 22px;
  font-weight: 500;
  margin-top: 80px;
 }


</style>


<div class="label-formulario">
<label for="">
  <p>Nombre</p>
  <input class="name-input" type="text" name="" id="" placeholder="Ingrese su nombre">
</label>
<label for="">
  <button type="button">Button</button>
</label>
<label for="">
  <button type="button">Volver</button>

</div>
`

class formularioEtiqueta extends HTMLElement{
    constructor(){
        super();
        const sombraDom = this.attachShadow({mode:'open'});
        sombraDom.appendChild(formularioCom.content.cloneNode(true))
    }

}
customElements.define('formulario-el', formularioEtiqueta);

