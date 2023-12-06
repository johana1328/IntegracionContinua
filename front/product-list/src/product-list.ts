import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("product-list")
export class ProductList extends LitElement {
  
  @property({type: Array}) productos = [];

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 15px;
      color: #1a2b42;
      max-width: 960px;
      margin: 10px auto;
      text-align: center;
      background-color: var(--product-list-background-color);
    }

    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    #customers td,
    #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #customers tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    #customers tr:hover {
      background-color: #ddd;
    }

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04aa6d;
      color: white;
    }
  `;

 async connectedCallback() {
    super.connectedCallback();
    console.log("conectando")
    await this.getProducts()
  }

  render() {
    console.log("render")
    return html`
      <table id="customers">
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor</th>
        </tr>
        ${this.productos.map((product)=>{
            return  html` <tr>
              <td>${product['id']}</td>
              <td>${product['name']}</td>
              <td>${product['stock']}</td>
              <td>${product['price']}</td>
              </tr>
              `
            })}
      </table>
    `;
  }

  async getProducts(){
    //const response = await fetch("http://localhost:8080/services/products");
    const response = await fetch("services/products");
    const products = await response.json();
    this.productos = products;
  }
}