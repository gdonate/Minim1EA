"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//el esquema es para mongoose, para la base de datos
const schema = new mongoose_1.Schema({
    name: String,
    edad: Number,
});
exports.default = mongoose_1.model('Persona', schema);
