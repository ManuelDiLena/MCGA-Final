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

    },
    {
        versionKey: false, //Lo que hace  que cuando actualizas un dato en update, cambia los valores pero no te lo
        timestamps: true // agrega con un nuevo ID, sino que lo mantiene en el mismo ID, si esta habilitado
                         // es posibles que en vez que sea ID: 1 donde hiciste los cambio, te cree un nuevo ID con los cambios que hiciste al ID 1
                    
    }
)