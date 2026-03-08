import { ProductData } from "../types/types"

export async function fetchProducts(): Promise<ProductData[]> {

  const res = await fetch("../src/data/products.json")

  const data = await res.json()

  return data
}