import { Product } from "../models/Product"
import { renderProducts } from "./ProductGrid"

export function initBulkEditor(products: Product[]) {

  const container = document.createElement("div")

  container.innerHTML = `
    <h3>Bulk Price Update</h3>
    <input id="percent" type="number" placeholder="Increase %"/>
    <button id="apply">Apply</button>
  `

  document.body.appendChild(container)

  const btn = document.getElementById("apply")!

  btn.addEventListener("click", () => {

    const percent = Number(
      (document.getElementById("percent") as HTMLInputElement).value
    )

    products.forEach(p => {

      const newPrice = p.price + p.price * (percent / 100)

      p.updatePrice(Number(newPrice.toFixed(2)))

    })

    renderProducts(products)

  })

}