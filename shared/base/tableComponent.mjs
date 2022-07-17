//signature - it will be a simulated interface

import { NotImplementedException } from '../notImplementedError.mjs'

//this is a simulated interface
//it's only purpose is to enforce the methods implementation by throwing if they're not present on the subclasses
export class TableComponent {
  render(table) {
    throw new NotImplementedException(this.render.name)
  }
}
