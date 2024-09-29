import passport from "passport";
import { ExtractJwt, Strategy as jwtStrategy } from "passport-jwt";
import UserService from "../services/user.services.js";
const userService = new UserService();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = async (jwt_payload, done) => {
    if (!jwt_payload) return done(null, false, { messages: "usuario no encontrado :("});
    return done(null, jwt_payload);
};

