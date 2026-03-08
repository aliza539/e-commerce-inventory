import { Product } from "../models/Product"

export function createExportButton(products: Product[]) {

  const btn = document.createElement("button")

  btn.textContent = "Export Inventory JSON"

  btn.addEventListener("click", () => {

    const data = JSON.stringify(products, null, 2)

    const blob = new Blob([data], { type: "application/json" })

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")

    a.href = url
    a.download = "inventory.json"

    a.click()

  })

  document.body.appendChild(btn)

}