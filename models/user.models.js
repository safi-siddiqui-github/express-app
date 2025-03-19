import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: false,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            enum: ['MALE', 'FEMALE'],
            default: 'MALE',
        },
    },
    {
        timestamps: true,
    }
)

export const UserModel = model('User', userSchema)
