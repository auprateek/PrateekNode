import e from "express"

class apiError extends Error {
    constructor (
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        this.success = false

        if(stack)
            {
                this.stack =stack
            }
        else{
            Error.stackTrace(this, this.constructor)
        }

    }
}


export { apiError}