import { ProductData } from "../types/types"

export class Product {

  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock: number,
    public sales: number
  ) {}

  isLowStock(): boolean {
    return this.stock < 5
  }

  updatePrice(newPrice: number) {
    this.price = newPrice
  }

  sell(quantity: number) {
    if (this.stock >= quantity) {
      this.stock -= quantity
      this.sales += quantity
    }
  }

}