class MeuComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Felipe";

    //estilo do component
    const style = document.createElement("style");
    style.textContent = `
      h1{
        color: red
      }
    `;

    //envia para shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
  build(){
    const componentRoot = document.createElement('div'); //Cria um elemento no HTML
    componentRoot.setAttribute("class","card"); // seta um atributo - colocar uma classe com nome por exemplo 
    
    const cardEsquerda= document.createElement('div');
    const cardDireita= document.createElement('div');

    const nome = document.createElement('p')
  
    
    cardEsquerda.appendChild(nome);
    componentRoot.appendChild(cardEsquerda)
    componentRoot.appendChild(cardDireita)

    return componentRoot
  
  
  }
}

customElements.define("meu-componente", MeuComponent);



