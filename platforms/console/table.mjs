import { TableComponent } from '../../shared/base/tableComponent.mjs'

export class ConsoleTableComponent extends TableComponent {
  render(data) {
    console.log('on console render', data)
  } 
}
