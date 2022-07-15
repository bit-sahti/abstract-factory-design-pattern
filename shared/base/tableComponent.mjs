//signature - it will be a simulated interface

import { NotImplementedException } from '../notImplementedError.mjs'

export class TableComponent {
  render(table) {
    throw new NotImplementedException(this.render.name)
  }
}
