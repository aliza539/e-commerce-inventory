import { Product } from "../models/Product"

export function renderStats(products: Product[]) {

  const stats = document.getElementById("stats")!

  const total = products.length

  const lowStock = products.filter(p => p.isLowStock()).length

  const topSeller = products.reduce((prev, current) =>
    prev.sales > current.sales ? prev : current
  )

  stats.innerHTML = `
    <p>Total Products: ${total}</p>
    <p>Low Stock: ${lowStock}</p>
    <p>Top Seller: ${topSeller.name}</p>
  `

}