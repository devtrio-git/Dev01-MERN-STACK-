import dotenv from 'dotenv';
dotenv.config();

export default class Constants {
    static PORT = process.env.PORT;
    static URI = process.env.DB_URI;
}