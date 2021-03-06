import mongoose, {ConnectionOptions} from 'mongoose'
import config from './config'
(
    async() =>{
        try {
            const mongooseOption: ConnectionOptions = {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                /*user: config.MONGO_USER,
                pass: config.MONGO_PASSWORD*/
            }
    
            const db =  await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOption);
            console.log('Database is conected to:', db.connection.name);
        } catch (error) {
            console.error(error);
        }
    }
)()