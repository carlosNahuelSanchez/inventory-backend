"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_repository_1 = require("../repositories/user.repository");
const password_helper_1 = require("../helpers/password.helper");
const jwt_helper_1 = require("../helpers/jwt.helper");
const registerUser = async (data) => {
    const existing = await (0, user_repository_1.findUserByEmail)(data.email);
    if (existing)
        throw { status: 400, message: 'Email ya registrado' };
    const hashed = await (0, password_helper_1.hashPassword)(data.password);
    const user = await (0, user_repository_1.createUser)({ ...data, password: hashed });
    return user;
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await (0, user_repository_1.findUserByEmail)(email);
    if (!user)
        throw { status: 400, message: 'Credenciales inválidas' };
    const valid = await (0, password_helper_1.comparePassword)(password, user.password);
    if (!valid)
        throw { status: 400, message: 'Credenciales inválidas' };
    const token = (0, jwt_helper_1.generateToken)(user);
    return { token, user };
};
exports.loginUser = loginUser;
