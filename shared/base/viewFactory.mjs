import { NotImplementedException } from '../notImplementedError.mjs'

//this is a simulated interface
//it's only purpose is to enforce the methods implementation by throwing if they're not present on the subclasses
export class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name)
  }
}
