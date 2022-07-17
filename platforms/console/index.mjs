import { TableComponent } from '../../shared/base/tableComponent.mjs'
import { ConsoleTableComponent } from './table.mjs'

export default class ConsoleFactory extends TableComponent {
  createTable() {
    return new ConsoleTableComponent()
  }
}
