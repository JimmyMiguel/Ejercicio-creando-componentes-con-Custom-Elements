/*TEMPLATE HTML Y CSS DE NUESTRO COMPONENETE*/

const templateEl = document.createElement('template')

templateEl.innerHTML = `
<style> 
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      :host {
        font-family: 'poppins';
        font-size: 22px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background:rgba(255, 130, 130, 1);
        color: black;
        font-family: Arial, sans-serif;
      }

</style>

     <h1>Header</h1>
 
 
`
/*TEMPLATE HTML Y CSS DE NUESTRO COMPONENETE*/


/*Para crear un componenete en forma de etiqueta necesito crearlo a partir de 
la clase raiz de html*/
export class headerEl extends HTMLElement {
    //
    constructor() {
        //con super puedo utilizar todos los metodos de htmlelements(padre)
        super()
        //con shadow, me crea un dom separado del dom principal 
        const sombraDom = this.attachShadow({ mode: 'open' });
        //creamos un template donde estar nuestro html ycss y despues le decimos  que lo agregue
        //y lo clone, todo dentro de nuestro dom sombra
        sombraDom.appendChild(templateEl.content.cloneNode(true))

    }

}

//definimos nuestro custom elements en el navegador , pasamos la etiqueta del html entre comillas
// tambien ponemos como parametro la clase 
customElements.define('header-el', headerEl);