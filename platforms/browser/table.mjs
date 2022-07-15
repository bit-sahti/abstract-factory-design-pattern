import { TableComponent } from '../../shared/base/tableComponent.mjs'

export class BrowserTableComponent extends TableComponent {
  render(data) {
    window.alert('on browser render')
  }
}
