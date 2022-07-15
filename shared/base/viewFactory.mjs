import { NotImplementedException } from '../notImplementedError.mjs'

export class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name)
  }
}
