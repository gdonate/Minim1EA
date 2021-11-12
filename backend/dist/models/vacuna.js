"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Persona_1 = __importDefault(require("./Persona"));
//el esquema es para mongoose, para la base de datos
const schema = new mongoose_1.Schema({
    name: String,
    descripcion: String,
    tecnologia: String,
    fecha: Date,
    fiable: Boolean,
    personas: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: Persona_1.default
        }]
});
exports.default = mongoose_1.model('Vacuna', schema);
