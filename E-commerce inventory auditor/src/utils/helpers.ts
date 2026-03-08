import { Product } from "../models/Product"

export function formatCurrency(value: number): string {
  return "$" + value.toFixed(2)
}

export function getLowStockProducts(products: Product[]): Product[] {
  return products.filter(p => p.stock < 5)
}

export function calculateTotalStock(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.stock, 0)
}