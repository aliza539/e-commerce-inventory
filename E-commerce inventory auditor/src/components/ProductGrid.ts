import { Product } from "../models/Product"
import { formatCurrency } from "../utils/helpers"

export function renderProducts(products: Product[]) {

  const grid = document.getElementById("product-grid")!

  grid.innerHTML = ""

  products.forEach(product => {

    const card = document.createElement("div")

    card.className = "product-card"

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${formatCurrency(product.price)}</p>
      <p>Stock: ${product.stock}</p>
      <p>Sales: ${product.sales}</p>
      ${product.isLowStock() ? "<span class='low'>Low Stock</span>" : ""}
    `

    grid.appendChild(card)

  })

}