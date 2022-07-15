export class NotImplementedException extends Error {
    constructor(message) {
        super(`the '${message}' function is not implemented`)

        this.name = this.constructor.name
    }
}