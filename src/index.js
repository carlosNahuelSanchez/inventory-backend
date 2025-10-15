"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const equipment_routes_1 = __importDefault(require("./routes/equipment.routes"));
const errorHandler_1 = require("./utils/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
app.use('/api/equipments', equipment_routes_1.default);
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
