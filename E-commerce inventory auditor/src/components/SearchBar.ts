import { debounce } from "../utils/debounce"
import { Product } from "../models/Product"
import { renderProducts } from "./ProductGrid"

export function initSearch(products: Product[]) {

  const input = document.getElementById("search") as HTMLInputElement

  const handleSearch = debounce(() => {

    const term = input.value.toLowerCase()

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(term)
    )

    renderProducts(filtered)

  }, 300)

  input.addEventListener("input", handleSearch)

}