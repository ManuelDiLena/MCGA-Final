import {Schema, model} from 'mongoose'

const UsersSchema = new Schema(
    {
        UserName:{
            type: String,
            required: true,
            minlength: 4
        },
        Name: {
            type: String,
            required: true,
        },
        Email:{
            type: String,
            required: true
        },
        Address: {
            type: String,
            minlength:4,
            maxlength:20,
        },
        Phone: {
            type: Number,
            required: true,
            minlength: 7,
            maxlength:13
        },
        Password:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 16
        }

    },
    {
        versionKey: false, //Lo que hace  que cuando actualizas un dato en update, cambia los valores pero no te lo
        timestamps: true // agrega con un nuevo ID, sino que lo mantiene en el mismo ID, si esta habilitado
                         // es posibles que en vez que sea ID: 1 donde hiciste los cambio, te cree un nuevo ID con los cambios que hiciste al ID 1
                    
    }
)
export default model("Usuario", UsersSchema);