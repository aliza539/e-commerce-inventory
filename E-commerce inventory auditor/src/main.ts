import { fetchProducts } from "./services/api"
import { Product } from "./models/Product"
import { renderProducts } from "./components/ProductGrid"
import { renderStats } from "./components/Stats"
import { initSearch } from "./components/SearchBar"
import { initBulkEditor } from "./components/BulkEditor"
import { createExportButton } from "./components/ExportButton"
import { throttle } from "./utils/throttle"

async function init() {

  const data = await fetchProducts()

  const products = data.map(
    p => new Product(p.id, p.name, p.price, p.stock, p.sales)
  )

  renderProducts(products)

  renderStats(products)

  initSearch(products)

  initBulkEditor(products)

  createExportButton(products)

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("User scrolling")
  }, 300))

}

init()