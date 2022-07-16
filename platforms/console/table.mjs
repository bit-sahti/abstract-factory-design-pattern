import chalk from 'chalk'
import chalkTable from 'chalk-table'
import { TableComponent } from '../../shared/base/tableComponent.mjs'

export class ConsoleTableComponent extends TableComponent {
  render(data) {
    const template = this.#buildTable(data)

    console.log(template)
  }

  #buildTable(data) {
    const headers = Object.keys(data[0])

    const options = this.#getOptions(headers)

    return chalkTable(options, data)
  }

  #getOptions(headers) {
    const columns = headers.map((header, i) => ({
      field: header,
      name: this.#getColor(i, header),
    }))

    return {
      leftPad: 2,
      columns,
    }
  }

  #getColor(i, name) {
    return i % 2 === 0 ? chalk.red(name) : chalk.cyanBright(name)
  }
}
