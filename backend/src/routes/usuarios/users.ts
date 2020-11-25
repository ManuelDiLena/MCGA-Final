import {Schema, model} from 'mongoose'

const UsersSchema = new Schema(
    {
        UserName:{
            type: String,
            unique: true,
            required: true,
            minlength: 4
        },
        Name: {
            type: String,
            required: true,
        },
        Email:{
            type: String,
            required: true,
            match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        },
        Address: {
            type: String,
            minlength:4,
            maxlength:20,
        },
        Phone: {
            type: Number,
            required: true,
            min: 7,
            max:13
        },
        password:{
            type: String,
            required: true,
            match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
            minlength: 8,
            maxlength: 16
        }

    }
)