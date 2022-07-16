import { TableComponent } from '../../shared/base/tableComponent.mjs'

export class BrowserTableComponent extends TableComponent {
  render(data) {    
    const table = this.#buildTable(data)

    document.body.insertAdjacentHTML('afterBegin', table)

    // console.log(table)
  }

  #buildTable(data) {    
    const { tableHeaders, tableBody } = this.#transformData(data) 

    return `
      <table class="table">
        <thead>
          <tr>
            ${tableHeaders}
          </tr>
        </thead>
        <tbody>
          ${tableBody}
        </tbody>
      </table>
    `
  }

  #transformData(data) {
    const headersData = Object.keys(data[0])
    const rowsData = data.map(document => Object.values(document))

    const tableHeaders = this.#buildHeaders(headersData)

    const tableBody = this.#buildBody(rowsData)

    return {
      tableHeaders,
      tableBody,
    }
  }

  #buildHeaders(headersData) {
    return headersData
            .map(header => `<th scope="col">${header.toUpperCase()}</th>`)
            .join('')
  }

  #buildBody(rowsData) {
    return rowsData
            .map(row => this.#buildColumns(row))
            .map(row => `<tr>${row}</tr>`)
            .join('')
  }

  #buildColumns(columnsData) {
    return columnsData
            .map(column => `<td>${column}</td>`)
            .join('')
  }
}
