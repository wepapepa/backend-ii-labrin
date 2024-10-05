import { connect } from 'mongoose';
import 'dotenv/config';
import { configDotenv } from 'dotenv';

configDotenv();

export const initMongoDB = async() => {
    console.log('MONGO_ATLAS_URL:', process.env.MONGO_ATLAS_URL);
    console.log('MONGO_LOCAL_URL:', process.env.MONGO_LOCAL_URL);

    try {
        await connect('mongodb+srv://admincoder:oCBds46JdGGWjRrZ@cluster0.crueo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('conectado a la base de datos de MongoDB :)');
    } catch (error) {
        console.error('Error de conexión a MongoDB:c', error);
        throw new Error(error);
    }
};