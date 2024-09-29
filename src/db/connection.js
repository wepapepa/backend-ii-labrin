import { connect } from 'mongoose';
import 'dotenv/config';

export const initMongoDB = async() => {

    try {
        await connect(process.env.MONGO_ATLAS_URL || process.env.MONGO_LOCAL_URL);
        console.log('conectado a la base de datos de MongoDB :)');
    } catch (error) {
        throw new Error(error);
    }
};