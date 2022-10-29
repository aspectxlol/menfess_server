import { model, Model, Schema } from "mongoose"

export interface message {
    from: string,
    to: string,
    message: string,
    id: string
}

export const message = new Schema<message>({
    from: {
        type: 'String',
        required: false
    },
    to: {
        type: 'String',
        required: false
    },
    message: {
        type: 'String',
        required: true
    },
    id: {
        type: 'String',
        required: true
    }
})

export default model('Messages', message)