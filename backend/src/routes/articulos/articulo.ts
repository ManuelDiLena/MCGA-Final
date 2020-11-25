import { Schema, model} from 'mongoose'

const ArticuloSchema = new Schema(
    {
        item_name:{
            type: String,
            required: true,
            trim: true
        },
        description:{
            type: String,
            required: true,
            trim: true
        },
        cost:{
            type: Number,
            min: 0.0,
            required: true
        },
        quantity: {
            type: Number,
            min:0,
            max: 100000,
            required: true
        }

    }
);

export default model("Articulo", ArticuloSchema);