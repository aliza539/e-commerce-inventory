export interface Column<T> {
  key: keyof T
  label: string
}

export class GenericTable<T extends object> {

  constructor(
    private containerId: string,
    private columns: Column<T>[]
  ) {}

  render(data: T[]) {

    const container = document.getElementById(this.containerId)!

    const table = document.createElement("table")

    table.border = "1"

    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr")

    this.columns.forEach(col => {
      const th = document.createElement("th")
      th.textContent = col.label
      headerRow.appendChild(th)
    })

    thead.appendChild(headerRow)
    table.appendChild(thead)

    const tbody = document.createElement("tbody")

    data.forEach(item => {

      const row = document.createElement("tr")

      this.columns.forEach(col => {

        const td = document.createElement("td")

        td.textContent = String(item[col.key])

        row.appendChild(td)

      })

      tbody.appendChild(row)

    })

    table.appendChild(tbody)

    container.innerHTML = ""

    container.appendChild(table)

  }

}